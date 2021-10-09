/**
 * Class representing item extra data. Used to store additional information 
 * about item other then just item id and data
 */
declare class ItemExtraData extends com.zhekasmirnov.innercore.api.NativeItemInstanceExtra {
	static class: java.lang.Class<ItemExtraData>;
	/**
	 * Creates an empty [[ItemExtraData]] instance
	 */
	constructor();
	/**
	 * Creates a copy of current [[ItemExtraData]] instance with the same contents
	 */
	constructor(extraData?: ItemExtraData);
}