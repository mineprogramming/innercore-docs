declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module background {
                            export interface CustomDrawingDescription {
                                type: "custom",
                                onDraw?: (canvas: android.graphics.Canvas, scale: number) => void;
                            }
                            export class DrawCustom extends java.lang.Object implements IDrawing {
                                static class: java.lang.Class<DrawCustom>;
                                onDraw(canvas: android.graphics.Canvas, scale: number): void;
                                onSetup(scriptable: CustomDrawingDescription, style: types.UIStyle): void;
                            }
                        }
                    }
                }
            }
        }
    }
}