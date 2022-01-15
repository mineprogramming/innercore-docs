declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module elements {
                            export interface TabElementDescription extends BasicElementDescription {
                                type: "tab",
                                selectedColor?: number,
                                deselectedColor?: number,
                                tabIndex?: number,
                                isAlwaysSelected?: boolean,
                                isSelected?: boolean
                            }
                            export class UITabElement extends UIFrameElement {
                                static class: java.lang.Class<UITabElement>;
                                constructor(win: window.UIWindow, desc: TabElementDescription);
                                onSetup<TabElementDescription>(desc: TabElementDescription): void;
                                onTouchEvent(event: types.TouchEvent): void;
                                onReset(): void;
                            }
                        }
                    }
                }
            }
        }
    }
}