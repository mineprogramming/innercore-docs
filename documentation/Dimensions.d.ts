/**
 * Namespace used to create and manipulate custom dimensions
 */
declare namespace Dimensions {
    /**
     * Class representing custom dimension
     */
    class CustomDimension {
        /**
         * Constructs a new dimension with specified name and preffered 
         * @param name dimension name, can be used to get dimension via 
         * [[CustomDimension.getDimensionByName]] call
         * @param preferedId prefered dimension id. If id is already occupied 
         * by some another dimension, constructor will look for the next empty
         * dimension id and assign it to the current dimension
         */
        constructor(name: string, preferedId: number);

        /**
         * Custom dimension id
         */
        id: number;

        /**
         * Sets custom landscape generator
         * @param generator custom landscape generator used for current 
         * dimension
         * @returns reference to itself to be used in sequential calls
         */
        setGenerator(generator: CustomGenerator): CustomDimension;

        /**
         * Specifies whether the sky produces light (like in overworld) or not 
         * (like in the End or Nether). By default this value is true
         * @param hasSkyLight if true, the sky produces light in the dimension
         * @returns reference to itself to be used in sequential calls
         */
        setHasSkyLight(hasSkyLight: boolean): CustomDimension;

        /**
         * @returns whether the sky produces light in the current dimension
         */
        hasSkyLight(): boolean;

        /**
         * Sets sky color for the dimension in the RGB format. Default 
         * color is as in the Overworld
         * @param r red color component, value from 0 to 1
         * @param g green color component, value from 0 to 1
         * @param b blue color component, value from 0 to 1
         * @returns reference to itself to be used in sequential calls
         */
        setSkyColor(r: number, g: number, b: number): CustomDimension;

        /**
         * Resets sky color to the default value
         * @returns reference to itself to be used in sequential calls
         */
        resetSkyColor(): CustomDimension;

        /**
         * Sets fog color for the dimension in the RGB format. Default 
         * color is as in the Overworld
         * @param r red color component, value from 0 to 1
         * @param g green color component, value from 0 to 1
         * @param b blue color component, value from 0 to 1
         * @returns reference to itself to be used in sequential calls
         */
        setFogColor(r: number, g: number, b: number): CustomDimension;

        /**
         * Resets fog color to the default value
         * @returns reference to itself to be used in sequential calls
         */
        resetFogColor(): CustomDimension;

        /**
         * Sets clouds color for the dimension in the RGB format. Default 
         * color is as in the Overworld
         * @param r red color component, value from 0 to 1
         * @param g green color component, value from 0 to 1
         * @param b blue color component, value from 0 to 1
         * @returns reference to itself to be used in sequential calls
         */
        setCloudColor(r: number, g: number, b: number): CustomDimension;

        /**
         * Resets clouds color to the default value
         * @returns reference to itself to be used in sequential calls
         */
        resetCloudColor(): CustomDimension;

        /**
         * Sets sunset sky color for the dimension in the RGB format. Default 
         * color is as in the Overworld
         * @param r red color component, value from 0 to 1
         * @param g green color component, value from 0 to 1
         * @param b blue color component, value from 0 to 1
         * @returns reference to itself to be used in sequential calls
         */
        setSunsetColor(r: number, g: number, b: number): CustomDimension;

        /**
         * Resets sunset sky color to the default value
         * @returns reference to itself to be used in sequential calls
         */
        resetSunsetColor(): CustomDimension;
    }

    /**
     * Class representing landscape generator used for the dimension
     */
    class CustomGenerator {
        /**
         * Creates a new [[CustomGenerator]] instance using specified base type
         * @param baseType base generator type constant, can be from 0 to 4. 0 
         * and 1 represent overworld generator, 2 represents flat world 
         * generator, 3 represents nether generator and 4 represents end 
         * generator
         */
        constructor(baseType: number);

        /**
         * Specifies whether to use vanilla biome surface cover blocks (grass, 
         * sand, podzol, etc.)
         * @param value if true, vanilla surface will be generated, default 
         * value is false
         * @returns reference to itself to be used in sequential calls
         */
        setBuildVanillaSurfaces(value: boolean): CustomGenerator;

