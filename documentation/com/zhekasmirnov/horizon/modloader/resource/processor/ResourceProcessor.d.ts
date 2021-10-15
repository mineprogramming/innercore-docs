declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export module resource {
                    export module processor {
                        export class ResourceProcessor extends globalThis.java.lang.Object {
                            static class: globalThis.java.lang.Class<ResourceProcessor>;
                            initialize(manager: ResourceManager): void;
                            process(resource: directory.Resource, resources: globalThis.java.util.Collection<directory.Resource>): void;
                            constructor();
                            constructor(impl: {
                                initialize: (manager: ResourceManager) => void;
                                process: (resource: directory.Resource, resources: globalThis.java.util.Collection<directory.Resource>) => void;
                            });
                        }
                    }
                }
            }
        }
    }
}