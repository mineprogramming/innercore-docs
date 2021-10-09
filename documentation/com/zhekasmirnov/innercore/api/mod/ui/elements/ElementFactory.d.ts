declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module elements {
                            export type StandardElementTypes = 
                                ButtonElementDescription |
                                CustomElementDescription |
                                FPSTextElementDescription |
                                FrameElementDescription |
                                ImageElementDescription |
                                InvSlotElementDescription |
                                ScaleElementDescription |
                                ScrollElementDescription |
                                SlotElementDescription |
                                SwitchElementDescription |
                                TabElementDescription |
                                TextElementDescription;
                            export class ElementFactory extends java.lang.Object {
                                static class: java.lang.Class<ElementFactory>;
                                static put<T extends UIElement>(name: string, element: java.lang.Class<T>): void;
                                static construct<T extends BasicElementDescription>(type: string, win: window.UIWindow, descr: StandardElementTypes | T): Nullable<UIElement>;
                                static construct<T extends BasicElementDescription>(win: window.UIWindow, descr: StandardElementTypes | T): Nullable<UIElement>;
                            }
                        }
                    }
                }
            }
        }
    }
}