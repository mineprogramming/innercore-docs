declare namespace UI {
	type ElementName = string | number | symbol;

	/**
	 * Containers are used to properly manipulate windows and save slots 
	 * contents and windows state between window opens. Every [[TileEntity]] has 
	 * a built-in container that can be accessed as [[TileEntity.container]]
	 * @deprecated
	 */
	class Container implements Recipes.WorkbenchField {
		/**
		 * Creates a new instance of [[Container]]
		 */
		constructor();

		/**
		 * Creates a new instance of [[Container]] and initializes its parent. 
		 * See [[Container.setParent]] for details
		 */
		constructor(parent: Nullable<TileEntity> | any);


		/**
		 * If container is a part of [[TileEntity]], this field stores reference 
		 * to it, otherwise null. You can also assign any value of any type to
		 * it using [[Container.setParent]] method or using constructor 
		 * parameter. Consider using [[Container.getParent]] instead of direct 
		 * field access
		 */
		parent: Nullable<TileEntity> | any;

		/**
		 * Same as [[Container.parent]]
		 */
		tileEntity: Nullable<TileEntity> | any;

		slots: {
			[key: string]: Slot;
		}

		/**
		 * @returns false if container supports multiplayer, true otherwise
		 */
		isLegacyContainer(): true;

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
		getSlot(name: ElementName): Slot;

		/**
		 * Gets the slot by its name. If a slot with specified name doesn't 
		 * exists, creates an empty one with specified name
		 * @param name slot name
		 * @returns contents of the slot in a [[FullSlot]] object containing 
		 * more useful methods for slot manipulation
		 */
		getFullSlot(name: ElementName): FullSlot;

		/**
		 * Set slot's content by its name. If a slot with specified name doesn't 
		 * exists, creates an empty one with specified name and item
		 * @param name slot name
		 */
		setSlot(name: ElementName, id: number, count: number, data: number): void;

		/**
		 * Set slot's content by its name. If a slot with specified name doesn't 
		 * exists, creates new with specified name and item
		 * @param name slot name
		 * @param extra item extra value. Note that it should be an instance of
		 * ItemExtraData and not its numeric id
		 */
		setSlot(name: ElementName, id: number, count: number, data: number, extra: ItemExtraData): void;

		/**
		 * Validates slot contents. If the data value is less then 0, it becomes
		 * 0, if id is 0 or count is less then or equals to zero, slot is reset 
		 * to an empty one
		 * @param name slot name
		 */
		validateSlot(name: ElementName): void;

		/**
		 * Clears slot's contents
		 * @param name slot name
		 */
		clearSlot(name: ElementName): void;

		/**
		 * Drops slot's contents on the specified coordinates and clears the 
		 * slot
		 * @param name slot name
		 */
		dropSlot(name: ElementName, x: number, y: number, z: number): void;

		/**
		 * Drops the contents of all the slots in the container on the specified
		 * coordinates and clears them
		 */
		dropAt(x: number, y: number, z: number): void;

		/**
		 * Validates all the slots in the container
		 */
		validateAll(): void;

		/**
		 * @returns currently opened [[IWindow]] or null if no window is currently 
		 * opened in the container
		 */
		getWindow(): Nullable<IWindow>;

		/**
		 * Opens [[IWindow]] object in the container
		 * @param window [[IWindow]] object to be opened
		 */
		openAs(window: IWindow): void;

		/**
		 * Closes currently opened window 
		 */
		close(): void;

		/**
		 * Sets an object to be notified when the window is closed
		 * @param listener object to be notified when the window is closed
		 */
		setOnCloseListener(listener: {
			/**
			 * @param container [[Container]] the window was opened in
			 * @param window an instance of [[IWindow]] that was opened
			 */
			onClose: (container: Container, window: IWindow) => void
		}): void;

		/**
		 * @returns true, if some window is opened in the container
		 */
		isOpened(): boolean;

		/**
		 * Same as [[Container.getWindow]]
		 */
		getGuiScreen(): Nullable<IWindow>;

		/**
		 * @returns window's content object (usually specified in the window's 
		 * constructor) if a window was opened in the container, null otherwise
		 */
		getGuiContent(): Nullable<WindowContent>;

		/**
		 * @returns window's element by its name
		 * @param name element name
		 */
		getElement(name: ElementName): Element;

		/**
		 * Passes any value to the element
		 * @param elementName element name
		 * @param bindingName binding name, you can access the value from the 
		 * element by this name
		 * @param value value to be passed to the element
		 */
		setBinding(elementName: ElementName, bindingName: string, value: any): void;

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
		getBinding(elementName: ElementName, bindingName: string): any;

		/**
		 * Sets "value" binding value for the element. Used to set scales values
		 * @param name element name
		 * @param value value to be set for the element
		 */
		setScale(name: ElementName, value: number): void;

		/**
		 * @param name element name
		 * @returns "value" binding value, e.g. scale value, or null if no 
		 * element with specified name exist
		 */
		getValue(name: ElementName): Nullable<number>;

		/**
		 * Sets "text" binding value for the element. Used to set element's text
		 * @param name element name
		 * @param value value to be set for the element
		 */
		setText(name: ElementName, value: string): void;

		/**
		 * 
		 * @param name element name
		 * @returns "text" binding value, usually the text displayed on the 
		 * element, or null if no element with specified name exist
		 */
		getText(name: ElementName): Nullable<string>;

		/**
		 * @param name element name
		 * @returns true if the element is currently touched
		 */
		isElementTouched(name: ElementName): boolean;

		/**
		 * Forces ui elements of the window to refresh
		 * @param onCurrentThread if true, the elements will be refreshed 
		 * immediately, otherwise refresh event will be posted. Default value 
		 * if false. Ensure you are in the UI thread if you pass true as the 
		 * parameter
		 */
		invalidateUIElements(onCurrentThread?: boolean): void;

		/**
		 * Forces ui drawables of the window to refresh
		 * @param onCurrentThread if true, the drawables will be refreshed 
		 * immediately, otherwise refresh event will be posted. Default value 
		 * if false. Ensure you are in the UI thread if you pass true as the 
		 * parameter
		 */
		invalidateUIDrawing(onCurrentThread?: boolean): void;

		/**
		 * Forces ui elements and drawables of the window to refresh
		 * @param onCurrentThread if true, the elements drawables will be refreshed 
		 * immediately, otherwise refresh event will be posted. Default value 
		 * if false. Ensure you are in the UI thread if you pass true as the 
		 * parameter
		 */
		invalidateUI(onCurrentThread?: boolean): void;

		/**
		 * @deprecated No longer supported
		 */
		refreshSlots(): void;

		/**
		 * @deprecated No longer supported
		 */
		applyChanges(): void;

		/**
		 * If the container is a custom workbench, you can set the slot prefix
		 * via this method call. [[Container.getFieldSlot]] will get field slot
		 * by *prefix + slot* name
		 * @param prefix custom workbench slot prefix
		 */
		setWbSlotNamePrefix(prefix: string): void;

		/**
		 * @param slot slot index
		 * @returns workbench slot instance by slot index
		 */
		getFieldSlot(slot: number): UI.Slot;

		/**
		 * @returns js array of all slots
		 */
		asScriptableField(): UI.Slot[];
	}


	interface IWindow {
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
		 * @returns java.util.HashMap containing string element name as keys and
		 * [[Element]] instances as values
		 */
		getElements(): java.util.HashMap<string, Element>;

		/**
		 * @returns window's content object (usually specified in the window's 
		 * constructor)
		 */
		getContent(): WindowContent;

		/**
		 * @returns object containing current style of the window
		 */
		getStyle(): Style;

		/**
		 * @returns [[Container]] that was used to open this window or null, if
		 * the window wasn't opened in container
		 */
		getContainer(): Nullable<Container>;

		/**
		 * Sets container for the current window. Be careful when calling it 
		 * manually. You should prefer opening the window via 
		 * [[Container.openAs]] call
		 * @param container [[Container]] to be associated with current window
		 * or null to associate no container with current window
		 */
		setContainer(container: Nullable<Container>): void;

		/**
		 * Turns debug mode for the window on and off
		 * @param enabled if true, additional debug information will be drawn on
		 * the window canvas
		 */
		setDebugEnabled(enabled: boolean): void;

		/**
		 * @returns whether the window can be closed on pressing back navigation button
		 */
		onBackPressed(): boolean;
	}


	/**
	 * Represents window of required size that can be opened in container to 
	 * provide any required UI facilities
	 */
	class Window implements IWindow {

		/**
		 * Constructs new [[Window]] object with specified bounds
		 * @param location object containing window's bounds. Note that the 
		 * bounds change the width of the window, but the full width of the 
		 * window becomes 1000 units.
		 */
		constructor(location: UI.WindowLocation);

		/**
		 * Constructs new [[Window]] object with specified content
		 * @param content window's content
		 */
		constructor(content: WindowContent);

		/**
		 * Constructs new empty [[Window]] object
		 */
		constructor();

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
		addAdjacentWindow(window: UI.Window): void;

		/**
		 * Removes adjacent window from the adjacent windows list
		 * @param window another window that was added as adjacent
		 */
		removeAdjacentWindow(window: UI.Window): void;

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
		 * @returns java.util.HashMap containing string element name as keys and
		 * [[Element]] instances as values
		 */
		getElements(): java.util.HashMap<string, Element>;

		/**
		 * @returns window's content object (usually specified in the window's 
		 * constructor)
		 */
		getContent(): WindowContent;

		/**
		 * @returns object containing current style of the window
		 */
		getStyle(): Style;

		/**
		 * @returns [[Container]] that was used to open this window or null, if
		 * the window wasn't opened in container
		 */
		getContainer(): Nullable<Container>;

		/**
		 * Sets container for the current window. Be careful when calling it 
		 * manually. You should prefer opening the window via 
		 * [[Container.openAs]] call
		 * @param container [[Container]] to be associated with current window
		 * or null to associate no container with current window
		 */
		setContainer(container: Nullable<Container>): void;

		/**
		 * Turns debug mode for the window on and off
		 * @param enabled if true, additional debug information will be drawn on
		 * the window canvas
		 */
		setDebugEnabled(enabled: boolean): void;

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
		 * Specifies whether the window should darken and block background. 
		 * Default value is false
		 * @param blockingBackground pass true if you want the window to block 
		 * background
		 */
		setBlockingBackground(blockingBackground: boolean): void;

		/**
		 * @returns true if window blocks background
		 */
		isBlockingBackground(): boolean;

		/**
		 * Allows window to be displayed as game overlay without blocking 
		 * Minecraft sounds. Note that this drops window's FPS. Default value is
		 * false
		 * @param inGameOverlay if true, the window is opened in PopupWindow 
		 * to avoid blocking Minecraft sounds
		 */
		setAsGameOverlay(inGameOverlay: boolean): void;

		/**
		 * @returns true if the window is game overlay, false otherwise
		 */
		isNotFocusable(): boolean;

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

		/**
		 * @returns window's current location object
		 */
		getLocation(): WindowLocation;

		/**
		 * @returns unit size (in pixel) in the window's bounds
		 */
		getScale(): number;

		/**
		 * Overrides style properties of the current style by the values 
		 * specified in the style parameter
		 * @param style js object where keys represent binding names and values
		 * represent texture gui names
		 */
		setStyle(style: BindingsSet): void;

		/**
		 * Sets new style object as current window's style. If the new style is
		 * a different object then an old one, forces window invalidation
		 * @param style [[Style]] object to be used as style for the window
		 */
		setStyle(style: Style): void;

		/**
		 * Gets custom property by its name. Custom properties can be used to
		 * store some values containing window's current state. Note that these 
		 * properties are not saved between Inner Core launches
		 * @param name custom property name
		 * @returns value set by [[Window.putProperty]] or null if no value was
		 * specified for this name
		 */
		getProperty(name: string): Nullable<any>;

		/**
		 * Sets custom property value
		 * @param name custom property name
		 * @param value custom property value
		 */
		putProperty(name: string, value: any): void;

		/**
		 * Sets any window as current window's parent. If current window closes,
		 * parent window closes too
		 * @param window window to be used as parent window for the current 
		 * window
		 */
		setParentWindow(window: IWindow): void;

		/**
		 * @returns current window's parent window
		 */
		getParentWindow(): IWindow;

		/**
		 * Sets listener to be notified about window opening/closing events
		 */
		setEventListener(listener: WindowEventListener): void;

		/**
		 * Writes debug information about current window to the log
		 */
		debug(): void;

		/**
		 * @returns whether the window can be closed on pressing back navigation button
		 */
		onBackPressed(): boolean;

		/**
		 * Gives the property to be closed on pressing back navigation button to the given window
		 */
		setCloseOnBackPressed(val: boolean): void;


		/**
		 * Set background color of window
		 * @param color integer color value (you can specify it using hex value)
		 */
		setBackgroundColor(color: number): void;

		updateScrollDimensions(): void;

		updateWindowPositionAndSize(): void;
	}


	/**
	 * Class representing several windows opened at the same. For example, 
	 * [[StandartWindow]] is a window group that consists of several separate
	 * windows
	 */
	class WindowGroup implements IWindow {
		/**
		 * Constructs new [[WindowGroup]] instance
		 */
		constructor();

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
		addWindowInstance(name: string, window: Window): void;

		/**
		 * Creates a new window using provided description and adds it to the 
		 * group
		 * @param name window name
		 * @param content window description object
		 * @returns created [[Window]] object
		 */
		addWindow(name: string, content: WindowContent): Window;

		/**
		 * @param name window name
		 * @returns window from the group by its name or null if no window with 
		 * such a name was added
		 */
		getWindow(name: string): Nullable<Window>;

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
		 * @returns java.util.Collection object containing all the [[Window]]s 
		 * in the group
		 */
		getAllWindows(): java.util.Collection<Window>;

		/**
		 * @returns java.util.Collection object containing string names of the 
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
		 * @returns java.util.HashMap containing string element name as keys and
		 * [[Element]] instances as values
		 */
		getElements(): java.util.HashMap<string, Element>;

		/**
		 * @returns window's content object (usually specified in the window's 
		 * constructor)
		 */
		getContent(): WindowContent;

		/**
		 * @returns object containing current style of the window
		 */
		getStyle(): Style;

		/**
		 * @returns [[Container]] that was used to open this window or null, if
		 * the window wasn't opened in container
		 */
		getContainer(): Nullable<Container>;

		/**
		 * Sets container for the current window. Be careful when calling it 
		 * manually. You should prefer opening the window via 
		 * [[Container.openAs]] call
		 * @param container [[Container]] to be associated with current window
		 * or null to associate no container with current window
		 */
		setContainer(container: Nullable<Container>): void;

		/**
		 * Turns debug mode for the window on and off
		 * @param enabled if true, additional debug information will be drawn on
		 * the window canvas
		 */
		setDebugEnabled(enabled: boolean): void;

		/**
		 * @returns whether the window group can be closed on pressing back navigation button
		 */
		onBackPressed(): boolean;

		/**
		 * Gives the property to be closed on pressing back navigation button to the given window group
		 */
		setCloseOnBackPressed(val: boolean): void;
	}


	/**
	 * Class used to create standard ui for the mod's machines. 
	 * [[StandardWindow]] is a [[WindowGroup]] that has three windows with names
	 * *"main"*, *"inventory"* and *"header"*. They represent custom window 
	 * contents, player's inventory and window's header respectively
	 */
	class StandardWindow extends WindowGroup {
		/**
		 * Constructs new [[StandardWindow]] with specified content. 
		 * Content is applied to the main window, header and inventory remain
		 * the same
		 * @param content object containing window description
		 */
		constructor(content: WindowContent);
	}

	/**
	 * Deprecated, use StandardWindow
	 */
	class StandartWindow extends WindowGroup {
		/**
		 * Constructs new [[StandartWindow]] with specified content. 
		 * Content is applied to the main window, header and inventory remain
		 * the same
		 * @param content object containing window description
		 */
		constructor(content: WindowContent);

		content: WindowContent;
	}


	// class AdaptiveWindow extends WindowGroup {
	//     /**
	//      * Constructs a new empty [[AdaptiveWindow]]
	//      */
	//     constructor();

	//     /**
	//      * Constructs new [[AdaptiveWindow]] with specified content
	//      * @param content object containing window description
	//      */
	//     constructor(content: WindowContent);

	//     /**
	//      * Sets style profile for the current [[AdaptiveWindow]]
	//      * @param profile 0 for classic profile, 1 for default profile
	//      */
	//     setProfile(profile: number): void;

	//     /**
	//      * Forces [[AdaptiveWindow]] to be displayed using some profile
	//      * @param profile 0 for classic profile, 1 for default profile or -1 not
	//      * to force any profile. By default forced profile is -1
	//      */
	//     setForcedProfile(profile: number): void;
	// }


	/**
	 * Class used to create windows with multiple tabs
	 */
	class TabbedWindow extends WindowGroup {
		/**
		 * Constructs new [[TabbedWindow]] with specified location
		 * @param location location to be used for the tabbed window
		 */
		constructor(location: WindowLocation);

		/**
		 * Constructs new [[TabbedWindow]] with specified content
		 * @param content object containing window description
		 */
		constructor(content: WindowContent);

		/**
		 * Sets window location (bounds) to draw window within
		 * @param location location to be used for the tabbed window
		 */
		setLocation(location: WindowLocation): void;

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
		setTab(index: number, tabOverlay: ElementSet, tabContent: WindowContent, isAlwaysSelected?: boolean): void;

		/**
		 * Creates fake tab with no content
		 * @param index index of the tab, see [[TabbedWindow.setTab]] for 
		 * details
		 * @param tabOverlay content of the tab selector
		 */
		setFakeTab(index: number, tabOverlay: ElementSet): void;

		/**
		 * @param index index of the tab
		 * @returns [[Window]] instance created for the specified tab or null if
		 * no window was created for specified window
		 */
		getWindowForTab(index: number): Nullable<Window>;

		/**
		 * Specifies whether the window should darken and block background. 
		 * Default value is false
		 * @param blockingBackground pass true if you want the window to block 
		 * background
		 */
		setBlockingBackground(blockingBackground: boolean): void;

		/**
		 * @returns current default tab index. If no default tab was specified 
		 * via [[TabbedWindow.setDefaultTab]], the first tab added becomes 
		 * default
		 */
		getDefaultTab(): number;

		/**
		 * Sets default tab index
		 * @param tab index of the tab to be opened by default
		 */
		setDefaultTab(tab: number): number;

		/**
		 * Overrides style properties of the current style by the values 
		 * specified in the style parameter
		 * @param style js object where keys represent binding names and values
		 * represent texture gui names
		 */
		setStyle(style: BindingsSet): void;

		/**
		 * Sets new style object as current window's style. If the new style is
		 * a different object then an old one, forces window invalidation
		 * @param style [[Style]] object to be used as style for the window
		 */
		setStyle(style: Style): void;
	}


	/**
	 * Class representing font used in the UI
	 */
	class Font {
		/**
		 * Aligns text to the start of the element (left for English locale)
		 */
		static ALIGN_DEFAULT: number;

		/**
		 * Aligns text to the center of the element
		 */
		static ALIGN_CENTER: number;

		/**
		 * Aligns text to the end of the element (right for English locale)
		 */
		static ALIGN_END: number;

		/**
		 * Aligns text to the center of the element horizontally
		 */
		static ALIGN_CENTER_HORIZONTAL: number;

		/**
		 * Constructs new instance of the font with specified parameters
		 * @param color font color, android integer color value (produced by
		 * android.graphics.Color)
		 * @param size font size
		 * @param shadow shadow offset
		 */
		constructor(color: number, size: number, shadow: number);

		/**
		 * Constructs new instance of the font with specified parameters
		 * @param params parameters of the font
		 */
		constructor(params: FontParams);

		/**
		 * Draws text on the canvas using created font
		 * @param canvas android.graphics.Canvas instance to draw the text on
		 * @param x x coordinate of the text in pixels
		 * @param y x coordinate of the text in pixels
		 * @param text text string to draw
		 * @param scale additional scale to apply to the text
		 */
		drawText(canvas: android.graphics.Canvas, x: number, y: number, text: string, scale: number): void;

		/**
		 * Calculates bounds of the text given text position, text string and 
		 * additional scale
		 * @returns android.graphics.Rect object containing calculated bounds of 
		 * the text
		 */
		getBounds(text: string, x: number, y: number, scale: number): android.graphics.Rect;

		/**
		 * Calculates text width given text string and additional scale
		 * @returns width of the specified string when painted with specified 
		 * scale
		 */
		getTextWidth(text: string, scale: number): number;

		/**
		 * Calculates text height given text string and additional scale
		 * @returns height of the specified string when painted with specified 
		 * scale
		 */
		getTextHeight(text: string, scale: number): number;

		/**
		 * Converts current [[Font]] object to scriptable font description
		 */
		asScriptable(): FontParams;

		/**
		 * Sets listener to be notified about window opening/closing events
		 */
		setEventListener(listener: WindowEventListener): void;

		/**
		 * Sets listener to be notified about tab with specified index
		 * opening/closing events
		 * @param tab tab index
		 * @param listener object to be notified about the events
		 */
		setTabEventListener(tab: number, listener: WindowEventListener): void;
	}


	/**
	 * Object used to handle windows opening and closing events
	 */
	interface WindowEventListener {
		/**
		 * Called when the window is opened
		 * @param window current [[Window]] object
		 */
		onOpen: (window: Window) => void,
		/**
		 * Called when the window is closed
		 * @param window current [[Window]] object
		 */
		onClose: (window: Window) => void
	}


	/**
	 * Class used to visualize configuration file contents in a simple way
	 */
	class ConfigVisualizer {
		/**
		 * Constructs new [[ConfigVisualizer]] instance with default elements 
		 * names prefix (*config_vis*)
		 * @param config configuration file to be loaded
		 */
		constructor(config: Config);

		/**
		 * Constructs new [[ConfigVisualizer]] instance with specified elements 
		 * names prefix
		 * @param config configuration file to be loaded
		 * @param prefix elements names prefix used for this visualizer
		 */
		constructor(config: Config, prefix: string);

		/**
		 * Removes all elements with current element name prefix. In other 
		 * words, removes all elements that were created by this 
		 * [[ConfigVisualizer]] instance
		 * @param elements target [[WindowContent.elements]] section
		 */
		clearVisualContent(elements: ElementSet): void;

		/**
		 * Creates elements in the window to visualize configuration file
		 * @param elements target [[WindowContent.elements]] section
		 * @param pos top left position of the first element. Default position 
		 * is (0, 0, 0)
		 */
		createVisualContent(elements: ElementSet, pos?: { x?: number, y?: number, z?: number }): void;
	}


	/**
	 * Namespace containing method to get [[FrameTexture]] instances
	 */
	namespace FrameTextureSource {
		/**
		 * 
		 * @param name gui texture name of the frame
		 */
		function get(name: string): FrameTexture;
	}


	/**
	 * Object used to manipulate frame textures. Frame texture allows to 
	 */
	interface FrameTexture {
		/**
		 * Expands side of the texture by specified amount of pixels
		 * @param side side of the texture, one of the 
		 * [[FrameTexture.SIDE_LEFT]], [[FrameTexture.SIDE_RIGHT]], 
		 * [[FrameTexture.SIDE_UP]], [[FrameTexture.SIDE_DOWN]] constants
		 * @returns expanded android.graphics.Bitmap instance with the frame
		 */
		expandSide(side: number, pixels: number): android.graphics.Bitmap;

		/**
		 * Expands texture to the specified side, filling the middle with 
		 * specified color
		 * @param color integer color value produced by android.graphics.Color 
		 * class
		 * @param sides array of booleans marking whether the side should be 
		 * expanded or not. The order of the sides is
		 * [[FrameTexture.SIDE_LEFT]], [[FrameTexture.SIDE_RIGHT]], 
		 * [[FrameTexture.SIDE_UP]], [[FrameTexture.SIDE_DOWN]]
		 * @returns expanded android.graphics.Bitmap instance with the frame
		 */
		expand(width: number, height: number, color: number, sides: native.Array<boolean>): android.graphics.Bitmap;

		/**
		 * Expands texture to the specified side, filling the middle with 
		 * specified color
		 * @param scale scale of the created bitmap
		 * @param color integer color value produced by android.graphics.Color 
		 * class
		 * @param sides array of booleans marking whether the side should be 
		 * expanded or not. See FrameTexture.expand parameters for details. 
		 * Default behavior is to scale all sides
		 * @returns expanded and scaled android.graphics.Bitmap instance with
		 */
		expandAndScale(width: number, height: number, scale: number, color: number, sides?: native.Array<boolean>): android.graphics.Bitmap;

		/**
		 * @returns original frame texture source stored in 
		 * android.graphics.Bitmap instance
		 */
		getSource(): android.graphics.Bitmap;

		/**
		 * @param side side of the texture, one of the 
		 * [[FrameTexture.SIDE_LEFT]], [[FrameTexture.SIDE_RIGHT]], 
		 * [[FrameTexture.SIDE_UP]], [[FrameTexture.SIDE_DOWN]] constants
		 * @returns texture side source extracted from the original frame 
		 * texture source stored in android.graphics.Bitmap instance
		 */
		getSideSource(side: number): android.graphics.Bitmap;

		/**
		 * @returns android.graphics.Color integer color value of the central
		 * pixel of the source texture
		 */
		getCentralColor(): number;
	}

	/**
	 * Namespace containing methods used to get and add gui textures
	 */
	namespace TextureSource {
		/**
		 * @param name gui texture name
		 * @returns android.graphics.Bitmap instance with the ui texture, if it 
		 * was loaded, with "*missing_texture*" texture otherwise
		 */
		function get(name: string): android.graphics.Bitmap;

		/**
		 * 
		 * @param name gui texture name
		 * @returns android.graphics.Bitmap instance with the ui texture, if it 
		 * was loaded, null otherwise
		 */
		function getNullable(name: string): android.graphics.Bitmap | null;

		/**
		 * Adds any bitmap as a gui texture with specified name
		 * @param name gui texture name
		 * @param bitmap android.graphics.Bitmap instance to be used as
		 * gui texture
		 */
		function put(name: string, bitmap: android.graphics.Bitmap): void;
	}

	namespace FrameTexture {
		/**
		 * Specifies left side of the frame
		 */
		const SIDE_LEFT: number;

		/**
		 * Specifies right side of the frame
		 */
		const SIDE_RIGHT: number;

		/**
		 * Specifies top side of the frame
		 */
		const SIDE_UP: number;

		/**
		 * Specifies bottom side of the frame
		 */
		const SIDE_DOWN: number;
	}

	/**
	 * Same as [[UI.getScreenHeight]]
	 */
	function getScreenRelativeHeight(): number;

	/**
	 * @returns screen height in units
	 */
	function getScreenHeight(): number;

	/**
	 * @returns current android.app.Activity instance that can be used as 
	 * android.content.Context wherever required
	 */
	function getContext(): android.app.Activity;

	/**
	 * Object containing font parameters. If no color, size and shadow are 
	 * specified, default values are ignored and white font with text size 20,
	 * white color and 0.45 shadow is created
	 */
	interface FontParams {

		/**
		 * Font color, android integer color value (produced by
		 * android.graphics.Color). Default value is black
		 */
		color?: number,

		/**
		 * Font size. Default value is 20
		 */
		size?: number,

		/**
		 * Font shadow offset. Default value is 0, witch produces no shadow
		 */
		shadow?: number,

		/**
		 * Font alignment, one of the [[Font.ALIGN_DEFAULT]],
		 * [[Font.ALIGN_CENTER]], [[Font.ALIGN_END]] constants
		 */
		alignment?: number,

		/**
		 * Same as [[FontParams.alignment]]
		 */
		align?: number,

		/**
		 * If true, the font is bold, false otherwise. Default value is false
		 */
		bold?: boolean,

		/**
		 * If true, the font is italic, false otherwise. Default value is false
		 */
		cursive?: boolean,

		/**
		 * If true, the font is underlined, false otherwise. Default value is false
		 */
		underline?: boolean
	}


	/**
	 * Object representing window location used in window content object and 
	 * [[WindowLocation]] constructor
	 */
	interface WindowLocationParams {
		/**
		 * X coordinate of the window in units, 0 by default
		 */
		x?: number,

		/**
		 * Y coordinate of the window in units, 0 by default
		 */
		y?: number,

		/**
		 * Width of the window in units, by default calculated to match right
		 * screen bound
		 */
		width?: number,

		/**
		 * Height of the window in units, by default calculated to match bottom
		 * screen bound
		 */
		height?: number,

		/**
		 * Paddings are distances from the window bounds to the elements in the
		 * window
		 */
		padding?: {
			top?: number,
			bottom?: number,
			left?: number,
			right?: number
		},

		/**
		 * Defines scrollable window size along the X axis
		 */
		scrollX?: number,

		/**
		 * Defines scrollable window size along the Y axis
		 */
		scrollY?: number,
	}


	/**
	 * Class representing window's location. All coordinates are defined in 
	 * units (given screen's width is 1000 units)
	 */
	class WindowLocation {
		/**
		 * Constructs new [[WindowLocation]] instance with default position and 
		 * size (fullscreen window)
		 */
		constructor();

		/**
		 * Constructs new [[WindowLocation]] instance with specified parameters
		 * @param params 
		 */
		constructor(params: WindowLocationParams);

		/**
		 * Sets scrollable window size. Should be greater then window 
		 * width/height for the changes to take effect
		 * @param x scrollable window size along the X axis
		 * @param y scrollable window size along the Y axis
		 */
		setScroll(x: number, y: number): void;

		/**
		 * Sets the size of the window 
		 * @param x window's width
		 * @param y window's height
		 */
		setSize(x: number, y: number): void;

		/**
		 * @returns window location as a js object. Note that paddings are not 
		 * included into the object
		 */
		asScriptable(): WindowLocationParams;

		/**
		 * Creates a copy of current [[WindowLocation]] object
		 * @returns newly created copy of the object
		 */
		copy(): WindowLocation;

		/**
		 * Sets window location parameters
		 * @param x X coordinate of the window
		 * @param y Y coordinate of the window
		 * @param width width of the window
		 * @param height height of the window
		 */
		set(x: number, y: number, width: number, height: number): void;

		/**
		 * Sets window location parameters from another [[WindowLocation]]. 
		 * Note that paddings are not copied
		 * instance
		 * @param location another [[WindowLocation]] instance to copy 
		 * parameters from
		 */
		set(location: WindowLocation): void;

		/**
		 * Sets window's scroll size to the windows size to remove scroll
		 */
		removeScroll(): void;

		/**
		 * Constant used to represent top padding
		 */
		PADDING_TOP: number;

		/**
		 * Constant used to represent bottom padding
		 */
		PADDING_BOTTOM: number;

		/**
		 * Constant used to represent left padding
		 */
		PADDING_LEFT: number;

		/**
		 * Constant used to represent right padding
		 */
		PADDING_RIGHT: number;

		/**
		 * Window width
		 */
		width: number;

		/**
		 * Height of window
		 */
		height: number;

		/**
		 * Scale of window
		 */
		scale: number;

		/**
		 * Horizontal window scroll
		 */
		scrollX: number;

		/**
		 * Vertical window scroll
		 */
		scrollY: number;

		/**
		 * Window horizontal position
		 */
		x: number;

		/**
		 * Window vertical position
		 */
		y: number;

		/**
		 * Window position on layers
		 */
		zIndex: number;

		/**
		 * Sets padding of the window
		 * @param padding one of the [[WindowLocation.PADDING_TOP]], 
		 * [[WindowLocation.PADDING_BOTTOM]], [[WindowLocation.PADDING_LEFT]],
		 * [[WindowLocation.PADDING_RIGHT]] constants
		 * @param value value of the padding to be assigned to appropriate 
		 * window bound
		 */
		setPadding(padding: number, value: number): void;

		/**
		 * Sets the four paddings of the window for the appropriate bounds
		 */
		setPadding(top: number, bottom: number, left: number, right: number): void;

		/**
		 * @returns unit size (in pixels) in the fullscreen context (*screen width / 1000*)
		 */
		getScale(): number;

		/**
		 * @returns unit size (in pixels) in the window's bounds
		 */
		getDrawingScale(): number;

		/**
		 * @returns window's rectangle in the android.graphics.Rect object
		 */
		getRect(): android.graphics.Rect;

		/**
		 * Sets window's Z index. Z index determines how the window will be 
		 * displayed when several windows are open
		 * @param z window Z index
		 */
		setZ(z: number): void;

		/**
		 * @returns window's width in units (always 1000 by definition of the 
		 * unit)
		 */
		getWindowWidth(): number;

		/**
		 * @returns window's height in units
		 */
		getWindowHeight(): number;

		/**
		 * Transforms dimension in fullscreen units to the dimension within
		 * window's bounds
		 * @param val value to be transformed
		 */
		globalToWindow(val: number): number;

		/**
		 * Transforms dimension within window's bounds to the dimension in 
		 * fullscreen units
		 * @param val value to be transformed
		 */
		windowToGlobal(val: number): number;
	}


	/**
	 * Class representing static or animated texture
	 */
	class Texture {
		/**
		 * Constructs new static [[Texture]] with specified bitmap
		 * @param bitmap android.graphics.Bitmap instance
		 */
		constructor(bitmap: android.graphics.Bitmap);

		/**
		 * Constructs new animated [[Texture]] with specified frames
		 * @param bitmaps an array of android.graphics.Bitmap instances to be 
		 * used as animation frames
		 */
		constructor(bitmaps: native.Array<android.graphics.Bitmap>);

		/**
		 * Constructs new static or animated [[Texture]] with specified frames
		 * @param obj texture name or array of texture names for animated 
		 * textures. Accepts raw gui textures names and style bindings
		 * (formatted as "style:binding_name"). 
		 * @param style [[Style]] object to look for style bindings. If not 
		 * specified, default style is used
		 */
		constructor(obj: string | string[], style?: Style);

		/**
		 * Sets texture offsets in pixels from the upper left bound of the 
		 * bitmap
		 */
		readOffset(offset: { x: number, y: number }): void;

		/**
		 * @returns frame number of the animation corresponding to current 
		 * system time
		 */
		getFrame(): number;

		/**
		 * @param frame frame number
		 * @returns android.graphics.bitmap object containing animation frame 
		 * for the corresponding frame number
		 */
		getBitmap(frame: number): android.graphics.Bitmap;

		/**
		 * @returns width of the texture in pixels
		 */
		getWidth(): number;

		/**
		 * @returns height of the texture in pixels
		 */
		getHeight(): number;

		/**
		 * Resizes all the frames of the texture to the specified size
		 * @param x 
		 * @param y 
		 */
		resizeAll(x: number, y: number): void;

		/**
		 * Resizes all the frames by constant scale multiplier
		 * @param scale scale to modify the frames by
		 */
		rescaleAll(scale: number): void;

		/**
		 * Resizes all the frames to match the first one
		 */
		fitAllToOneSize(): void;

		/**
		 * Releases all allocated resources, should be called when the texture 
		 * is not longer needed 
		 */
		release(): void;
	}


	/**
	 * Object representing window's slot
	 */
	interface Slot {
		id: number,
		count: number,
		data: number,
		extra: ItemExtraData
	}

	/**
	 * Java object representing window's slot with some additional useful 
	 * methods
	 */
	interface FullSlot extends Slot {
		/**
		 * Sets the contents of the slot. Extra value is null by default
		 */
		set(id: number, count: number, data: number): void,

		/**
		 * Sets the contents of the slot with extra value
		 * @param extra item extra value. Note that it should be an instance of
		 * ItemExtraData and not its numeric id
		 */
		set(id: number, count: number, data: number, extra: ItemExtraData): void,

		/**
		 * Puts any property to the js object that is wrapped by [[FullSlot]] 
		 * java object
		 * @param name property name
		 * @param property property value
		 */
		put(name: string, value: any): void,

		/**
		 * Gets integer value from the js object by its name
		 * @param name property name
		 * @returns property value or -1 if no value was provided
		 */
		getInt(name: string): number,

		/**
		 * Validates slot contents. If the data value is less then 0, it becomes
		 * 0, if id is 0 or count is less then or equals to zero, slot is reset 
		 * to an empty one
		 */
		validate(): void,

		/**
		 * Drops slot's contents on the specified coordinates and clears the 
		 * slot
		 */
		drop(x: number, y: number, z: number): void,

		/**
		 * @returns underlying Slot instance
		 */
		getTarget(): Slot,

		/**
		 * @returns item id
		 */
		getId(): number,

		/**
		 * @returns item count
		 */
		getCount(): number,

		/**
		 * @returns item data value
		 */
		getData(): number,

		/**
		 * @returns item extra's numeric id
		 */
		getExtraValue(): number,

		/**
		 * @returns item extra object
		 */
		getExtra(): ItemExtraData,

		/**
		 * @returns new [[FullSlot]] instance created from the current one
		 */
		save(): FullSlot
	}

	interface Element {
		/**
		 * Creates a new [[Texture]] instance with specified [[Style]] applied.
		 * See [[Texture.constructor]] for parameters description
		 */
		createTexture(texture: android.graphics.Bitmap | string | string[]): Texture;

		/**
		 * Sets element's position in the window's unit coordinates
		 * @param x x position
		 * @param y y position
		 */
		setPosition(x: number, y: number): void;

		/**
		 * Sets element's size in the window's unit coordinates
		 * @param width element's width 
		 * @param height element's height
		 */
		setSize(width: number, height: number): void;

		/**
		 * Passes any value to the element
		 * @param bindingName binding name, you can access the value from the 
		 * element by this name
		 * @param value value to be passed to the element
		 */
		setBinding(bindingName: string, value: any): void;

		/**
		 * Gets any value from the element
		 * @param bindingName binding name, you can access the value from the 
		 * element by this name. Some binding names are reserved for additional
		 * element information, e.g. "element_obj" contains pointer to the
		 * current object and "element_rect" contains android.graphics.Rect 
		 * object containing drawing rectangle 
		 * @returns value that was get from the element or null if the element 
		 * doesn't exist
		 */
		getBinding(bindingName: string): any;

	}

	/**
	 * Object representing window style. Window styles allows to customize the 
	 * way your windows look like
	 */
	interface Style {
		/**
		 * Default windows style
		 */
		DEFAULT: UI.Style,

		/**
		 * Classic (0.16.*-like) windows style
		 */
		CLASSIC: UI.Style

		/**
		 * Adds gui texture name to use for the specified window part
		 * @param name binding name
		 * @param value gui texture name
		 */
		addBinding(name: string, value: string): void;

		/**
		 * Gets texture binding bt its name. Searches first in the additional 
		 * styles, then in the current style, then in all its parents
		 * @param name binding name
		 * @param fallback value to return on binding failure
		 * @returns gui texture name if current object, additional styles or one 
		 * of the parents contains such a binding name, fallback otherwise. 
		 */
		getBinding(name: string, fallback: string): string;

		/**
		 * Adds an additional style object to the current style
		 * @param style additional style object to be added
		 */
		addStyle(style: UI.Style): void;

		/**
		 * @returns a copy of the current style. Only style bindings of the 
		 * current style are copied, no parent/additional styles are copied
		 */
		copy(): UI.Style;

		/**
		 * Specifies parent style object for the current style
		 * @param style style to be set as parent
		 */
		inherit(style: UI.Style): void;

		/**
		 * Adds all values from the js object as bindings
		 * @param style js object where keys represent binding names and values
		 * represent texture gui names
		 */
		addAllBindings(style: BindingsSet): void;

		/**
		 * @returns java.util.Collection<String> containing all binding names
		 * from the current style object
		 */
		getAllBindingNames(): java.util.Collection<string>;

		/**
		 * If name is a style value (starts with "style:"), returns 
		 * corresponding gui texture name, else returns input string
		 * @param name style value or bitmap name
		 */
		getBitmapName(name: string): string;
	}

	/**
	 * Specifies contents and additional parameters for all types of windows
	 */
	interface WindowContent {
		/**
		 * Specifies window's location, used for [[Window]], [[TabbedWindow]]
		 * and [[StandartWindow]]
		 */
		location?: WindowLocationParams,

		/**
		 * Specifies window's style, an object containing keys as style binding 
		 * names and values as gui texture names corresponding to the binding
		 */
		style?: BindingsSet,

		/**
		 * If [[WindowContent.style]] is not specified, this argument is used 
		 * instead
		 */
		params?: BindingsSet,

		/**
		 * Used for [[StandartWindow]]s. Specifies additional parameters for 
		 * standard windows
		 */
		standard?: {
			/**
			 * Specifies minimum contents window height. If actual height is 
			 * less then desired, scrolling is used
			 */
			minHeight?: number,
			 
			/**
			 * Specifies background properties
			 */
			background?: {
				/**
				 * If true, default window is created
				 */
				standard?: boolean,

				/**
				 * Background color integer value, produced by 
				 * android.graphics.Color class. Default is white
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

			/**
			 * Specifies additional parameters for standard window's header
			 */
			header?: {
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
				 * android.graphics.Color class. Default is 
				 * *Color.rgb(0x72, 0x6a, 0x70)*
				 */
				color?: number,

				/**
				 * Specifies header text styles and value
				 */
				text?: {
					/**
					 * Specifies header text. Defaults to *"No Title"*
					 */
					text?: string,

					/**
					 * Specifies font params for the header text. Only 
					 * [[FontParams.size]], [[FontParams.color]] and
					 * [[FontParams.shadow]] properties are used
					 */
					font?: FontParams,

					/**
					 * If [[font]] is not specified, used as [[FontParams.size]]
					 * value
					 */
					size?: number,

					/**
					 * If [[font]] is not specified, used as [[FontParams.color]]
					 * value
					 */
					color?: number,

					/**
					 * If [[font]] is not specified, used as [[FontParams.shadow]]
					 * value
					 */
					shadow?: number
				},

				/**
				 * If true, close button is not displayed. Defaults to false
				 */
				hideButton?: boolean
			},

			/**
			 * Specifies parameters for standard inventory window
			 */
			inventory?: {
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
		}

		/**
		 * Array of drawings
		 */
		drawing?: DrawingSet,

		/**
		 * Object containing keys as gui elements names and [[UIElement]] 
		 * instances as values. Gui elements are interactive components that are
		 * used to create interfaces functionality
		 */
		elements: ElementSet,
	}

	interface ColorDrawing {
		type: "background" | "color",

		color: number,

		mode?: android.graphics.PorterDuff.Mode,

		/**
		 * @deprecated
		 */
		colorMode?: android.graphics.PorterDuff.Mode
	}

	interface CustomDrawing {
		type: "custom",

		onDraw?: (canvas: android.graphics.Canvas, scale: number) => void,

		[key: string]: any
	}

	interface FrameDrawing {
		type: "frame",

		x: number,

		y: number,

		bitmap: string

		sides?: boolean[],

		scale?: number,

		width?: number,

		height?: number,

		color?: number,

		/**
		 * @deprecated
		 */
		bg?: number
	}

	interface ImageDrawing {
		type: "bitmap",

		x: number,

		y: number,

		bitmap: string,

		width?: number,

		height?: number,

		scale?: number
	}

	interface LineDrawing {
		type: "line",

		x1: number,

		y1: number,

		x2: number,

		y2: number,

		color?: number,

		width?: number
	}

	interface TextDrawing {
		type: "text",

		x: number,

		y: number,

		text: string,

		font?: FontParams
	}


	interface UIElement {
		x: number,

		y: number,

		z?: number,

		clicker?: UIClickEvent
	}

	interface UICustomElement extends UIElement {
		type: "custom",

		onSetup?: (element: Element) => void,

		onDraw?: (element: Element, canvas: android.graphics.Canvas, scale: number) => void,

		onTouchReleased?: (element: Element) => void,

		onBindingUpdated?: (element: Element, name: string, value: any) => void,

		onReset?: (element: Element) => void,

		onRelease?: (element: Element) => void,

		onContainerInit?: (element: Element, container: Container, elementName: string) => void,

		[key: string]: any
	}

	interface UIButtonElement extends UIElement {
		type: "button",

		bitmap?: string,

		bitmap2?: string,

		scale?: number
	}

	interface UICloseButtonElement extends UIElement {
		type: "close_button" | "closeButton",

		bitmap?: string,

		bitmap2?: string,

		scale?: number
	}

	interface UIFrameElement extends UIElement {
		type: "frame",

		bitmap?: string,

		width?: number,

		height?: number,

		scale?: number,

		color?: number,

		sides?: boolean[]
	}

	interface UIImageElement extends UIElement {
		type: "image",

		width?: number,

		height?: number,

		scale?: number,

		bitmap?: string,

		overlay?: string
	}

	interface UIScaleElement extends UIElement {
		type: "scale",

		scale?: number,

		direction?: number,

		invert?: boolean,

		pixelate?: boolean,

		value?: number,

		bitmap?: string,

		width?: number,

		height?: number,

		background?: string,

		overlay?: string,

		backgroundOffset?: { x?: number, y?: number },

		overlayOffset?: { x?: number, y?: number }
	}

	interface UIScrollElement extends UIElement {
		type: "scroll",

		isInt?: boolean,

		width?: number,

		height?: number,

		length?: number,

		min?: number,

		max?: number,

		divider?: number,

		bindingObject?: any,

		bindingProperty?: string

		configValue?: Config.ConfigValue,

		bitmapHandle?: string,

		bitmapHandleHover?: string,

		bitmapBg?: string,

		bitmapBgHover?: string,

		ratio?: number,

		onNewValue?: (value: number, container: Container, element: Element) => void
	}

	interface UISlotElement extends UIElement {
		type: "slot",

		bitmap?: string,

		size?: number,

		maxStackSize?: number,

		visual?: boolean,

		darken?: boolean,

		isDarkenAtZero?: boolean,

		iconScale?: number,

		disablePixelPerfect?: boolean,

		text?: string,

		/**
		 * @deprecated
		 */
		isTransparentBackground?: boolean,

		onItemChanged?: (container: Container, oldId: number, oldData: number, oldCount: number) => void,

		isValid?: (id: number, count: number, data: number, container: Container, item: ItemInstance) => boolean
	}

	interface UISwitchElement extends UIElement {
		type: "switch",

		bindingObject?: any,

		bindingProperty?: string,

		configValue?: Config.ConfigValue,

		bitmapOn?: string,

		bitmapOnHover?: string,

		bitmapOff?: string,

		bitmapOffHover?: string,

		scale?: number,

		onNewState?: (value: number, container: Container, element: Element) => void
	}

	interface UITabElement extends UIElement {
		type: "tab"

		selectedColor?: number,

		deselectedColor?: number,

		tabIndex?: number,

		isAlwaysSelected?: boolean,

		isSelected?: boolean,

		bitmap?: string,

		width?: number,

		height?: number,

		scale?: number,

		color?: number,

		sides?: boolean[]
	}

	interface UITextElement extends UIElement{
		type: "text",

		text: string

		font?: FontParams,

		multiline?: boolean,

		format?: boolean,

		maxCharsPerLine?: number,

		width?: number,

		height?: number
	}

	interface UIFPSTextElement extends UIElement {
		type: "fps",

		interpolate?: boolean,

		period?: number,

		font?: FontParams,

		multiline?: boolean,

		format?: boolean,

		maxCharsPerLine?: number
	}

	interface UIInvSlotElement extends UIElement {
		type: "invSlot" | "invslot",

		index?: number

		size?: number,

		darken?: boolean,

		isDarkenAtZero?: boolean,

		text?: string,

		onItemChanged?: (container: Container, oldId: number, oldData: number, oldCount: number) => void
	}


	interface UIClickEvent {
		onClick?(position: Vector, container: Container | ItemContainer, tileEntity: TileEntity, window: UI.Window, canvas: android.graphics.Canvas, scale: number): void;
		onLongClick?(position: Vector, container: Container | ItemContainer, tileEntity: TileEntity, window: UI.Window, canvas: android.graphics.Canvas, scale: number): void;
	}


	/**
	 * Object containing ui elements with key as the name and value as the 
	 * [[UIElement]] instance to be used
	 */
	type Elements = (
		UICustomElement
		| UIButtonElement
		| UICloseButtonElement
		| UIFrameElement
		| UIImageElement
		| UIScaleElement
		| UIScrollElement
		| UISlotElement
		| UISwitchElement
		| UITabElement
		| UITextElement
		| UIFPSTextElement
		| UIInvSlotElement
	);

	type DrawingElements = (
		ColorDrawing
		| CustomDrawing
		| FrameDrawing
		| ImageDrawing
		| LineDrawing
		| TextDrawing
	);
	interface ElementSet {
		[key: string]: Elements;
	}

	type DrawingSet = DrawingElements[];

	/**
	 * Object containing binding names as keys and string values as gui textures
	 * names
	 */
	interface BindingsSet {
		[key: string]: string
	}
}