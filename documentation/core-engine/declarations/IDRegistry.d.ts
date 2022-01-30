/**
 * Module used to manage item and block ids. Items and blocks have the same 
 * underlying nature, so their ids are interchangeable. Though, the blocks are
 * defined "twice", as an item (in player's hand or inventory) and as a tile 
 * (a block placed in the world)
 */
declare namespace IDRegistry {
    /**
     * Defines the numeric id of the first user-defined item
     */
    const ITEM_ID_OFFSET: number;

    /**
     * Defines the numeric id of the first user-defined block
     */
    const BLOCK_ID_OFFSET: number;

    /**
     * Defines maximum item/block id
     */
    const MAX_ID: number;

    /**
     * Generates a new numeric block id
     * @param name string block id. Used in [[Block]] module functions and 
     * in some other block-related functions. Inner Core converts it to 
     * block_<name> as minecraft vanilla block id to avoid string id clashes
     * @returns numeric block id
     */
    function genBlockID(name: string): number;

    /**
     * Generates a new numeric item id
     * @param name string item id. Used in [[Item]] module functions and 
     * in some other item-related functions. Inner Core converts it to 
     * item_<name> as minecraft vanilla item id to avoid string id clashes
     * @returns numeric item id
     */
    function genItemID(name: string): number;

    /**
     * Gets item or block string id by its numeric id
     * @param id numeric item or block id
     */
    function getNameByID(id: number): string;

    /**
     * Ensures given id is a tile id, not a block id. It is generally recommended 
     * to use [[Block.convertItemToBlockId]] since it performs less calculations
     * @param id block or tile id
     * @returns tile id
     */
    function ensureBlockId(id: number): number;

    /**
     * Ensures given id is a block id, not a tile id. It is generally recommended 
     * to use [[Block.convertBlockToItemId]] since it performs less calculations
     * @param id block or tile id
     * @returns block id
     */
    function ensureItemId(id: number): number;

    /**
     * @param id numeric item or block id
     * @returns true if item is vanilla Minecraft item, false otherwise
     */
    function isVanilla(id: number): boolean;

    /**
     * Gets type of item ("block" or "item") and its string id in Minecraft
     * @param id numeric item or block id
     * @returns string in format "type:string_id" or
     * "type:string_id#extra_information"
     */
    function getIdInfo(id: number): string;
}