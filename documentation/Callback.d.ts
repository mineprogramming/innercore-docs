/**
 * Module used to handle in-game events. When some native event occurs, all 
 * callback functions registered for this event are called. Also you can invoke
 * callback with any name manually using [[Callback.invokeCallback]] function.
 * 
 * All pre-defined callbacks with their functions interfaces are listed below.
 * If no function interface is provided, use a function with no params and 
 * return value:
 * 
 * **UI callbacks:**
 * 
 * *ContainerOpened* occurs when user opens some container. See 
 * [[ContainerOpenedFunction]] for details
 * 
 * *ContainerClosed* occurs when some container is closed. See
 * [[ContainerClosedFunction]] for details
 * 
 * *CustomWindowOpened* occurs when every single window is opened. Called for 
 * every window and subwindow. Examples of subwindows include standard 
 * inventory, window title, main window, etc. See [[CustomWindowOpenedFunction]]
 * for details
 * 
 * *CustomWindowClosed* occurs when every single window is closed. See 
 * [[CustomWindowClosedFunction]] for details
 * 
 * 
 * **Workbench callbacks:**
 * 
 * *CraftRecipePreProvided* occurs befor crafting is performed. See 
 * [[CraftRecipePreProvidedFunction]] for details
 * 
 * *CraftRecipeProvided* occurs afrer crafting recipe result is determined. See 
 * [[CraftRecipeProvidedFunction]] for details
 * 
 * *VanillaWorkbenchCraft* occurs just before adding crafting recipe result to 
 * player's inventory. See [[VanillaWorkbenchCraftFunction]] for details
 * 
 * *VanillaWorkbenchPostCraft* occurs after adding crafting recipe result to 
 * player's inventory. See [[VanillaWorkbenchCraftFunction]] for details
 * 
 * *VanillaWorkbenchRecipeSelected* occurs when player selects recipe in the 
 * workbench. See [[VanillaWorkbenchRecipeSelectedFunction]] for details
 * 
 * 
 * **Inner Core and Core Engine callbacks:**
 * 
 * *CoreConfigured* occurs when Inner Core default configuration file is loaded. 
 * See [[CoreConfiguredFunction]] for details
 * 
 * *PreLoaded* occurs directly after "CoreConfigured" callback
 * 
 * *APILoaded* occurs directly after "PreLoaded" callback
 * 
 * *ModsLoaded* occurs directly after "APILoaded" callback
 * 
 * *PostLoaded* occurs directly after "ModsLoaded" callback. Last of the loading
 * callbacks
 * 
 * *AppSuspended* occurs when Minecraft application is paused
 * 
 * *NativeGuiChanged* occurs when vanilla screen changes. See 
 * [[NativeGuiChangedFunction]] for details
 * 
 * *ReadSaves* occurs when reading saves from global scope. See 
 * [[SavesFunction]] for details
 * 
 * *WriteSaves* occurs when writing saves to global scope. See 
 * [[SavesFunction]] for details
 * 
 * 
 * **Worlds and dimensions callbacks:**
 * 
 * *tick* is main game tick. This callback is called 20 times per second and is
 * used to define all dynamic events in the game. Avoid overloading tick 
 * functions and use [[Updatable]]s and [[TileEntity]]s when posssible
 * 
 * *LevelSelected* occurs when the level is selected and will be loaded. See 
 * [[LevelSelectedFunction]] for details
 * 
 * *LevelCreated* occurs when level is created in the memory of the device
 * 
 * *LevelDisplayed* occurs when level is displayed to the player
 * 
 * *LevelPreLoaded* occurs before some level initialization
 * 
 * *LevelLoaded* occurs when level is completely loaded and is ready to be 
 * displayed to the player
 * 
 * *DimensionLoaded* occurs when vanilla or custom dimension is loaded. See 
 * [[DimensionLoadedFunction]] for details
 * 
 * *LevelPreLeft* occurs when player starts leaving world
 *  
 * *LevelLeft* occurs when player completes leaving world
 * 
 * *PreBlocksDefined* occurs before saving block data while loading world
 * 
 * *BlocksDefined* occurs after saving block data while loading world
 * 
 * 
 * **Player actions callbacks:**
 * 
 * *DestroyBlock* occurs when player breaks block. See [[DestroyBlockFunction]]
 * for details
 * 
 * *DestroyBlockStart* occurs when player starts breaking block. Has the same 
 * parameters as "DestroyBlock" callback, see [[DestroyBlockFunction]] for 
 * details
 * 
 * *DestroyBlockContinue* occurs when player continues breaking block. Occurs 
 * several times during one block breaking. See [[DestroyBlockContinueFunction]] 
 * for details
 * 
 * *BuildBlock* occurs when player places block somewhere in the world. See 
 * [[BuildBlockFunction]] for details
 * 
 * *BlockChanged* occurs when block changes in the world. To capture this event 
 * you should register blocks that you need to watch using 
 * [[World.setBlockChangeCallbackEnabled]] method. All block changes that are 
 * related to the registered blocks trigger this event. See 
 * [[BlockChangedFunction]] for details
 * 
 * *ItemUse* occurs when player uses item on some block. Doesn't work if vanilla
 * container is opened (e.g. chest, workbench, etc.). Use "ItemUseLocalServer" 
 * to track such events instead. See [[ItemUseFunction]] for details
 * 
 * *ItemUseLocalServer* occurs when player uses some item on the local server. 
 * Can be used to prevent vanilla container from opening. See 
 * [[ItemUseFunction]] for details
 * 
 * *FoodEaten* occurs when player eats food. See [[FoodEatenFunction]] for 
 * details
 * 
 * *ExpAdd* occurs when player gains some experience. See [[ExpAddFunciton]]
 * for details
 * 
 * *ExpLevelAdd* occurs when player gains some experience levels. See 
 * [[ExpLevelAddFunciton]] for details
 * 
 * *NativeCommand* occurs when player enters some command. See 
 * [[NativeCommandFunciton]] for details
 * 
 * *PlayerAttack* occurs when player attacks some entity. See 
 * [[PlayerAttackFunction]] for details
 * 
 * *EntityInteract* occurs when player longclick some entity (interacts with 
 * it). See [[EntityInteractFunction]] for details
 * 
 * *ItemUseNoTarget* occurs when an item is used in the air. See 
 * [[ItemUseNoTargetFunction]] for details
 * 
 * *ItemUsingReleased* occurs when player doesn't complete using item that has 
 * maximum use time set with [[Item.setMaxUseDuration]] funciton. See 
 * [[ItemUsingReleasedFunction]] for details
 * 
 * *ItemUsingComplete* when player completes using item that has maximum use 
 * time set with [[Item.setMaxUseDuration]] funciton. See 
 * [[ItemUsingCompleteFunction]] for details
 * 
 * 
 * **Entities and environment callbacks:**
 * 
 * *Explosion* occurs when something is exploded in the world. See 
 * [[ExplosionFunction]] for details
 * 
 * *EntityAdded* occurs when an entity is added in the world. See 
 * [[EntityAddedFunction]] for details
 * 
 * *EntityRemoved* occurs when an entity is removed from the world. See 
 * [[EntityRemovedFunction]] for details
 * 
 * *EntityDeath* occurs when an entity dies. See [[EntityDeathFunction]] for
 * details
 * 
 * *EntityHurt* occurs when an entity is hurt. See [[EntityHurtFunction]] for 
 * details
 * 
 * *ProjectileHit* occurs when a projectile entity hits entity or block. See
 * [[ProjectileHitFunction]] for details
 * 
 * 
 * **Items and blocks callbacks:**
 * 
 * *RedstoneSignal* occurs when redstone signal changes on the specified 
 * coordinates. To register block as redstone consumer, use 
 * [[Block.setRedstoneTile]] function. See [[RedstoneSignalFunction]] for 
 * details
 * 
 * *PopBlockResources* occurs when block is desroyed somehow (not by player).
 * See [[PopBlockResourcesFunction]] for details
 * 
 * *CustomBlockTessellation*
 * 
 * *ItemIconOverride* occurs when displaying item somewhere to override item's 
 * icon. You can use it to change item's icon depending on some item state. See
 * [[ItemIconOverrideFunction]] for details
 * 
 * *ItemNameOverride* occurs when displaying item name to override it. You can 
 * use it to display item charge, status, etc. See [[ItemNameOverrideFunction]] 
 * for details
 * 
 * *ItemDispensed* occurs when an item is dispenced using dispenser. See 
 * [ItemDispensedFunction]] for details
 * 
 * 
 * **Generation callbacks:**
 * 
 * *GenerateChunk* occurs when generating chunk in overworld. Shoud be
 * used for all generation process. See [[GenerateChunkFunction]] for details
 * 
 * *GenerateChunkUnderground* occurs when generating chunk's underground in 
 * overworld. Can be used for all underground generation process (though it is 
 * OK to use "GenerateChunk" for it as well). See [[GenerateChunkFunction]] for 
 * details
 * 
 * *GenerateNetherChunk* occurs when generating chunk in neather world. 
 * See [[GenerateChunkFunction]] for details
 * 
 * *GenerateEndChunk* occurs when generating chunk in end world. See
 * [[GenerateChunkFunction]] for details
 * 
 */
