declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module mod {
                export module resource {
                    export module pack {
                        export class IResourcePack extends java.lang.Object {
                            static class: java.lang.Class<IResourcePack>;
                            getAbsolutePath(): string;
                            getPackName(): string;
                            constructor();
                            constructor(impl: {
                                getAbsolutePath: () => string;
                                getPackName: () => string;
                            });
                        }
                    }
                }
            }
        }
    }
}