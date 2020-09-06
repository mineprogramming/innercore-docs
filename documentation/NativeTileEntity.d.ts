/**
 * Interface providing access to native tile entities - chests, hoppers, furnaces,
 * smelters, etc. See full lists of supported native tile entities in the 
 * [[Native.TileEntityType]] enum
 */
declare interface NativeTileEntity {
    /**
     * @returns native tile entity type constant, one of the [[Native.TileEntityType]]
     * constants
     */
    getType(): number,

    /**
     * @returns slots count for the specified native tile entity
     */
    getSize(): number,

    /**
     * @param slot slot number
     * @returns item instance in the specified slot of item TE
     */
    getSlot(slot: number): ItemInstance,

    /**
     * Sets the contents of a native tile entity's slot
     * @param slot slot number
     * @param id item id
     * @param count item count
     * @param data item data
     * @param extra item extra data
     */
    setSlot(slot: number, id: number, count: number, data: number, extra?: ItemExtraData): void;

    /**
     * Sets the contents of a native tile entity's slot
     * @param slot slot number
     * @param item item information
     */
    setSlot(slot: number, item: ItemInstance): void;

    /**
     * @returns compound tag associated with specified native tile entity
     */
    getCompoundTag(): NBT.CompoundTag;

    /**
     * Sets compound tag for the specified tile entity
     */
    setCompoundTag(tag: NBT.CompoundTag): void;
}