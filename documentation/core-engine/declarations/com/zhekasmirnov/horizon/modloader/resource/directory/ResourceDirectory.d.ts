declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export module resource {
                    export module directory {
                        export class ResourceDirectory extends globalThis.java.lang.Object {
                            static class: globalThis.java.lang.Class<ResourceDirectory>;
                            readonly manager: ResourceManager;
                            readonly runtimeDir: runtime.RuntimeResourceDirectory;
                            readonly mod: mod.Mod;
                            readonly directory: globalThis.java.io.File;
                            constructor(manager: ResourceManager, mod: mod.Mod, directory: globalThis.java.io.File);
                            constructor(manager: ResourceManager, directory: globalThis.java.io.File);
                            equals(obj: globalThis.java.lang.Object): boolean;
                            initialize(): void;
                            getResourceName(file: globalThis.java.io.File): string;
                            getResource(path: string): globalThis.java.util.List<Resource>;
                        }
                    }
                }
            }
        }
    }
}