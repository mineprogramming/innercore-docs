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
    function getTileEntity(x: number, y: number, z: number, region?: BlockSource): Nullable<TileEntity>;

    /**
     * If the block on the specified coordinates is a TileEntity block and is
     * not initialized, initializes it and returns created [[TileEntity]] object
     * @returns [[TileEntity]] if one was created, null otherwise
     */
    function addTileEntity(x: number, y: number, z: number, region?: BlockSource): Nullable<TileEntity>;

    /**
     * Destroys [[TileEntity]], dropping its container
     * @returns true if the [[TileEntity]] was destroyed successfully, false
     * otherwise
     */
    function destroyTileEntity(tileEntity: TileEntity): boolean;

    /**
     * If the block on the specified coordinates is a [[TileEntity]], destroys
     * it, dropping its container
     * @returns true if the [[TileEntity]] was destroyed successfully, false
     * otherwise
     */
    function destroyTileEntityAtCoords(x: number, y: number, z: number, region?: BlockSource): boolean;

    /**
     * Checks whether the [[TileEntity]] is in the loaded chunk or not
     * @param tileEntity to be verified
     * @returns true if the chunk with TileEntity and some of the surrounding
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
         * Use ItemContainer that supports multiplayer
         */
        useNetworkItemContainer?: boolean;
        /**
         * Default data values, will be initially added to [[TileEntity.data]] field
         */
        defaultValues?: { [key: string]: any },

        /**
         * Called when a [[TileEntity]] is created
         */
		created?: () => void,

		/**
         * Client TileEntity prototype copy
         */
        client?: {
            /**
             * Called when the client copy is created
             */
            load?: () => void,

            /**
             * Called on destroying the client copy
             */
            unload?: () => void,

            /**
             * Called every tick on client thread
             */
            tick?: () => void,

            /**
             * Events that receive packets on the client side
             */
            events?: {
                /**
                 * Example of the client packet event function
                 */
                [packetName: string]: (packetData: any, packetExtra: any) => void;
            },

            /**
             * Events of the container's client copy
             */
            containerEvents?: {
                /**
                 * Example of the client container event function
                 */
                [eventName: string]: (container: ItemContainer, window: UI.Window | UI.StandartWindow | UI.StandardWindow | UI.TabbedWindow | null, windowContent: UI.WindowContent | null, eventData: any) => void;
            }
	
	    /**
              * Any other user-defined methods and properties
              */
            [key: string]: any
	    
        },

        /**
         * Events that receive packets on the server side
         */
        events?: {
            /**
             * Example of the server packet event function.
             * 'this.sendResponse' method is only available here.
             */
            [packetName: string]: (packetData: any, packetExtra: any, connectedClient: NetworkClient) => void;
        },

        /**
         * Events of the container on the server side
         */
        containerEvents?: {
            /**
             * Example of the server container event function
             */
            [eventName: string]: (container: ItemContainer, window: UI.Window | UI.StandartWindow | UI.StandardWindow | UI.TabbedWindow | null, windowContent: UI.WindowContent | null, eventData: any) => void;
        }

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
        click?: (id: number, count: number, data: number, coords: Callback.ItemUseCoordinates, player: number, extra: ItemExtraData) => boolean | void,

        /**
         * Occurs when a block of the [[TileEntity]] is being destroyed. See
         * [[Callback.DestroyBlockFunction]] for details
         */
        destroyBlock?: (coords: Callback.ItemUseCoordinates, player: number) => void,

        /**
         * Occurs when the [[TileEntity]] should handle redstone signal. See
         * [[Callback.RedstoneSignalFunction]] for details
         */
        redstone?: (params: { power: number, signal: number, onLoad: boolean }) => void,

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
        destroy?: () => boolean | void;

        /**
         * Called to get the [[UI.IWindow]] object for the current [[TileEntity]]. The
         * window is then opened within [[TileEntity.container]] when the player clicks it
		 * @deprecated Don't use in multiplayer
         */
		getGuiScreen?: () => com.zhekasmirnov.innercore.api.mod.ui.window.IWindow;

		/**
         * Called on server side and returns UI name to open on click
         */
        getScreenName?: (player: number, coords: Vector) => string;

        /**
         * Called on client side, returns the window to open
         */
        getScreenByName?: (screenName?: string) => com.zhekasmirnov.innercore.api.mod.ui.window.IWindow;

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


declare interface TileEntity extends TileEntity.TileEntityPrototype {
    /**
     * X coord of the TileEntity in its dimension
     */
    readonly x: number,
    /**
     * Y coord of the TileEntity in its dimension
     */
    readonly y: number,
    /**
     * Z coord of the TileEntity in its dimension
     */
    readonly z: number,
    /**
     * dimension where the TileEntity is located
     */
    readonly dimension: number,
    /**
     * block id of TileEntity
     */
    readonly blockID: number,
    /**
     * TileEntity data values object
     */
    data: {[key: string]: any},
    /**
     * TileEntity's item container
     */
    container: ItemContainer | UI.Container,
    /**
     * TileEntity's liquid storage
     */
    liquidStorage: LiquidRegistry.Storage,
    /**
     * True if TileEntity is loaded in the world
     */
    isLoaded: boolean;
    /**
     * True if TileEntity was destroyed
     */
    remove: boolean;
    /**
     * Destroys the TileEntity prototype
     */
    selfDestroy: () => void;
    /**
     * Sends the packet from server to all clients
     */
    sendPacket: (name: string, data: object) => void;
    /**
     * BlockSource object to manipulate TileEntity's position in world
     */
    blockSource: BlockSource;
    /**
     * SyncedNetworkData object of the TileEntity
     */
    networkData: SyncedNetworkData;
    /**
     * NetworkEntity object of the TileEntity
     */
    networkEntity: NetworkEntity;
    /**
     * Sends packet to specified client.
     * AVAILABLE ONLY IN SERVER EVENT FUNCTIONS!
     */
    sendResponse: (packetName: string, someData: object) => void;
}
