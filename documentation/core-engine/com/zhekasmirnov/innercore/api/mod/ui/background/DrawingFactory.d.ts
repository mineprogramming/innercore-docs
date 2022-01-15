declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module background {
                            export type StandardDrawingTypes =
                                ColorDrawingDescription |
                                CustomDrawingDescription |
                                FrameDrawingDescription |
                                ImageDrawingDescription |
                                LineDrawingDescription |
                                TextDrawingDescription;
                            export class DrawingFactory extends java.lang.Object {
                                static class: java.lang.Class<DrawingFactory>;
                                static put<T extends IDrawing>(name: string, element: java.lang.Class<T>): void;
                                static construct(desc: StandardDrawingTypes, style: types.UIStyle): Nullable<IDrawing>;
                            }
                        }
                    }
                }
            }
        }
    }
}