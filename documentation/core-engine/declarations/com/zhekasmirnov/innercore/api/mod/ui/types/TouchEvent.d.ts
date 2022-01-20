declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module types {
                            export class TouchEvent extends java.lang.Object {
                                static class: java.lang.Class<TouchEvent>;
                                _x: number;
                                _y: number;
                                downX: number;
                                downY: number;
                                localX: number;
                                localY: number;
                                type: TouchEventType;
                                x: number;
                                y: number;
                                constructor(listener: ITouchEventListener | ITouchEventListenerJS);
                                hasMovedSinceLastDown(): boolean;
                                update(event: android.view.MotionEvent): void;
                                preparePosition(win: window.UIWindow, rect: android.graphics.Rect): void;
                                posAsScriptable(): { x: number, y: number };
                                localPosAsScriptable(): { x: number, y: number };
                            }
                        }
                    }
                }
            }
        }
    }
}