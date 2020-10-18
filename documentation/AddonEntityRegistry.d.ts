/**
 * Module used to manage custom entities added via add-ons
 */
declare namespace AddonEntityRegistry {
    /**
     * Spawns an entity defined via add-on on the specified coordinates
     * @param nameID entity name id, as defined from add-on
     */
    function spawn(x: number, y: number, z: number, nameID: string): number;

    /**
     * @returns add-on entity information by entity id
     * @param entity 
     */
    function getEntityData(entity: number): AddonEntity;


    interface AddonEntity {
        /**
         * Entity unique id
         */
        readonly id: number,

        /**
         * Add-on defined entity name id
         */
        readonly type: string,

        /**
         * Executes command with the entity
         * @param command command to be executed
         * @returns error message or null if the command was run successfully 
         */
        exec(command: string): Nullable<string>;

        /**
         * Executes command with the entity on the specified coordinates
         * @param command command to be executed
         * @returns error message or null if the command was run successfully 
         */
        execAt(command: string, x: number, y: number, z: number): Nullable<string>;
    }
}