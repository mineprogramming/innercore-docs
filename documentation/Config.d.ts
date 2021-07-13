/**
 * Json configuration file reading/writing utility
 */
declare class Config {
    /**
     * Creates new Config instance using specified file
     * @param path path to configuration file
     */
    constructor(path: string);

    /**
     * Creates new Config instance using specified file
     * @param path java.io.File instance of the file to use
     */
    constructor(file: java.io.File);

    /**
     * Writes configuration JSON to the file
     */
    save(): void;

    /**
     * @returns java.util.ArrayList instance containing all the names in the 
     * current config file 
     */
    getNames(): java.util.ArrayList<string>;

    /**
     * Gets property from the config
     * 
     * Example: 
     * ```ts
     * config.get("generation.ore_copper.max_height");
     * ```
     * 
     * @param name option name, supports multi-layer calls, separated by '.'
     * @returns [[Config]] instance with current config as parent if the 
     * property is object, org.json.JSONArray instance if the property is an 
     * array, raw type if the property is of that raw type, null otherwise
     */
    get(name: string): Nullable<Config | org.json.JSONArray | boolean | number | string>;

    /**
     * Same as [[Config.get]]
     */
    access(name: string): Nullable<Config | org.json.JSONArray | boolean | number | string>;

    /**
     * @param name option name, supports multi-layer calls, separated by '.'
     * @return boolean config value specified in config or false if no value was
     * specified
     */
    getBool(name: string): boolean;

    /**
     * @param name option name, supports multi-layer calls, separated by '.'
     * @return number config value specified in config or 0 if no value was
     * specified
     */
    getNumber(name: string): java.lang.Number;

    /**
     * @param name option name, supports multi-layer calls, separated by '.'
     * @return string config value specified in config or null if no value was
     * specified
     */
    getString(name: string): Nullable<string>;

    /**
     * Sets config value. Do not use org.json.JSONObject instances to create 
     * nested objects, consider using dot-separated names instead
     * @param name option name, supports multi-layer calls, separated by '.'
     * @param value value, may be org.json.JSONArray instance, 
     * org.json.JSONObject instance or raw data type
     */
    set(name: string, value: org.json.JSONObject | boolean | number | string): boolean;

    /**
     * @param name option name, supports multi-layer calls, separated by '.'
     * @returns editable [[Config.ConfigValue]] instance that can be used to 
     * manipulate this config option separately
     */
    getValue(name: string): Config.ConfigValue;

    /**
     * Ensures that config has all the properties the data pattern contains, if
     * not, puts default values to match the pattern
     * @param data string representation of data pattern
     */
    checkAndRestore(data: string): void;

    /**
     * Ensures that config has all the properties the data pattern contains, if
     * not, puts default values to match the pattern
     * @param data javascript object representing the data pattern checkAndRestore
     */
    checkAndRestore(data: object): void;

    /**
     * Ensures that config has all the properties the data pattern contains, if
     * not, puts default values to match the pattern
     * @param data org.json.JSONObject instance to be used as data pattern
     */
    checkAndRestore(data: org.json.JSONObject): void;
}


declare namespace Config {
    /**
     * Class representing config value with its path withing Config object
     */
    class ConfigValue {
        /**
         * Sets config value and saves configuration file
         * @param value value, may be org.json.JSONArray instance, 
         * org.json.JSONObject instance or raw data type
         */
        set(value: org.json.JSONObject | boolean | number | string): void;

        /**
         * @returns config value, result is the same as the result of 
         * [[Config.get]] call
         */
        get(): Nullable<Config | org.json.JSONArray | boolean | number | string>;

        /**
         * @returns readable config value name representation along with class 
         * name
         */
        toString(): string;
    }
}