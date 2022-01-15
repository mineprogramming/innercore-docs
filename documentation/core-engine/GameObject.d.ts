/**
 * Class used to create and manipulate game objects. Game objects are [[Updatable]]s 
 * that are being saved between game launches
 */
declare class GameObject {
    /**
     * Constructs a new [[GameObject]] with given params
     * @param type unique name for the game object type. Use package-like names to 
     * ensure your game object name is unique
     * @param prototype 
     */
    constructor(type: string, prototype: GameObjectPrototype);

    /**
     * Original value passed to [[GameObject.constructor]]
     */
    readonly originalName: string;

    /**
     * Creates a new game object with specified params and registers it for saving
     * and as an [[Updatable]]
     * @param args any arguments that are passed to [[GameObjectPrototype.init]]
     * function
     * @returns instantiated game object
     */
    deploy(...args: any): GameObject;

    /**
     * Destroys current game object
     */
    destroy(): void;

    /**
     * True if current GameObject was deployed, false otherwise
     */
    readonly isInstance: boolean;
}

interface GameObjectPrototype extends Updatable {
    /**
     * Function that is called when a new instance of [[GameObject]] is created,
     * the engine passes all the arguments of [[GameObject.deploy]] function to 
     * this function
     */
    init?: (...args: any) => void,
    /**
     * Function that is called when a [[GameObject]] is loaded
     */
    loaded?: () => void,

    /**
     * Any other user-defined methods and properties
     */
    [key: string]: any
}

declare namespace GameObjectRegistry {
    /**
     * Gets an array of [[GameObject]]s of specified type. 
     * @param type unique [[GameObject]] type to get all the instances of
     * @param clone if true, a new array is created to ensure the original engine's 
     * data safety
     */
    function getAllByType(type: string, clone: boolean): GameObject[];

    /**
     * Calls function of the [[GameObject]] of specified type with specified 
     * parameters
     * @param type unique [[GameObject]] type to get all the instances of
     * @param func function name as defined in [[GameObjectPrototype]] passed to
     * [[GameObject.constructor]]
     * @param params parameters to be passed to the function
     */
    function callForType(type: string, func: string, ...params: any): any;

    /**
     * Same as [[GameObjectRegistry.callForType]], though a new array is created
     * before calling functions on the game objects to ensure the original engine's
     * data safety
     */
    function callForTypeSafe(type: string, func: string, ...params: any): any;
}