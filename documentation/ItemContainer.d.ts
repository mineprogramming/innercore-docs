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

	setGlobalAddTransferPolicy(transferPolicy: TransferPolicy): void;

	setGlobalGetTransferPolicy(transferPolicy: TransferPolicy): void;

	setSlotAddTransferPolicy(slotName: string, transferPolicy: TransferPolicy): void;

	setSlotGetTransferPolicy(slotName: string, transferPolicy: TransferPolicy): void;
}

interface TransferPolicy {
	(container: ItemContainer, name: string, id: number, amount: number, data: number, extra: ItemExtraData, playerUid: number): number;
}

declare class ItemContainerSlot {
	id: number;
	count: number;
	data: number;
	extra: ItemExtraData;

	getName(): string;
	getContainer(): ItemContainer;
	setSlot(id: number, count: number, data: number, extra?: ItemExtraData): boolean;
	set(id: number, count: number, data: number, extra: ItemExtraData): boolean;
	dropAt(region: BlockSource, x: number, y: number, z: number): void;
	getId(): number;
	getCount(): number;
	getData(): number;
	getExtra(): ItemExtraData;
	isEmpty(): boolean;
	markDirty(): void;
	clear(): void;
	validate(): void;
}
