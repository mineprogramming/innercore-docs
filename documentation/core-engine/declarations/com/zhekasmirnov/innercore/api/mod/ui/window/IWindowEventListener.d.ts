declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module window {
                            export class IWindowEventListener extends java.lang.Object {
                                static class: java.lang.Class<IWindowEventListener>;
                                constructor(implementation: { 
                                    onClose(win: UIWindow): void;
                                    onOpen(win: UIWindow): void;
                                });
                                onClose(win: UIWindow): void;
                                onOpen(win: UIWindow): void;
                            }
                        }
                    }
                }
            }
        }
    }
}