declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export module java {
                    export class JavaLibraryManifest extends globalThis.java.lang.Object {
                        static class: globalThis.java.lang.Class<JavaLibraryManifest>;
                        readonly arguments: string[];
                        readonly verbose: boolean;
                        readonly sourceDirs: globalThis.java.util.List<globalThis.java.io.File>;
                        readonly libraryDirs: globalThis.java.util.List<globalThis.java.io.File>;
                        readonly libraryPaths: globalThis.java.util.List<globalThis.java.io.File>;
                        readonly bootClasses: globalThis.java.util.List<string>;
                        constructor(file: globalThis.java.io.File);
                    }
                }
            }
        }
    }
}