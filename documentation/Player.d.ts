/**
 * Module used to manipulate player. Player is also an entity in Minecraft, so 
 * you can use all the functions from [[Entity]] module as well. To get player's 
 * entity id, call [[Player.get]] function
 */
declare namespace Player {
    /**
     * @returns player's entity id that can be used with most of [[Entity]] 
     * function
     */
    function get(): number;

    /**
     * @deprecated No longer supported
     */
    function getNameForEnt(ent: number): string;

    /**
     * @deprecated No longer supported
     */
    function getName(): void;

    /**
     * @returns current dimension numeric id, one of the [[Native.Dimension]] 
     * values or custom dimension id
     */
    function getDimension(): number;

    /**
     * @returns true if specified entity is of player type, false otherwise
     */
    function isPlayer(ent: number): boolean;

    /**
     * Fetches information about the objects player is currently pointing
     */
    function getPointed():
    /**
     * @param pos pointed block position
     * @param vec look vector
     * @param block pointed block data, if player doesn't look at the block, air
     * block is returned ({id: 0, data: 0})
     * @param entity pointed entity, if no entity's pointed, returns -1
     */ { pos: BlockPosition, vec: Vector, block: Tile, entity: number };

    /**
     * @deprecated No longer supported
     */
    function getInventory(loadPart: any, handleEnchant: any, handleNames: any): void;

    /**
     * Adds items to player's inventory, stacking them if possible
     * @param id item id
     * @param count item count
     * @param data item data
     * @param extra item extra
     * @param boolean if set to false, function drops items that could not be 
     * added to player's inventory, destroys them otherwise
     */
    function addItemToInventory(id: number, count: number, data: number, extra?: ItemExtraData, preventDrop?: boolean): void;

    /**
     * @param handleEnchant No longer supported and should not be passed
     * @param handleNames No longer supported and should not be passed
     * @returns item in player's hand 
     */
    function getCarriedItem(): ItemInstance;

    /**
     * Sets item in player's hand
     * @param id item id
     * @param count item count
     * @param data item data
     * @param extra item extra
     */
    function setCarriedItem(id: number, count: number, data: number, extra?: ItemExtraData): void;

    /**
     * Decreases carried item count by specified number
     * @param count amount of items to decrease carried item by, default value 
     * is 1
     */
    function decreaseCarriedItem(count?: number): void;

    /**
     * @param slot slot id, from 0 to 36
     * @returns information about item in the specified inventory slot
     */
    function getInventorySlot(slot: number): ItemInstance;

    /**
     * Sets contents of the specified inventory slot
     * @param slot slot id, from 0 to 36
     * @param id item id
     * @param count item count
     * @param data item data
     * @param extra item extra
     */
    function setInventorySlot(slot: number, id: number, count: number, data: number, extra?: ItemExtraData): void;

    /**
     * @param slot armor slot id, should be one of the [[Native.ArmorType]] 
     * values
     * @returns information about item in the specified armor slot
     */
    function getArmorSlot(slot: number): ItemInstance;

    /**
     * Sets contents of the specified armor slot
     * @param slot armor slot id, should be one of the [[Native.ArmorType]] 
     * values
     * @param id item id
     * @param count item count
     * @param data item data
     * @param extra item extra
     */
    function setArmorSlot(slot: number, id: number, count: number, data: number, extra?: ItemExtraData): void;

    /**
     * @returns currently selected inventory slot, from 0 to 8
     */
    function getSelectedSlotId(): number;

    /**
     * Selects currently selected inventory slot
     * @param slot slot id to be selected, from 0 to 8
     */
    function setSelectedSlotId(slot: number): void;

    /**
     * Sets specified coordinates as player's position
     */
    function setPosition(x: number, y: number, z: number): void;

    /**
     * @returns current player's position
     */
    function getPosition(): Vector;

    /**
     * Changes current player position by specified vector
     */
    function addPosition(x: number, y: number, z: number): void;

    /**
     * Set player's velocity using velocity vector
     * @param x velocity
     * @param y velocity
     * @param z velocity
     */
    function setVelocity(x: number, y: number, z: number): void;

    /**
     * Get player's velocity
     * @returns [[Vector]] containing player's velocity
     */
    function getVelocity(): Vector;

    /**
     * Updates current entity's velocity by specified values
     */
    function addVelocity(x: number, y: number, z: number): void;

