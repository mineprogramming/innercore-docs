declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export module resource {
                    export module runtime {
                        export class RuntimeResource extends globalThis.java.lang.Object {
                            static class: globalThis.java.lang.Class<RuntimeResource>;
                            constructor(directory: RuntimeResourceDirectory, override: ResourceOverride, name: string);
                            getOverride(): ResourceOverride;
                            getDirectory(): RuntimeResourceDirectory;
                            getName(): string;
                            getFile(): globalThis.java.io.File;
                        }
                    }
                }
            }
        }
    }
}