/**
 * Class that represents network entity type
 */
declare class NetworkEntityType {
	constructor(name: string);
	setClientListSetupListener(action: (list: NetworkConnectedClientList, target: object, entity) => void): this;
	setClientEntityAddedListener<T = any>(action: (entity: number, packet: any) => T): this;
	setClientEntityRemovedListener(action: (target: any, entity: number) => void): this;
	setClientAddPacketFactory(action: (target: any, entity: number, client: any) => any): this;
	addClientPacketListener(name: string, action: (target: any, entity: number, packetData: any) => void): this;
}