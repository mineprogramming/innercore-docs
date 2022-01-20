declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module background {
                            export interface ColorDrawingDescription {
                                type: "background",
                                color?: number,
                                mode?: number,
                                colorMode?: number
                            }
                            export class DrawColor extends java.lang.Object implements IDrawing {
                                static class: java.lang.Class<DrawColor>;
                                onDraw(canvas: android.graphics.Canvas, scale: number): void;
                                onSetup(scriptable: ColorDrawingDescription, style: types.UIStyle): void;
                            }
                        }
                    }
                }
            }
        }
    }
}