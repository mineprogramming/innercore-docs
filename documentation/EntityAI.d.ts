/**
 * Class used to create new entity AI types
 */
declare class EntityAIClass implements EntityAIClass.EntityAIPrototype {
    /**
     * Creates new entity AI type
     * @param customPrototype AI type prototype
     */
    constructor(customPrototype: EntityAIClass.EntityAIPrototype);

    /**
     * Sets execution timer time in ticks. AI will be executed specified 
     * number of ticks
     * @param timer execution time in ticks
     */
    setExecutionTimer(timer: number): void;

    /**
     * Resets execution timer so that AI is executed with no time limits
     */
    removeExecutionTimer(): void;


    /**
     * If set to true, it is an instance of AI type, else the pattern 
     * (pattern should not be modified directly, AI controller calls 
     * instantiate to create instances of AI type)
     * 
     * TODO: add link to AI controller type
     */
    isInstance: boolean;

    /**
     * TODO: determine type
     */
    parent: any;

    /**
     * Id of the entity that uses this AI type instance or null if it is 
     * the pattern
     */
    entity?: number;

    /**
     * Method that is called to create AI type instance using current 
     * instance as pattern
     */
    instantiate(parent: any, name: string): EntityAIClass;

    /**
     * Occurs when entity this instance is assigned to this AI type 
     * instance, if you override this method, be sure to assign entity 
     * to [[EntityAIClass.EntityAIPrototype]]
     */
    aiEntityChanged(entity: number): void;

    /**
     * Finishes AI execution and disables it in parent controller
     */
    finishExecution(): void;

    /**
     * Changes own priority in parent's controller
     */
    changeSelfPriority(priority: number): void;

    /**
     * Enables any AI by its name in the controller
     * @param name AI name to be enables
     * @param priority priority to be set to the enabled AI
     * @param extra some extra data passed to 
     */
    enableAI(name: string, priority: number, extra: any): void;

    /**
     * Disables any AI by its name in the controller
     * @param name AI name to be disabled
     */
    disableAI(name: string): void;

    /**
     * Sets any AI priority by its name in the controller
     * @param name AI name to change priority
     * @param priority priority to be set to the AI
     */
    setPriority(name: string, priority: number): void;

    /**
     * Gets any AI object by its name from the current controller
     * @param name AI name
     */
    getAI(name: string): EntityAIClass;

    /**
     * Gets any AI priority from the current controller by AI name
     * @param name AI name
     */
    getPriority(name: string): number;

    /**
     * @returns AI type's default name
     */
    setParams(params: object): void;

    /**
     * All the parameters of the AI instance
     */
    params: object;

    /**
     * Object containing the state of the AI type
     */
    data: object;
}

declare namespace EntityAIClass {
    /**
     * Object used to register entity AI prototypes
     */
    interface EntityAIPrototype {
        /**
         * @returns AI type's default priority
         */
        getDefaultPriority?(): number,

        /**
         * @returns AI type's default name
         */
        getDefaultName?(): string,

        /**
         * Default parameters set
         */
        params?: object,

        /**
         * Called when AI type execution starts
         * @param extra additional data passed from [[EntityAIClass.enableAI]] 
         * method 
         */
        executionStarted?(extra?: any): void,

        /**
         * Called when AI type execution ends
         */
        executionEnded?(): void,

        /**
         * Called when AI type execution is paused
         */
        executionPaused?(): void,

        /**
         * Called when AI type execution is resumed
         */
        executionResumed?(): void,

        /**
         * Defines main logic of the AI type
         */
        execute?(): void,

        /**
         * Object containing the state of the AI type
         */
        data?: object,

        /**
         * Called when entity is attacked by player
         * @param entity player that attacked this entity
         */
        attackedBy?(attacker: number): void;

        /**
         * Called when entity gets hurt
         * @param attacker entity that damaged this entity, or -1 if damage 
         * source is not an entity
         * @param damage amount of damage
         */
        hurtBy?(attacker: number, damage: number): void;

        /**
         * Called when a projectile hits the entity
         * @param projectile projectile entity id
         */
        projectileHit?(projectile: number): void;

        /**
         * Called when entity is dead
         * @param attacker entity that damaged this entity, or -1 if damage 
         * source is not an entity
         */
        death?(attacker: number): void;
    }
}

/**
 * A set of predefined entity AI types
 */
declare namespace EntityAI {
    /**
     * Simple idle AI type, entity just does nothing
     */
    const Idle: EntityAIClass;

    /**
     * Follow AI type, entity follows its target. Use another AI type to set 
     * target for this AI type
     * 
     * @params **speed:** *number* entity movement speed when AI is executed
     * @params **jumpVel:** *number* jump (y) velocity
     * @params **rotateSpeed:** *number* entity rotation speed
     * @params **rotateRatio:** *number* how long will be the rotation path
     * @params **rotateHead:** *boolean* if true, entity turns its head to the target
     * @params **denyY:** *boolean* if true, entity won't change its Y velocity
     * 
     * @data **target:** [[Vector]] coordinates used as a target
     * @data **targetEntity:** *number* entity used as a target. If specified, 
     * target data is ignored
     */
    const Follow: EntityAIClass;

    /**
     * Panic AI type, entity just rushes around
     * 
     * @params **speed:** *number* entity movement speed when AI is executed
     * @params **angular_speed:** *number* entity speed when turning
     * 
     */
    const Panic: EntityAIClass;

    /**
     * Wander AI type, entity walks around making pauses
     * 
     * @params **speed:** *number* entity movement speed when AI is executed
     * @params **angular_speed:** *number* entity speed when turning
     * @params **delay_weight:** *number* part of the time entity is making 
     * pause
     * 
     */
    const Wander: EntityAIClass;

    /**
     * Attack AI type, entity causes damage to the target entity
     * 
     * @params **attack_damage:** *number* damage amount
     * @params **attack_range:** *number* damage radius
     * @params **attack_rate:** *number* time between to attacks in ticks
     * 
     * @data **target:** target entity
     */
    const Attack: EntityAIClass;

    /**
     * Swim AI type, if the entity is in water, it swims
     * 
     * @params **velocity:** *number* swimming speed
     */
    const Swim: EntityAIClass;

    /**
     * Panic AI watcher type, controls entity panic behavior after getting hurt
     * 
     * @params **panic_time:** *number* time the entity will be in panic
     * @params **priority_panic:** *number* panic AI priority when entity should
     * be in panic
     * @params **priority_default:** *number* panic AI priority when entity
     * should not be in panic
     * @params **name:** *number* name of the panic AI controller
     */
    const PanicWatcher: EntityAIClass;
}