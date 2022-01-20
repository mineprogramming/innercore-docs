/**
 * Module used to manipulate entities (mobs, drop, arrows, etc.) in the world.
 * Every entity has its unique numeric id which is often used across this module 
 * as the first function parameter
 */
declare namespace Entity {
    /**
     * @returns an array of all loaded entities ids
     */
    function getAll(): number[];

    /**
     * @returns an array of all loaded entities ids
     * @deprecated Consider using [[Entity.getAll]] instead
     */
    function getAllJS(): number[];

    /** 
     * @deprecated No longer supported
     */
    function getExtra(ent: number, name: string): null;

    /** 
     * @deprecated No longer supported
     */
    function putExtra(ent: number, name: string, extra?: ItemExtraData): void;

    /**
     * @deprecated No longer supported
     */
    function getExtraJson(ent: number, name: string): object;

    /**
     * @deprecated No longer supported
     */
    function putExtraJson(ent: number, name: string, obj: object): void;

    /**
     * Adds an effect to the mob
     * @param effectId effect id, should be one
     * one of [[Native.PotionEffect]] or [[EPotionEffect]] values.
     * @returns whether the ]]
     * values
     * @param effectData effect amplifier
     * @param effectTime effect time in ticks
     * @param ambience if true, particles are ambient
     * @param particles if true, particles are not displayed
     */
    function addEffect(ent: number, effectId: number, effectData: number, effectTime: number, ambience?: boolean, particles?: boolean): void;

    /**
     * Clears effect, applied to the mob
     * @param id effect id, should be one of the [[Native.PotionEffect]]
     */
    function clearEffect(ent: number, id: number): void;

    /**
     * Clears all effects of the mob
     */
    function clearEffects(ent: number): void;

    /**
     * Damages entity
     * @param damage damage value
     * @param cause if specified, can be used as callback cause param
     * @param params additional params for the damage
     * @param params.attacker entity that caused damage, can be used as callback
     * cause param
     * @param params.bool1 if true, damage is reduced by entity armor
     * @param params.bool2 unknown param
     */
    function damageEntity(ent: number, damage: number, cause?: number, params?: { attacker?: number, bool1?: boolean, bool2?: boolean }): void;

    /**
     * @returns current dimension numeric id, one of the [[Native.Dimension]] 
     * values or custom dimension id
     */
    function getDimension(ent: number): number;

    /**
     * Adds specified health amount to the entity
     * @param heal health to be added to entity, in half-hearts
     */
    function healEntity(ent: number, heal: number): void;

    /**
     * @returns numeric entity type, one of the [[Native.EntityType]]
     */
    function getType(ent: number): number;

    /**
     * @returns string type for entities defined via add-ons or numeric type for
     * all the other entities 
     */
    function getTypeUniversal(ent: number): number | string;

    /**
     * @returns string type for entities defined via add-ons, otherwise null
     */
    function getTypeAddon(ent: number): Nullable<string>;

    /**
     * @returns compound tag for the specified entity
     */
    function getCompoundTag(ent: number): NBT.CompoundTag;

    /**
     * Sets compound tag for the specified entity
     */
    function setCompoundTag(ent: number, tag: NBT.CompoundTag): void;

    /**
     * Sets hitbox to the entity. Hitboxes define entities collisions
     * @param w hitbox width and length
     * @param h hitbox height
     */
    function setHitbox(ent: number, w: number, h: number): void;

    /**
     * @returns true if specified entity id is valid and entity with this id 
     * exists in the world
     */
    function isExist(ent: number): boolean;

    /**
     * Spawns vanilla entity on the specified coordinates
     * @param type numeric entity type, one of the [[Native.EntityType]]
     * @param skin skin to set for the entity. Leave empty or null to use 
     * default skin of the mob
     * @returns numeric id of spawn entity or -1 if entity was not created
     */
    function spawn(x: number, y: number, z: number, type: number, skin?: Nullable<string>): number;

    /**
     * Spawns custom entity on the specified coords. Allows to pass some values 
     * to controllers via extra param
     * @param name custom entity string id
     * @param extra object that contains some data for the controllers
     */
    function spawnCustom(name: string, x: number, y: number, z: number, extra?: object): CustomEntity;

