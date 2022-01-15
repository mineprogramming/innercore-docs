/**
 * Class that represents network client
 */
declare class NetworkClient {

    /**
     * Sends given packet to the following client
     * @param name name of the packet to send
     * @param packetData packet data object
     */
    send(name: string, packetData: object): void;

    /**
     * @returns unique numeric entity ID of the player
     */
    getPlayerUid(): number;

    getDisconnectCause(): java.io.IOException;

    getDisconnectPacket(): string;

    /**
     * Sends a packet to the client with a text like a system message
     */
    sendMessage(message: string): void;

    /**
     * Disconnects player from the server and sends a packet with given reason
     */
    disconnect(reason: string): void;

    /**
     * Disconnects player from the server with no further information
     */
    disconnect(): void;

}