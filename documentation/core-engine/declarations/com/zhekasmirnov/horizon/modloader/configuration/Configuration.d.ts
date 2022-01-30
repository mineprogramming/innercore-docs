declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export module configuration {
                    export abstract class Configuration extends globalThis.java.lang.Object {
                        static class: globalThis.java.lang.Class<Configuration>;
                        abstract refresh(): void;
                        abstract get<T>(key: string, clazz: globalThis.java.lang.Class<T>): T;
                        abstract get(key: string): any;
                        abstract set(key: string, value: any): boolean;
                        abstract delete(key: string): any;
                        abstract isContainer(key: string): boolean;
                        abstract getChild(key: string): Configuration;
                        abstract isReadOnly(): boolean;
                        abstract save(): void;
                        abstract load(): void;
                        getInt(key: string): number;
                        getFloat(key: string): number;
                        getDouble(key: string): number;
                        getLong(key: string): number;
                        getString(key: string): Nullable<string>;
                        getBoolean(key: string): boolean;
                        getArray<T>(key: string): Nullable<globalThis.java.util.List<T>>;
                        checkAndRestore(json: org.json.JSONObject): void;
                        checkAndRestore(json: string): void;
                    }
                }
            }
        }
    }
}