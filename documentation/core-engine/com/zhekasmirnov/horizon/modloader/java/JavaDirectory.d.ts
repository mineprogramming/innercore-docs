declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export module java {
                    export class JavaDirectory extends globalThis.java.lang.Object {
                        readonly mod: mod.Mod;
                        readonly directory: globalThis.java.io.File;
                        readonly manifest: JavaLibraryManifest;
                        constructor(mod: mod.Mod, dir: globalThis.java.io.File);
                        getName(): string;
                        getSubDirectory(path: string, createIfRequired: boolean): globalThis.java.io.File;
                        getDestinationDirectory(): globalThis.java.io.File;
                        getJarDirectory(): globalThis.java.io.File;
                        getBuildDexFile(): globalThis.java.io.File;
                        getCompiledDexFile(): globalThis.java.io.File;
                        getSourceDirectories(): string;
                        getLibraryPaths(bootPaths: globalThis.java.util.List<globalThis.java.io.File>): string;
                        getArguments(): string[];
                        isVerboseRequired(): boolean;
                        getAllSourceFiles(): string[];
                        getBootClassNames(): globalThis.java.util.List<string>;
                        addToExecutionDirectory(exdir: ExecutionDirectory, context: android.content.Context): JavaLibrary;
                        compileToClassesFile(context: android.content.Context): void;
                        getCompiledClassesFile(): globalThis.java.io.File;
                        getCompiledClassesFiles(): globalThis.java.util.List<globalThis.java.io.File>;
                        isInDevMode(): boolean;
                        setPreCompiled(prec: boolean): void;
                        isPreCompiled(): boolean;
                    }
                }
            }
        }
    }
}