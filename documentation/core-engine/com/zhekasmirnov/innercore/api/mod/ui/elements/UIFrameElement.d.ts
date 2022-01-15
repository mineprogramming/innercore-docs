declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module elements {
                            export interface FrameElementDescription extends BasicElementDescription {
                                type: "frame",
                                bitmap?: BitmapTypes,
                                width?: number, height?: number,
                                scale?: number,
                                color?: number,
                                sides?: types.Sides
                            }
                            export class UIFrameElement extends UIElement {
                                static class: java.lang.Class<UIFrameElement>;
                                constructor(win: window.UIWindow, desc: FrameElementDescription);
                                onSetup<FrameElementDescription>(desc: FrameElementDescription): void;
                                onDraw(canvas: android.graphics.Canvas, scale: number): void;
                                onBindingUpdated<T>(name: string, val: T): void;
                                onRelease(): void;
                            }
                        }
                    }
                }
            }
        }
    }
}