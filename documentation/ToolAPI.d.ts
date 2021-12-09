/**
 * Module used to manage block and tools material and create tools with all
 * required properties
 */
declare namespace ToolAPI {

    /**
     * Creates new material with specified breaking speed multiplier. Some of 
     * the materials are already registered: 
     * 
     * *stone* - used for pickaxes
     * 
     * *wood* - used for axes
     * 
     * *dirt* - used for shovels
     * 
     * *plant* - used for all plants (no vanilla tool supports this material)
     * 
     * *fibre* - used for swords (to break web)
     * 
     * *cobweb* - currently not used
     * 
     * *unbreaking* - used for unbreaking blocks, liquids, end portal, etc.
     * 
     * @param name new (or existing) material name
     * @param breakingMultiplier multiplier used to calculate block breaking 
     * speed. 1 is a default value for dirt and 3 is a default value for stone
     */
    function addBlockMaterial(name: string, breakingMultiplier: number): void;

    /**
     * Creates new tool material with specified parameters. Some of the tool 
     * materials are already registered:
     * 
     * *wood* - used for wooden instruments
     * 
     * *stone* - used for stone instruments
     * 
     * *iron* - used for iron instruments
     * 
     * *golden* - used for golden instruments
     * 
     * *diamond* - used for diamond instruments
     * 
     * @param name new (or existing) material name
     * @param material parameters describing material properties
     */
    function addToolMaterial(name: string, material: ToolMaterial): void;

    /**
     * Registers item as a tool
     * @param id numeric item id
     * @param toolMaterial registered tool material name or tool material object
     * used to register the tool
     * @param blockMaterials block material names that can be broken by this 
     * instrument. For example, you can use *["stone"]* for the pickaxes
     * @param params additional tool parameters
     */
    function registerTool(id: number, toolMaterial: string | ToolMaterial, blockMaterials: string[], params?: ToolParams): void;

    /**
     * Registers item as a sword
     * @param id numeric item id
     * @param toolMaterial registered tool material name or tool material object
     * used to register the sword
     * @param params additional tool parameters
     */
    function registerSword(id: number, toolMaterial: string | ToolMaterial, params?: ToolParams): void;

    /**
     * Registers material and digging level for the specified block
     * @param uid numeric tile id
     * @param materialName material name
     * @param level block's digging level
     * @param isNative used to mark vanilla blocks data. Generally used within 
     * Core Engine code and should not be used within mods until you really 
     * know what you're doing
     */
    function registerBlockMaterial(uid: number, materialName: string, level?: number, isNative?: boolean): void;

    /**
     * Sets digging level for block. If digging level of tool is higher then 
     * block's one, the block is dropped
     * @param uid numeric tile id
     * @param level block's digging level
     */
    function registerBlockDiggingLevel(uid: number, level: number): void;

    /**
     * Registers material and digging level for the specified blocks
     * @param materialName material name
     * @param UIDs an array of numeric tiles ids 
     * @param isNative used to mark vanilla blocks data. Generally used within 
     * Core Engine code and should not be used within mods until you really 
     * know what you're doing
     */
    function registerBlockMaterialAsArray(materialName: string, UIDs: number[], isNative: boolean): void;

    /** 
     * @deprecated No longer supported
     */
    function refresh(): void;

    /**
     * @param blockID numeric tile id
     * @returns object containing ToolAPI block data or undefined if no block 
     * data was specified for this block
     */
    function getBlockData(blockID: number): BlockData | undefined;

    /**
     * @param blockID numeric tile id
     * @returns object containing block material information or null, if no 
     * block data was specified for this block
     */
    function getBlockMaterial(blockID: number): Nullable<BlockMaterial>;

    /**
     * @param blockID numeric tile id
     * @returns destroy level of the block with specified id or 0, if no block 
     * data was specified for this block
     */
    function getBlockDestroyLevel(blockID: number): number;

    /**
     * @param extra item extra instance, if not specified, method uses carried
     * item's extra
     * @returns enchant data object, containing enchants used for blocks
     * destroy speed calculations
     */
    function getEnchantExtraData(extra?: ItemExtraData): EnchantData;

    /**
     * Applies fortune drop modifier to the drop array
     * @param drop drop array containing number of the arrays
     * @param level enchantment level
     */
    function fortuneDropModifier(drop: ItemInstanceArray[], level: number): ItemInstanceArray[];

