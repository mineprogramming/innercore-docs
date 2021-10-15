declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export module library {
                    export class Library extends globalThis.java.lang.Object {
                        static class: globalThis.java.lang.Class<Library>;
                        static load(path: string): Library;
                        getResult(): number;
                        refreshModuleList(): void;
                        getModules(): globalThis.java.util.List<mod.Module>;
                    }
                }
            }
        }
    }
}