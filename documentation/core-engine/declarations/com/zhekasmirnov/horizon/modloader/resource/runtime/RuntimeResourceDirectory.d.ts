declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export module resource {
                    export module runtime {
                        export class RuntimeResourceDirectory extends globalThis.java.lang.Object {
                            static class: globalThis.java.lang.Class<RuntimeResourceDirectory>;
                            readonly resourceManager: ResourceManager;
                            readonly directory: globalThis.java.io.File;
                            constructor(manager: ResourceManager, dir: globalThis.java.io.File);
                            clear(): void;
                            addHandler(handler: RuntimeResourceHandler): void;
                            handleAll(): void;
                        }
                    }
                }
            }
        }
    }
}