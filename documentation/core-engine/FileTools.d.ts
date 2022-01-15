/**
 * Module that provides methods to work with android file system
 */
declare namespace FileTools {
    /**
     * Defines path to android /mnt directory
     */
    const mntdir: string;

    /**
     * Defines user directory path, ends with "/"
     */
    const root: string;

    /**
     * Defines mods folder path, ends with "/"
     */
    const moddir: string;

    /**
     * Creates directory by its home-relative or absolute path, if one of the 
     * parent directories doesn't exist, creates them
     * @param dir path to the new directory
     */
    function mkdir(dir: string): void;

    /**
     * Creates CoreEngine working directories. Called by CoreEngine and should 
     * not be called by end user
     */
    function mkworkdirs(): void;

    /**
     * Converts home-relative path to absolute
     * @param path input path
     * @returns input string if input string is an absolute path, an absolute 
     * path if input string is a home-relative path
     */
    function getFullPath(path: string): string;

    /**
     * Verifies if specified home-relative or absolute path exists
     * @param path path to be verified
     * @returns true, if specified path exists, false otherwise
     */
    function isExists(path: string): boolean;

    /**
     * Writes text to the file
     * @param file home-relative or absolute path to the file
     * @param text text to be written to the file
     * @param add if true, appends text to the file, overrides it otherwise. 
     * Default value is false
     */
    function WriteText(file: string, text: string, add?: boolean): void;

    /**
     * Reads text from file
     * @param file home-relative or absolute path to the file
     * @returns file contents or null if file does not exist or not accessible
     */
    function ReadText(file: any): Nullable<string>;

    /**
     * Writes bitmap to png file
     * @param file home-relative or absolute path to the file
     * @param bitmap android.graphics.Bitmap object of the bitmap to be written
     * to the file
     */
    function WriteImage(file: string, bitmap: android.graphics.Bitmap): void;

    /**
     * Reads bitmap from file
     * @param file home-relative or absolute path to the file
     * @returns android.graphics.Bitmap object of the bitmap that was read from
     * file or null if file does not exist or is not accessible
     */
    function ReadImage(file: string): Nullable<android.graphics.Bitmap>;

    /**
     * Reads string from asset by its full name
     * @param name asset name
     * @returns asset contents or null if asset doesn't exist
     */
    function ReadTextAsset(name: string): string;

    /**
     * Reads bitmap from asset by its full name
     * @param name asset name
     * @returns android.graphics.Bitmap object of the bitmap that was read from
     * asset or null, if asset doesn't exist
     */
    function ReadImageAsset(name: string): Nullable<android.graphics.Bitmap>;

    /**
     * Reads bytes array from assets
     * @param name asset name
     * @returns java array of bytes read from assets or null if asset doesn't 
     * exist
     */
    function ReadBytesAsset(name: string): native.Array<jbyte>;

    /**
     * Lists children directories for the specified path
     * @param path home-relative or absolute path to the file
     * @returns array of java.io.File instances of listed directories
     */
    function GetListOfDirs(path: string): java.io.File[];

    /**
     * Lists files in the specified directory
     * @param path path to directory to look for files in
     * @param ext extension of the files to include to the output. Use empty 
     * string to include all files
     * @returns array of java.io.File instances that match specified extension
     */
    function GetListOfFiles(path: string, ext: string): java.io.File[];

    /**
     * Reads file as key:value pairs
     * @param dir home-relative or absolute path to the file
     * @param specialSeparator separator between key and value, ":" by default
     * @returns object containing key:value pairs from file
     */
    function ReadKeyValueFile(dir: string, specialSeparator?: string): {
        [key: string]: string
    };

    /**
     * Writes key:value pairs to the file
     * @param dir home-relative or absolute path to the file
     * @param data object to be written to the file as a set of key:value pairs
     * @param specialSeparator separator between key and value, ":" by default
     */
    function WriteKeyValueFile(dir: string, data: object, specialSeparator?: string): void;

    /**
     * Reads file as JSON
     * @param dir home-relative or absolute path to the file
     * @returns value read from JSON file
     */
    function ReadJSON(dir: string): any;

    /**
     * Writes object to file as JSON
     * @param dir home-relative or absolute path to the file
     * @param obj object to be written to the file as JSON
     * @param beautify if true, output JSON is beautified
     */
    function WriteJSON(dir: string, obj: any, beautify: boolean): void;
}