    /**
     * Same as [[Entity.spawnCustom]], but uses [[Vector]] object to represent 
     * coordinates
     */
    function spawnCustomAtCoords(name: string, coords: Vector, extra?: any): CustomEntity;

    /**
     * Same as [[Entity.spawn]], but uses [[Vector]] object to represent 
     * coordinates
     */
    function spawnAtCoords(coords: Vector, type: number, skin?: string): void;

    /**
     * Removes entity from the world
     */
    function remove(ent: number): void;

    /**
     * @returns custom entity object by its numeric entity id
     */
    function getCustom(ent: number): CustomEntity;

    /**
     * @deprecated No longer supported
     */
    function getAge(ent: number): number;

    /**
     * @deprecated No longer supported
     */
    function setAge(ent: number, age: number): void;

    /**
     * @deprecated No longer supported
     */
    function getSkin(ent: number): string;

    /**
     * Sets mob skin
     * @param skin skin name, full path in the resourcepack (mod assets)
     */
    function setSkin(ent: number, skin: string): void;

    /**
     * Sets mob skin, uses [[Texture]] object
     * @deprecated use [[Entity.setSkin]] instead
     * @param texture 
     */
    function setTexture(ent: number, texture: Texture): void;

    /**
     * @returns entity render type, should be one of the 
     * [[Native.MobRenderType]] values
     */
    function getRender(ent: number): number;

    /**
     * Sets entity render type
     * @param render entity render type, should be one of the 
     * [[Native.MobRenderType]] values
     */
    function setRender(ent: number, render: number): void;

    /**
     * Makes rider ride entity
     * @param entity ridden entity
     * @param rider rider entity
     */
    function rideAnimal(entity: number, rider: number): void;

    /**
     * @returns entity custom name tag
     */
    function getNameTag(ent: number): string;

    /**
     * Sets custom entity tag. Custom entity tags are displayed above the 
     * entities and can be set by player using label
     * @param tag name tag to be set to the entity
     */
    function setNameTag(ent: number, tag: string): void;

    /**
     * Gets the attack target of current entity
     * @returns target entity's unique id
     */
    function getTarget(ent: number): number;

    /**
     * Sets the attack target for current entity. Works only for mobs that 
     * actually can attack
     * @param target target entity's unique id
     */
    function setTarget(ent: number, target: number): void;

    /**
     * @returns true, if entity was immobilized
     */
    function getMobile(ent: number): boolean;

    /**
     * Sets entity's immobile state
     * @param mobile if true, entity can move, otherwise it is immobilized
     */
    function setMobile(ent: number, mobile: boolean): void;

    /**
     * @returns true if entity is sneaking, false otherwise
     */
    function getSneaking(ent: number): boolean;

    /**
     * Sets entity's sneaking state
     * @param sneak if true, entity becomes sneaking, else not
     */
    function setSneaking(ent: number, sneak: boolean): void;

    /**
     * @returns entity that is riding the specified entity
     */
    function getRider(ent: number): number;

    /**
     * @returns entity that is ridden by specified entity
     */
    function getRiding(ent: number): number;

    /**
     * Puts entity on fire
     * @param fire duration (in ticks) of the fire
     * @param force should always be true
     */
    function setFire(ent: number, fire: number, force: boolean): void;

    /**
     * @returns an object that allows to manipulate entity health
     * @deprecated Consider using [[Entity.getHealth]], [[Entity.setHealth]],
     * [[Entity.getMaxHealth]] and [[Entity.setMaxHealth]] instead
     */
    function health(ent: number): EntityHealth;

    /**
     * @returns entity's current health value
     */
    function getHealth(ent: number): number;

    /**
     * Sets entity's current health value
     * @param health health value to be set
     */
    function setHealth(ent: number, health: number): void;

    /**
     * @returns entity's maximum health value
     */
    function getMaxHealth(ent: number): number;

    /**
     * Sets entity's maximum health value
     * @param maxHealth 
     */
    function setMaxHealth(ent: number, health: number): void;