    /**
     * @returns an object that allows to manipulate player experience
     * @deprecated Consider using [[Player.getExperience]], 
     * [[Player.setExperience]], [[Player.addExperience]]
     */
    function experience(): PlayerExperience;

    /**
     * @returns player's current experience
     */
    function getExperience(): number;

    /**
     * Sets player's experience
     * @param exp experience value to be set
     */
    function setExperience(exp: number): void;

    /**
     * Adds specified amount of experience to the current value
     * @param exp amount to be added
     */
    function addExperience(exp: number): void;

    /**
     * @returns an object that allows to manipulate player level
     * @deprecated Consider using [[Player.getLevel]], 
     * [[Player.setLevel]], [[Player.addLevel]]
     */
    function level(): PlayerLevel;

    /**
     * @returns player's current level
     */
    function getLevel(): number;

    /**
     * Sets player's level
     * @param level level value to be set
     */
    function setLevel(level: number): void;

    /**
     * Adds specified amount of level to the current value
     * @param level amount to be added
     */
    function addLevel(level: number): void;

    /**
     * @returns an object that allows to manipulate player flying ability and
     * state
     * @deprecated Consider using [[Player.getFlyingEnabled]], 
     * [[Player.setFlyingEnabled]], [[Player.getFlying]], [[Player.setFlying]]
     */
    function flying(): PlayerFlying;

    /**
     * @returns true if player is allowed to fly, false otherwise
     */
    function getFlyingEnabled(): boolean;

    /**
     * Enables or disables player's ability to fly
     * @param enabled whether the player can fly or not
     */
    function setFlyingEnabled(enabled: boolean): void;

    /**
     * @returns true if player is flying, false otherwise
     */
    function getFlying(): boolean;

    /**
     * Changes player's current flying state, call [[Player.setFlyingEnabled]]
     * to be able to set this property to true
     * @param enabled whether the player should fly or not
     */
    function setFlying(enabled: boolean): void;

    /**
     * @returns an object that allows to manipulate player's exhaustion
     * @deprecated Consider using [[Player.getExhaustion]] and
     * [[Player.setExhaustion]]
     */
    function exhaustion(): PlayerExhaustion;

    /**
     * @returns player's current exhaustion
     */
    function getExhaustion(): number;

    /**
     * Sets player's exhaustion
     * @param value exhaustion value to be set
     */
    function setExhaustion(value: number): void;

    /**
     * @returns an object that allows to manipulate player's exhaustion
     * @deprecated Consider using [[Player.getHunger]] and
     * [[Player.setHunger]]
     */
    function hunger(): PlayerHunger;

    /**
     * @returns player's current hunger
     */
    function getHunger(): number;

    /**
     * Sets player's hunger
     * @param value hunger value to be set
     */
    function setHunger(value: number): void;

    /**
     * @returns an object that allows to manipulate player's saturation
     * @deprecated Consider using [[Player.getSaturation]] and
     * [[Player.setSaturation]]
     */
    function saturation(): PlayerSaturation;

    /**
     * @returns player's current saturation
     */
    function getSaturation(): number;

    /**
     * Sets player's saturation
     * @param value saturation value to be set
     */
    function setSaturation(value: number): void;

    /**
     * @returns an object that allows to manipulate player's health
     * @deprecated Consider using [[Player.getHealth]] and
     * [[Player.setHealth]]
     */
    function health(): PlayerHealth;

    /**
     * @returns player's current health
     */
    function getHealth(): number;

    /**
     * Sets player's health
     * @param value health value to be set
     */
    function setHealth(value: number): void;

    /**
     * @returns an object that allows to manipulate player's score
     * @deprecated Consider using [[Player.getScore]]
     */
    function score(): PlayerScore;

    /**
     * @returns player's current score
     */
    function getScore(): number;

    /**
     * Sets view zoom, to reset value call [[Player.resetFov]]
     * @param fov view zoom, default zoom is about 70
     */
    function setFov(fov: number): void;

    /**
     * Resets view zoom to the default value
     */
    function resetFov(): void;

    /**
     * Sets player's camera to the specified entity
     * @param ent entity id
     */
    function setCameraEntity(ent: number): void;

    /**
     * Resets player's camera if it was previously set to another entity
     */
    function resetCameraEntity(): void;

