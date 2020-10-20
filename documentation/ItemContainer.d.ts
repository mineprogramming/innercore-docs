/**
 * New type of TileEntity container that supports multiplayer
 */
declare class ItemContainer {
	/**
	 * Sends changes in container to all clients.
	 * Needs to be used every time when something changes in container.
	 */
	sendChanges(): void;

	/**
	 * Sends packet from client container copy to server.
	 */
	sendEvent(eventName: string, someData: object): void;

	/**
	 * Sends packet from server container. 
	 * ONLY AVAILABLE IN SERVER CONTAINER EVENTS
	 */
	sendResponseEvent(eventName: string, someData: object): void;
}