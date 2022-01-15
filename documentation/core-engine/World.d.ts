/**
 * Module that allows to work with current Minecraft world
 * Most of the methods are out of date in multiplayer, use BlockSource instead
 */
declare namespace World {
    /**
     * Setups the module to work properly with the world. Usually called by 
     * Core Engine, so you generally shouldn't call it yourself
     * @param isLoaded whether the world is loaded or not
     */
    function setLoaded(isLoaded: boolean): boolean;

    /**
     * @returns whether the world is loaded or not
     */
    function isWorldLoaded(): boolean;

    /**
     * @returns current tick number since the player joined the world
     */
	function getThreadTime(): number;

	/**
	 * @param side number from 0 to 6 (exclusive)
     * @returns opposite side to argument
     */
    function getInverseBlockSide(side: number): number;

    /**
     * @param side block side
     * @returns normal vector for this side
     */
    function getVectorByBlockSide(side: number): Vector;

    /**
     * Retrieves coordinates relative to the block. For example, the following code
     * will return coordinates of the block above the specified:
     * ```ts
     * World.getRelativeCoords(x, y, z, Native.BlockSide.UP);
     * ```
     * @param side block side
     * @returns relative coordinates
     */
    function getRelativeCoords(x: number, y: number, z: number, side: number): Vector;

    /**
     * Sets block in the world using its tile id and data
     * @param id block tile id
     * @param data block data
     * @deprecated Consider using [[World.setBlock]] instead
     */
    function nativeSetBlock(x: number, y: number, z: number, id: number, data: number): void;

    /**
     * @returns tile id of the block located on the specified coordinates
     * @deprecated Consider using [[World.getBlockID]] instead
     */
    function nativeGetBlockID(x: number, y: number, z: number): number;

    /**
     * @returns data of the block located on the specified coordinates 
     * @deprecated Consider using [[World.getBlockData]] instead
     */
    function nativeGetBlockData(x: number, y: number, z: number): number;

    /**
     * Sets block in the world using its tile id and data
     * @param id block tile id
     * @param data block data
     */
    function setBlock(x: number, y: number, z: number, id: number, data: number): void;

    /**
     * Sets block in the world using specified [[Tile]] object
     * @param fullTile object containing id and data of the tile
     */
    function setFullBlock(x: number, y: number, z: number, fullTile: Tile): void;

    /**
     * @returns [[Tile]] object containing tile id and data of the block located 
     * on the specified coordinates
     */
    function getBlock(x: number, y: number, z: number): Tile;

    /**
     * @returns tile id of the block located on the specified coordinates
     */
    function getBlockID(x: number, y: number, z: number): number;

    /**
     * @returns data of the block located on the specified coordinates
     */
    function getBlockData(x: number, y: number, z: number): number;

    /**
     * Destroys block on the specified coordinates producing appropriate drop
     * and particles. Do not use for massive tasks due to particles being 
     * produced
     * @param drop whether to provide drop for the block or not
     */
    function destroyBlock(x: number, y: number, z: number, drop?: boolean): void;

    /**
     * @returns light level on the specified coordinates, from 0 to 15
     * @deprecated Out of date in multiplayer
     */
    function getLightLevel(x: number, y: number, z: number): number;

    /**
     * @param x chunk coordinate
     * @param z chunk coordinate
     * @returns whether the chunk with specified coordinates is loaded or not
     */
    function isChunkLoaded(x: number, z: number): boolean;

    /**
     * @param x block coordinate
     * @param y block coordinate
     * @param z block coordinate
     * @returns whether the chunk containing specified block coordinates is 
     * loaded or not
     */
    function isChunkLoadedAt(x: number, y: number, z: number): boolean;

    /**
     * @returns [[TileEntity]] located on the specified coordinates
     */
    function getTileEntity(x: number, y: number, z: number, region?: BlockSource): Nullable<TileEntity>;

    /**
     * If the block on the specified coordinates is a TileEntity block and is 
     * not initialized, initializes it and returns created [[TileEntity]] object
     * @returns [[TileEntity]] if one was created, null otherwise
     */
    function addTileEntity(x: number, y: number, z: number, region?: BlockSource): Nullable<TileEntity>;

    /**
     * If the block on the specified coordinates is a [[TileEntity]], destroys 
     * it, dropping its container
     * @returns true if the [[TileEntity]] was destroyed successfully, false 
     * otherwise
     */
    function removeTileEntity(x: number, y: number, z: number, region?: BlockSource): boolean;

    /**
     * @returns if the block on the specified coordinates is a [[TileEntity]], returns
     * its container, if the block is a [[NativeTileEntity]], returns it, if 
     * none of above, returns null
	 * @param region BlockSource
     */
    function getContainer(x: number, y: number, z: number, region?: BlockSource): Nullable<NativeTileEntity | UI.Container | ItemContainer>;

    /**
     * @returns current world's time in ticks 
     */
    function getWorldTime(): number;

    /**
     * Sets current world time
     * @param time time in ticks
     */
    function setWorldTime(time: number): number;

