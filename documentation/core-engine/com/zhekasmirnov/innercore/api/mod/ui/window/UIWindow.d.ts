declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module window {
                            /**
                             * Specifies contents and additional parameters for all types of windows
                             */
                            export interface WindowContent {
                                /**
                                 * Specifies window's location, used for
                                 * [[UI.Window]], [[UI.TabbedWindow]]
                                 * and [[UI.StandartWindow]]
                                 */
                                location?: WindowLocationDescription,
                                /**
                                 * If [[WindowContent.style]] is not specified, 
                                 * this argument will be used instead
                                 */
                                params?: types.BindingSet;
                                /**
                                 * Specifies window's style, an object containing keys as style binding 
                                 * names and values as gui texture names corresponding to the binding
                                 */
                                style?: types.BindingSet;
                                /**
                                 * Array of drawings
                                 */
                                drawing?: UI.DrawingSet;
                                /**
                                 * Object containing keys as gui elements names and [[UI.Elements]] 
                                 * instances as values. Gui elements are interactive components that are
                                 * used to create interfaces functionality
                                 */
                                elements?: UI.ElementSet;
                            }
                            export namespace StandardWindowDescriptionTypes {
                                export interface StandardWindowBackground {
                                    /**
                                     * If true, default window is created
                                     */
                                    standard?: boolean,
                                    /**
                                     * Background color integer value, produced by 
                                     * [[android.graphics.Color]] class. Default is white
                                     */
                                    color?: number,
                                    /**
                                     * Background bitmap texture name. If the bitmap size doesn't
                                     * match the screen size, bitmap will be stretched to fit
                                     */
                                    bitmap?: string,
                                    /**
                                     * Specifies window's frame parameters
                                     */
                                    frame?: {
                                        /**
                                         * Frame bitmap scale. Default value is 3
                                         */
                                        scale?: number,
                                        /**
                                         * Frame bitmap gui texture name. Defaults to *"frame"* 
                                         * style binding or, if not specified, to 
                                         * *"default_frame_8"* gui texture
                                         */
                                        bitmap?: string
                                    }
                                }
                                export interface StandardWindowHeaderText {
                                    /**
                                     * Specifies header text. Defaults to *"No Title"*
                                     */
                                    text?: string,
                                    /**
                                     * Specifies font params for the header text. Only 
                                     * [[size]], [[color]] and [[shadow]]
                                     * properties are used
                                     */
                                    font?: types.FontDescription,
                                    /**
                                     * If [[font]] is not specified, used as
                                     * [[size]] value
                                     */
                                    size?: number,
                                    /**
                                     * If [[font]] is not specified, used as
                                     * [[color]] value
                                     */
                                    color?: number,
                                    /**
                                     * If [[font]] is not specified, used as
                                     * [[shadow]] value
                                     */
                                    shadow?: number,
                                }
                                export interface StandardWindowHeader {
                                    /**
                                     * Specifies whether the header should have shadow or not. If 
                                     * true, the shadow is not displayed. Default is false
                                     */
                                    hideShadow?: boolean,
                                    /**
                                     * Specifies header height in units. Defaults to 80
                                     */
                                    height?: number,
                                    /**
                                     * If *height* is not specified, used to specify header height
                                     * in units
                                     */
                                    width?: number,
                                    /**
                                     * Frame bitmap gui texture name. Defaults to *"headerFrame"* 
                                     * style binding or, if not specified, to 
                                     * *"default_frame_7"* gui texture
                                     */
                                    frame?: string,
                                    /**
                                     * Header background color integer value, produced by 
                                     * [[android.graphics.Color]] class. Default is 
                                     * *Color.rgb(0x72, 0x6a, 0x70)*
                                     */
                                    color?: number,
                                    /**
                                     * Specifies header text styles and value
                                     */
                                    text?: StandardWindowHeaderText
                                    /**
                                     * If true, close button is not displayed. Default is false
                                     */
                                    hideButton?: boolean
                                }
                                export interface StandardWindowInventory {
                                    /**
                                     * Inventory width in units. Defaults to 300 units
                                     */
                                    width?: number,
                                    /**
                                     * Specifies additional padding for the inventory in units. 
                                     * Defaults to 20 units
                                     */
                                    padding?: number,
                                    /**
                                     * If true, default window is created
                                     */
                                    standard?: boolean
                                }
                                export interface StandardWindowParams {
                                    /**
                                     * Specifies minimum contents window height. If actual height is 
                                     * less then desired, scrolling is used
                                     */
                                    minHeight?: number,
                                    /**
                                     * Specifies background properties
                                     */
                                    background?: StandardWindowBackground;
                                    /**
                                     * Specifies additional parameters for standard window's header
                                     */
                                    header?: StandardWindowHeader
                                    /**
                                     * Specifies parameters for standard inventory window
                                     */
                                    inventory?: StandardWindowInventory
                                }
                            }
                            /**
                             * Extended [[WindowContent]] object with additional params for
                             * [[UI.StandartWindow]] and [[UI.StandardWindow]]
                             */                            
                            export interface StandardWindowContent extends WindowContent {
                                /**
                                 * Used for [[UI.StandartWindow]]s and [[UI.StandardWindow]]s.
                                 * Specifies additional parameters for standard windows
                                 */
                                standard?: StandardWindowDescriptionTypes.StandardWindowParams
                            }
                            export class UIWindow extends java.lang.Object implements IWindow {
                                static class: java.lang.Class<UIWindow>;
                                closeOnBackPressed: boolean;
                                content: WindowContent;
                                elementProvider: IElementProvider;
                                elementView: android.widget.ImageView;
                                isBackgroundDirty: boolean;
                                isForegroundDirty: boolean;
                                layout: android.view.ViewGroup;
                                location: UIWindowLocation;
                                updateWindowLocation(): void;
                                constructor(location: UIWindowLocation);
                                constructor(content: WindowContent);
                                /**
                                 * Opens window without container. It is usually mor
                                 */
                                open(): void;
                                /**
                                 * Adds another window as adjacent window, so that several windows open
                                 * at the same time. This allows to divide window into separate parts
                                 * and treat them separately. 
                                 * @param window another window to be added as adjacent
                                 */
                                addAdjacentWindow(window: UIWindow): void;
                                /**
                                 * Removes adjacent window from the adjacent windows list
                                 * @param window another window that was added as adjacent
                                 */
                                removeAdjacentWindow(window: UIWindow): void;
                                preOpen(): void;
                                postOpen(): void;
                                /**
                                 * Closes window without container. Use only if the window was opened 
                                 * without container
                                 */
                                close(): void;
                                /**
                                 * Called up to 66 times a second to update window's content
                                 * @param time current time in milliseconds
                                 */
                                frame(time: number): void;
                                /**
                                 * Forces ui elements of the window to refresh
                                 * @param onCurrentThread if true, the elements will be refreshed 
                                 * immediately, otherwise refresh event will be posted. Default value 
                                 * if false. Ensure you are in the UI thread if you pass true as the 
                                 * parameter
                                 */
                                invalidateElements(onCurrentThread: boolean): void;
                                /**
                                 * Forces ui drawables of the window to refresh
                                 * @param onCurrentThread if true, the drawables will be refreshed 
                                 * immediately, otherwise refresh event will be posted. Default value 
                                 * if false. Ensure you are in the UI thread if you pass true as the 
                                 * parameter
                                 */
                                invalidateDrawing(onCurrentThread: boolean): void;
                                /**
                                 * @returns true if the window is opened, false otherwise
                                 */
                                isOpened(): boolean;
                                postElementRefresh(): void;
                                postBackgroundRefresh(): void;
                                forceRefresh(): void;
                                /**
                                 * Specifies whether touch events should be handled by this window or 
                                 * passed to underlying windows (to the game). By default all windows 
                                 * are touchable
                                 * @param touchable pass true if the window should handle touch events, 
                                 * false otherwise
                                 */
                                setTouchable(touchable: boolean): void;
                                /**
                                 * @returns true if the window is touchable, false otherwise
                                 */
                                isTouchable(): boolean;
                                /**
                                 * @returns true if window blocks background
                                 */
                                isBlockingBackground(): boolean;
                                /**
                                 * Specifies whether the window should darken and block background. 
                                 * Default value is false
                                 * @param blockingBackground pass true if you want the window to block 
                                 * background
                                 */
                                setBlockingBackground(blockingBackground: boolean): void;
                                /**
                                 * @returns true if the window is game overlay, false otherwise
                                 */
                                isNotFocusable(): boolean;
                                /**
                                 * Allows window to be displayed as game overlay without blocking 
                                 * Minecraft sounds. Note that this drops window's FPS. Default value is
                                 * false
                                 * @param inGameOverlay if true, the window is opened in PopupWindow 
                                 * to avoid blocking Minecraft sounds
                                 */
                                setAsGameOverlay(inGameOverlay: boolean): void;
                                /**
                                 * Set background color of window
                                 * @param color integer color value (you can specify it using hex value)
                                 */
                                setBackgroundColor(color: number): void;
                                /**
                                 * @returns true if the window has an inventory that should be updated
                                 */
                                isInventoryNeeded(): boolean;
                                /**
                                 * @returns true if the window can change its contents position
                                 */
                                isDynamic(): boolean;
                                /**
                                 * Gets all the elements in the window
                                 * @returns [[java.util.HashMap]] containing string element names
                                 * as keys and element instances as values
                                 */
                                getElements(): java.util.HashMap<String, elements.UIElement>;
                                /**
                                 * @returns window's content object (usually specified in the window's 
                                 * constructor)
                                 */
                                getContent(): WindowContent;
                                /**
                                 * Specifies the content of the window
                                 * @param content content object to be applied to the window
                                 */
                                setContent(content: WindowContent): void;
                                /**
                                 * @param dynamic specify true, if the window contains dynamic 
                                 * (animated) elements, false otherwise. By default all windows are 
                                 * dynamic. Make them static for better performance
                                 */
                                setDynamic(dynamic: boolean): void;
                                /**
                                 * @param inventoryNeeded specify true if the window requires player's 
                                 * inventory. Default value is false
                                 */
                                setInventoryNeeded(inventoryNeeded: boolean): void;
                                invalidateBackground(): void;
                                invalidateForeground(): void;
                                /**
                                 * @returns window's current location object
                                 */
                                getLocation(): UIWindowLocation;
                                getElementProvider(): IElementProvider;
                                getBackgroundProvider(): IBackgroundProvider;
                                getContentProvider(): ContentProvider;
                                /**
                                 * @returns unit size (in pixel) in the window's bounds
                                 */
                                getScale(): number;
                                /**
                                 * @returns object containing current style of the window
                                 */
                                getStyle(): types.UIStyle;
                                /**
                                 * Overrides style properties of the current style by the values 
                                 * specified in the style parameter
                                 * @param style js object where keys represent binding names and values
                                 * represent texture gui names
                                 */
                                setStyle(style: types.BindingSet): void;
                                /**
                                 * Sets new style object as current window's style. If the new style is
                                 * a different object then an old one, forces window invalidation
                                 * @param style [[UI.Style]] object to be used as style for the window
                                 */
                                setStyle(style: types.UIStyle): void;
                                invalidateAllContent(): void;
                                /**
                                 * Gets custom property by its name. Custom properties can be used to
                                 * store some values containing window's current state. Note that these 
                                 * properties are not saved between Inner Core launches
                                 * @param name custom property name
                                 * @returns value set by [[UI.Window.putProperty]]
                                 * or null if no value was specified for this name
                                 */
                                getProperty<T>(name: string): T;
                                /**
                                 * Sets custom property value
                                 * @param name custom property name
                                 * @param value custom property value
                                 */
                                putProperty<T>(name: string, value: T): void;
                                /**
                                 * @returns [[UI.Container]]
                                 * that was used to open this window or null, if
                                 * the window wasn't opened in container
                                 */
                                getContainer(): Nullable<container.UiAbstractContainer>;
                                /**
                                 * Sets container for the current window. Be careful when calling it 
                                 * manually. You should prefer opening the window via 
                                 * [[UI.Container.openAs]] call
                                 * @param container [[UI.Container]]
                                 * to be associated with current window
                                 * or null to associate no container with current window
                                 */
                                setContainer(container: Nullable<container.UiAbstractContainer>): void;
                                /**
                                 * Turns debug mode for the window on and off
                                 * @param enabled if true, additional debug information will be drawn on
                                 * the window canvas
                                 */
                                setDebugEnabled(enabled: boolean): void;
                                /**
                                 * Sets any window as current window's parent. If current window closes,
                                 * parent window closes too
                                 * @param window window to be used as parent window for the current 
                                 * window
                                 */
                                setParentWindow(parent: IWindow): void;
                                /**
                                 * @returns current window's parent window
                                 */
                                getParentWindow(): Nullable<IWindow>;
                                /**
                                 * Sets listener to be notified about window opening/closing events
                                 */
                                setEventListener(listener: UI.WindowEventListener | IWindowEventListener): void;

                                runCachePreparation(async: boolean): void;
                                /**
                                 * Writes debug information about current window to the log
                                 */
                                debug(): void;
                                /**
                                 * Gives the property to be closed on pressing back navigation button to the given window
                                 */
                                setCloseOnBackPressed(val: boolean): void;
                                /**
                                 * @returns whether the window can be closed on pressing back navigation button
                                 */
                                onBackPressed(): boolean;
                            }
                        }
                    }
                }
            }
        }
    }
}