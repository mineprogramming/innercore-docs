declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module background {
                            export class IDrawing extends java.lang.Object {
                                static class: java.lang.Class<IDrawing>;
                                constructor();
                                constructor(impl: {
                                    onDraw(canvas: android.graphics.Canvas, scale: number): void;
                                    onSetup(scriptable: object, style: types.UIStyle): void;
                                });
                                onDraw(canvas: android.graphics.Canvas, scale: number): void;
                                onSetup(scriptable: object, style: types.UIStyle): void;
                            }
                        }
                    }
                }
            }
        }
    }
}