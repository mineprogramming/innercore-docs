declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export class TextureSource extends java.lang.Object {
                            static class: java.lang.Class<TextureSource>;
                            loadAllStandartAssets(): void;
                            put(name: string, bmp: android.graphics.Bitmap): void;
                            get(name: string): android.graphics.Bitmap;
                            getSafe(name: string): android.graphics.Bitmap;
                            loadFile(file: java.io.File, namePrefix: string): void;
                            loadAsset(name: string): void;
                            loadDirectory(dir: java.io.File): void;
                            loadDirectory(dir: java.io.File, namePrefix: string): void;
                        }
                    }
                }
            }
        }
    }
}