/**
 * Java object of the mod, contains some useful values and methods
 */
declare var __mod__: Mod.ModJsAdapter;

/**
 * Mod name
 */
declare var __name__: string;

/**
 * Full path to the mod's directory, ends with "/"
 */
declare var __dir__: string;

/**
 * Main mod configuration manager, settings are stored in config.json file. For
 * more information about config.json, see {@page Mod Configuration Files}
 */
declare var __config__: Config;

/**
 * Full path to current Horizon pack directory
 */
declare var __packdir__: string;

/**
 * Full path to current Inner Core modpack directory
 */
declare var __modpack__: ModPack.ModPackJsAdapter;
