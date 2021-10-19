declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module window {
                            export class UIWindowGroup extends java.lang.Object implements IWindow {
                                static class: java.lang.Class<UIWindowGroup>;
                                closeOnBackPressed: boolean;
                                /**
                                 * Removes window from group by its name
                                 * @param name window name
                                 */
                                removeWindow(name: string): void;
                                /**
                                 * Adds window instance with specified name to the group
                                 * @param name window name
                                 * @param window window to be added to the group
                                 */
                                addWindowInstance(name: string, win: IWindow): void;
                                /**
                                 * Creates a new window using provided description and adds it to the 
                                 * group
                                 * @param name window name
                                 * @param content window description object
                                 * @returns created [[Window]] object
                                 */
                                addWindow(name: string, content: WindowContent): UIWindow;
                                /**
                                 * @param name window name
                                 * @returns window from the group by its name or null if no window with 
                                 * such a name was added
                                 */
                                getWindow(name: string): UIWindow;
                                /**
                                 * @param name window name
                                 * @returns window's description object if a window with specified name 
                                 * exists or null otherwise
                                 */
                                getWindowContent(name: string): Nullable<WindowContent>;
                                /**
                                 * Sets content for the window by its name
                                 * @param name window name
                                 * @param content content object
                                 */
                                setWindowContent(name: string, content: WindowContent): void;
                                /**
                                 * @returns [[java.util.Collection]] object containing all the
                                 * [[UI.Window]]s in the group
                                 */
                                getAllWindows(): java.util.Collection<UIWindow>;
                                /**
                                 * @returns [[java.util.Collection]] object containing string names of the 
                                 * windows in the group
                                 */
                                getWindowNames(): java.util.Collection<string>;
                                /**
                                 * Forces window refresh by its name
                                 * @param name name of the window to refresh
                                 */
                                refreshWindow(name: string): void;
                                /**
                                 * Forces refresh for all windows
                                 */
                                refreshAll(): void;
                                /**
                                 * Moves window with specified name to the top of the group
                                 * @param name window name
                                 */
                                moveOnTop(name: string): void;
                                /**
                                 * Opens window without container. It is usually mor
                                 */
                                open(): void;
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
                                 * @returns true if the window is opened, false otherwise
                                 */
                                isOpened(): boolean;
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
                                 * @returns [[java.util.HashMap]] containing string element name
                                 * as keys and element instances as values
                                 */
                                getElements(): java.util.HashMap<string, elements.UIElement>;
                                /** @returns null for [[UIWindowGroup]] */
                                getContent(): Nullable<WindowContent>;
                                /**
                                 * @returns [[UI.Container]]
                                 * that was used to open this window or null, if the window wasn't opened in container
                                 */
                                getContainer(): Nullable<container.UiAbstractContainer>;
                                /**
                                 * Sets container for the current window. Be careful when calling it 
                                 * manually. You should prefer opening the window via 
                                 * [[UI.Container.openAs]] call
                                 * @param container [[UI.Container]]
                                 * to be associated with current window or null to associate no container with current window
                                 */
                                setContainer(con: Nullable<container.UiAbstractContainer>): void;
                                /**
                                 * Turns debug mode for the window on and off
                                 * @param enabled if true, additional debug information will be drawn on
                                 * the window canvas
                                 */
                                setDebugEnabled(debug: boolean): void;
                                invalidateAllContent(): void;
                                setStyle(style: types.UIStyle): void;
                                setStyle(style: types.BindingSet): void;
                                /**
                                 * @returns object containing current style of the window
                                 */
                                getStyle(): types.UIStyle;
                                setBlockingBackground(bb: boolean): void;
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
                                 * Gives the property to be closed on pressing back navigation button to the given window group
                                 */
                                setCloseOnBackPressed(val: boolean): void;
                                /**
                                 * @returns whether the window group can be closed on pressing back navigation button
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