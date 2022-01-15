declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module elements {
                            export interface ScrollElementDescription extends BasicElementDescription {
                                type: "scroll",
                                isInt?: boolean,
                                width?: number, length?: number,
                                min?: number, max?: number,
                                divider?: number,
                                bindingObject?: any,
                                bindingProperty?: string,
                                configValue?: Config.ConfigValue,
                                bitmapHandle?: BitmapTypes,
                                bitmapHandleHover?: BitmapTypes,
                                bitmapBg?: string,
                                bitmapBgHover?: string,
                                ratio?: number,
                                onNewValue?: (result: number, container: container.UiAbstractContainer, element: UIScrollElement) => void
                            }
                            export class UIScrollElement extends UIElement {
                                static class: java.lang.Class<UIScrollElement>;
                                constructor(win: window.UIWindow, desc: ScrollElementDescription);
                                onSetup<ScrollElementDescription>(desc: ScrollElementDescription): void;
                                onDraw(canvas: android.graphics.Canvas, scale: number): void;
                                onBindingUpdated<T>(name: string, val: T): void;
                                onRelease(): void;
                                onTouchEvent(event: types.TouchEvent): void;
                            }
                        }
                    }
                }
            }
        }
    }
}