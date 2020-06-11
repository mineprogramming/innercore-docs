## Biome Map
Biome map is a way Minecraft generates biomes. In fact, biome map is a two-dimensional
array of biome ids inside every chunk. 

To be able to change this map, *GenerateBiomeMap* 
callback is called after the landscape generation is performed and before cover and 
decorations generation. See {@page Callbacks} for details. Inside this callback you should 
call [[World.setBiomeMap]] to set biome on the coordinates and [[World.getBiomeMap]]
to retrieve one. Note that these methods are available only inside *GenerateBiomeMap*
callback. Also, you should pass coordinates inside the specified chunk. The coordinates
should be inside these bounds:

```js
var minX = chunkX * 16
var minZ = chunkZ * 16
var maxX = (chunkX + 1) * 16 - 1
var maxZ = (chunkZ + 1) * 16 - 1
```

## Using Perlin Noise for biome generation

```js
// TODO
```