declare namespace Callback {

    /**
     * Adds callback function for the specified callback name. Most of native 
     * events can be prevented using [[Game.prevent]] call.
     * @param name callback name, should be one of the pre-defined or a custom
     * name if invoked via [[Callback.invokeCallback]]
     * @param func function to be called when an event occures
     */
    function addCallback(name: string, func: Function): void;

    /**
     * Invokes callback with any name and up to 10 additional parameters. You
     * should not generally call pre-defined callbacks until you really need to 
     * do so. If you want to trigger some event in your mode, use your own 
     * callback names
     * @param name callback name
     */
    function invokeCallback(name: string, o1?: any, o2?: any, o3?: any, o4?: any, o5?: any, o6?: any, o7?: any, o8?: any, o9?: any, o10?: any): void;


    /**
     * Function used in "CraftRecipePreProvided" callback
     * @param recipe object containing recipe information
     * @param field object containing crafting field information
     */
    interface CraftRecipePreProvidedFunction {
        (recipe: Recipes.WorkbenchRecipe, field: Recipes.WorkbenchField): void
    }

    /**
     * Function used in "CraftRecipeProvided" callback
     * @param recipe object containing recipe information
     * @param field object containing crafting field information
     * @param isPrevented if true, recipe was prevented by craft function
     */
    interface CraftRecipeProvidedFunction {
        (recipe: Recipes.WorkbenchRecipe, field: Recipes.WorkbenchField, isPrevented: boolean): void
    }


