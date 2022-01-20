declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module mod {
                export module build {
                    /**
                     * Json configuration file reading/writing utility
                     */
                    export class Config extends java.lang.Object {
                        static class: java.lang.Class<Config>;
                        /**
                         * Creates new [[Config]] instance using specified file
                         * @param file [[java.io.File]] instance of the file to use
                         */
                        constructor(file: java.io.File);
                        /**
                         * Creates new [[Config]] instance using specified file
                         * @param path path to configuration file
                         */
                        constructor(path: string);
                        /**
                         * Writes configuration JSON to the file
                         */
                        save(): void;
                        /**
                         * @returns [[java.util.ArrayList]] instance containing
                         * all the names in the current config file 
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
                         * property is object, [[org.json.JSONArray]] instance if the property is an 
                         * array, raw type if the property is of that raw type, null otherwise
                         */
                        get<T=Nullable<Config | org.json.JSONArray | boolean | number | string>>(name: string): T;
                        /**
                         * Same as [[Config.get]]
                         */
                        access<T=Nullable<Config | org.json.JSONArray | boolean | number | string>>(name: string): T;
                        /**
                         * @param name option name, supports multi-layer calls, separated by '.'
                         * @returns boolean config value specified in config or false if no value was
                         * specified
                         */
                        getBool(name: string): boolean;
                        /**
                         * @param name option name, supports multi-layer calls, separated by '.'
                         * @returns java number object instance, containing numeric value by given name
                         * from the config, or 0 if no value was specified
                         */
                        getNumber(name: string): java.lang.Number;
                        /**
                         * @param name option name, supports multi-layer calls, separated by '.'
                         * @returns integer of value by given name from the config, or 0 if no value was specified
                         */
                        getInteger(name: string): number;
                        /**
                         * @param name option name, supports multi-layer calls, separated by '.'
                         * @returns floating point number of value by given name from the config, or 0.0 if no value was specified
                         */
                        getFloat(name: string): number;
                        /**
                         * @param name option name, supports multi-layer calls, separated by '.'
                         * @returns double number of value by given name from the config, or 0.0 if no value was specified
                         */
                        getDouble(name: string): number;
                        /**
                         * @param name option name, supports multi-layer calls, separated by '.'
                         * @returns string by given name from the config, or null if no value was specified
                         */
                        getString(name: string): Nullable<string>;
                        /**
                         * Sets config value. Do not use [[org.json.JSONObject]] instances to create 
                         * nested objects, consider using dot-separated names instead
                         * @param name option name, supports multi-layer calls, separated by '.'
                         * @param val value, may be [[org.json.JSONArray]] instance, 
                         * [[org.json.JSONObject]] instance or raw data type
                         */
                        set<T = org.json.JSONObject | org.json.JSONArray | boolean | number | string>(name: string, val: T): boolean;
                        /**
                         * @param name option name, supports multi-layer calls, separated by '.'
                         * @returns editable [[Config.ConfigValue]] instance that can be used to 
                         * manipulate this config option separately
                         */
                        getValue(path: string): Nullable<Config.ConfigValue>;
                        /**
                         * Ensures that config has all the properties the data pattern contains, if
                         * not, puts default values to match the pattern
                         * @param jsonstr string representation of JSON object representing the data pattern
                         */
                        checkAndRestore(jsonstr: string): void;
                        /**
                         * Ensures that config has all the properties the data pattern contains, if
                         * not, puts default values to match the pattern
                         * @param jsonobj javascript object representing the data pattern checkAndRestore
                         */
                        checkAndRestore(jsonobj: {[key: string]: any}): void;
                        /**
                         * Ensures that config has all the properties the data pattern contains, if
                         * not, puts default values to match the pattern
                         * @param data [[org.json.JSONObject]] instance to be used as data pattern
                         */
                        checkAndRestore(json: org.json.JSONObject): void;
                    }
                    export module Config {
                        /**
                         * Class representing config value with its path withing Config object
                         */
                        export class ConfigValue extends java.lang.Object {
                            static class: java.lang.Class<ConfigValue>;
                            /**
                             * Sets config value and saves configuration file
                             * @param value value, may be [[org.json.JSONArray]] instance, 
                             * [[org.json.JSONObject]] instance or raw data type
                             */
                            set<T = org.json.JSONArray | org.json.JSONObject | boolean | number | string>(val: T): void;
                            /**
                             * @returns config value, result is the same as the result of 
                             * [[Config.get]] call
                             */
                            get<T=Nullable<Config | org.json.JSONArray | boolean | number | string>>(): T;
                            /**
                             * @returns readable config value name
                             * representation along with class name
                             */
                            toString(): string;
                        }
                    }
                }
            }
        }
    }
}