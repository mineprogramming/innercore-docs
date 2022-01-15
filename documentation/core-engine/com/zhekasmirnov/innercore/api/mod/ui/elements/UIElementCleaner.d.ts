declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module elements {
                            export class UIElementCleaner extends java.lang.Object {
                                static class: java.lang.Class<UIElementCleaner>;
                                element: UIElement;
                                rect: android.graphics.Rect;
                                constructor(element: UIElement);
                                clone(): UIElementCleaner;
                                set(rect: android.graphics.Rect): void;
                                clean(canvas: android.graphics.Canvas, scale: number): void;
                                debug(canvas: android.graphics.Canvas, scale: number): void;
                            }
                        }
                    }
                }
            }
        }
    }
}