    /**
     * Function used in "VanillaWorkbenchCraft" and "VanillaWorkbenchPostCraft" 
     * callbacks
     * @param result recipe result item
     * @param workbenchContainer workbench container instance
     */
    interface VanillaWorkbenchCraftFunction {
        (result: ItemInstance, workbenchContainer: UI.Container): void
    }


    /**
     * Function used in "VanillaWorkbenchRecipeSelected" callback
     * @param recipe object containing recipe information
     * @param result recipe result item
     * @param workbenchContainer workbench container instance
     */
    interface VanillaWorkbenchRecipeSelectedFunction {
        (recipe: Recipes.WorkbenchRecipe, result: ItemInstance, workbenchContainer: UI.Container)
    }


    /**
     * Function used in "ContainerClosed" callback
     * @param container container that was closed
     * @param window window that was loaded in the container
     * @param byUser if true, container was closed by user, from the code 
     * otherwise
     */
    interface ContainerClosedFunction {
        (container: UI.Container, window: UI.IWindow, byUser: boolean): void
    }


    /**
     * Function used in "ContainerOpened" callback
     * @param container container that was opened
     * @param window window that was loaded in the container
     */
    interface ContainerOpenedFunction {
        (container: UI.Container, window: UI.IWindow): void
    }


    /**
     * Funciton used in "CustomWindowOpened" callback
     * @param window window that was opened
     */
    interface CustomWindowOpenedFunction {
        (window: UI.IWindow): void;
    }

    
    /**
     * Funciton used in "CustomWindowClosed" callback
     * @param window window that was closed
     */
    interface CustomWindowClosedFunction {
        (window: UI.IWindow): void;
    }


    /**
     * Function used in "CoreConfigured" callback
     * @param config Inner Core default config instance
     */
    interface CoreConfiguredFunction {
        (config: Config): void;
    }


    /**
     * Function used in "LevelSelected" callback
     * @param worldName name of the selected world
     * @param worldDir name of the directory where the world is stored. Worlds
     * directories are located at games/horizon/minecraftWorlds/
     */
    interface LevelSelectedFunction {
        (worldName: string, worldDir: string): void
    }


    /**
     * Function used in "DimensionLoaded" callback
     * @param dimension vanilla dimension id, one of the [[Native.Dimension]]
     * values, or custom dimension id
     */
    interface DimensionLoadedFunction {
        (dimension: number): void
    }


    /**
     * Function used in "DestroyBlock" and "DestroyBlockStart" callbacks
     * @param coords coordinates where the block is destroyed and side from
     * where it is destroyed
     * @param block block that is destroyed
     * @param player player entity unique numeric id
     */
    interface DestroyBlockFunction {
        (coords: ItemUseCoordinates, block: Tile, player: number): void
    }


