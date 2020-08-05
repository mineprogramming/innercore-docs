To understand better the process of creating new dimensions with custom generation, 
let's look through a couple of examples. To simplify the task of creating dimension 
generator, take a look at [Inner Core Dimension Editor](https://editor.p5js.org/zheka2304/present/kJmbShOU2).

## Creating a Custom Dimension

```js
var dimension = new Dimensions.CustomDimension("CustomDimension", 33));
// Some additional dimension setup, 
// e.g. setting some of the environment colors:
dimension.setSunsetColor(0.2, 1, 0.7);
```

Here we just create a new dimension. To teleport the player to your dimension, use the [[Dimensions.transfer]] method, e.g.:

```js
Callback.addCallback("ItemUse", function(coords, item) {
    // If player uses a stick
	if (item.id == 280) {
		Dimensions.transfer(Player.get(), Player.getDimension() == 0 ? dimension.id : 0);
	}
})
```

## Superflat Generation

```js
var generator = Dimensions.newGenerator({
    layers: [
        {
            minY: 0, maxY: 64,
            material: {
                base: 1,
                cover: 2,
                surface: {
					id: 3, 
					width: 5
				}
            }
        }
    ]
});
dimension.setGenerator(generator);
```

In this minimalistic example we are creating a single generation layer between y = 0 and y = 64, 
using stone as the base material. We also use grass and dirt to build the upper part of the generation. Since we are not creating any noise explicitly, a default solid noise octave is created. To specify some of the properties of the octave, we should either explicitly create one in the ```octaves``` property or just specify the required properties in our layer's description object.

## Single Layer Generation

![Generation Example #1](../images/dimensions-1.jpg)

```js
var generator = Dimensions.newGenerator({
	layers: [
		{
			minY: 0, maxY: 128, 
			yConversion: [[0, 0.5], [1, -0.5]], 
			material: {base: 1}, 
			noise: {
				octaves: {count: 4, scale: 40}
			}
		}
	]
});
dimension.setGenerator(generator);
```

In this example we generate a layer between 0 and 128. ```octaves``` property 
contains an object that is treated as parameterized description of the octaves
to be generated. See [[Dimensions.NoiseLayerParams]] for parameter details and
default values. 
Every noise octave is generated using the following formulas:

```js
// Pre-calculated parameter
var mul = 2 * ((1 << count) - 1) / (1 << count);
var seed = 0;

// For every of the count octaves
var octave = {
    scale: {x: 1 / scale.x, y: 1 / scale.y, z: 1 / scale.z},
    weight: weight / mul,
    seed
}
scale.x /= scale_factor.x;
scale.y /= scale_factor.y;
scale.z /= scale_factor.z;
mul *= weight_factor;
```

Thus, the ```octaves: {count: 4, scale: 40}``` gets transformed into:

```js
octaves: {
    {scale: 0.025, weight: 0.5333, seed: 0},
    {scale: 0.05, weight: 0.2667, seed: 1},
    {scale: 0.1, weight: 0.1333, seed: 2},
    {scale: 0.2, weight: 0.0667, seed: 3}
}
```

```yConversion``` is a function that transforms the landscape in the Y direction. 
Basically, it is the density of landscape at the specified Y position. 
It is specified as a set of points (x, y), and the values between these points get
interpolated. X values generally should be between 0 and 1, and y values 
between -0.5 and 0.5.

To better understand how this function works, let's take a couple 
of examples (you can use [Inner Core Dimension Editor](https://editor.p5js.org/zheka2304/present/kJmbShOU2) to visualize results quickly).

```js
yConversion: [[0, 0.5], [1, -0.5]]
```

Creates a landscape where most of the blocks are concentrated in the bottom part of
the layer:

![Generation Example #2](../images/dimensions-2.jpg)

```js
yConversion: [[0, 0.5], [0.5, -0.5], [1, 0.5]]
```

Creates a landscape where most of the blocks are concentrated in the bottom and 
the top parts of the layer, leaving the middle empty:

![Generation Example #3](../images/dimensions-3.jpg)

```js
yConversion: [[0, 0.5], [0.25, -0.3], [0.5, 0.3], [0.75, -0.3], [1, 0.5]]
```

Creates a more complex landscape like the one displayed on the image:

![Generation Example #4](../images/dimensions-4.jpg)

