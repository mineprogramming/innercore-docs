declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module recipes {
                        export module workbench {
                            export class RecipeEntry extends java.lang.Object {
                                static class: java.lang.Class<RecipeEntry>;
                                static readonly noentry: RecipeEntry;
                                readonly data: number;
                                readonly id: number;
                                constructor(id: number, data: number);
                                constructor(slot: ui.container.Slot);
                                getMask(): java.lang.Character;
                                getCodeByItem(id: number, data: number): number;
                                getCode(): number;
                                isMatching(slot: ui.container.AbstractSlot): boolean;
                                isMatching(entry: RecipeEntry): boolean;
                                equals(obj: java.lang.Object): boolean;
                                hashCode(): number;
                            }
                        }
                    }
                }
            }
        }
    }
}