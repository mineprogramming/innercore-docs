declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module elements {
                            export interface ScaleElementDescription extends BasicElementDescription {
                                type: "scale",
                                scale?: number,
                                direction?: number,
                                invert?: boolean,
                                pixelate?: boolean,
                                bitmap?: string,
                                width?: number, height?: number,
                                background?: string,
                                backgroundOffset?: { x?: number, y?: number },
                                overlay?: string,
                                overlayOffset?: { x?: number, y?: number },
                                value?: number
                            }
                            export class UIScaleElement extends UIElement {
                                static class: java.lang.Class<UIScaleElement>;
                                static readonly DIRECTION_DOWN: number;
                                static readonly DIRECTION_LEFT: number;
                                static readonly DIRECTION_RIGHT: number;
                                static readonly DIRECTION_UP: number;
                                constructor(win: window.UIWindow, desc: ScaleElementDescription);
                                onSetup<ScaleElementDescription>(desc: ScaleElementDescription): void;
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