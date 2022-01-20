declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module window {
                            export interface TabbedWindowContent extends WindowContent {
                                isButtonHidden?: boolean
                            }
                            export class UITabbedWindow extends java.lang.Object implements IWindow {
                                static class: java.lang.Class<UITabbedWindow>;
                                closeOnBackPressed: boolean;
                                currentTab: number;
                                /**
                                 * Sets window location (bounds) to draw window within
                                 * @param location location to be used for the tabbed window
                                 */
                                setLocation(location: UIWindowLocation): void;
                                /**
                                 * @returns tab content window width in units
                                 */
                                getInnerWindowWidth(): number;
                                /**
                                 * @returns tab content window height in units
                                 */
                                getInnerWindowHeight(): number;
                                /**
                                 * @returns tab selector window width in units
                                 */
                                getWindowTabSize(): number;
                                /**
                                 * @returns tab selector window width in global units
                                 */
                                getGlobalTabSize(): number;
                                /**
                                 * Constructs new [[UI.TabbedWindow]] with specified location
                                 * @param loc location to be used for the tabbed window
                                 */
                                constructor(loc: UIWindowLocation);
                                /**
                                 * Constructs new [[UI.TabbedWindow]] with specified content
                                 * @param content object containing window description
                                 */
                                constructor(content: TabbedWindowContent);
                                /**
                                 * Sets content of the tab
                                 * @param index index of the tab. There are 12 tabs available, from 0 to
                                 * 11. The location of the tabs is as follows:
                                 * ```
                                 * 0    6
                                 * 1    7
                                 * 2    8
                                 * 3    9
                                 * 4    10
                                 * 5    11
                                 * ```
                                 * @param tabOverlay content of the tab selector
                                 * @param tabContent content of the window to be created for the tab
                                 * @param isAlwaysSelected if true, tab is always displayed as selected.
                                 * Default value is false
                                 */
                                setTab(index: number, tabOverlay: UI.ElementSet, tabContent: WindowContent, isAlwaysSelected: boolean): void;
                                setTab(index: number, tabOverlay: UI.ElementSet, tabContent: WindowContent): void;
                                /**
                                 * Creates fake tab with no content
                                 * @param index index of the tab, see [[TabbedWindow.setTab]] for 
                                 * details
                                 * @param tabOverlay content of the tab selector
                                 */
                                setFakeTab(index: number, tabOverlay: UI.ElementSet): void;
                                /**
                                 * @param index index of the tab
                                 * @returns [[UI.Window]] instance
                                 * created for the specified tab or null if
                                 * no window was created for specified window
                                 */
                                getWindowForTab(index: number): Nullable<UIWindow>;
                                open(): void;
                                close(): void;
                                frame(time: number): void;
                                invalidateElements(onCurrentThread: boolean): void;
                                invalidateDrawing(onCurrentThread: boolean): void;
                                isOpened(): boolean;
                                isInventoryNeeded(): boolean;
                                isDynamic(): boolean;
                                getElements(): java.util.HashMap<string, elements.UIElement>;
                                getContent(): Nullable<TabbedWindowContent>;
                                getContainer(): Nullable<container.UiAbstractContainer>;
                                setContainer(con: container.UiAbstractContainer): void;
                                setDebugEnabled(debug: boolean): void;
                                setEventListener(listener: IWindowEventListener): void;
                                setTabEventListener(index: number, listener: IWindowEventListener): void;
                                onTabSelected(index: number): void;
                                /**
                                 * Specifies whether the window should darken and block background. 
                                 * Default value is false
                                 * @param b pass true if you want the window to block 
                                 * background
                                 */
                                setBlockingBackground(b: boolean): void;
                                /**
                                 * @returns current default tab index. If no default tab was specified 
                                 * via [[UI.TabbedWindow.setDefaultTab]],
                                 * the first tab added becomes default
                                 */
                                getDefaultTab(): number;
                                /**
                                 * Sets default tab index
                                 * @param tab index of the tab to be opened by default
                                 */
                                setDefaultTab(tab: number): void;
                                /**
                                 * Sets new style object as current window's style. If the new style is
                                 * a different object then an old one, forces window invalidation
                                 * @param style [[UI.Style]] object to be used as style for the window
                                 */
                                setStyle(style: types.UIStyle): void;
                                /**
                                 * Overrides style properties of the current style by the values 
                                 * specified in the style parameter
                                 * @param style js object where keys represent binding names and values
                                 * represent texture gui names
                                 */
                                setStyle(style: types.BindingSet): void;
                                getStyle(): Nullable<types.UIStyle>;
                                getStyleSafe(): types.UIStyle;
                                setCloseOnBackPressed(cobp: boolean): void;
                                onBackPressed(): boolean;
                            }
                        }
                    }
                }
            }
        }
    }
}