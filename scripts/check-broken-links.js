import fs from 'fs'
import path from 'path'
import {load} from 'cheerio'
import {fileURLToPath} from 'url'

// ES modules Get in __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Global Counters and Collectors
let totalBrokenLinks = 0
const allBrokenLinks = []

// Check if the file exists
function checkFileExists(filePath) {
    try {
        // Check the original path first
        if (fs.existsSync(filePath)) return true
        // If the one with .html suffix does not exist, check the path without suffix
        const pathWithoutExt = filePath.replace(/\.html$/, '')
        return fs.existsSync(pathWithoutExt)
    } catch (err) {
        return false
    }
}

// Process HTML files
function processHtmlFile(filePath) {
    const html = fs.readFileSync(filePath, 'utf-8')
    const $ = load(html, {
        xml: {
            xmlMode: false
        },
        decodeEntities: false
    })
    let modified = false
    let brokenLinks = []

    $('a.internal:not(.tag-link)').each((_, element) => {
        const href = $(element).attr('href')
        if (!href || href.startsWith('#')) return

        // get data-slug attributes, which are relative to public standard path
        const slug = $(element).attr('data-slug')
        
        // processed with / path at the beginning
        let normalizedPath
        if (slug) {
            // if there is data-slug，use it directly
            normalizedPath = path.join(
                path.resolve(__dirname, '../public'),
                slug + '.html'
            )
        } else {
            // Handling various relative path situations
            const currentDir = path.dirname(filePath)
            let targetPath
            
            if (href.startsWith('/')) {
                // absolute path（relative to public)
                targetPath = href === '/' ? 'index.html' : href.slice(1)
            } else if (href.startsWith('..')) {
                // relative path（../）
                targetPath = path.normalize(path.join(
                    path.relative(path.resolve(__dirname, '../public'), currentDir),
                    href
                ))
            } else {
                // Other relative paths
                targetPath = path.normalize(path.join(
                    path.relative(path.resolve(__dirname, '../public'), currentDir),
                    href
                ))
            }
            
            normalizedPath = path.join(
                path.resolve(__dirname, '../public'),
                targetPath.replace(/\/?$/, '.html')
            )
        }

        if (!checkFileExists(normalizedPath)) {
            // Keep original attributes
            const existingClass = $(element).attr('class') || ''
            const existingAttrs = element.attribs || {}
            
            // Add to broken-link class
            $(element).attr('class', `${existingClass} broken-link`.trim())
            
            // Make sure other necessary properties remain unchanged
            Object.keys(existingAttrs).forEach(attr => {
                if (attr !== 'class') {
                    $(element).attr(attr, existingAttrs[attr])
                }
            })
            
            brokenLinks.push({
                file: filePath,
                link: href,
                text: $(element).text(),
                expectedPath: normalizedPath
            })
            modified = true
            totalBrokenLinks++
        }
    })

    if (modified) {
        fs.writeFileSync(filePath, $.html({
            decodeEntities: false,
            xmlMode: false
        }))
        allBrokenLinks.push(...brokenLinks)
    }
}

// Recursively process directories
function processDirectory(directory) {
    const files = fs.readdirSync(directory)
    
    files.forEach(file => {
        const fullPath = path.join(directory, file)
        const stat = fs.statSync(fullPath)
        
        if (stat.isDirectory()) {
            processDirectory(fullPath)
        } else if (file.endsWith('.html')) {
            processHtmlFile(fullPath)
        }
    })
}

// Start processing
console.log('Check for broken internal links...')
processDirectory(path.resolve(__dirname, '../public'))

if (totalBrokenLinks > 0) {
    console.log(`\nDiscover ${totalBrokenLinks} broken links：\n`)
    // Show broken links grouped by file
    const groupedLinks = allBrokenLinks.reduce((acc, link) => {
        if (!acc[link.file]) {
            acc[link.file] = []
        }
        acc[link.file].push(link)
        return acc
    }, {})
    
    Object.entries(groupedLinks).forEach(([file, links]) => {
        console.log(`Document: ${file}`)
        links.forEach(link => {
            console.log(`  - "${link.text}"`)
            console.log(`    Link: ${link.link}`)
            console.log(`    Expect: ${link.expectedPath}\n`)
        })
    })
} else {
    console.log('\nNo broken links found')
} 