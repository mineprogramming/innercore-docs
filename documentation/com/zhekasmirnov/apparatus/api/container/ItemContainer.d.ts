declare module com {
    export module zhekasmirnov {
        export module apparatus {
            export module api {
                export module container {
                    type PrimitiveTypes = string | number | boolean;
                    type PacketData = {[key: string]: PrimitiveTypes};
                    export namespace ItemContainerFuncs {
                        export interface BindingValidator {
                            (container: ItemContainer, str: string, obj: any, time: number): any;
                        }
                        export interface ClientEventListener {
                            (container: ItemContainer, window: innercore.api.mod.ui.window.IWindow, scriptable: any, obj: any): void;
                        }
                        export interface ClientOnCloseListener {
                            (container: ItemContainer): void;
                        }
                        export interface ClientOnOpenListener {
                            (container: ItemContainer, str: string): void;
                        }
                        export interface DirtySlotListener {
                            (container: ItemContainer, str: string, slot: ItemContainerSlot): void;
                        }
                        export interface ServerEventListener {
                            (container: ItemContainer, client: NetworkClient, obj: any): void;
                        }
                        export interface ServerOnCloseListener {
                            (container: ItemContainer, client: NetworkClient): void;
                        }
                        export interface ServerOnOpenListener {
                            (container: ItemContainer, client: NetworkClient, str: string): void;
                        }
                        export interface Transaction {
                            (container: ItemContainer, str: string): void;
                        }
                        export interface TransferPolicy {
                            (container: ItemContainer, str: string, id: number, count: number, data: number, extra: Nullable<innercore.api.NativeItemInstanceExtra>, time: number): number;
                        }
                        export interface UiScreenFactory {
                            (container: ItemContainer, screen: string): innercore.api.mod.ui.window.IWindow;
                        }
                    }
                    export class ItemContainer extends java.lang.Object implements innercore.api.mod.recipes.workbench.WorkbenchField {
                        static class: java.lang.Class<ItemContainer>;
                        readonly isServer: boolean;
                        readonly slots: {[key: string]: ItemContainerSlot};
                        readonly transactionLock: any;
                        static loadClass(): void;
                        static registerScreenFactory(factoryName: string, factory: ItemContainerFuncs.UiScreenFactory): void;
                        static addClientEventListener(typeName: string, packetName: string, listener: ItemContainerFuncs.ClientEventListener): void;
                        static addClientOpenListener(typeName: string, listener: ItemContainerFuncs.ClientOnOpenListener): void;
                        static addClientCloseListener(typeName: string, listener: ItemContainerFuncs.ClientOnCloseListener): void;
                        static getClientContainerInstance(name: string): Nullable<ItemContainer>;
                        /**
                         * Constructs a new [[ItemContainer]] object
                         */
                        constructor();
                        /**
                         * Constructs a new [[ItemContainer]] object from given deprecated [[innercore.api.mod.ui.container.Container]] object
                         */
                        constructor(legacyContainer: innercore.api.mod.ui.container.Container);
                        getNetworkEntity(): NetworkEntity;
                        getNetworkName(): string;
                        getUiAdapter(): ItemContainerUiHandler;
                        getWindow(): innercore.api.mod.ui.window.IWindow;
                        getWindowContent(): innercore.api.mod.ui.window.WindowContent;
                        removeEntity(): void;
                        /**
                         * Sets container's parent object, for [[TileEntity]]'s container it 
                         * should be a [[TileEntity]] reference, otherwise you can pass any 
                         * value to be used in your code later
                         * @param parent an object to be set as container's parent
                         */
                        setParent(parent: Nullable<TileEntity> | any): void;
                        /**
                         * @returns [[TileEntity]] if the following container is part of it,
                         * and null otherwise
                         */
                        getParent(): Nullable<TileEntity> | any;

                        setGlobalAddTransferPolicy(policy: ItemContainerFuncs.TransferPolicy): ItemContainer;
                        setGlobalGetTransferPolicy(policy: ItemContainerFuncs.TransferPolicy): ItemContainer;
                        setSlotAddTransferPolicy(slotName: string, policy: ItemContainerFuncs.TransferPolicy): ItemContainer;
                        setSlotGetTransferPolicy(slotName: string, policy: ItemContainerFuncs.TransferPolicy): ItemContainer;
                        setGlobalDirtySlotListener(listener: ItemContainerFuncs.DirtySlotListener): ItemContainer;
                        setDirtySlotListener(listener: ItemContainerFuncs.DirtySlotListener): void;
                        sealSlot(slotName: string): void;
                        sealAllSlots(): void;
                        getAddTransferPolicy(slot: string): ItemContainerFuncs.TransferPolicy;
                        getGetTransferPolicy(slot: string): ItemContainerFuncs.TransferPolicy;
                        setGlobalBindingValidator(validator: ItemContainerFuncs.BindingValidator): void;
                        setBindingValidator(composedBindingName: string, validator: ItemContainerFuncs.BindingValidator): void;
                        getBindingValidator(composedBindingName: string): ItemContainerFuncs.BindingValidator;
                        runTransaction(transaction: ItemContainerFuncs.Transaction): void;
                        /**
                         * Gets the slot by its name. If a slot with specified name doesn't 
                         * exists, creates an empty one with specified name
                         * @param name slot name
                         * @returns contents of the slot in a [[ItemContainerSlot]] object.
                         * You can modify it to change the contents of the slot
                         */
                        getSlot(name: string): ItemContainerSlot;
                        /** @deprecated */ getFullSlot(name: string): ItemContainerSlot;
                        markSlotDirty(name: string): void;
                        markAllSlotsDirty(): void;
                        /**
                         * Sets slot's content by its name from given slot object. If a slot with specified
                         * name doesn't exist, a new slot with specified name and item will be created.
                         * @param name slot name
                         * @param slot [[ItemContainerSlot]] object to specify slot contents
                         */
                        setSlot(name: string, slot: ItemContainerSlot): void;
                        /**
                         * Set slot's content by its name. If a slot with specified name doesn't 
                         * exists, creates new with specified name and item
                         * @param name slot name
                         * @param extra item extra data.
                         */
                        setSlot(name: string, id: number, count: number, data: number): void;
                        setSlot(name: string, id: number, count: number, data: number, extra: Nullable<innercore.api.NativeItemInstanceExtra>): void;
                        addToSlot(name: string, id: number, count: number, data: number, extra: Nullable<innercore.api.NativeItemInstanceExtra>, player: number): number;
                        getFromSlot(name: string, id: number, count: number, data: number, extra: Nullable<innercore.api.NativeItemInstanceExtra>, player: number): number;
                        /**
                         * Sends changes in container to all clients.
                         * Needs to be used every time when something changes in container.
                         */
                        sendChanges(): void;
                        dropAt(region: BlockSource, x: number, y: number, z: number): void;
                        /**
                         * Validates all the slots in the container
                         */
                        validateAll(): void;
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
                         * Sends event to move specified amount of items from the player inventory slot by given index
                         * to container slot by given name. This event is sent from client to server,
                         * so you should use it only on the client side, for example, in custom slot element touch events etc.
                         * @param inventorySlot numeric index of the inventory slot, from where to retrieve the item
                         * @param slotName string name of the container slot, where to put taken item
                         * @param amount item count to be retrieved from inventory slot
                         * @clientside
                         */
                        sendInventoryToSlotTransaction(inventorySlot: number, slotName: string, amount: number): void;
                        handleInventoryToSlotTransaction(player: number, inventorySlot: number, slotName: string, amount: number): void;
                        /**
                         * Sends event to move specified amount of items from one container slot to another by given names.
                         * This event is sent from client to server, so you should use it only on the client side,
                         * for example, in custom slot element touch events etc.
                         * @param slot1 string name of the container slot, from where to retrieve item
                         * @param slot2 string name of the container slot, where to put taken item
                         * @param amount item count to be retrieved from container slot
                         * @clientside
                         */
                        sendSlotToSlotTransaction(slot1: string, slot2: string, amount: number): void;
                        handleSlotToSlotTransaction(player: number, slot1: string, slot2: string, amount: number): void;
                        /**
                         * Sends event to move specified amount of items from the container slot by given name
                         * to player's inventory. The index of the inventory slot, where to put item, can't be specified,
                         * because it's decided by [[ItemContainer]] automatically, and you just don't need to do this.
                         * This event is sent from client to server, so you should use it only on the client side,
                         * for example, in custom slot element touch events etc.
                         * @param slot string name of the container slot, from where to retrieve item
                         * @param amount item count to be retrieved from container slot
                         * @clientside
                         */
                        sendSlotToInventoryTransaction(slot: string, amount: number): void;
                        handleSlotToInventoryTransaction(player: number, slotName: string, inventorySlot: number, amount: number): void;
                        sendDirtyClientBinding(key: string, value: PrimitiveTypes): void;
                        handleDirtyBindingsPacket(client: NetworkClient, packet: org.json.JSONObject): void;
                        setBinding(composedBindingName: string, value: PrimitiveTypes): void;
                        setClientBinding(composedBindingName: string, value: PrimitiveTypes): void;
                        getBinding(composedBindingName: string): PrimitiveTypes;
                        setBinding(elementName: string, bindingName: string, value: PrimitiveTypes): void;
                        setClientBinding(elementName: string, bindingName: string, value: PrimitiveTypes): void;
                        getBinding(elementName: string, bindingName: string): PrimitiveTypes;
                        /**
                         * Sets "value" binding value for the element. Used to set scales values
                         * @param elementName element name
                         * @param value value to be set for the element
                         */
                        setScale(elementName: string, value: number): void;
                        setClientScale(elementName: string, value: number): void;
                        /**
                         * @param elementName element name
                         * @returns "value" binding value, e.g. scale value, or null if no 
                         * element with specified name exist
                         */
                        getValue(elementName: string, value: number): Nullable<number>;
                        /**
                         * Sets "text" binding value for the element. Used to set element's text
                         * @param elementName element name
                         * @param text value to be set for the element
                         */
                        setText(elementName: string, text: string | number): void;
                        setClientText(elementName: string, text: string): void;
                        /**
                         * @param elementName element name
                         * @returns "text" binding value, usually the text displayed on the 
                         * element, or null if no element with specified name exist
                         */
                        getText(elementName: string): Nullable<string>;
                        setClientContainerTypeName(type: string): void;
                        getClientContainerTypeName(): string;
                        addServerEventListener(name: string, listener: ItemContainerFuncs.ServerEventListener): void;
                        addServerOpenListener(listener: ItemContainerFuncs.ServerOnOpenListener): void;
                        addServerCloseListener(listener: ItemContainerFuncs.ServerOnCloseListener): void;
                        /**
                         * Sends packet from client container copy to server.
                         */
                        sendEvent(name: string, data: PacketData | string): void;
                        /**
                         * Sends packet from server container copy to client.
                         */
                        sendEvent(client: NetworkClient, name: string, data: PacketData | string): void;
                        /**
                         * Sends packet from server container. 
                         * ONLY AVAILABLE IN SERVER CONTAINER EVENTS
                         */
                        sendResponseEvent(name: string, data: PacketData | string): void;
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
                        sendClosed(): void;
                        setGlobalSlotSavingEnabled(enabled: boolean): void;
                        isGlobalSlotSavingEnabled(): boolean;
                        setSlotSavingEnabled(name: string, enabled: boolean): void;
                        resetSlotSavingEnabled(name: string): void;
                        isSlotSavingEnabled(name: string): boolean;
                        /**
                         * @returns false if container supports multiplayer, true otherwise.
                         * For [[ItemContainer]], it returns false
                         */
                        isLegacyContainer(): false;
                        asLegacyContainer(allSlots: boolean): innercore.api.mod.ui.container.Container;
                        asLegacyContainer(): innercore.api.mod.ui.container.Container;
                        setWorkbenchFieldPrefix(prefix: string): void;
                        getFieldSlot(index: number): innercore.api.mod.ui.container.AbstractSlot;
                        asScriptableField(): innercore.api.mod.ui.container.AbstractSlot[];
                    }
                }
            }
        }
    }
}