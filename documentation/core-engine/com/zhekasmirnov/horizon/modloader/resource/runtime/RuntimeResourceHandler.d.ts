declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export module resource {
                    export module runtime {
                        export class RuntimeResourceHandler extends globalThis.java.lang.Object {
                            static class: globalThis.java.lang.Class<RuntimeResourceHandler>;
                            getResourceName(): string;
                            getResourcePath(): string;
                            handle(res: RuntimeResource): void;
                            constructor();
                            constructor(impl: {
                                getResourceName: () => string;
                                getResourcePath: () => string;
                                handle: (res: RuntimeResource) => void;
                            });
                        }
                    }
                }
            }
        }
    }
}