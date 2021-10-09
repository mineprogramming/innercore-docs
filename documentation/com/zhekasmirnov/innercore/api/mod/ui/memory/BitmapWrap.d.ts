declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module memory {
                            export abstract class BitmapWrap extends java.lang.Object {
                                static class: java.lang.Class<BitmapWrap>;
                                static readonly MISSING_BITMAP: android.graphics.Bitmap;
                                abstract resize(x: number, y: number): BitmapWrap;
                                abstract restore(): boolean;
                                abstract store(): boolean;
                                constructor();
                                storeIfNeeded(): void;
                                restoreIfNeeded(): void;
                                getWidth(): number;
                                getHeight(): number;
                                getConfig(): android.graphics.Bitmap.Config;
                                getStackPos(): number;
                                get(): android.graphics.Bitmap;
                                isRecycled(): boolean;
                                recycle(): void;
                                removeCache(): void;
                                getResizedCache(width: number, height: number): android.graphics.Bitmap;
                                static wrap(bmp: android.graphics.Bitmap): BitmapWrap;
                                static wrap(name: string, width: number, height: number): BitmapWrap;
                                static wrap(name: string): BitmapWrap;
                            }
                        }
                    }
                }
            }
        }
    }
}