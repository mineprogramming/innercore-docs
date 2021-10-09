declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module types {
                            export interface Sides { up?: boolean, down?: boolean, left?: boolean, right?: boolean }
                            export class FrameTextureSource extends java.lang.Object {
                                static class: java.lang.Class<FrameTextureSource>;
                                static getFrameTexture(name: string, style: UIStyle): FrameTexture;
                                static scriptableAsSides(obj: Sides): [boolean, boolean, boolean, boolean];
                            }
                        }
                    }
                }
            }
        }
    }
}