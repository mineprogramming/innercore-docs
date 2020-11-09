/**
 * New type of TileEntity container that supports multiplayer
 */
declare class ItemContainer {
	/**
	 * Sends changes in container to all clients.
	 * Needs to be used every time when something changes in container.
	 */
	sendChanges(): void;

	/**
	 * Sends packet from client container copy to server.
	 */
	sendEvent(eventName: string, someData: object): void;

	/**
	 * Sends packet from server container. 
	 * ONLY AVAILABLE IN SERVER CONTAINER EVENTS
	 */
	sendResponseEvent(eventName: string, someData: object): void;

	/**
	 * Sets container's parent object, for [[TileEntity]]'s container it 
	 * should be a [[TileEntity]] reference, otherwise you can pass any 
	 * value to be used in your code later
	 * @param parent an object to be set as container's parent
	 */
	setParent(parent: Nullable<TileEntity> | any): void;

	/**
	 * Getter for [[Container.parent]] field
	 */
	getParent(): Nullable<TileEntity> | any;

	/**
	 * Gets the slot by its name. If a slot with specified name doesn't 
	 * exists, creates an empty one with specified name
	 * @param name slot name
	 * @returns contents of the slot in a [[Slot]] object. You can modify it
	 * to change the contents of the slot
	 */
	getSlot(name: string): UI.Slot;

	/**
	 * Set slot's content by its name. If a slot with specified name doesn't 
	 * exists, creates an empty one with specified name and item
	 * @param name slot name
	 */
	setSlot(name: string, id: number, count: number, data: number): void;

	/**
	 * Set slot's content by its name. If a slot with specified name doesn't 
	 * exists, creates an empty one with specified name and item
	 * @param name slot name
	 * @param extra item extra data.
	 */
	setSlot(name: string, id: number, count: number, data: number, extra: ItemExtraData): void;

	/**
	 * Validates slot contents. If the data value is less then 0, it becomes
	 * 0, if id is 0 or count is less then or equals to zero, slot is reset 
	 * to an empty one
	 * @param name slot name
	 */
	validateSlot(name: string): void;

	/**
	 * Clears slot's contents
	 * @param name slot name
	 */
	clearSlot(name: string): void;

	/**
	 * Drops slot's contents on the specified coordinates and clears the 
	 * slot
	 * @param name slot name
	 */
	dropSlot(region: BlockSource, name: string, x: number, y: number, z: number): void;

	/**
	 * Drops the contents of all the slots in the container on the specified
	 * coordinates and clears them
	 */
	dropAt(region: BlockSource, x: number, y: number, z: number): void;

	/**
	 * Validates all the slots in the container
	 */
	validateAll(): void;

	 /**
	 * Sets "value" binding value for the element. Used to set scales values
	 * @param name element name
	 * @param value value to be set for the element
	 */
	setScale(name: string, value: number): void;

	/**
	 * @param name element name
	 * @returns "value" binding value, e.g. scale value, or null if no 
	 * element with specified name exist
	 */
	getValue(name: string): Nullable<number>;

	/**
	 * Sets "text" binding value for the element. Used to set element's text
	 * @param name element name
	 * @param value value to be set for the element
	 */
	setText(name: string, value: string | number): void;

	/**
	 * @param name element name
	 * @returns "text" binding value, usually the text displayed on the 
	 * element, or null if no element with specified name exist
	 */
	getText(name: string): Nullable<string>;

	setGlobalAddTransferPolicy(transferPolicy: TransferPolicy): void;

	setGlobalGetTransferPolicy(transferPolicy: TransferPolicy): void;

	setSlotAddTransferPolicy(slotName: string, transferPolicy: TransferPolicy): void;

	setSlotGetTransferPolicy(slotName: string, transferPolicy: TransferPolicy): void;
}

interface TransferPolicy {
	(container: ItemContainer, name: string, id: number, amount: number, data: number, extra: ItemExtraData, playerUid: number): number;
}