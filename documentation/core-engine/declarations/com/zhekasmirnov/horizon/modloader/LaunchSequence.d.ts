declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export class LaunchSequence extends globalThis.java.lang.Object {
                    static class: globalThis.java.lang.Class<LaunchSequence>;
                    constructor(dir: ExecutionDirectory, libraries: globalThis.java.util.List<library.LibraryDirectory>, javaLibraries: globalThis.java.util.List<java.JavaLibrary>);
                    buildSequence(logger: runtime.logger.EventLogger): void;
                    loadAll(logger: runtime.logger.EventLogger): void;
                    getAllLibraries(): globalThis.java.util.List<library.LibraryDirectory>;
                }
            }
        }
    }
}