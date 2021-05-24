/**
 * Interface representing ModPack
 */
interface ModPackJsAdapter {
    
    getRootDirectory(): java.io.File;

    getRootDirectoryPath(): string;

    getModsDirectoryPath(): string;

    /**
     * Other methods and properties
     */
    [key: string]: any
}