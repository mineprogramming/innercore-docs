declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module elements {
                            export interface SwitchElementDescription extends BasicElementDescription {
                                type: "switch",
                                bindingObject?: any,
                                bindingProperty?: string,
                                configValue?: Config.ConfigValue,
                                bitmapOn?: BitmapTypes,
                                bitmapOnHover?: BitmapTypes,
                                bitmapOff?: BitmapTypes,
                                bitmapOffHover?: BitmapTypes,
                                scale?: number,
                                onNewState?: (val: boolean, container: container.UiAbstractContainer, element: UISwitchElement) => void
                            }
                            export class UISwitchElement extends UIElement {
                                static class: java.lang.Class<UISwitchElement>;
                                constructor(win: window.UIWindow, desc: SwitchElementDescription);
                                onSetup<SwitchElementDescription>(desc: SwitchElementDescription): void;
                                onDraw(canvas: android.graphics.Canvas, scale: number): void;
                                onBindingUpdated<T=boolean>(name: string, val: T): void;
                                onTouchEvent(event: types.TouchEvent): void;
                                onRelease(): void;
                            }
                        }
                    }
                }
            }
        }
    }
}