    /**
     * Calculates destroy time for the block that is being broken with specified
     * tool at the specified coords. Used mostly by Core Engine to apply break
     * time
     * @param ignoreNative if block and item are native items, and this 
     * parameter is set to true, all the calculations will still be performed
     */
    function getDestroyTimeViaTool(fullBlock: Tile, toolItem: ItemInstance, coords: Callback.ItemUseCoordinates, ignoreNative?: boolean): number;

    /**
     * @param itemID numeric item id
     * @returns tool information stored in slightly modified 
     * [[ToolAPI.ToolParams]] object or null if no tool data was specified
     */
    function getToolData(itemID: number): Nullable<ToolParams>;

    /**
     * @param itemID numeric item id
     * @returns tool's breaking level or 0 if no tool data was provided
     */
    function getToolLevel(itemID: number): number;

    /**
     * @param itemID numeric item id
     * @param blockID numeric tile id
     * @returns digging level if specified tool can mine specified block, 0 if
     * data for the tool or for the block was not specified or if specified tool
     * cannot mine specified block
     */
    function getToolLevelViaBlock(itemID: number, blockID: number): number;

    /**
     * @returns carried tool information stored in slightly modified 
     * [[ToolAPI.ToolParams]] object or null if no tool data was specified
     */
    function getCarriedToolData(): any;

    /**
     * @returns carried tool's breaking level or 0 if no tool data was provided
     */
    function getCarriedToolLevel(): number;

    /**
     * Resets ToolAPI engine state
     */
    function resetEngine(): void;

    /**
     * Spawns experience orbs on the specified coordinate
     * @param value amount of experience to spawn
     */
    function dropExpOrbs(x: number, y: number, z: number, value: number): void;

    /**
     * Spawns random amount of experience on the specified block coordinates
     * @param coords block coordinates
     * @param minVal minimum amount of orbs to be spawned
     * @param maxVal maximum amount of orbs to be spawned
     * @param modifier additional experiences, usually passed from 
     * [[ToolAPI.EnchantData.experience]] field
     */
    function dropOreExp(coords: Vector, minVal: number, maxVal: number, modifier: number): void;

    /**
     * @param blockID numeric tile id
     * @returns 
     */
    function getBlockMaterialName(blockID: number): Nullable<string>;


    /**
     * Object used to describe tool material type
     */
    interface ToolMaterial {
        /**
         * Divider used to calculate block breaking
         * speed. 2 is a default value for wooden instruments and 12 is a default 
         * value for golden instruments
         */
        efficiency?: number,

        /**
         * Additional damage for the instruments, this value
         * is added to the base tool damage. If damage is not integer, it is rounded
         * to the higher integer with the chance of the fractional part, e.g. if 
         * the value is *3.3*, the damage will be 4 with the chance of 30%
         */
        damage?: number,

        /**
         * Durability of the tool, 33 is a default value 
         * for golden tools and 1562 is a default value for diamond tools
         */
        durability?: number,

        /**
         * Block breaking level, 1 is wooden instruments, 4 is diamond 
         * instruments. If block's breaking level is less or equal to the tool's
         * level, block will be dropped when broken
         */
        level?: number
    }


    /**
     * Object used to describe block material
     */
    interface BlockMaterial {
        /**
         * Multiplier used to calculate block breaking speed
         */
        multiplier: number,

        /**
         * Block material name
         */
        name: string
    }


    /**
     * Object used to store all of the ToolAPI block data
     */
    interface BlockData {
        /**
         * Material data used for this block
         */
        material: BlockMaterial,

        /**
         * Digging level of the block. If digging level of tool is higher then 
         * block's one, the block is dropped
         */
        level: number,

        /**
         * Specifies whether the block was added as vanilla item or as a custom
         * block. True, if the block is vanilla, false if the block is custom. 
         * Should not generally be changed
         */
        isNative: boolean
    }


    /**
     * Object containing additional parameters and functions used by Core Engine 
     * to work with the tool
     */
    interface ToolParams {
        /**
         * Numeric id of the item that replaces tool item when it's broken. 
         * By default it is 0 (the tool disappears)
         */
        brokenId?: number,

