declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export class GuiRenderMesh extends java.lang.Object {
                            static class: java.lang.Class<GuiRenderMesh>;
                            rx: number;
                            ry: number;
                            rz: number;
                            x: number;
                            y: number;
                            z: number;
                            draw(gl: javax.microedition.khronos.opengles.GL10): void;
                            setVertices(vertices: number[]): void;
                            setIndices(indices: number[]): void;
                            setTextureCoordinates(textureCoords: number[]): void;
                            setColors(colors: number[]): void;
                            loadBitmap(bitmap: android.graphics.Bitmap): void;
                        }
                    }
                }
            }
        }
    }
}