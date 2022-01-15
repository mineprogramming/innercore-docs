declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module elements {
                            export interface InvSlotElementDescription extends BasicElementDescription {
                                type: "invSlot" | "invslot",
                                bitmap?: string,
                                size?: number,
                                maxStackSize?: number,
                                visual?: boolean,
                                darken?: boolean,
                                isDarkenAtZero?: boolean,
                                text?: string,
                                onItemChanged?: (container: container.UiAbstractContainer, oldId: number, oldCount: number, oldData: number) => void,
                                isValid?: (id: number, count: number, data: number, container: container.UiAbstractContainer, item: ItemInstance) => boolean,
                                index?: number;
                            }
                            export class UIInvSlotElement extends UISlotElement {
                                static class: java.lang.Class<UIInvSlotElement>;
                                constructor(win: window.UIWindow, desc: UIInvSlotElement);
                                onSetup<InvSlotElementDescription>(desc: InvSlotElementDescription): void;
                                onTouchEvent(event: types.TouchEvent): void;
                                onBindingUpdated<T>(name: string, val: T): void;
                                setupInitialBindings(container: container.UiAbstractContainer, elementName: string): void;
                            }
                        }
                    }
                }
            }
        }
    }
}