    /**
     * Function used in "DestroyBlockContinue" callback 
     * @param coords coordinates where the block is destroyed and side from
     * where it is destroyed
     * @param block block that is destroyed
     * @param progress current fraction of breaking progress
     */
    interface DestroyBlockContinueFunction {
        (coords: ItemUseCoordinates, block: Tile, progress: number): void
    }


    /**
     * Function used in "BuildBlock" callback
     * @param coords coordinates where the block is placed and side from
     * where it is placed
     * @param block block that is placed
     * @param player player entity unique numeric id
     */
    interface BuildBlockFunction {
        (coords: ItemUseCoordinates, block: Tile, player: number): void
    }

    /**
     * Function used in "BlockChanged" callback
     * @param coords coordinates where block change occured
     * @param oldBlock the block that is being replaced 
     * @param newBlock replacement block
     * @param i1 some integer
     * @param i2 some integer
     */
    interface BlockChangedFunction {
        (coords: Vector, oldBlock: Tile, newBlock: Tile, i1: number, i2: number): void
    }


    /**
     * Function used in "ItemUse" and "ItemUseLocalServer" callbacks
     * @param coords set of all coordinate values that can be useful to write 
     * custom use logics
     * @param item item that was in the player's hand when he touched the block
     * @param block block that was touched
     * @param isExternal if true, the event was triggerd by the remote player,
     * else by local player
     */
    interface ItemUseFunction {
        (coords: ItemUseCoordinates, item: ItemInstance, block: Tile, isExternal: boolean|undefined): void
    }

    /**
     * Function used in "Explosion" callback
     * @param coords coordinates of the explosion
     * @param params additional explosion data
     * @param params.power explosion power
     * @param params.entity if explosion is produced by an entity, entity unique
     * id, -1 otherwise
     * @param onFire if true, explosion produced the fire
     * @param someBool some boolean value
     * @param someFloat some floating point value
     */
    interface ExplosionFunction {
        (coords: Vector, params: {power: number, entity: number, onFire: boolean, someBool: boolean, someFloat: number}): void
    }

    /**
     * Function used in the "FoodEaten" callback. You can use 
     * [[Player.getCarriedItem]] to get info about food item
     * @param food food amount produced by eaten food
     * @param ratio saturation ratio produced by food
     */
    interface FoodEatenFunction {
        (food: number, ratio: number): void
    }

    /**
     * Function used in "ExpAdd" callback
     * @param exp amount of experience to be added 
     */
    interface ExpAddFunciton {
        (exp: number): void
    }

    /**
     * Function used in "ExpLevelAdd" callback
     * @param level amount of levels to be added 
     */
    interface ExpLevelAddFunciton {
        (level: number): void
    }

    /**
     * Function used in "NativeCommand" callback
     * @param command command that was entered or null if no command was 
     * provided
     */
    interface NativeCommandFunciton {
        (command: string|null): void
    }

    /**
     * Function used in "PlayerAttack" callback
     * @param attacker player entity unique id
     * @param victim attacked entity unique id
     */
    interface PlayerAttackFunction {
        (attacker: number, victim: number): void
    }

    /**
     * Function used in "EntityAdded" callback
     * @param entity entity unique id
     */
    interface EntityAddedFunction {
        (entity: number): void
    }


    /**
     * Function used in "EntityRemoved" callback
     * @param entity entity unique id
     */
    interface EntityRemovedFunction {
        (entity: number): void
    }

    /**
     * Function used in "EntityDeath" callback
     * @param entity entity that is dead
     * @param attacker if the entity was killed by another entity, attacker's 
     * entity unique id, -1 otherwise
     * @param damageType damage source id
     */
    interface EntityDeathFunction {
        (entity: number, attacker: number, damageType: number): void
    }

    
    /**
     * Function used in "EntityHurt" callback
     * @param attacker if an entity was hurt by another entity, attacker's 
     * unique id, -1 otherwise
     * @param entity entity that is hurt
     * @param damageValue amount of damage produced to entity
     * @param damageType damage source id
     * @param someBool1 some boolean value
     * @param someBool2 some boolean value
     */
    interface EntityHurtFunction {
        (attacker: number, entity: number, damageValue: number, damageType: number, someBool1: boolean, someBool2: boolean): void
    }


    /**
     * Function used in "EntityInteract" callback
     * @param entity entity unique id
     * @param player player entity unique id
     */
    interface EntityInteractFunction {
        (entity: number, player: number): void
    }


    /**
     * Function used in "ProjectileHit" callback
     * @param projectile projectile entity unique ID
     * @param item projectile item
     * @param target object containing hit coordinates and information about 
     * hit entity/block
     */
    interface ProjectileHitFunction {
        (projectile: number, item: ItemInstance, target: ProjectileHitTarget): void
    }


