/**
 * Class used to create custom biomes. Note that Minecraft has a limit of 256 biomes
 * and there are already more than 100 vanilla biomes, so do not overuse 
 * this functionality. See {@page Biomes}
 */
declare class CustomBiome {

    /**
     * @returns [[java.util.HashMap]] object instance, with all
     * custom biomes registered by every mod
     */
    static getAllCustomBiomes(): java.util.Map<String, CustomBiome>;

    /**
     * @returns whether biome is invalid
     */
    isInvalid(): boolean;

    /**
     * Crates a new custom biome with specified string identifier
     * @param name string identifier of the biome
     */
    constructor(name: string);

    /**
     * custom biome numeric id
     */
    readonly id: number;

    /**
     * Custom biome name
     */
    readonly name: string;

    /**
     * Pointer to biome's native object,
     * represented as long number
     */
    readonly pointer: number;

    /**
     * Sets biome's grass color. Grass color is interpolated on the bounds of 
     * the biome
     * @param r red color component, value from 0 to 1
     * @param g green color component, value from 0 to 1
     * @param b blue color component, value from 0 to 1
     * @returns reference to itself to be used in sequential calls
     */
    setGrassColor(r: number, g: number, b: number): CustomBiome;

    /**
     * Sets biome's grass color. Grass color is interpolated on the bounds of 
     * the biome
     * @param color integer color value (you can specify it using hex value)
     * @returns reference to itself to be used in sequential calls
     */
    setGrassColor(color: number): CustomBiome;

    /**
     * Sets biome's sky color
     * @param r red color component, value from 0 to 1
     * @param g green color component, value from 0 to 1
     * @param b blue color component, value from 0 to 1
     * @returns reference to itself to be used in sequential calls
     */
    setSkyColor(r: number, g: number, b: number): CustomBiome;

    /**
     * Sets biome's sky color
     * @param color integer color value (you can specify it using hex value)
     * @returns reference to itself to be used in sequential calls
     */
    setSkyColor(color: number): CustomBiome;

    /**
     * Sets biome's foliage color
     * @param r red color component, value from 0 to 1
     * @param g green color component, value from 0 to 1
     * @param b blue color component, value from 0 to 1
     * @returns reference to itself to be used in sequential calls
     */
    setFoliageColor(r: number, g: number, b: number): CustomBiome;

    /**
     * Sets biome's foliage color
     * @param color integer color value (you can specify it using hex value)
     * @returns reference to itself to be used in sequential calls
     */
    setFoliageColor(color: number): CustomBiome;

    /**
     * Sets biome's water color
     * @param r red color component, value from 0 to 1
     * @param g green color component, value from 0 to 1
     * @param b blue color component, value from 0 to 1
     * @returns reference to itself to be used in sequential calls
     */
    setWaterColor(r: number, g: number, b: number): CustomBiome;

    /**
     * Sets biome's water color
     * @param color integer color value (you can specify it using hex value)
     * @returns reference to itself to be used in sequential calls
     */
    setWaterColor(color: number): CustomBiome;

    /**
     * Sets biome's temperature and downfall
     * @param temperature temperature value, from 0 to 1
     * @param downfall downfall value, from 0 to 1
     * @returns reference to itself to be used in sequential calls
     */
    setTemperatureAndDownfall(temperature: number, downfall: number): CustomBiome;

    /**
     * Specifies the block that will cover the biome. E.g. most of the biomes 
     * use grass as cover block, though some of the biomes use other blocks 
     * (sand, ice, etc.)
     * @param id block's tile id
     * @param data block data
     * @returns reference to itself to be used in sequential calls
     */
    setCoverBlock(id: number, data: number): CustomBiome;

    /**
     * Specifies the block that will be under the covering block of the biome. 
     * E.g. most of the biomes use dirt as cover block, 
     * though some of the biomes use other blocks
     * @param id block's tile id
     * @param data block data
     * @returns reference to itself to be used in sequential calls
     */
    setSurfaceBlock(id: number, data: number): CustomBiome;

