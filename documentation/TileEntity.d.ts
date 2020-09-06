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

    
    /**
     * Interface passed to [[TileEntity.registerPrototype]] function
     */
    interface TileEntityPrototype {
        /**
         * Default data values, will be initially added to [[TileEntity.data]] field
         */
        defaultValues?: {[key: string]: any},

        /**
         * Called when a [[TileEntity]] is created
         */
        created?: () => void,

        /**
         * Called when a [[TileEntity]] is initialised in the world
         */
        init?: () => void,

        /**
         * Called every tick and should be used for all the updates of the [[TileEntity]]
         */
        tick?: () => void,

        /**
         * Called when player uses some item on a [[TileEntity]]
         * @returns true if the event is handled and should not be propagated to
         * the next handlers. E.g. return true if you don't want the user interface 
         * to be opened
         */
        click?: (id: number, count: number, data: number, coords: Callback.ItemUseCoordinates) => boolean|void,

        /**
         * Occurs when a block of the [[TileEntity]] is being destroyed. See
         * [[Callback.DestroyBlockFunction]] for details
         */
        destroyBlock?: (block: Tile, player: number) => void,

        /**
         * Occurs when the [[TileEntity]] should handle redstone signal. See 
         * [[Callback.RedstoneSignalFunction]] for details
         */
        redstone?: (params: {power: number, signal: number, onLoad: boolean}) => void,
        
        /**
         * Occurs when a projectile entity hits the [[TileEntity]]. See
         * [[Callback.ProjectileHitFunction]] for details
         */
        projectileHit?: (coords: Callback.ItemUseCoordinates, target: Callback.ProjectileHitTarget) => void,
        
        /**
         * Occurs when the [[TileEntity]] is being destroyed
         * @returns true to prevent 
         * [[TileEntity]] object from destroying (but if the block was destroyed, returning 
         * true from this function doesn't replace the missing block with a new one)
         */
        destroy?: () => boolean|void;

        /**
         * Called to get the [[UI.IWindow]] object for the current [[TileEntity]]. The 
         * window is then opened within [[TileEntity.container]] when the player clicks it
         */
        getGuiScreen?: () => UI.IWindow;

        /**
         * Called when more liquid is required
         */
        requireMoreLiquid?: (liquid: string, amount: number) => void;

        /**
         * Any other user-defined methods and properties
         */
        [key: string]: any
    }
}


declare interface TileEntity {
    readonly x: number,
    readonly y: number,
    readonly z: number,
    readonly dimension: number
    data: {[key: string]: any},
    container: UI.Container,
    liquidStorage: any,
    selfDestroy: () => void;
}