    /**
     * Sets some of the player's {@page Abilities}. If the argument is of type 
     * Boolean, sets the ability as the boolean one, otherwise as numeric one
     * @param ability ability name constant, should be one of the 
     * [[Native.PlayerAbility]] constants
     * @param value the value to be set for the ability. Can be either boolean
     * or number, depending on the ability
     */
    function setAbility(ability: string, value: boolean | number): void;

    /**
     * Gets one of the player's {@page Abilities} in a form of floating-point 
     * number
     * @param ability ability name constant, should be one of the 
     * [[Native.PlayerAbility]] constants
     * @returns the current value of the ability in a form of floating-point
     * number
     */
    function getFloatAbility(ability: string): number;

    /**
     * Gets one of the player's {@page Abilities} in a boolean form 
     * @param ability ability name constant, should be one of the 
     * [[Native.PlayerAbility]] constants
     * @returns the current value of the ability in a boolean form 
     */
    function getBooleanAbility(ability: string): number;

    /**
     * Class used to manipulate player's experience
     * @deprecated Consider using [[Player.getExperience]], 
     * [[Player.setExperience]], [[Player.addExperience]]
     */
    class PlayerExperience {
        /**
         * @returns player's current experience
         */
        public get(): number;

        /**
         * Sets player's experience
         * @param exp experience value to be set
         */
        public set(exp: number): void;

        /**
         * Adds specified amount of experience to the current value
         * @param exp amount to be added
         */
        public add(exp: number): void;
    }

    /**
     * Class used to manipulate player's level
     * @deprecated Consider using [[Player.getLevel]], 
     * [[Player.setLevel]], [[Player.addLevel]]
     */
    class PlayerLevel {
        /**
         * @returns player's current level
         */
        public get(): number;

        /**
         * Sets player's level
         * @param level level value to be set
         */
        public set(level: number): void;

        /**
         * Adds specified amount of level to the current value
         * @param level amount to be added
         */
        public add(level: number): void;
    }

    /**
     * Class used to manipulate player's flying ability and state
     * @deprecated Consider using [[Player.getFlyingEnabled]], 
     * [[Player.setFlyingEnabled]], [[Player.getFlying]], [[Player.setFlying]]
     */
    class PlayerFlying {
        /**
         * @returns true if player is flying, false otherwise
         */
        public get(): boolean;

        /**
         * Changes player's current flying state, call 
         * [[Player.PlayerFlying.setEnabled]] to be able to set this property to 
         * true
         * @param enabled whether the player should fly or not
         */
        public set(enabled: boolean): void;

        /**
         * @returns true if player is allowed to fly, false otherwise
         */
        public getEnabled(): boolean;

        /**
         * Enables or disables player's ability to fly
         * @param enabled whether the player can fly or not
         */
        public setEnabled(enabled: boolean): void;
    }

    /**
     * Class used to manipulate player's exhaustion
     * @deprecated Consider using [[Player.getExhaustion]] and
     * [[Player.setExhaustion]]
     */
    class PlayerExhaustion {
        /**
         * @returns player's current exhaustion
         */
        public get(): number;

        /**
         * Sets player's exhaustion
         * @param value exhaustion value to be set
         */
        public set(value: number): void;
    }

    /**
     * Class used to manipulate player's hunger
     * @deprecated Consider using [[Player.getHunger]] and
     * [[Player.setHunger]]
     */
    class PlayerHunger {
        /**
         * @returns player's current hunger
         */
        public get(): number;

        /**
         * Sets player's hunger
         * @param value hunger value to be set
         */
        public set(value: number): void;
    }

    /**
     * Class used to manipulate player's saturation
     * @deprecated Consider using [[Player.getSaturation]] and
     * [[Player.setSaturation]]
     */
    class PlayerSaturation {
        /**
         * @returns player's current saturation
         */
        public get(): number;

        /**
         * Sets player's saturation
         * @param value saturation value to be set
         */
        public set(value: number): void;
    }

    /**
     * Class used to manipulate player's health
     * @deprecated Consider using [[Player.getHealth]] and
     * [[Player.setHealth]]
     */
    class PlayerHealth {
        /**
         * @returns player's current health
         */
        public get(): number;

        /**
         * Sets player's health
         * @param value health value to be set
         */
        public set(value: number): void;
    }

    /**
     * Class used to manipulate player's score
     * @deprecated Consider using [[Player.getScore]]
     */
    class PlayerScore {
        /**
         * @returns player's current score
         */
        public get(): number;
    }
}