/**
 * New class to work with world instead of some methods from World module.
 */
declare class BlockSource {
	/**
     * @returns the dimension id to which the following object belongs
     */
	getDimension(): number;

	/**
     * @param x X coord of the block
     * @param y Y coord of the block
     * @param z Z coord of the block
	 * @returns Tile object with id and data propeties
     */
	getBlock(x: number, y: number, z: number): Tile;

	/**
     * @returns block's id at coords
     * @param x X coord of the block
     * @param y Y coord of the block
     * @param z Z coord of the block
     */
	getBlockId(x: number, y: number, z: number): number;

	/**
     * @returns block's data at coords
     * @param x X coord of the block
     * @param y Y coord of the block
     * @param z Z coord of the block
     */
	getBlockData(x: number, y: number, z: number): number;
	
	/**
     * Sets block by the coords
     * @param id - id of the block to set
     * @param data - data of the block to set
     */
    setBlock(x: number, y: number, z: number, id: number, data: number): number;
	
	destroyBlock(x: number, y: number, z: number): void;
	
    explode(x: number, y: number, z: number, power: number, fire: boolean): void;
	
	destroyBlock(x: number, y: number, z: number, drop: boolean): void;
	
	/**
     * @param x X coord of the block
     * @param y Y coord of the block
     * @param z Z coord of the block
     * @returns interface to the vanilla TileEntity (chest, furnace, etc.) on the coords
     */
	getBlockEntity(x: number, y: number, z: number): NativeTileEntity;
	
	/**
     * @param x X coord of the block
     * @param z Z coord of the block
     * @returns biome id
     */
	getBiome(x: number, z: number): number;
	
	/**
     * Sets biome id by coords
     * @param id - id of the biome to set
     */
	setBiome(x: number, z: number, biomeID: number): void;
	
	/**
     * @returns temperature of the biome on coords
     */
	getBiomeTemperatureAt(x: number, y: number, z: number): number;
	
	/**
	 * @param chunkX X coord of the chunk
     * @param chunkZ Z coord of the chunk
     * @returns true if chunk is loaded, false otherwise
     */
	isChunkLoaded(chunkX: number, chunkZ: number): boolean;
	
	/**
	 * @param x X coord of the position
     * @param z Z coord of the position
     * @returns true if chunk on the position is loaded, false otherwise
     */
	isChunkLoadedAt(x: number, z: number): boolean;
	
	/**
	 * @param chunkX X coord of the chunk
     * @param chunkZ Z coord of the chunk
     * @returns the loading state of the chunk by chunk coords
     */
	getChunkState(chunkX: number, chunkZ: number): number;
	
	/**
	 * @param x X coord of the position
     * @param z Z coord of the position
     * @returns the loading state of the chunk by coords
     */
	getChunkStateAt(x: number, z: number): number;
	
	/**
     * @returns whether the sky can be seen from coords
     */
	canSeeSky(x: number, y: number, z: number): boolean;
	
	/**
     * @returns grass color on coords
     */
	getGrassColor(x: number, y: number, z: number): number;
	
	/**
     * Creates dropped item and returns entity id
     * @param x X coord of the place where item will be dropped
     * @param y Y coord of the place where item will be dropped
     * @param z Z coord of the place where item will be dropped
     * @param id id of the item to drop
     * @param count count of the item to drop
     * @param data data of the item to drop
     * @param extra extra of the item to drop
     * @returns drop entity id
     */
	spawnDroppedItem(x: number, y: number, z: number, id: number, count: number, data: number, extra: ItemExtraData): number;

	
	spawnEntity(x: number, y: number, z: number, type: number): number;
	
	spawnEntity(x: number, y: number, z: number, type: string): number;
	
	spawnEntity(x: number, y: number, z: number, namespace: string, type: string, init_data: string): number;


	
	spawnExpOrbs(x: number, y: number, z: number, amount: number): void;

	/**
     * @returns the list of entity IDs in given box,
     * that are equal to the given type, if blacklist value is false,
     * and all except the entities of the given type, if blacklist value is true
     */
	fetchEntitiesInAABB(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, type: number, blacklist: boolean): number[];


	/**
     * @returns interface to given dimension by default 
	 * (null if given dimension is not loaded and this interface 
	 * was not created yet)
     */
	static getDefaultForDimension(dimension: number): Nullable<BlockSource>;
	
	/**
     * @returns interface to the dimension where the given entity is 
	 * (null if given entity does not exist or the dimension is not loaded 
	 * and interface was not created)
     */
	static getDefaultForActor(entityUid: number): Nullable<BlockSource>;
	
	/**
	 * @return BlockSource foe world generation
	 */
	static getCurrentWorldGenRegion(): Nullable<BlockSource>;
}