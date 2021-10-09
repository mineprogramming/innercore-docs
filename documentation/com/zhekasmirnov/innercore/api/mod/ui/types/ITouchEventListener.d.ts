declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module types {
                            export interface ITouchEventListenerJS {
                                (touchEvent: TouchEvent): void;
                            }
                            export class ITouchEventListener extends java.lang.Object {
                                static class: java.lang.Class<ITouchEventListener>;
                                constructor();
                                constructor(impl: { onTouchEvent: (event: TouchEvent) => void });
                                onTouchEvent(event: TouchEvent): void;
                            }
                        }
                    }
                }
            }
        }
    }
}