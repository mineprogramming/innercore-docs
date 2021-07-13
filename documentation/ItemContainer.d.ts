interface TransferPolicy {
	(container: ItemContainer, name: string, id: number, amount: number, data: number, extra: ItemExtraData, playerUid: number): number;
}

/**
 * New type of TileEntity container that supports multiplayer
 */
declare class ItemContainer {

	/**
	 * Constructs a new [[ItemContainer]] object
	 */
	constructor();

	/**
	 * Constructs a new [[ItemContainer]] object from given deprecated [[UI.Container]] object
	 */
	constructor(from: UI.Container);

	slots: {
		[key: string]: ItemContainerSlot;
	}

	/**
	 * If container is a part of [[TileEntity]], this field stores reference 
	 * to it, otherwise null. Consider using [[Container.getParent]] instead 
	 * of direct field access
	 */
	parent: Nullable<TileEntity> | any;

	/**
	 * @returns false if container supports multiplayer, true otherwise
	 */
	isLegacyContainer(): false;

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
	 * Sends changes in container to all clients.
	 * Needs to be used every time when something changes in container.
	 */
	sendChanges(): void;

	/**
	 * Sends packet from client container copy to server.
	 */
	sendEvent(eventName: string, someData: object | string): void;

	/**
	 * Sends packet from server container. 
	 * ONLY AVAILABLE IN SERVER CONTAINER EVENTS
	 */
	sendResponseEvent(eventName: string, someData: object | string): void;

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
	 * Opens UI for client
	 * @param client client in which UI will be open
	 * @param screenName name of the screen to open
	 */
	openFor(client: NetworkClient, screenName: string): void;

	/**
	 * Closes UI for client
	 * @param client client in which UI will be open
	 */
	closeFor(client: NetworkClient): void;

	/**
	 * Closes UI for all clients
	 */
	close(): void;

	/**
	 * Gets the slot by its name. If a slot with specified name doesn't 
	 * exists, creates an empty one with specified name
	 * @param name slot name
	 * @returns contents of the slot in a [[Slot]] object. You can modify it
	 * to change the contents of the slot
	 */
	getSlot(name: UI.ElementName): ItemContainerSlot;

	/**
	 * Set slot's content by its name. If a slot with specified name doesn't 
	 * exists, creates new with specified name and item
	 * @param name slot name
	 * @param extra item extra data.
	 */
	setSlot(name: UI.ElementName, id: number, count: number, data: number, extra?: ItemExtraData): void;

	/**
	 * Validates slot contents. If the data value is less then 0, it becomes
	 * 0, if id is 0 or count is less then or equals to zero, slot is reset 
	 * to an empty one
	 * @param name slot name
	 */
	validateSlot(name: UI.ElementName): void;

	/**
	 * Clears slot's contents
	 * @param name slot name
	 */
	clearSlot(name: UI.ElementName): void;

	/**
	 * Drops slot's contents on the specified coordinates and clears the 
	 * slot
	 * @param name slot name
	 */
	dropSlot(region: BlockSource, name: UI.ElementName, x: number, y: number, z: number): void;

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

	setClientContainerTypeName(name: string): void;

	getClientContainerTypeName(): string;

	setGlobalAddTransferPolicy(transferPolicy: TransferPolicy): void;

	setGlobalGetTransferPolicy(transferPolicy: TransferPolicy): void;

	setSlotAddTransferPolicy(slotName: string, transferPolicy: TransferPolicy): void;

	setSlotGetTransferPolicy(slotName: string, transferPolicy: TransferPolicy): void;

	addServerEventListener(name: string, listener: (container: ItemContainer, client: NetworkClient, data: object) => void): void;

	addServerOpenListener(listener: (container: ItemContainer, client: NetworkClient) => void): void;

	addServerCloseListener(listener: (container: ItemContainer, client: NetworkClient) => void): void;
	
	/**
	 * Handler for moving items from inventory to container slot.
	 * Can be used in custom slot click events.
	 * Works only with the CLIENT instance of [[ItemContainer]]
	 * @param from numeric index of the inventory slot where the transaction happened
	 * @param to string name of the container slot where the transaction happened
	 * @param count count of the items to be moved
	 */
	handleInventoryToSlotTransaction(from: number, to: string, count: number): void;

	/**
	 * Handler for moving items from container slot to inventory.
 	 * Can be used in custom slot click events.
	 * Works only with the CLIENT instance of [[ItemContainer]]
	 * @param from string name of the container slot where the transaction happened
	 * @param count count of the items to be moved 
	 */
	handleSlotToInventoryTransaction(from: string, count: number): void;
	

	static registerScreenFactory(name: string, screenFactory: (container: ItemContainer, name: string) => UI.Window): void;
}

declare class ItemContainerSlot {
	id: number;
	count: number;
	data: number;
	extra: ItemExtraData;

	/**
	 * @returns slot name
	 */
	getName(): string;
	/**
	 * @returns container linked to the slot
	 */
	getContainer(): ItemContainer;

	/**
	 * Sets the contents of the slot.
	 */
	setSlot(id: number, count: number, data: number, extra?: ItemExtraData): boolean;

	set(id: number, count: number, data: number, extra: ItemExtraData): boolean;

	/**
	 * Drops slot's content in world at specified coords
	 */
	dropAt(region: BlockSource, x: number, y: number, z: number): void;

	/**
	 * @returns item id
	 */
	getId(): number;

	/**
	 * @returns item count
	 */
	getCount(): number;

	/**
	 * @returns item data
	 */
	getData(): number;

	/**
	 * @returns item extra data
	 */
	getExtra(): ItemExtraData;
	/**
	 * @returns true if slot is empty
	 */
	isEmpty(): boolean;

	/**
	 * Resfreshes slot in UI
	 */
	markDirty(): void;

	/**
	 * Clears slot content
	 */
	clear(): void;

	/**
	 * Resets slot if its id or count equals 0
	 */
	validate(): void;
}
