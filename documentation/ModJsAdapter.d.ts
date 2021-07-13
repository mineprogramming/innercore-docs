declare namespace Mod {
    interface ModJsAdapter {
        config: Config;
        dir: string;
        isEnabled: boolean;
        isModRunning: boolean;


        getConfig(): Config;
        getGuiIcon(): string;
        getName(): string;
        getVersion(): string;
        isClientOnly(): boolean;
        isConfiguredForMultiplayer(): boolean;
        getMultiplayerName(): string;
        getMultiplayerVersion(): string;
        getFormattedAPIName(): string;

        /**
         * Other methods and properties
         */
         [key: string]: any
    }


}
