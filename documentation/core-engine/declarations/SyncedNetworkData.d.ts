/**
 * Class to work with values, synchronized between server and all clients
 */
declare class SyncedNetworkData {
    /**
     * @returns value by key
     */
    getInt(key: any, fallback?: number): number;
    /**
     * @returns value by key
     */
    getLong(key: any, fallback?: number): number;
    /**
     * @returns value by key
     */
    getFloat(key: any, fallback?: number): number;
    /**
     * @returns value by key
     */
    getDouble(key: any, fallback?: number): number;
    /**
     * @returns value by key
     */
    getString(key: any, fallback?: string): string;
    /**
     * @returns value by key
     */
    getBoolean(key: any, fallback?: boolean): boolean;
    /**
     * Sets value by key
     */
    putInt(key: any, value: number): void;
    /**
     * Sets value by key
     */
    putLong(key: any, value: number): void;
    /**
     * Sets value by key
     */
    putFloat(key: any, value: number): void;
    /**
     * Sets value by key
     */
    putDouble(key: any, value: number): void;
    /**
     * Sets value by key
     */
    putString(key: any, value: string): void;
    /**
     * Sets value by key
     */
    putBoolean(key: any, value: boolean): void;

    /**
     * Sends changed data values
     */
    sendChanges(): void;

    /**
     * Event that catches changes of any data values.
     * @param networkData - SyncedNetworkData object where the changes had happened;
     * @param isExternalStorage - 
     * false, if change had happened by calling put from this object, 
     * true, if it came by network from other connected data object.
     */
    addOnDataChangedListener(func: (networkData: SyncedNetworkData, isExternalChange: boolean) => void): void;

    /**
     * Adds data validator to the object
     */
    addVerifier(key: any, func: (key: any, newValue: any) => void): void;
}
