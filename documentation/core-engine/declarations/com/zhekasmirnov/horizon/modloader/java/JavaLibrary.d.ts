declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export module java {
                    export class JavaLibrary extends globalThis.java.lang.Object {
                        static class: globalThis.java.lang.Class<JavaLibrary>;
                        constructor(dir: JavaDirectory, dexFile: globalThis.java.io.File);
                        constructor(dir: JavaDirectory, dexFiles: globalThis.java.util.List<globalThis.java.io.File>);
                        getDirectory(): JavaDirectory;
                        getDexFiles(): globalThis.java.util.List<globalThis.java.io.File>;
                        isInitialized(): boolean;
                        initialize(): void;
                    }
                }
            }
        }
    }
}