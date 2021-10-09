declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module mod {
                    export module ui {
                        export module container {
                            export class AbstractSlot extends java.lang.Object {
                                static class: java.lang.Class<AbstractSlot>;
                                constructor();
                                constructor(impl: {
                                    getId(): number; getCount(): number; getData(): number;
                                    getExtra(): Nullable<NativeItemInstanceExtra>;
                                    set(id: number, count: number, data: number, extra: Nullable<NativeItemInstanceExtra>): void;
                                    validate(): void;
                                })
                                getId(): number; getCount(): number; getData(): number;
                                getExtra(): Nullable<NativeItemInstanceExtra>;
                                set(id: number, count: number, data: number, extra: Nullable<NativeItemInstanceExtra>): void;
                                validate(): void;
                            }
                        }
                    }
                }
            }
        }
    }
}