/**
 * Module used to manipulate crafting recipes for vanilla and custom workbenches
 */
declare namespace Recipes {
    /**
     * Adds new shaped crafting recipe. For example:
     * 
     * Simple example:
     * 
     * ```ts
     * Recipes.addShaped({id: 264, count: 1, data: 0}, [
     *     "ax", 
     *     "xa", 
     *     "ax"
     * ], ['x', 265, 0, 'a', 266, 0]); 
     * ```
     * 
     * @param result recipe result item
     * @param mask recipe shape, up to three string corresponding to the three 
     * crafting field rows. Each character means one item in the field. 
     * E.g. the pickaxe recipe should look like this:
     * 
     * ```
     * "+++"
     * " | "
     * " | "
     * ```
     * 
     * Do not use empty lines or line endings, if the recipe can be placed 
     * within less then three rows or cols. E.g. to craft plates, you can use 
     * a shape like this: 
     * 
     * ```
     * "--"
     * ```
     * 
     * @param data an array explaining the meaning of each character within 
     * mask. The array should contain three values for each symbol: the symbol
     * itself, item id and item data. 
     * @param func function to be called when the craft is processed
     * @param prefix recipe prefix. Use a non-empty values to register recipes
     * for custom workbenches
     */
    function addShaped(result: ItemInstance, mask: string[], data: (string | number)[], func?: CraftingFunction, prefix?: string): void;

    /**
     * Same as [[Recipes.addShaped]], but you can specify result as three
     * separate values corresponding to id, count and data
     */
    function addShaped2(id: number, count: number, aux: number, mask: string[], data: (string | number)[], func?: CraftingFunction, prefix?: string): void;

    /**
     * Adds new shapeless crafting recipe. For example: 
     * 
     * ```ts
     * Recipes.addShapeless({id: 264, count: 1, data: 0}, 
     *     [{id: 265, data: 0}, {id: 265, data: 0}, {id: 265, data: 0}, 
     *     {id: 266, data: 0}, {id: 266, data: 0}, {id: 266, data: 0}]);
     * ```
     * 
     * @param result recipe result item
     * @param data crafting ingredients, an array of objects representing item
     * id and data
     * @param func function to be called when the craft is processed
     * @param prefix recipe prefix. Use a non-empty values to register recipes
     * for custom workbenches
     */
    function addShapeless(result: ItemInstance, data: { id: number, data: number }[], func?: CraftingFunction, prefix?: string): void;

    /**
     * Deletes recipe by its result 
     * @param result recipe result
     */
    function deleteRecipe(result: ItemInstance): void;

    /**
     * Removes recipe by result id, count and data
     */
    function removeWorkbenchRecipe(id: number, count: number, data: number): void;

    /**
     * Gets all available recipes for the recipe result
     * @returns java.util.Collection object containing [[WorkbenchRecipe]]s
     */
    function getWorkbenchRecipesByResult(id: number, count: number, data: number): java.util.Collection<WorkbenchRecipe>;

    /**
     * Gets all available recipes containing an ingredient
     * @returns java.util.Collection object containing [[WorkbenchRecipe]]s
     */
    function getWorkbenchRecipesByIngredient(id: number, data: number): java.util.Collection<WorkbenchRecipe>;

    /**
     * Gets recipe by the field and prefix
     * @param field [[WorkbenchField]] object containing crafting field 
     * information
     * @param prefix recipe prefix, defaults to empty string (vanilla workbench)
     * @returns [[WorkbenchRecipe]] instance, containing useful methods and 
     * recipe information
     */
    function getRecipeByField(field: WorkbenchField, prefix?: string): Nullable<WorkbenchRecipe>;

    /**
     * Gets recipe result item by the field and recipe prefix
     * @param field [[WorkbenchField]] object containing crafting field 
     * information
     * @param prefix recipe prefix, defaults to empty string (vanilla workbench)
     */
    function getRecipeResult(field: WorkbenchField, prefix?: string): Nullable<ItemInstance>;

    /**
     * Performs crafting by the field contents and recipe prefix
     * @param field [[WorkbenchField]] object containing crafting field 
     * information
     * @param prefix recipe prefix, defaults to empty string (vanilla workbench)
     */
    function provideRecipe(field: WorkbenchField, prefix?: string): Nullable<ItemInstance>;