    /**
     * Sets the specified coordinates as a new position for the entity. No 
     * checks are performed
     */
    function setPosition(ent: number, x: number, y: number, z: number): void;

    /**
     * @returns entity position
     */
    function getPosition(ent: number): Vector;

    /**
     * Updates current entity position by specified coordinates
     */
    function addPosition(ent: number, x: number, y: number, z: number): void;

    /**
     * Set current entity's velocity using velocity vector
     * @param x velocity
     * @param y velocity
     * @param z velocity
     */
    function setVelocity(ent: number, x: number, y: number, z: number): void;

    /**
     * Get current entity's velocity using velocity vector
     * @returns [[Vector]] containing current entity's velocity
     */
    function getVelocity(ent: number): Vector;

    /**
     * Updates current entity's velocity by specified value
     */
    function addVelocity(ent: number, x: number, y: number, z: number): void;

    /**
     * @returns distance in blocks between the two coordinate sets
     */
    function getDistanceBetweenCoords(coords1: Vector, coords2: Vector): number;

    /**
     * @returns distance between specified entity and a fixed coordinate set
     */
    function getDistanceToCoords(ent: number, coords: Vector): number;

    /**
     * @returns distance in blocks between two entities
     */
    function getDistanceToEntity(ent1: number, ent2: number): number;

    /**
     * @returns distance between player and entity, counting only x and z values
     * (y value is ignored)
     */
    function getXZPlayerDis(ent: number): number;

    /**
     * @returns entity's look angle in radians
     */
    function getLookAngle(ent: number): LookAngle;

    /**
     * Sets specified pitch and yaw as look angle for the entity
     * @param yaw look angle yaw in radians
     * @param pitch look angle pitch in radians
     */
    function setLookAngle(ent: number, yaw: number, pitch: number): void;

    /**
     * Transforms look angle into look vector
     * @param angle look angle to transform into [[Vector]]
     * @returns transformation result
     */
    function getLookVectorByAngle(angle: LookAngle): Vector;

    /**
     * @returns look vector for the entity
     */
    function getLookVector(ent: number): Vector;

    /**
     * @returns look angle between entity and static coordinates
     */
    function getLookAt(ent: number, x: number, y: number, z: number): LookAngle;

    /**
     * Sets entity look angle to look at specified coordinates
     */
    function lookAt(ent: number, x: number, y: number, z: number): void;

    /**
     * Same as [[Entity.lookAt]] but uses Vector as param type
     * @param coords 
     */
    function lookAtCoords(ent: number, coords: Vector): void;

    /**
     * Makes entity move to the target coordinates
     * @param params additional move parameters
     */
    function moveToTarget(ent: number, target: Vector, params: MoveParams): void;

    /**
     * Makes entity move using pitch/yaw angle to determine direction
     * @param angle angle to define entity's direction
     * @param params additional move parameters
     */
    function moveToAngle(ent: number, angle: LookAngle, params: MoveParams): void;

    /**
     * Makes entity move towards its current look angle
     * @param params additional move parameters
     */
    function moveToLook(ent: number, params: MoveParams): void;

    /**
     * Retrieves entity's current movement information
     * @returns object that contains normalized moving vector, moving speed and
     * moving xz speed (with no Y coordinate)
     */
    function getMovingVector(ent: number): MovingVector;

    /**
     * Retrieves entity look angle in the form of pitch/yaw angle. No other 
     * information included to the resulting object
     */
    function getMovingAngle(ent: number): LookAngle;

    /**
     * @deprecated No longer supported
     */
    function getMovingAngleByPositions(pos1: any, pos2: any): void;

    /**
     * Retrieves nearest to the coordinates entity of the specified entity type
     * @param coords search range center coordinates
     * @param type entity type ID. Parameter is no longer supported and should 
     * be 0 in all cases
     * @param maxRange if specified, determines search radius
     */
    function findNearest(coords: Vector, type?: number, maxRange?: number): Nullable<number>;

