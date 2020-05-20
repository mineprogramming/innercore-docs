/**
 * Empty function used to verify Rhino functionality. Should not be called by 
 * hand
 */
declare function __debug_typecheck__(): void;

/**
 * Runs custom source in the specified context by its name. Define custom 
 * sources using *"sourceType": "custom"* for the source in your *build.config*.
 * @param name path to the executable. Can be built the way built-in source 
 * types are built
 * @param scope additional scope to be added to the current context
 */
declare function runCustomSource(name: string, scope?: object): void;

/**
 * Object containing string custom block string ids as keys and their numeric
 * ids as values
 */
declare const BlockID: object;

/**
 * Object containing string custom block string ids as keys and their numeric
 * ids as values
 */
declare const ItemID: object;

/**
 * Same as [[IMPORT]], consider using [[IMPORT]] instead 
 */
declare function importLib(name: string, value?: string): void;

/**
 * Imports library dependency. Libraries should be stored in the *"libraryDir"* 
 * directory, specified in your *build.config*. You can either import the whole
 * library or single function/value using value parameter
 * @param name library name specified in the library's EXPORT declaration
 * @param value name of the function or value you wish to import, or "*" to 
 * import the whole library. Defaults to importing the whole library
 */
declare function IMPORT(name: string, value?: string): void;

/**
 * Injects methods from C++ into the target object to use in the mod
 * @param name name of the module, as registered from native code
 * @param target target object, where all the methods from native module will be 
 * injected
 */
declare function IMPORT_NATIVE(name: string, target: object): any;

/**
 * Allows to create new JS modules imported from C++ code and use it in the mod
 * @param name name of the module, as registered from native code
 * @returns js module, implemented in native (C++) code 
 */
declare function WRAP_NATIVE(name: string): object;

/**
 * @returns current Core Engine API level
 */
declare function getCoreAPILevel(): number;

/**
 * Runs specified funciton in the main thread
 * @param func function to be run in the main thread
 */
declare function runOnMainThread(func: () => void): void;

/**
 * @returns minecraft version information in some readable form
 * 
 */
declare function getMCPEVersion(): 
/**
 * @param str string version representation, three dot-separated numbers
 * @param array array containing three version numbers
 * @param main version number, calculated as *array[0] * 17 + array[1]*
 */
{str: string, array: number[], main: number};

/**
 * 
 * @param arg 
 */
declare function alert(arg: string): any;


declare function LIBRARY(description: object): void;


declare function EXPORT(name: string, lib: any): void;