    /**
     * Adds new furnace recipe
     * @param sourceId source item id
     * @param sourceData source item data
     * @param resultId resulting item id
     * @param resultData resulting item data
     * @param prefix prefix, used to create recipes for non-vanilla furnaces
     */
    function addFurnace(sourceId: number, sourceData: number, resultId: number, resultData: number, prefix?: string): void;

    /**
     * Adds new furnace recipe with no need to manually specify input item data
     * (it defaults to -1)
     * @param sourceId source item id
     * @param resultId result item id
     * @param resultData resulting item data
     * @param prefix prefix, used to create recipes for non-vanilla furnaces. If
     * the prefix is not empty and some recipes for this source exist for 
     * vanilla furnace, they are removed
     */
    function addFurnace(sourceId: number, resultId: number, resultData: number, prefix?: string): void

    /**
     * Removes furnace recipes by source item
     * @param sourceId source item id
     * @param sourceData source item data
     */
    function removeFurnaceRecipe(sourceId: number, sourceData: number): void;

    /**
     * Adds fuel that can be used in the furnace
     * @param id fuel item id
     * @param data fuel item data
     * @param time burning time in ticks
     */
    function addFurnaceFuel(id: number, data: number, time: number): void;

    /**
     * Removes furnace fuel by fuel item id and data
     */
    function removeFurnaceFuel(id: number, data: number): void;

    /**
     * @param prefix recipe prefix used for non-vanilla furnaces
     * @returns furnace recipe resulting item
     */
    function getFurnaceRecipeResult(id: number, data: number, prefix?: string): ItemInstance;

    /**
     * @returns fuel burn duration by fuel item id and data
     */
    function getFuelBurnDuration(id: number, data: number): number;

    /**
     * Gets furnace recipes by result and custom prefix
     * @param resultId result item id
     * @param resultData result item data
     * @param prefix recipe prefix used for non-vanilla furnaces
     * @returns [[java.util.Collection]] object with all furnace recipes found by given params
     */
    function getFurnaceRecipesByResult(resultId: number, resultData: number, prefix: string): java.util.Collection<FurnaceRecipe>;

    /**
     * @returns [[java.util.Collection]] object with all registered workbench recipes
     */
    function getAllWorkbenchRecipes(): java.util.Collection<WorkbenchRecipe>;

    /**
     * @returns [[java.util.Collection]] object with all registered furnace recipes
     */
    function getAllFurnaceRecipes(): java.util.Collection<FurnaceRecipe>;

    /**
     * Class used to simplify creation of custom workbenches
     */
    class WorkbenchUIHandler {

        /**
         * Constructs a new Workbench UI handler
         * @param target target [[WindowContent.elements]] section
         * @param targetCon target container
         * @param field workbench field
         */
        constructor(target: UI.ElementSet, targetCon: UI.Container, field: WorkbenchField);

        /**
         * Sets custom workbench prefix
         * @param prefix custom workbench prefix
         */
        setPrefix(prefix: string): void;

        /**
         * Refreshes all the recipes in the workbench
         * @returns amount of recipes displayed
         */
        refresh(): number;

        /**
         * Runs recipes refresh in the ticking thread delaying refresh process 
         * for a tick. To get recipes count use 
         * [[WorkbenchUIHandler.setOnRefreshListener]]
         */
        refreshAsync(): void;

        /**
         * Registers listener to be notified when some recipe is selected
         * @param listener recipe selection listener
         */
        setOnSelectionListener(listener: { onRecipeSelected: (recipe: WorkbenchRecipe) => void }): void;

        /**
         * Registers listener to be notified when the workbench starts and 
         * completes refreshing
         * @param listener workbench refresh listener
         */
        setOnRefreshListener(listener: { onRefreshCompleted: (count: number) => void, onRefreshStarted: () => void }): void;

        /**
         * Deselects current recipe (asynchronously)
         */
        deselectCurrentRecipe(): void;

        /**
         * Sets workbench recipes displaying limit. By default it is 250
         * @param count count of the recipes to show
         */
        setMaximumRecipesToShow(count: number): void;
    }


    /**
     * Object representing workbench recipe
     */
    interface WorkbenchRecipe extends java.lang.Object {
        /**
         * @returns true, if the recipe is valid, false otherwise
         */
        isValid(): boolean;

