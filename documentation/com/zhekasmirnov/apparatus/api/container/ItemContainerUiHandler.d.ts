declare module com {
    export module zhekasmirnov {
        export module apparatus {
            export module api {
                export module container {
                    export class ItemContainerUiHandler extends java.lang.Object implements innercore.api.mod.ui.container.UiAbstractContainer {
                        static class: java.lang.Class<ItemContainerUiHandler>;
                        constructor(container: ItemContainer);
                        onWindowClosed(): void;
                        getWindow(): innercore.api.mod.ui.window.IWindow;
                        openAs(window: innercore.api.mod.ui.window.IWindow): void;
                        close(): void;
                        getParent(): ItemContainer;
                        addElementInstance(element: innercore.api.mod.ui.elements.UIElement, name: string): void;
                        getElement(elementName: string): Nullable<innercore.api.mod.ui.elements.UIElement>;
                        getSlotVisualImpl(name: string): innercore.api.mod.ui.container.UiVisualSlotImpl;
                        getBinding<T=any>(elementName: string, bindingName: string): T;
                        setBinding<T=any>(elementName: string, bindingName: string, value: T): void;
                        handleBindingDirty(elementName: string, bindingName: string): void;
                        applyAllBindingsFromMap(): void;
                        setBindingByComposedName(name: string, value: PrimitiveTypes): void;
                        receiveBindingsFromServer(bindings: org.json.JSONObject): void;
                        handleInventoryToSlotTransaction(inventorySlot: number, slot: string, amount: number): void;
                        handleSlotToSlotTransaction(from: string, to: string, amount: number): void;
                        handleSlotToInventoryTransaction(slot: string, amount: number): void;
                    }
                }
            }
        }
    }
}