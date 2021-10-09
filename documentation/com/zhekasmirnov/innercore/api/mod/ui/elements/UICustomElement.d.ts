declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module elements {
                            export interface CustomElementDescription extends BasicElementDescription {
                                type: "custom",
                                custom?: {
                                    onSetup?: (element: UICustomElement) => void,
                                    onDraw?: (element: UICustomElement, cvs: android.graphics.Canvas, scale: number) => void,
                                    onTouchReleased?: (element: UICustomElement) => void,
                                    onBindingUpdated?: <T>(element: UICustomElement, name: string, val: T) => void,
                                    onReset?: (element: UICustomElement) => void,
                                    onRelease?: (element: UICustomElement) => void,
                                    onContainerInit?: (element: UICustomElement, container: container.UiAbstractContainer, elementName: string) => void
                                }
                            }
                            export class UICustomElement extends UIElement {
                                static class: java.lang.Class<UICustomElement>;
                                constructor(win: window.UIWindow, desc: CustomElementDescription);
                                getScope(): object;
                                onSetup<CustomElementDescription>(desc: CustomElementDescription): void;
                                onDraw(canvas: android.graphics.Canvas, scale: number): void;
                                onTouchReleased(event: types.TouchEvent): void;
                                onBindingUpdated<T>(name: string, val: T): void;
                                onReset(): void;
                                onRelease(): void;
                                setupInitialBindings(container: container.UiAbstractContainer, elementName: string): void;
                            }
                        }
                    }
                }
            }
        }
    }
}