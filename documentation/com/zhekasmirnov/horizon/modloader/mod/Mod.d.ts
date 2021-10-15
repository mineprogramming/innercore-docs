declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export module mod {
                    export class Mod extends globalThis.java.lang.Object {
                        static class: globalThis.java.lang.Class<Mod>;
                        readonly directory: globalThis.java.io.File;
                        readonly manifest: ModManifest;
                        readonly libraries: globalThis.java.util.List<library.LibraryDirectory>;
                        readonly resources: globalThis.java.util.List<resource.directory.ResourceDirectory>;
                        readonly java: globalThis.java.util.List<java.JavaDirectory>;
                        readonly modules: globalThis.java.util.List<mod.Module>;
                        readonly modInstances: globalThis.java.util.List<mod.ModInstance>;
                        readonly subModLocations: globalThis.java.util.List<repo.location.ModLocation>;
                        constructor(ctx: ModContext, dir: globalThis.java.io.File);
                        inject(): void;
                        initialize(): void;
                        toString(): string;
                        getDisplayedName(): string;
                        getConfigurationInterface(): Mod.ConfigurationInterface;
                        getDeveloperInterface(): Mod.DeveloperInterface;
                        getSafetyInterface(): Mod.SafetyInterface;
                        getGraphics(): ModGraphics;
                    }
                    export module Mod {
                        export class ConfigurationInterface extends globalThis.java.lang.Object {
                            static class: globalThis.java.lang.Class<ConfigurationInterface>;
                            configuration: configuration.Configuration;
                            constructor();
                            isActive(): boolean;
                            setActive(active: boolean): void;
                        }
                        export class DeveloperInterface extends globalThis.java.lang.Object {
                            static class: globalThis.java.lang.Class<DeveloperInterface>;
                            toProductionMode(logger: runtime.logger.EventLogger): void;
                            toDeveloperMode(): void;
                            toProductModeUiProtocol(): boolean;
                            anyForDeveloperModeTransfer(): boolean;
                            anyForProductionModeTransfer(): boolean;
                        }
                        export class SafetyInterface extends globalThis.java.lang.Object {
                            static class: globalThis.java.lang.Class<SafetyInterface>;
                            static readonly CRASH_LOCK = ".crash-lock";
                            static readonly CRASH_DISABLED_LOCK = ".crash-disabled-lock";
                            getLock(name: string): boolean;
                            setLock(name: string, exists: boolean): boolean;
                            beginUnsafeSection(): boolean;
                            endUnsafeSection(): boolean;
                            isInUnsafeSection(): boolean;
                            isCrashRegistered(): boolean;
                            removeCrashLock(): boolean;
                            isDisabledDueToCrash(): boolean;
                            setDisabledDueToCrash(disabled: boolean): boolean;
                        }
                    }
                }
            }
        }
    }
}