        /**
         * @param c recipe entry character
         * @returns recipe entry by entry character
         */
        getEntry(c: string): RecipeEntry;

        /**
         * @returns resulting item instance
         */
        getResult(): ItemInstance;

        /**
         * @returns true if specified item is recipe's result, false otherwise
         */
        isMatchingResult(id: number, count: number, data: number): boolean;

        /**
         * @returns recipe unique mask identifier
         */
        getRecipeMask(): string;

        /**
         * @param field workbench field to compare with
         * @returns true if the field contains this recipe, false otherwise
         */
        isMatchingField(field: WorkbenchField): boolean;

        /**
         * @returns all recipe's entries in a java array
         */
        getSortedEntries(): native.Array<RecipeEntry>;

        /**
         * Tries to fill workbench field with current recipe
         * @param field workbench field to fill
         */
        putIntoTheField(field: WorkbenchField): void;

        /**
         * @returns recipe prefix. Defaults to empty string
         */
        getPrefix(): string;

        /**
         * Sets prefix value for the recipe
         * @param prefix new prefix value
         */
        setPrefix(prefix: string): void;

        /**
         * Compares current recipe's prefix with given one
         * @param prefix prefix value to compare with
         * @returns true, if current recipe's prefix is the same as given one,
         * false otherwise
         */
        isMatchingPrefix(prefix: string): boolean;

        /**
         * Sets craft function for the recipe
         * @param callback function to be called on item craft
         */
        setCallback(callback: CraftingFunction): void;

        /**
         * @returns current crafting function or null if no one was specified
         */
        getCallback(): Nullable<CraftingFunction>;

    }


    /**
     * Object representing furnace recipe
     */
    interface FurnaceRecipe extends java.lang.Object {
        /**
         * @returns true, if the recipe is valid, false otherwise
         */
        isValid(): boolean;

        /**
         * @returns resulting item instance
         */
        getResult(): ItemInstance;

        /**
         * @returns recipe prefix. Defaults to empty string
         */
        getPrefix(): string;

        /**
         * Sets prefix value for the recipe
         * @param prefix new prefix value
         */
        setPrefix(prefix: string): void;

        /**
         * Compares current recipe's prefix with given one
         * @param prefix prefix value to compare with
         * @returns true, if current recipe's prefix is the same as given one,
         * false otherwise
         */
        isMatchingPrefix(prefix: string): boolean;
    }


    /**
     * Function called when the craft is in progress
     * @param api object used to perform simple recipe manipulations and to prevent 
     * crafting
     * @param field array containing all slots of the crafting field
     * @param result recipe result item instance
     */
    interface CraftingFunction {
        (api: WorkbenchFieldAPI, field: com.zhekasmirnov.innercore.api.mod.ui.container.Slot[], result: ItemInstance, player: number): void
    }

    /**
     * Object representing workbench field
     */
    interface WorkbenchField {
        /**
         * @param slot slot index
         * @returns workbench slot instance by slot index
         */
        getFieldSlot(slot: number): com.zhekasmirnov.innercore.api.mod.ui.container.Slot,

        /**
         * @returns js array of all slots
         */
        asScriptableField(): com.zhekasmirnov.innercore.api.mod.ui.container.Slot[]
    }


    /**
     * Object used to work with workbench field in the craft function
     */
    interface WorkbenchFieldAPI {

        /**
         * @param slot slot index
         * @returns workbench slot instance by slot index
         */
        getFieldSlot(slot: number): com.zhekasmirnov.innercore.api.mod.ui.container.Slot;

        /**
         * Decreases item count in the specified slot, if possible
         * @param slot slot index
         */
        decreaseFieldSlot(slot: number): void;

        /**
         * Prevents crafting event
         */
        prevent(): void;

        /**
         * @returns true, if crafting event was prevented, false otherwise
         */
        isPrevented(): boolean;
    }


    /**
     * Crafting recipe entry
     */
    interface RecipeEntry extends java.lang.Object {

        /**
         * @param slot slot to compare with
         * @returns true if recipe entry matches the slot
         */
        isMatching(slot: com.zhekasmirnov.innercore.api.mod.ui.container.Slot): boolean;

        /**
         * @param entry entry to compare with
         * @returns true if recipe entry matches another entry
         */
        isMatching(entry: RecipeEntry): boolean;
    }
}

