/**
 * Class that represents network entity of the block, currently is not learned
 */
declare class NetworkEntity {
	constructor(type: NetworkEntityType, context: any);
	remove(): void;
	send(name: string, data: any): void;
	getClients(): NetworkConnectedClientList;
}