        /**
         * Base damage of the instrument, is added to the material damage to 
         * calculate the tool's final damage. Default is 0
         */
        damage?: number,

		/**
		 * Properties of the tool material. Defined by [[ToolAPI.registerTool]]
		 */
		toolMaterial?: ToolMaterial,

		/**
		 * List of block material names that can be broken by this instrument.
		 * Defined by [[ToolAPI.registerTool]]
		 */
		blockMaterials?: {[key: string]: boolean}

        /**
         * Function used to recalculate block destroy time based on some custom 
         * logic
         * @param tool tool item
         * @param coords coordinates where the block is being broken
         * @param block the block that is being broken
         * @param timeData some time properties that can be used to calculate 
         * destroy time for the tool and block
         * @param timeData.base base destroy time of the block
         * @param timeData.devider tool material devider
         * @param timeData.modifier divider applied due to efficiency enchantment
         * @param defaultTime default block destroy time, calculated as 
         * *base / divider / modifier*
         * @param enchantData tool's enchant data
         */
        calcDestroyTime?: (tool: ItemInstance, coords: Callback.ItemUseCoordinates, block: Tile, timeData: { base: number, devider: number, modifier: number }, defaultTime: number, enchantData?: EnchantData) => number,

        /**
         * If true, the tool is vanilla Minecraft tool. Generally used within 
         * Core Engine code and should not be used within mods until you really 
         * know what you're doing
         */
        isNative?: boolean,

        /**
         * Function that is called when the block is destroyed
         * @param item tool item
         * @param coords coordinates where the block is destroyed
         * @param block the block that is destroyed
         * @returns true if default damage should not be applied to the instrument,
         * false otherwise
         */
        onDestroy?: (item: ItemInstance, coords: Callback.ItemUseCoordinates, block: Tile, player: number) => boolean,

        /**
         * Function that is called when players attacks some entity with the tool
         * @param item tool item
         * @param victim unique numeric id of the entity that is attacked
         * @returns true if default damage should not be applied to the instrument,
         * false otherwise
         */
        onAttack?: (item: ItemInstance, victim: number, attacker: number) => boolean,

        /**
         * If true, breaking blocks with this tool makes it break 2x faster,
         * otherwise attacking mobs breaks tool 2x faster
         */
        isWeapon?: boolean,

        /**
         * Function that is called when the instrument is broken
         * @param item tool item
         * @returns true if default breaking behavior (replacing by *brokenId* item) 
         * should not be applied 
         */
        onBroke?: (item: ItemInstance) => boolean,

        /**
         * Function that is used to change enchant data object before all the 
         * calculations. Can be used to add some enchantment properties, such as 
         * silk touch, efficiency, unbreaking or fortune
         * @param enchantData tool's enchant data
         * @param item tool item
         * @param coords coordinates where the block is being broken. Passed only if
         * the block is destroyed
         * @param block destroyed block data. Passed only if the block is destroyed
         */
        modifyEnchant?: (enchantData: EnchantData, item: ItemInstance, coords?: Callback.ItemUseCoordinates, block?: Tile) => void,

        /**
         * Function that is called when the block that has a destroy function is 
         * destroyed
         * @param coords coordinates where the block is destroyed
         * @param carried an item in player's hand
         * @param fullTile block that was destroyed
         */
        onMineBlock?: (coords: Callback.ItemUseCoordinates, carried: ItemInstance, fullTile: Tile) => void,

		/**
         * Any other user-defined methods and properties
         */
		[key: string]: any
    }

    /**
     * Object containing some of the enchants that are used to calculate block 
     * destroy time
     */
    interface EnchantData {
        /**
         * If true, the item has Silk Touch enchantment
         */
        silk: boolean,

        /**
         * Specifies the level of Fortune enchantment, or 0 if the item doesn't
         * have this enchant
         */
        fortune: number,

        /**
         * Specifies the level of Efficiency enchantment, or 0 if the item 
         * doesn't have this enchant
         */
        efficiency: number,

        /**
         * Specifies the level of Unbreaking enchantment, or 0 if the item 
         * doesn't have this enchant
         */
        unbreaking: number,

        /**
         * Specifies the amount of additional experience that is dropped when 
         * player breaks block with specified item
         */
        experience: number
    }
}