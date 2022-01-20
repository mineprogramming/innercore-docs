/**
 * New module to work with client and server packets in multiplayer.
 */
declare namespace Network {
    /**
     * @returns array containing connected clients
     */
    function getConnectedClients(): native.Array<NetworkClient>;

    /**
     * @returns array containing connected players uids
     */
    function getConnectedPlayers(): native.Array<number>;

    /**
     * @returns Client object for player by player's entity id
     */
    function getClientForPlayer(player: number): NetworkClient;

    /**
     * Event that is called when a client receives a packet with given name
     * @param name name of the packet
     */
    function addClientPacket<T extends object>(name: string, func: (packetData: T) => void): void;

    /**
     * Event that is called when server receives a packet with the specified name from client
     * @param name name of the packet
     */
    function addServerPacket<T extends object>(name: string, func: (client: NetworkClient, data: T) => void): void;

    /**
     * Sends packet object with specified name to all clients
     */
    function sendToAllClients(name: string, packetData: object): void;

    /**
     * Sends packet object with the specified name from client to server
     */
    function sendToServer(name: string, packetData: object): void;

    /**
     * Sends message to all players
     * @param message text of the message
     */
    function sendServerMessage(message: string): void;

    /**
     * Converts item or block id from server to local value
     */
    function serverToLocalId(id: string | number): number;

    /**
     * Converts item or block id from local to server value
     */
    function localToServerId(id: string | number): number;

    function inRemoteWorld(): boolean;
}