    /**
     * Function used in "RedstoneSignal" callback
     * @param coords coordinates where redstone signal changed
     * @param params information about redstone signal
     * @param params.power redstone signal power
     * @param params.signal same as params.power
     * @param params.onLoad always true
     * @param block information aboit the block on the specified coordinates
     */
    interface RedstoneSignalFunction {
        (coords: Vector, params: {power: number, signal: number, onLoad: boolean}, block: Tile): void
    }

    
    /**
     * Funciton used in "PopBlockResources" callback
     * @param coords coordinates of the block that was broken
     * @param block information about the block that was broken
     * @param f some floating point value
     * @param i some integer value
     */
    interface PopBlockResourcesFunction {
        (coords: Vector, block: Tile, f: number, i: number): void
    }


    /**
     * Function used in "ItemIconOverride" callback
     * @param item information about item that is used in override function
     * @returns void if used in callback, [[Item.TextureData]] if used in item 
     * override function to return texture that will be used for the item
     */
    interface ItemIconOverrideFunction {
        (item: ItemInstance): void|Item.TextureData
    }


    /**
     * Function used in "ItemNameOverride" callback
     * @param item information about item that is used in override function
     * @param translation translated item name
     * @param name original item name
     * @returns void if used in callback, string if used in item override 
     * function to return new name that will be displayed
     */
    interface ItemNameOverrideFunction {
        (item: ItemInstance, translation: string, name: string): void|string;
    }    


    /**
     * Function used in "ItemUseNoTarget" callback
     * @param item item that was in the player's hand when the event occured
     * @param ticks amount of ticks player kept touching screen
     */
    interface ItemUseNoTargetFunction {
        (item: ItemInstance, ticks: number): void
    }


    /**
     * Function used in "ItemUsingReleased" callback
     * @param item item that was in the player's hand when the event occured
     * @param ticks amount of ticks left to the specified max use duration value
     */
    interface ItemUsingReleasedFunction {
        (item: ItemInstance, ticks: number): void
    }


    /**
     * Function used in "ItemUsingComplete" callback
     * @param item item that was in the player's hand when the event occured
     */
    interface ItemUsingCompleteFunction {
        (item: ItemInstance): void
    }


    /**
     * Function used in "ItemDispensed" callback
     * @param coords coordinates of the spawned drop item entity
     * @param item item that was dispensed
     */
    interface ItemDispensedFunction {
        (coords: ItemUseCoordinates, item: ItemInstance): void
    }


    /**
     * Function used in "NativeGuiChanged" callback
     * @param name current screen name
     * @param lastName previous screen name
     * @param isPushEvent if true, the new screen was pushed on the Minecraft 
     * screens stack, poped from the stack otherwise
     */
    interface NativeGuiChangedFunction {
        (name: string, lastName: string, isPushEvent: string): void
    }


    /**
     * Function used in all generation callbacks
     * @param chunkX chunk X coordinate. Multiply by 16 to receive corner block 
     * coordinates
     * @param chunkY chunk Y coordinate. Multiply by 16 to receive corner block 
     * coordinates
     * @param random java.util.Random object that should be used for generation
     * process. Already seeded by appropriate values
     */
    interface GenerateChunkFunction {
        (chunkX: number, chunkZ: number, random: java.util.Random): void
    }


    /**
     * Function used in "ReadSaves" and "WriteSaves" callbacks
     * Avoid modifying values directly, consider using [[Saver]] instead
     */
    interface SavesFunction {
        (globalScope: object): void
    }


    /**
     * Object containing hit coordinates and information about hit entity/block
     */
    interface ProjectileHitTarget {
        /**
         * Exact hit position x 
         */
        x: number, 
        /**
         * Exact hit position y
         */
        y: number, 
        /**
         * Exact hit position z
         */
        z: number,
        /**
         * If an entity was hit, entity unique id, -1 otherwise
         */
        entity: number,
        /**
         * Coordinates and side of the hit block or null if an entity was hit
         */
        coords: null|ItemUseCoordinates
    } 
    
    /**
     * Object used in some callbacks for coordinate set with side information 
     * and relative coordinates set
     */
    interface ItemUseCoordinates extends BlockPosition {
        /**
         * Relative coordinates, coordinates of the block to the specified side 
         * of current block
         */
        relative: Vector,
        /**
         * Exact touch point, absolute point coordinates. Used only in "ItemUse"
         * callback
         */
        vec?: Vector
    }
}
