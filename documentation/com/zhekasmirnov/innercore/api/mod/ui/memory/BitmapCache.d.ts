declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module memory {
                            export class BitmapCache extends java.lang.Object {
                                static class: java.lang.Class<BitmapCache>;
                                static readonly CACHE_DIR: string;
                                static init(): void;
                                static getCacheFile(name: string): java.io.File;
                                static getUseId(): number;
                                static getStackPos(id: number): number;
                                static registerWrap(wrap: BitmapWrap): void;
                                static unregisterWrap(wrap: BitmapWrap): void;
                                static writeToFile(file: java.io.File, bitmap: android.graphics.Bitmap): void;
                                static readFromFile(file: java.io.File, bitmap: android.graphics.Bitmap): void;
                                static testCaching(src: android.graphics.Bitmap): android.graphics.Bitmap;
                                static storeOldWraps(maxStackPos: number): void;
                                static immediateGC(): void;
                                static asyncGC(): void;
                            }
                        }
                    }
                }
            }
        }
    }
}