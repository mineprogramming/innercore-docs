/**
 * Module used to save data between world sessions
 */
declare namespace Saver {
    /**
     * Creates saves scope, a universal data storage container. This storage 
     * container should be used whenever you need to save some data between 
     * world sessions. If you want to store primitives, use an object to wrap 
     * them
     * 
     * Example:
     * ```ts
     * var thirst = 20;
     * Saver.addSavesScope("thirst", 
     *     function read(scope){
     *         thirst = scope? scope.thirst: 20;
     *     },
     *     
     *     function save(){
     *         return {"value": thirst};
     *     }
     * );
     * ```
     * @param name saves scope name
     * @param loadFunc function used to load saved data
     * @param saveFunc function used to save data
     */
    function addSavesScope(name: string, loadFunc: LoadScopeFunc, saveFunc: SaveScopeFunc): void;

    /**
     * Registers object as scope saver
     * @param name saves scope name
     * @param saver object that implements [[Saver.ScopeSaver]] interface and 
     * can be loaded and saved via its functions calls
     */
    function registerScopeSaver(name: string, saver: any): ScopeSaver;

    function registerObjectSaver(name: string, saver: any): void;

    function registerObject(obj: any, saverId: any): void;

    function setObjectIgnored(obj: any, ignore: any): void;

    /**
     * Function that returns object representing created scope. No 
     * primitives are allowed as return value
     */
    type SaveScopeFunc =
        /**
         * @returns saved data
         */
        () => object;

    /**
     * Function that loads data from scope
     */
    type LoadScopeFunc =
        /**
         * @param scope data 
         */
        (scope: Nullable<object>) => void;

    /**
     * Interface that should be implemented to pass the object as 
     * [[Saver.registerScopeSaver]] parameter
     */
    interface ScopeSaver {
        /**
         * Function used to load saved data
         */
        read: LoadScopeFunc,

        /**
         * Function used to save data
         */
        save: SaveScopeFunc
    }
}