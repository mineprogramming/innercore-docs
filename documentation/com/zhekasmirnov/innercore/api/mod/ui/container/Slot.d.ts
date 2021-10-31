declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module container {
                            export class Slot extends java.lang.Object implements AbstractSlot {
                                static class: java.lang.Class<Slot>;
                                id: number;
                                count: number;
                                data: number;
                                extra: Nullable<NativeItemInstanceExtra>;
                                getClassName(): "slot";
                                constructor(id: number, count: number, data: number);
                                constructor(id: number, count: number, data: number, extra: Nullable<NativeItemInstanceExtra>);
                                constructor();
                                constructor(parent: ItemInstance);
                                set(id: number, count: number, data: number): void;
                                set(id: number, count: number, data: number, extra: Nullable<NativeItemInstanceExtra>): void;
                                put(name: string, prop: any): void;
                                getInt(name: string): number;
                                validate(): void;
                                /** @deprecated */ drop(x: number, y: number, z: number): void;
                                getTarget(): ItemInstance;
                                getId(): number; getCount(): number; getData(): number;
                                getExtraValue(): number;
                                getExtra(): Nullable<NativeItemInstanceExtra>;
                                save(): Slot;
                            }
                        }
                    }
                }
            }
        }
    }
}