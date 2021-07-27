/**
 * Module used to create and manage Updatables. Updatables provide the proper
 * way to manage objects that update their state every tick. Updatables may not 
 * be notified every tick, if there are too many, to avoid user interface 
 * freezes
 */
declare namespace Updatable {
    /**
     * Adds object to updatables list
     * @param obj object to be added to updatables list
     */
	function addUpdatable(obj: Updatable): any;
	
	/**
     * Adds object to updatables list
     * @param obj object to be added to updatables list
     */
    function addLocalUpdatable(obj: Updatable): any;

    /**
     * @returns java.util.ArrayList instance containing all defined 
     * [[Updatable]] objects
     */
    function getAll(): java.util.ArrayList<Updatable>;

    /**
     * @returns current thread tick number
     */
    function getSyncTime(): number;
}

/**
 * Updatable is an object that is notified every tick via its 
 * [[Updatable.update]] method call
 */
interface Updatable {
    /**
     * Called every tick
     */
    update: () => void;

    /**
     * Once true, the object will be removed from updatables list and will no 
     * longer receive update calls
     */
    remove?: boolean;

    /**
     * Any other user-defined properties
     */
    [key: string]: any;
}
