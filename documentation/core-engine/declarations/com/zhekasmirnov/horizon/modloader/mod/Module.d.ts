declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export module mod {
                    export class Module extends globalThis.java.lang.Object {
                        static class: globalThis.java.lang.Class<Module>;
                        static getInstance(handle: number): Module;
                        getParent(): Module;
                        getNameID(): string;
                        getType(): string;
                        isInitialized(): boolean;
                        onEvent(event: string): void;
                        isMod(): boolean;
                    }
                }
            }
        }
    }
}