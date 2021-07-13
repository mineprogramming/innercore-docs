/**
 * Defines some useful methods for debugging
 */
declare namespace Debug {
    /**
     * @returns current system time in milliseconds
     */
    function sysTime(): number;

    /**
     * Spawns vanilla debug particle on the specified coordinates
     * @param id particle type id, should be one of the [[Native.ParticleType]]
     * @param vx x velocity
     * @param vy y velocity
     * @param vz y velocity
     * @param data additional particles data
     */
    function addParticle(id: number, x: number, y: number, z: number, vx: number, vy: number, vz: number, data: number): void;

    /**
     * Writes general debug message (in green) to the chat
     * @param message message to be displayed
     */
    function message(message: string): void;

    /**
     * Writes warning debug message (in gold) to the chat
     * @param message message to be displayed
     */
    function warning(message: string): void;

    /**
     * Writes error debug message (in red) to the chat
     * @param message message to be displayed
     */
    function error(message: string): void;

    /**
     * Writes several comma-separated values to the chat as a general debug 
     * message, serializing javascript objects if possible
     * @param args messages to be displayed
     */
    function m(...args: any[]): void;

    /**
     * Writes several values in JSON format to the copyable alert window text view,
     * serializing javascript objects if possible
     * @param args messages to be displayed
     */
    function big(...args: any[]): void;

    /**
     * Displays an AlertDialog with given title and bitmap
     * @param bitmap android.graphics.Bitmap object of the bitmap to be 
     * displayed
     * @param title title of the AlertDialog
     */
    function bitmap(bitmap: android.graphics.Bitmap, title: string): void;
}