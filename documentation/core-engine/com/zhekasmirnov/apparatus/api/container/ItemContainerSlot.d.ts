declare module com {
    export module zhekasmirnov {
        export module apparatus {
            export module api {
                export module container {
                    export class ItemContainerSlot extends java.lang.Object implements innercore.api.mod.ui.container.AbstractSlot {
                        static class: java.lang.Class<ItemContainerSlot>;
                        count: number;
                        data: number;
                        extra: Nullable<innercore.api.NativeItemInstanceExtra>;
                        id: number;
                        constructor(id: number, count: number, data: number);
                        constructor(id: number, count: number, data: number, extra: Nullable<innercore.api.NativeItemInstanceExtra>);
                        constructor();
                        constructor(item: ItemInstance);
                        constructor(json: org.json.JSONObject, convert: boolean);
                        /**
                         * @returns slot name
                         */
                        getName(): string;
                        /**
                         * @returns container linked to the slot
                         */
                        getContainer(): ItemContainer;
                        /**
                         * @returns following [[ItemContainerSlot]] as [[ItemInstance]] object
                         */
                        asScriptable(): ItemInstance;
                        /**
                         * @returns following [[ItemContainerSlot]] as [[org.json.JSONObject]] instance
                         */
                        asJson(): org.json.JSONObject;
                        /**
                         * @returns whether the slot is empty or not
                         */
                        isEmpty(): boolean;
                        /**
                         * Refreshes slot in UI
                         */
                        markDirty(): void;
                        /**
                         * Clears slot contents
                         */
                        clear(): void;
                        /**
                         * Resets slot if its id or count equals 0
                         */
                        validate(): void;
                        /**
                         * Drops slot contents in given world at given coords
                         */
                        dropAt(region: BlockSource, x: number, y: number, z: number): void;
                        /**
                         * Sets slot contents 
                         */
                        setSlot(id: number, count: number, data: number): void;
                        setSlot(id: number, count: number, data: number, extra: Nullable<innercore.api.NativeItemInstanceExtra>): void;
                        resetSavingEnabled(): void;
                        setSavingEnabled(enabled: boolean): void;
                        isSavingEnabled(): boolean;
                        /**
                         * @returns numeric id of the item in slot
                         */
                        getId(): number;
                        /**
                         * @returns count of the item in slot
                         */
                        getCount(): number;
                        /**
                         * @returns data of the item in slot
                         */
                        getData(): number;
                        /**
                         * @returns extra data object of the item in slot,
                         * or null if it is not present in the given item
                         */
                        getExtra(): Nullable<innercore.api.NativeItemInstanceExtra>;
                        set(id: number, count: number, data: number, extra: Nullable<innercore.api.NativeItemInstanceExtra>): void;
                        toString(): string;
                    }
                }
            }
        }
    }
}