    /**
     * Sets current time to day or night
     * @param day if true, sets time to 10000 (day), else to 13000 (night)
     * @deprecated Consider using [[World.setWorldTime]] instead
     */
    function setDayMode(day: boolean): void;

    /**
     * Sets current time to day or night
     * @param day if true, sets time to 13000 (night), else to 10000 (day)
     * @deprecated Consider using [[World.setWorldTime]] instead
     */
    function setNightMode(night: boolean): void;

    /**
     * @returns current weather object. This value should not be edited, call 
     * [[World.setWeather]] to change current weather
     */
    function getWeather(): Weather;

    /**
     * Sets current weather in the world
     * @param weather [[Weather]] object to be used as current weather value
     */
    function setWeather(weather: Weather): void;

    /**
     * Drops item or block with specified id, count, data and extra on the
     * specified coordinates. For blocks, be sure to use block id, not the tile
     * id
     * @returns created drop entity id
     */
    function drop(x: number, y: number, z: number, id: number, count: number, data: number, extra?: ItemExtraData): number;

    /**
     * Creates an explosion on the specified coordinates
     * @param power defines how many blocks can the explosion destroy and what
     * blocks can or cannot be destroyed
     * @param fire if true, puts the crater on fire
     */
    function explode(x: number, y: number, z: number, power: number, fire: boolean): void;

    /**
     * @returns biome id on the specified coordinates
     */
    function getBiome(x: number, z: number): number;

    /**
     * @returns biome name on the specified coordinates
     * @deprecated This method will return "Unknown" for all the biomes
     */
    function getBiomeName(x: number, z: number): string;

    /**
     * @returns grass color for specified coordinates, uses android integer
     * color model
     */
    function getGrassColor(x: number, z: number): number;

    /**
     * Sets grass color on the specified coordinates, uses android integer color
     * model
     * @param color grass color to be set for the specified coordinates
     */
    function setGrassColor(x: number, z: number, color: number): void;

    /**
     * @returns grass color for specified coordinates, uses rgb color model
     */
    function getGrassColorRGB(x: number, z: number): Color;

    /**
     * Sets grass color on the specified coordinates, uses rgb color model
     * @param color grass color to be set for the specified coordinates
     */
    function setGrassColorRGB(x: number, z: number, rgb: Color): void;

    /**
     * @returns true, if one can see sky from the specified position, false 
     * otherwise
	 * @deprecated Out of date in multiplayer
     */
    function canSeeSky(x: number, y: number, z: number): boolean;

    /**
     * @returns true, if tile can be replaced (for example, grass and water can be replaced), false otherwise
     */
    function canTileBeReplaced(id: number, data: number): boolean;

    /**
     * Plays standart Minecraft sound on the specified coordinates
     * @param name sound name
     * @param volume sound volume from 0 to 1
     * @param pitch sound pitch, from 0 to 1, 0.5 is default value
     */
    function playSound(x: number, y: number, z: number, name: string, volume: number, pitch?: number): void;

    /**
     * Plays standart Minecraft sound from the specified entity
     * @param name sound name
     * @param volume sound volume from 0 to 1
     * @param pitch sound pitch, from 0 to 1, 0.5 is default value
     */
    function playSoundAtEntity(entity: number, name: string, volume: number, pitch?: number): void;

    /**
     * Enables "BlockChanged" event for the block id. Event occurs when either
     * old block or new block is registered using this method
     * @param id numeric tile id
     * @param enabled if true, the block will be watched
     */
    function setBlockChangeCallbackEnabled(id: number, enabled: boolean): void;

    /**
     * Enables "BlockChanged" event for specified block ids and registers 
     * callback function for the ids
     * @param ids string or numeric tile id, or an array of string and/or 
     * numeric tile ids
     * @param callback function that will be called when "BlockChanged" callback 
     * occurs involving one of the blocks. **Warning!** If both old and new 
     * blocks are in the ids list, callback function will be called twice.
     */
    function registerBlockChangeCallback(ids: number | string | (string | number)[], callback: Callback.BlockChangedFunction): void;

    /**
     * Gets biome on the specified coordinates when generating biome map. 
     * Should be called only in *GenerateBiomeMap* callback
     * @param x block x coordinate
     * @param z block y coordinate
     * @returns biome's numeric id
     */
    function getBiomeMap(x: number, z: number): number;

    /**
     * Sets biome on the specified coordinates when generating biome map. 
     * Should be called only in *GenerateBiomeMap* callback
     * @param x block x coordinate
     * @param z block y coordinate
     * @param id biome id to be set on the specified coordinates
     */
    function setBiomeMap(x: number, z: number, id: number): void;

    /**
     * Adds a new generation callback using string hash to generate a unique 
     * random seed for the chunk generator
     * @param callbackName one of the generation callbacks, see {@page Callbacks}
     * for details
     * @param callback callback function
     * @param uniqueHashStr if specified, will be used as string hash for seed
     * generation, otherwise default hash string will be used
     */
    function addGenerationCallback(callbackName: string, callback: Callback.GenerateChunkFunction, uniqueHashStr?: string): void;
}