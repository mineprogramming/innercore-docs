declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module elements {
                            export interface ImageElementDescription extends BasicElementDescription {
                                type: "image",
                                width?: number, height?: number,
                                scale?: number,
                                bitmap?: BitmapTypes,
                                overlay?: BitmapTypes
                            }
                            export class UIImageElement extends UIElement {
                                static class: java.lang.Class<UIImageElement>;
                                height: number;
                                overlay: types.Texture;
                                texture: types.Texture;
                                textureScale: number;
                                width: number;
                                constructor(win: window.UIWindow, desc: ImageElementDescription);
                                onSetup<ImageElementDescription>(desc: ImageElementDescription): void;
                                isAnimated(): boolean;
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