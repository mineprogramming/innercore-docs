declare class BlockSource {
    getDimension(): number;
    getBlockId(x: number, y: number, z: number): number;
    getBlockData(x: number, y: number, z: number): number;
    setBlock(x: number, y: number, z: number, id: number, data: number): number;
    destroyBlock(x: number, y: number, z: number): void;
    explode(x: number, y: number, z: number, power: number, fire: boolean): void;
    destroyBlock(x: number, y: number, z: number, drop: boolean): void;
    getBlockEntity(x: number, y: number, z: number): NativeTileEntity;
    getBiome(x: number, z: number): number;
    setBiome(x: number, z: number, biomeID: number): void;
    getBiomeTemperatureAt(x: number, y: number, z: number): number;
    isChunkLoaded(chunkX: number, chunkZ: number): boolean;
    isChunkLoadedAt(x: number, z: number): boolean;
    getChunkState(chunkX: number, chunkZ: number): number;
    getChunkStateAt(x: number, z: number): number;
    canSeeSky(x: number, y: number, z: number): boolean;
    getGrassColor(x: number, y: number, z: number): number;
    spawnDroppedItem(x: number, y: number, z: number, id: number, count: number, data: number, extra: ItemExtraData): number;

    spawnEntity(x: number, y: number, z: number, type: number): number;
    spawnEntity(x: number, y: number, z: number, type: string): number;
    spawnEntity(x: number, y: number, z: number, namespace: string, type: string, init_data: string): number;

    fetchEntitiesInAABB(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, type: number, blacklist: boolean): number[];

    static getDefaultForDimension(dimension: number): Nullable<BlockSource>;
    static getDefaultForActor(entityUid: number): Nullable<BlockSource>;
    static getCurrentWorldGenRegion(): Nullable<BlockSource>;
}