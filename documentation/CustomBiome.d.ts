/**
 * Class used to create custom biomes. Note that Minecraft has a limit of 256 biomes
 * and there are already more than 100 vanilla biomes, so do not overuse 
 * this functionality. See {@page Biomes}
 */
declare class CustomBiome {
    /**
     * Crates a new custom biome with specified string identifier
     * @param name string identifier of the biome
     */
    constructor(name: string);

    /**
     * custom biome numeric id
     */
    id: number;

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
     * This method is mapped on native parameter with the same name and its 
     * effect is currently not known
     * @param id block's tile id
     * @param data block data
     * @returns reference to itself to be used in sequential calls
     */
    setAdditionalBlock(id: number, data: number): CustomBiome;

    /**
     * This method is mapped on native parameter with the same name and its 
     * effect is currently not known
     * @param param some integer parameter. Default value is 7
     * @returns reference to itself to be used in sequential calls
     */
    setSurfaceParam(param: number): CustomBiome;
}