    /**
     * Returns array of all entities' numeric ids in given range in blocks
     * @param coords search range center coordinates
     * @param maxRange determines search radius
     * @param type entity type ID. Parameter is no longer supported and should 
     * not be used
     */
    function getAllInRange(coords: Vector, maxRange: number, type?: number): number[];

    /**
     * @deprecated No longer supported
     */
    function getInventory(ent: number, handleNames?: boolean, handleEnchant?: boolean): void;

    /**
     * @param slot armor slot id, should be one of the [[Native.ArmorType]] 
     * values
     * @returns armor slot contents for entity
     */
    function getArmorSlot(ent: number, slot: number): ItemInstance;

    /**
     * Sets armor slot contents for the entity
     * @param slot armor slot id, should be one of the [[Native.ArmorType]] 
     * values
     * @param id item id
     * @param count item count
     * @param data item data
     * @param extra item extra
     */
    function setArmorSlot(ent: number, slot: number, id: number, count: number, data: number, extra?: ItemExtraData): void;

    /**
     * @param bool1 parameter is no longer supported and should not be used
     * @param bool2 parameter is no longer supported and should not be used
     * @returns entity's current carried item information
     */
    function getCarriedItem(ent: number): ItemInstance;

    /**
     * Sets current carried item for the entity
     * @param id item id
     * @param count item count
     * @param data item data
     * @param extra item extra
     */
    function setCarriedItem(ent: number, id: number, count: number, data: number, extra?: ItemExtraData): void;

    /**
     * Gets item from specified drop entity
     * @returns [[ItemInstance]] that is in the dropped item
     */
    function getDroppedItem(ent: number): ItemInstance;

    /**
     * Sets item to the specified drop entity
     * @param id item id
     * @param count item count
     * @param data item data
     * @param extra item extra
     */
    function setDroppedItem(ent: number, id: number, count: number, data: number, extra?: ItemExtraData): void;

    /**
     * @deprecated No longer supported
     */
    function getProjectileItem(projectile: number): ItemInstance;

    /**
     * Creates an object used to change entity's attributes. See {@page Attributes} page
     * for details.
     * @returns object used to manipulate entity's attributes
     */
    function getAttribute(ent: number, attribute: string): AttributeInstance;

    /**
     * Creates or gets an existing [[PathNavigation]] instance for the specified mob
     * @returns [[PathNavigation]] used to control entity's target position and
     * the way to get there
     */
    function getPathNavigation(ent: number): PathNavigation;

    /**
     * @param effectId numeric id of the potion effect,
     * one of [[Native.PotionEffect]] or [[EPotionEffect]] values.
     * @returns whether the given entity is affected by the potion effect with given numeric id
     */
    function hasEffect(entity: number, effectId: number): boolean;

    interface EffectInstance { level: number, duration: number }

    /**
     * @returns object with duration and level of the potion effect with given numeric id
     * on the given entity. These fields are set to 0, if the given effect doesn't affect
     * the given entity at the moment.
     */
    function getEffect(entity: number, effectId: number): EffectInstance;

    /**
     * Object used to build path and move mobs to the required coordinates using
     * specified parameters. All the setters return current [[PathNavigation]] 
     * instance to be able to produce chained calls. Some of the 
     */
    interface PathNavigation {
        /**
         * Builds path to the specified coordinates
         * @param speed entity movement speed
         */
        moveToCoords(x: number, y: number, z: number, speed: number): PathNavigation;

        /**
         * Builds path to the specified entity. Note that current coordinates of
         * entity are used, and are not updated
         * @param speed entity movement speed
         */
        moveToEntity(entity: number, speed: number): PathNavigation;

        /**
         * Sets function to be notified when path navigation is finished or aborted
         * @param function function to be called when navigation is finished or aborted
         */
        setResultFunction(callback: PathNavigationResultFunction): PathNavigation;

        /**
         * @returns whether the entity can pass doors
         */
        canPassDoors(): boolean;
        /**
         * Sets entity's door passing ability
         */
        setCanPassDoors(value: boolean): PathNavigation;

        isRiverFollowing(): boolean;
        setIsRiverFollowing(value: boolean): PathNavigation;

