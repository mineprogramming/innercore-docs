declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module background {
                            export interface LineDrawingDescription {
                                type: "line",
                                x1?: number, y1?: number, x2?: number, y2?: number,
                                color?: number, width?: number
                            }
                            export class DrawLine extends java.lang.Object implements IDrawing {
                                static class: java.lang.Class<DrawLine>;
                                onDraw(canvas: android.graphics.Canvas, scale: number): void;
                                onSetup(scriptable: LineDrawingDescription, style: types.UIStyle): void;
                            }
                        }
                    }
                }
            }
        }
    }
}