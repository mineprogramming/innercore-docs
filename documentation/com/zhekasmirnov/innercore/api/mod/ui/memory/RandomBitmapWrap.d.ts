declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module memory {
                            export class RandomBitmapWrap extends BitmapWrap {
                                static class: java.lang.Class<RandomBitmapWrap>;
                                constructor(bitmap: android.graphics.Bitmap);
                                store(): boolean;
                                restore(): boolean;
                                resize(width: number, height: number): BitmapWrap;
                                recycle(): void;
                            }
                        }
                    }
                }
            }
        }
    }
}