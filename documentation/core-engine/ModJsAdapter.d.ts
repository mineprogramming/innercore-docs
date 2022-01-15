declare namespace Mod {

    /** 0 - RELEASE, 1 - DEVELOP */
    type BuildType = number;

    /** 0 - RESOURCE, 1 - GUI */
    type ResourceDirType = number;

    /** 0 - PRELOADER, 1 - LAUNCHER, 2 - MOD, 3 - CUSTOM, 4 - LIBRARY */
    type SourceType = number;

    interface BuildConfig {

        buildableDirs: java.util.ArrayList<BuildConfig.BuildableDir>;
        defaultConfig: BuildConfig.DefaultConfig;
        javaDirectories: java.util.ArrayList<BuildConfig.DeclaredDirectory>;
        nativeDirectories: java.util.ArrayList<BuildConfig.DeclaredDirectory>;
        resourceDirs: java.util.ArrayList<BuildConfig.ResourceDir>;
        sourcesToCompile: java.util.ArrayList<BuildConfig.Source>;

        save(file: java.io.File): void;
        save(): void;

        isValid(): boolean;

        validate(): void;

        read(): boolean;

        getBuildType(): BuildType;

        getDefaultAPI(): any;

        getName(): string;

        getAllSourcesToCompile(useApi: boolean): java.util.ArrayList<BuildConfig.Source>;

        findRelatedBuildableDir(source: BuildConfig.Source): BuildConfig.BuildableDir;

    }

    namespace BuildConfig {

        interface DeclaredDirectory {

            readonly path: string;
            readonly version: any;

            getFile(root: java.io.File): java.io.File;

        }

        interface DefaultConfig {

            apiInstance: any;
            behaviorPacksDir: Nullable<string>;
            buildType: BuildType;
            readonly gameVersion: any;
            json: org.json.JSONObject;
            libDir: Nullable<string>;
            optimizationLevel: number;
            resourcePacksDir: Nullable<string>;
            setupScriptDir: Nullable<string>;

            setAPI(api: any): void;

            setOptimizationLevel(level: number): void;

            setBuildType(type: BuildType): void;

            setLibDir(dir: string): void;

            setMinecraftResourcePacksDir(dir: string): void;

            setMinecraftBehaviorPacksDir(dir: string): void;

            setSetupScriptDir(dir: string): void;
            
        }

        interface BuildableDir {

            dir: string;
            json: org.json.JSONObject;
            targetSource: string;

            setDir(dir: string): void;

            setTargetSource(dir: string): void;

            isRelatedSource(source: Source): boolean;

        }

        interface ResourceDir {

            readonly gameVersion: any;
            json: org.json.JSONObject;
            resourceType: ResourceDirType;

            setPath(path: string): void;

            setResourceType(type: ResourceDirType): void;

        }

        interface Source {

            apiInstance: any;
            readonly gameVersion: any;
            json: org.json.JSONObject;
            optimizationLevel: number;
            path: string;
            sourceName: string;
            sourceType: SourceType;

            setPath(path: string): void;

            setSourceName(sourceName: string): void;

            setSourceType(type: SourceType): void;

            setOptimizationLevel(level: number): void;

            setAPI(api: any): void;

        }

    }

    interface CompiledSources {

        saveSourceList(): void;

        getCompiledSourceFilesFor(name: string): java.io.File[];

        addCompiledSource(name: string, file: java.io.File, className: string): void;

        getTargetCompilationFile(sourcePath: string): java.io.File;

        reset(): void;

    }

    interface ModJsAdapter {

        buildConfig: BuildConfig;
        config: Config;
        dir: string;
        isEnabled: boolean;
        isModRunning: boolean;

        setModPackAndLocation(pack: ModPack.ModPack, locationName: string): void;

        getModPack(): ModPack.ModPack;

        getModPackLocationName(): string;

        getConfig(): Config;

        createCompiledSources(): CompiledSources;

        onImport(): void;

        getBuildType(): BuildType;

        setBuildType(type: BuildType): void;
        setBuildType(type: "release" | "develop"): void;

        getGuiIcon(): string;

        getName(): string;

        getVersion(): string;

        isClientOnly(): boolean;

        isConfiguredForMultiplayer(): boolean;

        getMultiplayerName(): string;

        getMultiplayerVersion(): string;

        getFormattedAPIName(): string;

        getInfoProperty(name: string): java.lang.Object;

        RunPreloaderScripts(): void;

        RunLauncherScripts(): void;

        RunMod(additionalScope: any): void;

        configureMultiplayer(name: string, version: string, isClientOnly: boolean): void;

        runCustomSource(name: string, additionalScope: any): void;

        /**
         * Other methods and properties
         */
        [key: string]: any
    }


}
