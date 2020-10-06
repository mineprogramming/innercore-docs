declare class BlockSource {
    getDimension(): number;
    getBlockId(x: number, y: number, z: number): number;
    getBlockData(x: number, y: number, z: number): number;
    setBlock(x: number, y: number, z: number, id: number, data: number): number;
    getBlockEntity(x: number, y: number, z: number): NativeTileEntity;
    getBiome(x: number, z: number): number;
    setBiome(x: number, z: number, biomeID: number): void;
    getBiomeTemperatureAt(x: number, y: number, z: number): number;
    isChunkLoaded(chunkX: number, chunkZ: number): boolean;
    getChunkState(chunkX: number, chunkZ: number): number;
    canSeeSky(x: number, y: number, z: number): boolean;
    getGrassColor(x: number, y: number, z: number): number;
    spawnDroppedItem(x: number, y: number, z: number, id: number, count: number, data: number, extra: ItemExtraData): number;
    fetchEntitiesInAABB(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, type: number, blacklist: boolean): number[];

    static getDefaultForDimension(dimension: number): Nullable<BlockSource>;
    static getDefaultForActor(entityUid: number): Nullable<BlockSource>;
    static getCurrentWorldGenRegion(): Nullable<BlockSource>;
}