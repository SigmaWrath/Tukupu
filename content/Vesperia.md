---
aliases:
  - Material Plane
tags:
  - root
  - map
  - plane
---
*The Material [[Planes|Plane]] in the universe of the campaign setting.* 

><span style="color:rgb(125, 125, 125)">The word Vesp means “dirt” in</span> [[Auran]]<span style="color:rgb(125, 125, 125)">, and Vesperia comes from combining that with the</span> [[Halflings|Halfling]] <span style="color:rgb(125, 125, 125)">suffix -eria which means “place of”. Vesperia etymologically means “place of dirt”.</span>

Vesperia and its [[Parallel Planes]] are governed by three [[Deities]]. The [[Parallel Planes|core planes]] are home to many [[species]] of creatures. Extraordinary individuals amongst them can become skilled in the abilities of various [[Player Classes|classes]]. 

#### Map of Vesperia
```leaflet  
id: VesperiaHighLevelMap1 ### Must be unique with no spaces  
image: [[https://lh7-rt.googleusercontent.com/docsz/AD_4nXeYllcdV-S6HAmKcUC9DWAer3Hbjx_JNz_rJP1yT1k7hbJIgyzxeTKWJfmgmb9RTlGHL2LpiNKvJb6RQGlm-YIa8ePFLfsC6_w5gDcwRvcLGcy6Iu4rBYjvtZqSxqzio4mbFywvmXVYzq66NQva7zcWGsI?key=jHIJtWqn5dqFaJp9HYhv5g]] ### Link to the map image file  
bounds: [[0,0], [1642, 2048]] ### Size of the map in px Width_x, Height_y  
height: 600px ### Size of the leaflet embed in px on your screen  
width: 95% ### Size of the leaflet embed in your note  
lat: 1024 ### To center the map, make this half of the map width.  
long: 821 ### To center the map, make this half of the map height.  
minZoom: -1.5 ### Controls how far away from the map you can zoom out. Hover over the target icon to see the current level.  
maxZoom: 1 ### Controls how far towards the map you can zoom in. Hover over the target icon to see the current level.  
defaultZoom: -1.5 ### Sets the default zoom level when the map loads. Hover over the target icon to see the current level.  
zoomDelta: 0.5 ### Adjust how much the zoom changes when you zoom in or out.  
unit: km ### The value displayed when measuring so you know what type of unit is being measure.  
scale: 0.09328358208955223 ### Only required if you are using the measurement tool. Real units/px (resolution) of your map  
recenter: true  
darkmode: false ### marker 
```

Ideas:
- Model the outer planes as like "here are the planes that have the similar enough rules of physics to ours that we can survive". Perhaps include Arborea, probs the Abyss? (in a way more similar to Kane Chronicles [duat](https://riordan.fandom.com/wiki/Duat#The_Houses_of_the_Night) abyss), and model other stuff of Kane Chronicles. 
	- Connected planes are part of the "partition"
	- Perhaps the Court of Stars should be its own outer plane (Queen ~~Morwel~~ Leora)
		- It is directly connected to the Feywild
		- Should have a portal to the Beastlands?
		- Also should have a portal to that asteroid city from Spelljammer module
		- And a Concord Jewel connecting it to the Radiant Citadel (Radiant Citadel civs: sister to the material plane, or wildspace systems in the Astral Sea???)
	- Aldania: the Lovers' Palace, with rainbow skies kind of like the celestial event in episode 6 of Andor (perpetual solar eclipse in a sense)
	- The Houses of Night must be traversed by the River of Night. (Twelve houses? Idk just do strictly as many as needed, no more, no less)
- ~~Tabaxi~~ $\rightarrow$ [Ardlings](https://dungeonsanddragonsfan.com/ardling-one-dnd-news/), descended from Beast Lords
	- Which means new outer plane: the Beastlands
		- Three levels: high sun (Krigala), dawn/dusk (Brux), high moon (Karasuthra)
			- Fountain of Eternity is on Krigala
			- Beast Lords get fed similar to how PJO gods recieve campfire food sacrifices?
	- Bast (she/her) is the Cat Queen, and mother of the Tabaxi (who are cat Ardlings)
	- Ame-no-Kaku is the Deer Queen, also known as the Doe Spirit (is also paramour of Bast)
	- Kamdhenu is the Cow Queen
- Queen of dreams is archfey?
- Drow: Lolth-sworn and Seldarine. The Spider Queen was split in two through and sent to the material plane through some magic bullshit. Good-aligned and evil-aligned by sheer circumstance of environment.
	- Or... just do away with the whole evil drow thing. Not a bad idea at all
- Wildsea:
	- City druids learned from the magic of the Wildsea!!
		- Commune with City spell fs
	- Wildsea can be accessed by taking Spelljammer to pass through the Stargrave (collapsed stars form gravity wells) in the Astral Sea
- Devils (infernal creatures) $\rightarrow$ from the deep down layers of the elemental plane of fire???  
	- They harness the power of souls to fuel their ascensions to increasingly higher layers of the plane of fire
	- Succubi (waking world) & incubi (dreaming world) exploit the desires of their victims to steal their souls
	- Hell hounds
	- Night hags??
	- Rakshasas
- Demons like in Mage & Demon Queen?
	- Oh hell fucking yeah:
		- So Lamias are demons 
		- Ooh demon-dragons like Vel
	- OHHH WAIT: demons could just be a misunderstanding that groups Ardlings and Infernals. Literally yeah. That solves that. And they're just not evil. It was a misunderstanding. Easy peasy. 
		- This would imply that Lamias are a kind of Ardling, in which case... should they even be playable??
			- Or we just manually make mechanics for many different types of ardlings, which high-key sounds like the most flavorful thing to do
			- But we could also just make Lamias a non-playable Ardling... yeah okay do this
			- OOOH! Melathia, the Snake Queen (Beast Lord)... wait actually perhaps not, because I want the Beast Lords to be a lil distant from personhood... mm we'll see
			- Also, desert Lamias like you would expect, but also river Lamias (kind of like Nagas from Hindu mythology—we'll even call these Nagas with a lil "human misunderstandings" section)

TODO: 
1. Change the names of the renowned wizards who have spells named after them.  
2. Implement integrated pointy hat fixes
	1. Gnomes
	2. Elves?
		1. Rewrite drow (OMFG)
3. Mortal manifestations of deities (appearances)??
4. Solars and lunars - servants of deities
