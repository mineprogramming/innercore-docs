/**
 * Class representing item extra data
 */
declare class ItemExtraData {
	constructor(extraData?: ItemExtraData)

	getCustomName(): string
	setCustomName(name: string): void
	
	isEnchanted(): boolean
	addEnchant(id: number, level: number): void
	getEnchantLevel(id: number): number
	removeEnchant(id: number): void
	removeAllEnchants(): void
	getEnchantCount(): number
	getEnchants(): { [key: number]: number }
	getEnchantName(id: number, level: number): string
	getAllEnchantNames(): string

	putInt(name: string, value: number): ItemExtraData
	putLong(name: string, value: number): ItemExtraData
	putFloat(name: string, value: number): ItemExtraData
	putString(name: string, value: string): ItemExtraData
	putBoolean(name: string, value: boolean): ItemExtraData
	getInt(name: string, fallback?: number): number
	getLong(name: string, fallback?: number): number
	getFloat(name: string, fallback?: number): number
	getString(name: string, fallback?: string): string
	getBoolean(name: string, fallback?: boolean): boolean
	removeCustomData(): void
	copy(): ItemExtraData
	isEmpty(): boolean
}