declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export class ExecutionDirectory extends globalThis.java.lang.Object {
                    static class: globalThis.java.lang.Class<ExecutionDirectory>;
                    readonly directory: globalThis.java.io.File;
                    readonly isPackDriven: boolean;
                    constructor(dir: globalThis.java.io.File, isPackDriven: boolean);
                    addLibraryDirectory(lib: library.LibraryDirectory): void;
                    getLibByName(name: string): Nullable<library.LibraryDirectory>;
                    addJavaDirectory(directory: java.JavaDirectory): void;
                    build(context: android.content.Context, logger: runtime.logger.EventLogger): LaunchSequence;
                    clear(): void;
                }
            }
        }
    }
}