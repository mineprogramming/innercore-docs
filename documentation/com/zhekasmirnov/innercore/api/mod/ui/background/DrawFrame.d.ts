declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module background {
                            export interface FrameDrawingDescription {
                                type: "frame",
                                bitmap?: string,
                                sides?: boolean[],
                                x?: number,
                                y?: number,
                                scale?: number,
                                width?: number, height?: number,
                                color?: number,
                                bg?: number
                            }
                            export class DrawFrame extends java.lang.Object implements IDrawing {
                                static class: java.lang.Class<DrawFrame>;
                                onDraw(canvas: android.graphics.Canvas, scale: number): void;
                                onSetup(scriptable: FrameDrawingDescription, style: types.UIStyle): void;
                            }
                        }
                    }
                }
            }
        }
    }
}