        /**
         * Specifies whether to generate minecraft vanilla structures
         * @param value if true, vanilla structures will be generated, default
         * value is false
         * @returns reference to itself to be used in sequential calls
         */
        setGenerateVanillaStructures(value: boolean): CustomGenerator;

        /**
         * Specifies whether to use mod's generation callbacks
         * @param value if true, mod generation will be used, default
         * value is true
         * @returns reference to itself to be used in sequential calls
         */
        setGenerateModStructures(value: boolean): CustomGenerator;

        /**
         * Sets terrain generator object used for the landscape generation
         * @param generator terrain generator to be used with current landscape 
         * generator or removes terrain generator, if the value is null
         * @returns reference to itself to be used in sequential calls
         */
        setTerrainGenerator(generator: AbstractTerrainGenerator|null): CustomGenerator;
        
    }

    interface AbstractTerrainGenerator {

    }

    /**
     * Class representing terrain that consists of single biome
     */
    class MonoBiomeTerrainGenerator implements AbstractTerrainGenerator {
        /**
         * Constructs new [[MonoBiomeTerrainGenerator]] instance with no terrain
         * layers
         */
        constructor();

        addTerrainLayer(minY: number, maxY: number): TerrainLayer;

        /**
         * Sets base biome for the current terrain 
         * @param id id of the biome to be used as a single biome of the terrain
         * layer
         */
        setBaseBiome(id: number): MonoBiomeTerrainGenerator;
    }

    /**
     * Class representing single terrain layer that may consist of several noise 
     * layers
     */
    interface TerrainLayer {
        addNewMaterial(generator: NoiseGenerator, priority: number): TerrainMaterial;

        setHeightmapNoise(generator: NoiseGenerator): TerrainLayer;

        setMainNoise(generator: NoiseGenerator): TerrainLayer;

        setYConversion(conversion: NoiseConversion): TerrainLayer;

        getMainMaterial(): TerrainMaterial;
    }

    interface TerrainMaterial {

        setBase(id: number, data: number): TerrainMaterial; 

        setCover(id: number, data: number): TerrainMaterial; 

        setSurface(width: number, id: number, data: number): TerrainMaterial; 

        setFilling(width: number, id: number, data: number): TerrainMaterial; 

        setDiffuse(value: number): TerrainMaterial;
    }

    class NoiseConversion {
        constructor();

        addNode(x: number, y: number): NoiseConversion;
    }

    class NoiseGenerator {
        constructor();

        addLayer(layer: NoiseLayer): NoiseGenerator;

        setConversion(conversion: NoiseConversion): NoiseGenerator;
    }

    class NoiseLayer {
        constructor();

        addOctave(octave: NoiseOctave): NoiseLayer;

        setConversion(conversion: NoiseConversion): NoiseLayer;
    }

    class NoiseOctave {
        constructor(type?: number);

        setTranslate(x: number, y: number, z: number): NoiseOctave;

        setScale(x: number, y: number, z: number): NoiseOctave;

        setWeight(weight: number): NoiseOctave;

        setSeed(x: number, y: number, z: number): NoiseOctave;

        setConversion(conversion: NoiseConversion): NoiseOctave;
    }

    /**
     * Overrides default generator of vanilla dimension
     * @param id vanilla dimension id, one of the [[Native.Dimension]] 
     * values
     * @param generator custom landscape generator used for vanilla 
     * dimension
     */
    function overrideGeneratorForVanillaDimension(id: number, generator: CustomGenerator): void;


    /**
     * @param name dimension name
     * @returns dimension by its string name specified in 
     * [[CustomDimension.constructor]]
     */
    function getDimensionByName(name: string): CustomDimension;


    /**
     * @param id dimension id
     * @returns custom dimension by its numeric id
     */
    function getDimensionById(id: number): CustomDimension;


    /**
     * @param id dimension id
     * @returns true, if dimension is a limbo dimension. Limbo dimension is 
     * created by Horizon automatically if you try to teleport the player to
     * non-existing dimension
     */
    function isLimboId(id: number): boolean;

    /**
     * Transferes specified entity to the dimension with specified id
     * @param entity numeric id of the 
     * @param dimensionId numeric id of the dimension to transfer the entity to
     */
    function transfer(entity: number, dimensionId: number): void;

}