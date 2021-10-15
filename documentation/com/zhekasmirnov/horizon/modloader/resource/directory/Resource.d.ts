declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export module resource {
                    export module directory {
                        export class Resource extends globalThis.java.lang.Object {
                            static class: globalThis.java.lang.Class<Resource>;
                            static readonly DEFAULT_RESOURCE_PACK = "resource_packs/vanilla/";
                            static readonly RESOURCE_INDEX_SEPARATOR = "_";
                            readonly directory: ResourceDirectory;
                            readonly file: globalThis.java.io.File;
                            constructor(dir: ResourceDirectory, file: globalThis.java.io.File, path: string);
                            constructor(dir: ResourceDirectory, file: globalThis.java.io.File);
                            getPath(): string;
                            getPathWithIndex(): string;
                            getRealPath(): string;
                            getPathWithoutExtension(): string;
                            getAtlasPath(): string;
                            getName(): string;
                            getNameWithoutExtension(): string;
                            getNameWithIndex(): string;
                            getRealName(): string;
                            hasIndex(): boolean;
                            getIndex(): number;
                            getExtension(): string;
                            getMeta(): ResourceMeta;
                            getLink(path: string): Resource;
                            addOverrides(overrides: globalThis.java.util.List<ResourceOverride>): void;
                        }
                    }
                }
            }
        }
    }
}