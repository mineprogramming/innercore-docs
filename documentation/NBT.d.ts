/**
 * NBT (Named Binary Tag) is a tag based binary format designed to carry large 
 * amounts of binary data with smaller amounts of additional data. You can get
 * or set nbt tags of [[Entity]] (entities), [[NativeTileEntity]] 
 * (native tile entities, such as chests or beacons) and [[ItemExtraData]] 
 * (items). To get more information about these data structures, 
 * see [this page](http://web.archive.org/web/20110723210920/http://www.minecraft.net/docs/NBT.txt)
 */
declare namespace NBT {
    /**
     * List tags represent NBT map-like data structure (key-value pairs). Its values may
     * be of any type, so check the type before calling the appropriate getter
     */
    class CompoundTag {
        /**
         * Creates a new compound tag
         */
        constructor();

        /**
         * Creates a copy of specified compound tag
         */
        constructor(tag: CompoundTag);

        /**
         * Converts compound tag to JavaScript object for easier reading
         * @returns valid JavaScript representation of compound tag
         */
        toScriptable(): { [key: string]: any };

        /**
         * @returns Java-array containing all the keys of the compound tag
         */
        getAllKeys(): native.Array<string>;

        /**
         * @returns true if specified key exists in compound tag
         */
        contains(key: string): boolean;

        /**
         * @param key key to verify for the type
         * @param type tag type to verify for, one of the [[Native.NbtDataType]] constants
         * @returns true if specified key exists in compound tag and its value is
         * of specified type
         */
        containsValueOfType(key: string, type: number): boolean;

        /**
         * @returns value type for the specified key. One of the [[Native.NbtDataType]] 
         * constants
         */
        getValueType(key: string): number;

        /**
         * @returns NBT tag of byte type by its key
         */
        getByte(key: string): number;

        /**
         * @returns NBT tag of short type by its key
         */
        getShort(key: string): number;

        /**
         * @returns NBT tag of 32-bit integer type by its key
         */
        getInt(key: string): number;

        /**
         * @returns NBT tag of 64-bit integer type by its key
         */
        getInt64(key: string): number;

        /**
         * @returns NBT tag of float type by its key
         */
        getFloat(key: string): number;

        /**
         * @returns NBT tag of double type by its key
         */
        getDouble(key: string): number;

        /**
         * @returns NBT tag of string type by its key
         */
        getString(key: string): string;

        /**
         * @returns NBT tag of compound type by its key. Note that a copy of 
         * existing compound tag is created so you cannot edit it directly. Use 
         * setCompoundTag method to apply changes or use 
         * [[CompoundTag.getCompoundTagNoClone]] to edit it directly
         */
        getCompoundTag(key: string): NBT.CompoundTag;

        /**
         * @returns directly editable NBT tag of byte type by its key. Don't save
         * reference for future usage since they get destroyed when the parent 
         * object is destroyed
         */
        getCompoundTagNoClone(key: string): NBT.CompoundTag;

        /**
         * @returns NBT tag of list type by its key. Note that a copy of 
         * existing list tag is created so you cannot edit it directly. Use 
         * setCompoundTag method to apply changes or use 
         * [[CompoundTag.getListTagNoClone]] to edit it directly
         */
        getListTag(key: string): NBT.ListTag;

        /**
         * @returns directly editable NBT tag of byte type by its key. Don't save
         * reference for future usage since they get destroyed when the parent 
         * object is destroyed
         */
        getListTagNoClone(key: string): NBT.ListTag;

        /**
         * Puts value of byte type into compound tag
         */
        putByte(key: string, value: number): void;

        /**
         * Puts value of short type into compound tag
         */
        putShort(key: string, value: number): void;

        /**
         * Puts value of 32-bit integer type into compound tag
         */
        putInt(key: string, value: number): void;

        /**
         * Puts value of 64-bit integer type into compound tag
         */
        putInt64(key: string, value: number): void;

        /**
         * Puts value of float type into compound tag
         */
        putFloat(key: string, value: number): void;

