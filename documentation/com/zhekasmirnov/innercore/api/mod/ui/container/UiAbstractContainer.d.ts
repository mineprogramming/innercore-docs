declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module container {
                            export class UiAbstractContainer extends java.lang.Object {
                                static class: java.lang.Class<UiAbstractContainer>;
                                constructor();
                                constructor(impl: {
                                    addElementInstance(element: elements.UIElement, name: string): void;
                                    close(): void;
                                    getBinding<T=any>(element: string, bindingName: string): elements.UIElement | android.graphics.Rect | T;
                                    getElement(elementName: string): elements.UIElement;
                                    getParent(): any;
                                    getSlotVisualImpl(slotName: string): UiVisualSlotImpl;
                                    handleBindingDirty(element: string, bindingName: string): void;
                                    handleInventoryToSlotTransaction(invSlot: number, containerSlot: string, count: number): void;
                                    handleSlotToInventoryTransaction(containerSlot: string, invSlot: number): void;
                                    handleSlotToSlotTransaction(slot1: string, slot2: string, count: number): void;
                                    onWindowClosed(): void;
                                    openAs(win: window.IWindow): void;
                                    setBinding<T>(element: string, bindingName: string, obj: T): void;
                                });
                                addElementInstance(element: elements.UIElement, name: string): void;
                                close(): void;
                                getBinding<T=any>(element: string, bindingName: string): elements.UIElement | android.graphics.Rect | T;
                                getElement(elementName: string): elements.UIElement;
                                getParent(): any;
                                getSlotVisualImpl(slotName: string): UiVisualSlotImpl;
                                handleBindingDirty(element: string, bindingName: string): void;
                                handleInventoryToSlotTransaction(invSlot: number, containerSlot: string, count: number): void;
                                handleSlotToInventoryTransaction(containerSlot: string, invSlot: number): void;
                                handleSlotToSlotTransaction(slot1: string, slot2: string, count: number): void;
                                onWindowClosed(): void;
                                openAs(win: window.IWindow): void;
                                setBinding<T>(element: string, bindingName: string, obj: T): void;
                            }
                        }
                    }
                }
            }
        }
    }
}