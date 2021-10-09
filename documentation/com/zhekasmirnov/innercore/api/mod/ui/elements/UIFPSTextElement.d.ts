declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module elements {
                            export interface FPSTextElementDescription extends BasicElementDescription {
                                type: "fps",
                                font?: types.FontDescription,
                                multiline?: boolean,
                                format?: boolean,
                                formatMaxCharsPerLine?: number,
                                text?: string,
                                interpolate?: boolean,
                                period?: number
                            }
                            export class UIFPSTextElement extends UITextElement {
                                static class: java.lang.Class<UIFPSTextElement>;
                                constructor(win: window.UIWindow, desc: FPSTextElementDescription);
                                onSetup<FPSTextElementDescription>(desc: FPSTextElementDescription): void;
                                onDraw(canvas: android.graphics.Canvas, scale: number): void;
                            }
                        }
                    }
                }
            }
        }
    }
}