        /**
         * @returns whether the entity can open doors
         */
        canOpenDoors(): boolean;
        /**
         * Sets entity's door opening ability
         */
        setCanOpenDoors(value: boolean): PathNavigation;

        /**
         * Sets entity's sun avoiding
         */
        setAvoidSun(value: boolean): PathNavigation;

        /**
         * @returns whether the entity avoids water
         */
        getAvoidWater(): boolean;
        /**
         * Sets entity's water avoiding
         */
        setAvoidWater(value: boolean): PathNavigation;

        setEndPathRadius(value: boolean): PathNavigation;

        getCanSink(): boolean;
        setCanSink(value: boolean): PathNavigation;

        getAvoidDamageBlocks(): boolean;
        setAvoidDamageBlocks(value: boolean): PathNavigation;

        getCanFloat(): boolean;
        setCanFloat(value: boolean): PathNavigation;

        isAmphibious(): boolean;
        setIsAmphibious(value: boolean): PathNavigation;

        getAvoidPortals(): boolean;
        setAvoidPortals(value: boolean): PathNavigation;

        getCanBreach(): boolean;
        setCanBreach(value: boolean): PathNavigation;

        /**
         * @returns whether entity can jump
         */
        getCanJump(): boolean;

        /**
         * Enables or disables entity's jumping ability
         */
        setCanJump(value: boolean): PathNavigation;

        /**
         * @returns entity's speed value
         */
        getSpeed(): number;

        /**
         * Sets entity's speed value
         */
        setSpeed(value: number): PathNavigation;
    }

    /**
     * Occurs when path navigation is finished or aborted
     * @param navigation [[PathNavigation]] that the handler is attached to
     * @param result result code, one of the following:
     * 
     * 0 - success. You can call navigation.moveTo*** methods to resume path
     * 
     * 2 - entity was removed from the world
     * 
     * 4 - player left the world
     */
    interface PathNavigationResultFunction {
        (navigation: PathNavigation, result: number): void
    }

    /**
     * Class used to manipulate entity's health
     * @deprecated Consider using [[Entity.getHealth]], [[Entity.setHealth]],
     * [[Entity.getMaxHealth]] and [[Entity.setMaxHealth]] instead
     */
    class EntityHealth {
        /**
         * @returns entity's current health value
         */
        get(): number;

        /**
         * Sets entity's current health value
         * @param health health value to be set
         */
        set(health: number): void;

        /**
         * @returns entity's maximum health value
         */
        getMax(): number;

        /**
         * Sets entity's maximum health value
         * @param maxHealth 
         */
        setMax(maxHealth: number): void;
    }

    /**
     * Interface used to specify how entity should move
     */
    interface MoveParams {
        /**
         * Movement speed
         */
        speed?: number,

        /**
         * If true, entity won't change its Y velocity
         */
        denyY?: boolean,

        /**
         * Y velocity (jump speed)
         */
        jumpVel?: number
    }

    /**
     * Interface used to return entity's current moving vector and some 
     * additional data
     */
    interface MovingVector {
        /**
         * Normalized vector X coordinate
         */
        x: number,

        /**
         * Normalized vector Y coordinate
         */
        y: number,

        /**
         * Normalized vector Z coordinate
         */
        z: number,

        /**
         * Vector real length
         */
        size: number,

        /**
         * Vector real length excluding Y coordinate
         */
        xzsize: number
    }

    /**
     * Interface used to modify attribute values
     */
    interface AttributeInstance {

        /**
         * @returns current attribute's value
         */
        getValue(): number;

        /**
         * @returns attribute's maximum value
         */
        getMaxValue(): number;

        /**
         * @returns attribute's minimum value
         */
        getMinValue(): number;

        /**
         * @returns attribute's default value
         */
        getDefaultValue(): number;

        /**
         * Sets current attribute's value
         */
        setValue(value: number): void;

        /**
         * Sets attribute's maximum value
         */
        setMaxValue(value: number): void;

        /**
         * Sets attribute's minimum value
         */
        setMinValue(value: number): void;

        /**
         * Sets attribute's default value
         */
        setDefaultValue(value: number): void;
    }
}

