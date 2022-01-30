declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export module resource {
                    export class ResourceManager extends globalThis.java.lang.Object {
                        static class: globalThis.java.lang.Class<ResourceManager>;
                        readonly context: android.content.Context;
                        readonly runtimeDir: runtime.RuntimeResourceDirectory;
                        constructor(ctx: android.content.Context);
                        getAssets(): android.content.res.AssetManager;
                        addResourcePrefixes(...prefixes: string[]): void;
                        getResourceOverridePrefixes(): globalThis.java.util.List<string>;
                        addResourceProcessor(processor: processor.ResourceProcessor): void;
                        addRuntimeResourceHandler(handler: runtime.RuntimeResourceHandler): void;
                        addResourceDirectory(directory: directory.ResourceDirectory): void;
                        clear(): void;
                        getProcessedResources(resources: globalThis.java.util.List<directory.Resource>): globalThis.java.util.List<directory.Resource>;
                        getResource(path: string): globalThis.java.util.List<directory.Resource>;
                        addResourcePath(path: string): void;
                        deployAllOverrides(): void;
                    }
                }
            }
        }
    }
}