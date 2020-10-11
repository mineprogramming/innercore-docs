/**
 * Class representing item extra data. Used to store additional information 
 * about item other then just item id and data
 */
declare class ItemExtraData {
	/**
	 * Creates an empty [[ItemExtraData]] instance
	 */
	constructor();

	/**
	 * creates a copy of current [[ItemExtraData]] instance with the same contents
	 */
	constructor(extraData?: ItemExtraData);

	/**
	 * @returns item's custom name
	 */
	getCustomName(): string;

	/**
	 * Sets item's custom name
	 */
	setCustomName(name: string): void;

	/**
	 * @returns true if the item is enchanted, false otherwise
	 */
	isEnchanted(): boolean;

	/**
	 * Adds a new enchantment to the item
	 * @param id enchantment id, one of the [[Native.Enchantment]] constants
	 * @param level enchantment level, generally between 1 and 5
	 */
	addEnchant(id: number, level: number): void;

	/**
	 * @param id enchantment id, one of the [[Native.Enchantment]] constants
	 * @returns level of the specified enchantment
	 */
	getEnchantLevel(id: number): number;

	/**
	 * Removes enchantments by its id
	 * @param id enchantment id, one of the [[Native.Enchantment]] constants
	 */
	removeEnchant(id: number): void;

	/**
	 * Removes all the enchantments of the item
	 */
	removeAllEnchants(): void;

	/**
	 * @returns amount of enchantments applied to the item
	 */
	getEnchantCount(): number;

	/**
	 * @returns all the enchantments of the item in the readable format
	 */
	getEnchants(): { [key: number]: number };

	/**
	 * @param id enchantment id, one of the [[Native.Enchantment]] constants
	 * @param level enchantment level, generally between 1 and 5
	 * @returns enchantment name by its id and level
	 */
	getEnchantName(id: number, level: number): string

	/**
	 * @returns all enchantments names separated by line breaks
	 */
	getAllEnchantNames(): string

	/**
	 * Puts some custom integer parameter to the extra data of the item
	 * @param name parameter name
	 * @param value parameter value
	 * @returns reference to itself to be used in sequential calls
	 */
	putInt(name: string, value: number): ItemExtraData;

	/**
	 * Puts some custom long integer parameter to the extra data of the item
	 * @param name parameter name
	 * @param value parameter value
	 * @returns reference to itself to be used in sequential calls
	 */
	putLong(name: string, value: number): ItemExtraData;

	/**
	 * Puts some custom number parameter to the extra data of the item
	 * @param name parameter name
	 * @param value parameter value
	 * @returns reference to itself to be used in sequential calls
	 */
	putFloat(name: string, value: number): ItemExtraData;

	/**
	 * Puts some custom string parameter to the extra data of the item
	 * @param name parameter name
	 * @param value parameter value
	 * @returns reference to itself to be used in sequential calls
	 */
	putString(name: string, value: string): ItemExtraData;

	/**
	 * Puts some custom boolean parameter to the extra data of the item
	 * @param name parameter name
	 * @param value parameter value
	 * @returns reference to itself to be used in sequential calls
	 */
	putBoolean(name: string, value: boolean): ItemExtraData;

	/**
	 * @param name parameter name
	 * @param fallback default value to be returned if item extra data doesn't 
	 * contain a parameter with specified name
	 * @returns custom integer parameter value if extra data of the item contains
	 * one, fallback value otherwise
	 */
	getInt(name: string, fallback?: number): number;

	/**
	 * @param name parameter name
	 * @param fallback default value to be returned if item extra data doesn't 
	 * contain a parameter with specified name
	 * @returns custom long integer parameter value if extra data of the item contains
	 * one, fallback value otherwise
	 */
	getLong(name: string, fallback?: number): number;

	/**
	 * @param name parameter name
	 * @param fallback default value to be returned if item extra data doesn't 
	 * contain a parameter with specified name
	 * @returns custom float parameter value if extra data of the item contains
	 * one, fallback value otherwise
	 */
	getFloat(name: string, fallback?: number): number;

	/**
	 * @param name parameter name
	 * @param fallback default value to be returned if item extra data doesn't 
	 * contain a parameter with specified name
	 * @returns custom string parameter value if extra data of the item contains
	 * one, fallback value otherwise
	 */
	getString(name: string, fallback?: string): string;

	/**
	 * @param name parameter name
	 * @param fallback default value to be returned if item extra data doesn't 
	 * contain a parameter with specified name
	 * @returns custom boolean parameter value if extra data of the item contains
	 * one, fallback value otherwise
	 */
	getBoolean(name: string, fallback?: boolean): boolean;

	/**
	 * Removes all custom parameters from item extra data
	 */
	removeCustomData(): void;

	/**
	 * Creates a copy of current [[ItemExtraData]] object
	 * @returns a created copy of the data
	 */
	copy(): ItemExtraData;

	/**
	 * @returns true, if item extra exists and is not empty
	 */
	isEmpty(): boolean;

	/**
	 * @returns compound tag for the specified item
	 */
	getCompoundTag(ent: number): NBT.CompoundTag;

	/**
	 * Sets compound tag for the specified item
	 */
	setCompoundTag(ent: number, tag: NBT.CompoundTag): void;
}