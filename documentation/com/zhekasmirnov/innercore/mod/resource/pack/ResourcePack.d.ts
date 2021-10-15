declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module mod {
                export module resource {
                    export module pack {
                        export class ResourcePack extends java.lang.Object implements IResourcePack {
                            static class: java.lang.Class<ResourcePack>;
                            isLoaded: boolean;
                            resourceFiles: java.util.ArrayList<types.ResourceFile>;
                            constructor(dir: string);
                            getAbsolutePath(): string;
                            getPackName(): string;
                            readAllFiles(): void;
                        }
                    }
                }
            }
        }
    }
}