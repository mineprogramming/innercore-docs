declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module background {
                            export interface TextDrawingDescription {
                                type: "text",
                                x?: number, y?: number,
                                text?: string,
                                font?: types.FontDescription
                            }
                            export class DrawText extends java.lang.Object implements IDrawing {
                                static class: java.lang.Class<DrawText>;
                                onDraw(canvas: android.graphics.Canvas, scale: number): void;
                                onSetup(scriptable: TextDrawingDescription, style: types.UIStyle): void;
                            }
                        }
                    }
                }
            }
        }
    }
}