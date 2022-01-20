/**
 * Class to work with definite couple of clients,
 * bound by certain conditions
 */
declare class NetworkConnectedClientList {
    /**
     * @param addToGlobalRefreshList if true, the object will be added to the
     * global list for updating periodically, default is true
     */
    constructor(addToGlobalRefreshList: boolean);
    constructor();

    /**
     * Condition to bound clients to the list.
     * All clients in a given dimension at a distance of no more than maxDistance from x, y, z
     * @param x X coord of the conditional centre point of the area where clients are located
     * @param y Y coord of the conditional centre point of the area where clients are located
     * @param z Z coord of the conditional centre point of the area where clients are located
     * @param dimensionID numeric id of the dimension where clients are located
     * @param maxDistance max distance from the client to the conditional centre, to bound the client to the list
     * @returns the client list itself
     */
    setupDistancePolicy(x: number, y: number, z: number, dimensionID: number, maxDistance: number): NetworkConnectedClientList;

    /**
     * Sends packet to all clients from the following list.
     * @param packetName name of the packet to send
     * @param packetData packet data object
     */
    send(packetName: string, packetData: object): void;

    /**
     * Adds given client to the list
     */
    add(client: NetworkClient): void;

    /**
     * Removes given client from the list
     */
    remove(client: NetworkClient): void;

    /**
     * @returns whether the list contains given client
     */
    contains(client: NetworkClient): boolean;

    /**
     * Sets up policy to add all players to the list
     * @returns the client list itself
     */
    setupAllPlayersPolicy(): NetworkConnectedClientList;

    /**
     * Sets up policy to add all players to the list
     * @param updateRate how many milliseconds will have to pass between list updates
     * @returns the client list itself
     */
    setupAllPlayersPolicy(updateRate: number): NetworkConnectedClientList;

    /**
     * Sets up policy to add players from the same given dimension to the list
     * @param dimensionID numeric id of the dimension where the clients have to be located to be included into the list
     * @param updateRate how many milliseconds will have to pass between list updates
     * @returns the client list itself
     */
    setupAllInDimensionPolicy(dimensionID: number, updateRate: number): NetworkConnectedClientList;

    /**
     * Sets up policy to add players from the same given dimension to the list
     * @param dimensionID numeric id of the dimension where the clients have to be located to be included into the list
     * @returns the client list itself
     */
    setupAllInDimensionPolicy(dimensionID: number): NetworkConnectedClientList;

    /**
     * @returns the iterator across clients' objects that the list consists of
     */
    iterator(): java.util.Iterator<NetworkClient>

}