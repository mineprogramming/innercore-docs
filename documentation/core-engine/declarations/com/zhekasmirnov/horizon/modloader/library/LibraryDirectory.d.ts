declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export module library {
                    export class LibraryDirectory extends globalThis.java.lang.Object {
                        static class: globalThis.java.lang.Class<LibraryDirectory>;
                        readonly directory: globalThis.java.io.File;
                        readonly manifest: LibraryManifest;
                        readonly makeFile: LibraryMakeFile;
                        readonly soFile: globalThis.java.io.File;
                        constructor(mod: mod.Mod, directory: globalThis.java.io.File);
                        constructor(directory: globalThis.java.io.File);
                        isInDevMode(): boolean;
                        isPreCompiled(): boolean;
                        isSharedLibrary(): boolean;
                        getVersionCode(): number;
                        getName(): string;
                        getSoFileName(): string;
                        getIncludeDirs(): globalThis.java.util.List<globalThis.java.io.File>;
                        getDependencyNames(): globalThis.java.util.List<string>;
                        getExecutableFile(): globalThis.java.io.File;
                        getLibrary(): Library;
                        compileToTargetFile(directory: ExecutionDirectory, context: android.content.Context, target: globalThis.java.io.File): void;
                        setPreCompiled(pre: boolean): void;
                        addToExecutionDirectory(dir: ExecutionDirectory, context: android.content.Context, target: globalThis.java.io.File): void;
                        loadExecutableFile(): void;
                        hashCode(): number;
                    }
                }
            }
        }
    }
}