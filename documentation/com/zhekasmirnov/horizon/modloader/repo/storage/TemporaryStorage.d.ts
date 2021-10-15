declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export module repo {
                    export module storage {
                        export class TemporaryStorage extends globalThis.java.lang.Object {
                            static class: globalThis.java.lang.Class<TemporaryStorage>;
                            constructor(dir: globalThis.java.io.File);
                            allocate(key: string): globalThis.java.io.File;
                            recycle(key: string): boolean;
                        }
                    }
                }
            }
        }
    }
}