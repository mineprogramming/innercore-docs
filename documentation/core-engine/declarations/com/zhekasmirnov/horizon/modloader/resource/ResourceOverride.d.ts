declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export module resource {
                    export class ResourceOverride extends globalThis.java.lang.Object {
                        static class: globalThis.java.lang.Class<ResourceOverride>;
                        readonly path: string;
                        readonly override: string;
                        constructor(path: string, override: string);
                        constructor(path: string, override: globalThis.java.io.File);
                        constructor(resource: directory.Resource, override: string);
                        constructor(resource: directory.Resource, override: globalThis.java.io.File);
                        constructor(resource: directory.Resource);
                        isActive(): boolean;
                        deploy(): boolean;
                        deploy(prefixes: globalThis.java.util.List<string>): boolean;
                        deploy(prefixes: string[]): boolean;
                        remove(): boolean;
                    }
                }
            }
        }
    }
}