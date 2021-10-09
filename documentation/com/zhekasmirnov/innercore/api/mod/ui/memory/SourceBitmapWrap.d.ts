declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module memory {
                            export class SourceBitmapWrap extends BitmapWrap {
                                static class: java.lang.Class<SourceBitmapWrap>;
                                constructor(name: string, width: number, height: number);
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