        /**
         * Puts value of double type into compound tag
         */
        putDouble(key: string, value: number): void;

        /**
         * Puts value of string type into compound tag
         */
        putString(key: string, value: string): void;

        /**
         * Puts value of compound type into compound tag
         */
        putCompoundTag(key: string, value: CompoundTag): void;

        /**
         * Puts value of list type into compound tag
         */
        putListTag(key: string, value: ListTag): void;

        /**
         * Removes tag by its key
         */
        remove(key: string): void;

        /**
         * Removes all the tags from the compound tags
         */
        clear(): void;
    }


    /**
     * List tags represent NBT array-like indexed data structure. Its values may
     * be of any type, so check the type before calling the appropriate getter
     */
    class ListTag {
        /**
         * Creates a new list tag
         */
        constructor();

        /**
         * Creates a copy of specified list tag
         */
        constructor(tag: CompoundTag);

        /**
         * Converts list tag to JavaScript object for easier reading
         * @returns valid JavaScript representation of list tag
         */
        toScriptable(): any[];

        /**
         * @returns count of the tags in the list tag
         */
        length(): number;

        /**
         * @returns value type for the specified index. One of the [[Native.NbtDataType]] 
         * constants
         */
        getValueType(index: number): number;

        /**
         * @returns NBT tag of byte type by its index
         */
        getByte(index: number): number;

        /**
         * @returns NBT tag of short type by its index
         */
        getShort(index: number): number;

        /**
         * @returns NBT tag of 32-bit integer type by its index
         */
        getInt(index: number): number;

        /**
         * @returns NBT tag of 64-bit integer type by its index
         */
        getInt64(index: number): number;

        /**
         * @returns NBT tag of float type by its index
         */
        getFloat(index: number): number;

        /**
         * @returns NBT tag of double type by its index
         */
        getDouble(index: number): number;

        /**
         * @returns NBT tag of string type by its index
         */
        getString(index: number): string;

        /**
         * @returns NBT tag of compound type by its index. Note that a copy of 
         * existing compound tag is created so you cannot edit it directly. Use 
         * setCompoundTag method to apply changes or use 
         * [[CompoundTag.getCompoundTagNoClone]] to edit it directly
         */
        getCompoundTag(index: number): NBT.CompoundTag;

        /**
         * @returns directly editable NBT tag of byte type by its index. Don't save
         * reference for future usage since they get destroyed when the parent 
         * object is destroyed
         */
        getCompoundTagNoClone(index: number): NBT.CompoundTag;

        /**
         * @returns NBT tag of list type by its index. Note that a copy of 
         * existing list tag is created so you cannot edit it directly. Use 
         * setCompoundTag method to apply changes or use 
         * [[CompoundTag.getListTagNoClone]] to edit it directly
         */
        getListTag(index: number): NBT.ListTag;

        /**
         * @returns directly editable NBT tag of byte type by its index. Don't save
         * reference for future usage since they get destroyed when the parent 
         * object is destroyed
         */
        getListTagNoClone(index: number): NBT.ListTag;

        /**
         * Puts value of byte type into list tag
         */
        putByte(index: number, value: number): void;

        /**
         * Puts value of short type into list tag
         */
        putShort(index: number, value: number): void;

        /**
         * Puts value of 32-bit integer type into list tag
         */
        putInt(index: number, value: number): void;

        /**
         * Puts value of 64-bit integer type into list tag
         */
        putInt64(index: number, value: number): void;

        /**
         * Puts value of float type into list tag
         */
        putFloat(index: number, value: number): void;

        /**
         * Puts value of double type into list tag
         */
        putDouble(index: number, value: number): void;

        /**
         * Puts value of string type into list tag
         */
        putString(index: number, value: string): void;

        /**
         * Puts value of compound type into list tag
         */
        putCompoundTag(index: number, value: CompoundTag): void;

        /**
         * Puts value of list type into list tag
         */
        putListTag(index: number, value: ListTag): void;

        /**
         * Removes all the tags from the compound tags
         */
        clear(): void;
    }
}