declare namespace ModPack {

    /**
     * Crutch to replace ModPackManifest.DeclaredDirectoryType enum
     * 0 - RESOURCE,
     * 1 - USER_DATA,
     * 2 - CONFIG,
     * 3 - CACHE,
     * 4 - INVALID 
     */
    type ModPackDeclaredDirectoryType = number;

    /**
     * Crutch to replace ModPackDirectory.DirectoryType enum
     * 0 - MODS,
     * 1 - MOD_ASSETS,
     * 2 - ENGINE,
     * 3 - CONFIG,
     * 4 - CACHE,
     * 5 - RESOURCE_PACKS,
     * 6 - BEHAVIOR_PACKS,
     * 7 - TEXTURE_PACKS,
     * 8 - CUSTOM
     */
    type ModPackDirectoryType = number;

    interface ModPack {

        addDirectory(directory: ModPackDirectory): ModPack;

        getRootDirectory(): java.io.File;

        getManifestFile(): java.io.File;

        getIconFile(): java.io.File;

        getManifest(): ModPackManifest;

        getPreferences(): ModPackPreferences;

        getJsAdapter(): ModPackJsAdapter;

        reloadAndValidateManifest(): boolean;

        getAllDirectories(): java.util.List<ModPackDirectory>;

        getDirectoriesOfType(type: ModPackDirectoryType): java.util.List<ModPackDirectory>;

        getDirectoryOfType(type: ModPackDirectoryType): ModPackDirectory;

        getRequestHandler(type: ModPackDirectoryType): DirectorySetRequestHandler;

    }

    interface ModPackManifest {

        loadJson(json: org.json.JSONObject): void;

        loadInputStream(stream: java.io.InputStream): void;

        loadFile(file: java.io.File): void;

        getPackName(): string;

        getDisplayedName(): string;

        getVersionName(): string;

        getVersionCode(): number;

        getDescription(): string;

        getAuthor(): string;

        getDeclaredDirectories(): java.util.List<ModPackDeclaredDirectory>;

        createDeclaredDirectoriesForModPack(pack: ModPack): java.util.List<ModPackDirectory>;

        setPackName(name: string): void;

        setDisplayedName(name: string): void;

        setVersionCode(code: number): void;

        setVersionName(name: string): void;

        setAuthor(author: string): void;

        setDescription(descr: string): void;

        edit(): ModPackManifestEditor;

    }

    interface ModPackManifestEditor {

        addIfMissing(key: string, value: any): ModPackManifestEditor;

        put(key: string, value: any): ModPackManifestEditor;

        commit(): void;

    }

    interface ModPackPreferences {

        getModPack(): ModPack;

        getFile(): java.io.File;

        reload(): ModPackPreferences;

        save(): ModPackPreferences;

        getString(key: string, fallback: string): string;

        getInt(key: string, fallback: number): number;

        getLong(key: string, fallback: number): number;

        getDouble(key: string, fallback: number): number;

        getBoolean(key: string, fallback: boolean): boolean;

        setString(key: string, value: string): ModPackPreferences;

        setInt(key: string, value: number): ModPackPreferences;

        setLong(key: string, value: number): ModPackPreferences;

        setDouble(key: string, value: number): ModPackPreferences;

        setBoolean(key: string, value: boolean): ModPackPreferences;

    }

    interface ModPackDirectory {

        assureDirectoryRoot(): boolean;

        assignToModPack(pack: ModPack): void;

        getType(): ModPackDirectoryType;

        getLocation(): java.io.File;

        getPathPattern(): string;

        getPathPatternRegex(): java.util.regex.Pattern;

        getLocalPathFromEntry(entryName: string): string;

        getRequestStrategy(): DirectoryRequestStrategy;

        getUpdateStrategy(): DirectoryUpdateStrategy;

        getExtractStrategy(): DirectoryExtractStrategy;

    }

    interface DirectorySetRequestHandler {

        getDirectories(): java.util.List<ModPackDirectory>;

        add(dir: ModPackDirectory): void;

        get(location: string, name: string): java.io.File;

        get(location: string): java.io.File;

        getAllAtLocation(location: string): java.util.List<java.io.File>;

        getAllLocations(): java.util.List<string>;

    }

    interface ModPackDeclaredDirectory {

        readonly path: string;
        readonly type: ModPackDeclaredDirectoryType;

        getPath(): string;

        getType(): ModPackDeclaredDirectoryType;

    }

    interface IDirectoryAssignable {

        assignToDirectory(dir: ModPackDirectory): void;

        getAssignedDirectory(): ModPackDeclaredDirectory;

    }

    interface DirectoryRequestStrategy extends IDirectoryAssignable {

        get(str: string): java.io.File;

        get(str: string, str2: string): java.io.File;

        getAll(str: string): java.util.List<java.io.File>;

        getAllLocations(): java.util.List<string>;

        assure(location: string, name: string): java.io.File;

        remove(location: string, name: string): boolean;

        getAllFiles(): java.util.List<java.io.File>;

    }

    interface DirectoryUpdateStrategy extends IDirectoryAssignable {

        beginUpdate(): void;

        finishUpdate(): void;

        updateFile(str: string, stream: java.io.InputStream): void;

    }

    interface DirectoryExtractStrategy extends IDirectoryAssignable {

        getEntryName(str: string, file: java.io.File): string;

        getFilesToExtract(): java.util.List<java.io.File>;

        getFullEntryName(file: java.io.File): string;

    }

    /**
     * Interface representing ModPack
     */
    interface ModPackJsAdapter {

        getModPack(): ModPack;
        
        getRootDirectory(): java.io.File;

        getRootDirectoryPath(): string;

        getModsDirectoryPath(): string;

        getManifest(): ModPackManifest;

        getPreferences(): ModPackPreferences;

        getRequestHandler(type: string): DirectorySetRequestHandler;

        getAllDirectories(): ModPackDirectory[];

        getDirectoriesOfType(type: string): ModPackDirectory[];

        getDirectoryOfType(type: string): ModPackDirectory;

    }

}