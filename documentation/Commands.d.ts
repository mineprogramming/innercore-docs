/**
 * Namespace used to manipulate minecraft commands
 */
declare namespace Commands {
    /**
     * Executes specified command
     * @param command command to be executed
     * @returns error message or null if the command was run successfully 
     */
    function exec(command: string): Nullable<string>;

    /**
     * Executes specified command using specified coordinates as command 
     * location for all relative calculations
     * @param command command to be executed
     * @returns error message or null if the command was run successfully 
     */
    function execAt(command: string, x: number, y: number, z: number): Nullable<string>;
}