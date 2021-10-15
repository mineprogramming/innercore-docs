declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export module library {
                    export class LibraryManifest extends globalThis.java.lang.Object {
                        static class: globalThis.java.lang.Class<LibraryManifest>;
                        constructor(file: globalThis.java.io.File);
                        getFile(): globalThis.java.io.File;
                        getName(): string;
                        getSoName(): string;
                        getVersion(): number;
                        getDependencies(): globalThis.java.util.List<string>;
                        getInclude(): globalThis.java.util.List<string>;
                        isSharedLibrary(): boolean;
                        isShared(): boolean;
                    }
                }
            }
        }
    }
}