declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module elements {
                            export interface TextElementDescription extends BasicElementDescription {
                                type: "text",
                                font?: types.FontDescription,
                                multiline?: boolean,
                                format?: boolean,
                                formatMaxCharsPerLine?: number,
                                text?: string
                            }
                            export class UITextElement extends UIElement {
                                static class: java.lang.Class<UITextElement>;
                                constructor(win: window.UIWindow, desc: TextElementDescription);
                                onSetup<TextElementDescription>(desc: TextElementDescription): void;
                                onDraw(canvas: android.graphics.Canvas, scale: number): void;
                                onBindingUpdated<T>(name: string, val: T): void;
                            }
                        }
                    }
                }
            }
        }
    }
}