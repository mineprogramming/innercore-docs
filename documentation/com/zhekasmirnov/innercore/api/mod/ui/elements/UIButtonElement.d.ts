declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module elements {
                            export interface ButtonElementDescription extends BasicElementDescription {
                                type: "button" | "closeButton" | "close_button",
                                scale?: number,
                                bitmap?: BitmapTypes,
                                bitmap2?: BitmapTypes
                            }
                            export class UIButtonElement extends UIElement {
                                static class: java.lang.Class<UIButtonElement>;
                                constructor(win: window.UIWindow, desc: ButtonElementDescription);
                                onSetup<ButtonElementDescription>(desc: ButtonElementDescription): void;
                                onDraw(cvs: android.graphics.Canvas, scale: number): void;
                                onBindingUpdated<T>(name: string, value: T): void;
                            }
                        }
                    }
                }
            }
        }
    }
}