    /**
     * Sets the block that fills the terrain. Vanilla biomes use stone filling
     * @param id block's tile id
     * @param data block data
     * @returns reference to itself to be used in sequential calls
     */
    setFillingBlock(id: number, data: number): CustomBiome;

    /**
     * Sets the block that fills the floor at the bottom of the sea or the ocean.
     * Vanilla biomes use gravel or stone filling
     * @param id block's tile id
     * @param data block data
     * @returns reference to itself to be used in sequential calls
     */
    setSeaFloorBlock(id: number, data: number): CustomBiome;

    /**
     * This method is mapped on native parameter with the same name and its 
     * effect is currently not known
     * @param id block's tile id
     * @param data block data
     * @returns reference to itself to be used in sequential calls
     * @deprecated use [[CustomBiome.setSeaFloorBlock]] instead
     */
    setAdditionalBlock(id: number, data: number): CustomBiome;

    /**
     * Sets the average depth of the see floor in this biome.
     * @param depth depth of the see floor by Y-axis
     * @returns reference to itself to be used in sequential calls
     */
    setSeaFloorDepth(depth: number): CustomBiome;

    /**
     * This method is mapped on native parameter with the same name and its 
     * effect is currently not known
     * @param param some integer parameter. Default value is 7
     * @returns reference to itself to be used in sequential calls
     * @deprecated use [[CustomBiome.setSeaFloorDepth]]
     */
    setSurfaceParam(param: number): CustomBiome;

    /**
     * Defines the server-side biome params from given JSON string.
     * Throws [[java.lang.IllegalArgumentException]] if the string cannot be parsed.
     * @returns reference to itself to be used in sequential calls
     * ```js
     * // many thanks to DansZbar2 for the example
     * var cherry = new CustomBiome("environmental_cherry");
     * cherry.setServerJson(JSON.stringify({
     *     "minecraft:climate": {
     *        "downfall": 0.0,
     *        "snow_accumulation": [ 0.0, 0.0 ],
     *        "temperature": 2.0,
     *        "blue_spores": 0,
     *        "red_spores": 0,
     *        "white_ash": 0,
     *        "ash": 0
     *     },
     *     "minecraft:overworld_height": {
     *        "noise_type": "default"
     *     },
     *     "animal": {},
     *     "monster": {},
     *     "overworld": {},
     *     "environmental_cherry": {},
     *     "minecraft:surface_parameters": {
     *        "top_material": "minecraft:grass",
     *        "mid_material": "minecraft:dirt",
     *        "foundation_material": "minecraft:stone",
     *        "sea_floor_material": "minecraft:clay",
     *        "sea_material": "minecraft:water",
     *        "sea_floor_depth": 7
     *     },
     *     "minecraft:overworld_generation_rules": {
     *        "hills_transformation": "jungle_hills",
     *        "generate_for_climates": [ 
     *            [ "cold", 5 ],
     *            [ "medium", 20 ],
     *            [ "warm", 35 ],
     *        ]
     *     }
     * }));
     * ```
     */
    setServerJson(json: string): CustomBiome;

    /**
     * Defines the client-side biome params from given JSON string.
     * Throws [[java.lang.IllegalArgumentException]] if the string cannot be parsed.
     * @returns reference to itself to be used in sequential calls
     * ```js
     * // many thanks to DansZbar2 for the example
     * var cherry = new CustomBiome("environmental_cherry");
     * cherry.setClientJson(JSON.stringify({
     *     "water_surface_color": "#d176e1",
     *     "water_fog_color": "#a35dc2",
     *     "water_surface_transparency": 0.7,
     *     "water_fog_distance": 11,
     *     "fog_identifier": "environmental:environmental_cherry" // custom fog defined in the addon
     * }));
     * ```
     */
    setClientJson(json: string): CustomBiome;
}
