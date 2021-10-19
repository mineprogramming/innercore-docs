// Backward compatibility
declare type TransferPolicy = com.zhekasmirnov.apparatus.api.container.ItemContainerFuncs.TransferPolicy;

/**
 * New type of TileEntity container that supports multiplayer
 */
declare class ItemContainer extends com.zhekasmirnov.apparatus.api.container.ItemContainer {
	static class: java.lang.Class<ItemContainer>;
	/**
	 * Constructs a new [[ItemContainer]] object
	 */
	constructor();
	/**
	 * Constructs a new [[ItemContainer]] object from given deprecated [[UI.Container]] object
	 */
	constructor(legacyContainer: UI.Container);
}

declare class ItemContainerSlot extends com.zhekasmirnov.apparatus.api.container.ItemContainerSlot {}