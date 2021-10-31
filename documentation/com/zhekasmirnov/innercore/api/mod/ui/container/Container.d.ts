declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module container {
                            export module Container {
                                export class OnCloseListener extends java.lang.Object {
                                    static class: java.lang.Class<OnCloseListener>;
                                    constructor();
                                    constructor(impl: { onClose(container: Container, win: window.IWindow): void });
                                    onClose(container: Container, win: window.IWindow): void;
                                }
                                export class OnOpenListener extends java.lang.Object {
                                    static class: java.lang.Class<OnOpenListener>;
                                    constructor();
                                    constructor(impl: { onOpen(container: Container, win: window.IWindow): void });
                                    onOpen(container: Container, win: window.IWindow): void;
                                }
                            }
                            /**
                             * @param container [[UI.Container]] the window was opened in
                             * @param window an instance of [[UI.IWindow]] that was opened
                             */
                            export interface OnOpenCloseListenerJS { (container: Container, window: window.IWindow): void; }
                            export class Container extends java.lang.Object implements UiAbstractContainer, recipes.workbench.WorkbenchField {
                                static class: java.lang.Class<Container>;
                                static readonly isContainer: boolean;
                                /**
                                 * If container is a part of [[TileEntity]], this field stores reference 
                                 * to it, otherwise null. You can also assign any value of any type to
                                 * it using [[UI.Container.setParent]] method or using constructor 
                                 * parameter. Consider using [[UI.Container.getParent]] instead of direct 
                                 * field access
                                 */
                                parent: Nullable<TileEntity> | any;
                                slots: {[slotName: string]: container.Slot}
                                /**
                                 * Same as [[UI.Container.parent]]
                                 */
                                tileEntity: Nullable<TileEntity> | any;
                                constructor();
                                constructor(parent: any);
                                /**
                                 * Sets container's parent object, for [[TileEntity]]'s container it 
                                 * should be a [[TileEntity]] reference, otherwise you can pass any 
                                 * value to be used in your code later
                                 * @param parent an object to be set as container's parent
                                 */
                                setParent(parent: Nullable<TileEntity> | any): void;
                                /**
                                 * Getter for [[UI.Container.parent]] field
                                 */
                                getParent(): Nullable<TileEntity> | any;
                                /**
                                 * Gets the slot by its name. If a slot with specified name doesn't 
                                 * exists, creates an empty one with specified name
                                 * @param name slot name
                                 * @returns contents of the slot in a [[UI.Slot]] object.
                                 * You can modify it to change the contents of the slot
                                 */
                                getSlot(name: string): Slot;
                                /**
                                 * Gets the slot by its name. If a slot with specified name doesn't 
                                 * exists, creates an empty one with specified name
                                 * @param name slot name
                                 * @returns contents of the slot in a FullSlot object containing 
                                 * more useful methods for slot manipulation
                                 */
                                getFullSlot(name: string): Slot;
                                getSlotVisualImpl(name: string): UiVisualSlotImpl;
                                handleInventoryToSlotTransaction(invSlot: number, slotName: string, amount: number): void;
                                handleSlotToSlotTransaction(from: string, to: string, amount: number): void;
                                handleSlotToInventoryTransaction(slotName: string, amount: number): void;
                                /**
                                 * Set slot's content by its name. If a slot with specified name doesn't 
                                 * exists, creates an empty one with specified name and item
                                 * @param name slot name
                                 */
                                setSlot(name: string, id: number, count: number, data: number): void;
                                /**
                                 * Set slot's content by its name. If a slot with specified name doesn't 
                                 * exists, creates new with specified name and item
                                 * @param name slot name
                                 * @param extra item extra value. Note that it should be an instance of
                                 * [[ItemExtraData]] and not its numeric id
                                 */
                                setSlot(name: string, id: number, count: number, data: number, extra: Nullable<NativeItemInstanceExtra>): void;
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
                                 * Drops slot's contents on the specified coordinates
                                 * and clears the slot
                                 * @param name slot name
                                 * @deprecated doesn't make sense in multiplayer
                                 */
                                dropSlot(name: string, x: number, y: number, z: number): void;
                                /**
                                 * Drops the contents of all the slots in the container on the specified
                                 * coordinates and clears them
                                 * @deprecated doesn't make sense in multiplayer
                                 */
                                dropAt(x: number, y: number, z: number): void;
                                /**
                                 * Validates all the slots in the container
                                 */
                                validateAll(): void;
                                /**
                                 * @returns currently opened [[UI.IWindow]]
                                 * or null if no window is currently opened in the container
                                 */
                                getWindow(): window.IWindow;
                                _addElement(element: elements.UIElement, name: string): void;
                                addElementInstance(element: elements.UIElement, name: string): void;
                                _removeElement(name: string): void;
                                /**
                                 * Opens [[UI.IWindow]] object in the container
                                 * @param win [[UI.IWindow]] object to be opened
                                 */
                                openAs(win: window.IWindow): void;
                                /**
                                 * Closes currently opened window 
                                 */
                                close(): void;
                                /**
                                 * Sets an object to be notified when the window is opened
                                 * @param listener object to be notified when the window is opened
                                 */
                                setOnOpenListener(listener: Container.OnOpenListener | OnOpenCloseListenerJS): void;
                                /**
                                 * Sets an object to be notified when the window is closed
                                 * @param listener object to be notified when the window is closed
                                 */
                                setOnCloseListener(listener: Container.OnCloseListener | OnOpenCloseListenerJS): void;
                                onWindowClosed(): void;
                                /**
                                 * @returns true, if some window is opened in the container
                                 */
                                isOpened(): boolean;
                                /**
                                 * Same as [[UI.Container.getWindow]]
                                 */
                                getGuiScreen(): window.IWindow;
                                /**
                                 * @returns window's content object (usually specified in the window's 
                                 * constructor) if a window was opened in the container, null otherwise
                                 */
                                getGuiContent(): Nullable<window.WindowContent>;
                                /**
                                 * @returns window's element by its name
                                 * @param name element name
                                 */
                                getElement(name: string): Nullable<elements.UIElement>;
                                /**
                                 * Passes any value to the element
                                 * @param elementName element name
                                 * @param bindingName binding name, you can access the value from the 
                                 * element by this name
                                 * @param val value to be passed to the element
                                 */
                                setBinding<T=any>(elementName: string, bindingName: string, val: T): void;
                                /**
                                 * Gets any value from the element
                                 * @param elementName element name
                                 * @param bindingName binding name, you can access the value from the 
                                 * element by this name. Some binding names are reserved for additional
                                 * element information, e.g. "element_obj" contains pointer to the
                                 * current object and "element_rect" contains android.graphics.Rect 
                                 * object containing drawing rectangle 
                                 * @returns value that was get from the element or null if the element 
                                 * doesn't exist
                                 */
                                getBinding<T=any>(elementName: string, bindingName: string): elements.UIElement | android.graphics.Rect | T | null;
                                handleBindingDirty(): void;
                                sendChanges(): void;
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
                                 * 
                                 * @param name element name
                                 * @returns "text" binding value, usually the text displayed on the 
                                 * element, or null if no element with specified name exist
                                 */
                                getText(name: string): Nullable<string>;
                                /**
                                 * @param name element name
                                 * @returns true if the element is currently touched
                                 */
                                isElementTouched(name: string): boolean;
                                /**
                                 * Forces ui elements of the window to refresh
                                 * @param onCurrentThread if true, the elements will be refreshed 
                                 * immediately, otherwise refresh event will be posted. Default value 
                                 * if false. Ensure you are in the UI thread if you pass true as the 
                                 * parameter
                                 */
                                invalidateUIElements(onCurrentThread: boolean): void;
                                invalidateUIElements(): void;
                                /**
                                 * Forces ui drawables of the window to refresh
                                 * @param onCurrentThread if true, the drawables will be refreshed 
                                 * immediately, otherwise refresh event will be posted. Default value 
                                 * if false. Ensure you are in the UI thread if you pass true as the 
                                 * parameter
                                 */
                                invalidateUIDrawing(onCurrentThread: boolean): void;
                                invalidateUIDrawing(): void;
                                /**
                                 * Forces ui elements and drawables of the window to refresh
                                 * @param onCurrentThread if true, the elements drawables will be refreshed 
                                 * immediately, otherwise refresh event will be posted. Default value 
                                 * if false. Ensure you are in the UI thread if you pass true as the 
                                 * parameter
                                 */
                                invalidateUI(onCurrentThread: boolean): void;
                                invalidateUI(): void;
                                /** @deprecated no longer supported */ refreshSlots(): void;
                                /** @deprecated no longer supported */ applyChanges(): void;
                                /**
                                 * If the container is a custom workbench, you can set the slot prefix
                                 * via this method call. [[UI.Container.getFieldSlot]]
                                 * will get field slot by *prefix + slot* name
                                 * @param prefix custom workbench slot prefix
                                 */
                                setWbSlotNamePrefix(wbsnp: string): void;
                                /**
                                 * @param slot slot index
                                 * @returns workbench slot instance by slot index
                                 */
                                getFieldSlot(i: number): Slot;
                                /**
                                 * @returns js array of all slots
                                 */
                                asScriptableField(): Slot[];
                                /**
                                 * @returns false if container supports multiplayer, true otherwise
                                 */
                                isLegacyContainer(): boolean;
                            }
                        }
                    }
                }
            }
        }
    }
}