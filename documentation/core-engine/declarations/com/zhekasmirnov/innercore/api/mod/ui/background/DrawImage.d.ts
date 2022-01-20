declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module background {
                            export interface ImageDrawingDescription {
                                type: "bitmap",
                                x?: number, y?: number,
                                width?: number,
                                height?: number,
                                scale?: number,
                                bitmap?: string
                            }
                            export class DrawImage extends java.lang.Object implements IDrawing {
                                static class: java.lang.Class<DrawImage>;
                                onDraw(canvas: android.graphics.Canvas, scale: number): void;
                                onSetup(scriptable: ImageDrawingDescription, style: types.UIStyle): void;
                            }
                        }
                    }
                }
            }
        }
    }
}