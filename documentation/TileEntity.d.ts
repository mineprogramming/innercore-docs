/**
 * TileEntity is a powerful mechanism that allows for creation of interactive blocks
 * such as chests, furnaces, etc.
 */
declare namespace TileEntity {
    /**
     * Registers block as a TileEntity
     * @param blockID numeric block id to be used as [[TileEntity]]
     * @param customPrototype a set of parameters defining the [[TileEntity]]'s
     * behavior
     */
    function registerPrototype(blockID: number, customPrototype: TileEntityPrototype): void;

    /**
     * @returns [[TileEntity]]'s prototype by its numeric block id
     */
    function getPrototype(blockID: number): TileEntityPrototype;

    /**
     * @param blockID numeric block id
     * @returns true if the specified numeric block id is a [[TileEntity]]
     * block id, false otherwise
     */
    function isTileEntityBlock(blockID: number): boolean;

    /**
     * @returns a [[TileEntity]] on the specified coordinates or null if the block on the
     * coordinates is not a [[TileEntity]] 
     */
    function getTileEntity(x: number, y: number, z: number): TileEntity|null;

    /**
     * Checks whether the [[TileEntity]] is in the loaded chunk or not
     * @param tileEntity to be verified
     * @returns true if the chunk with TileEntity and some of the surrounging 
     * chunks are loaded, false otherwise. The following chunks are verified:
     *  + +
     *   #
     *  + +
     * Where "#"" is the chunk containing the current TileEntity and "+" are
     * the chunks that are also verified
     */
    function isTileEntityLoaded(tileEntity: TileEntity): boolean;
}


declare interface TileEntity {
    readonly x: number,
    readonly y: number,
    readonly z: number,
    readonly dimension: number
}


declare interface TileEntityPrototype {
    

    /**
     * Any other user-defined methods and properties
     */
    [key: string]: any
}