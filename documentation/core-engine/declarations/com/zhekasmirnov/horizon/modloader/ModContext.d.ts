declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export class ModContext extends globalThis.java.lang.Object {
                    static class: globalThis.java.lang.Class<ModContext>;
                    readonly context: android.content.Context;
                    readonly resourceManager: resource.ResourceManager;
                    readonly executionDirectory: ExecutionDirectory;
                    getActivityContext(): android.content.Context;
                    getResourceManager(): resource.ResourceManager;
                    getExecutionDirectory(): ExecutionDirectory;
                    getActiveMods(): globalThis.java.util.List<mod.Mod>;
                    getDisabledMods(): globalThis.java.util.List<mod.Mod>;
                    getEventLogger(): runtime.logger.EventLogger;
                    clearContext(): void;
                    clearModsAndContext(): void;
                    addMod(mod: mod.Mod): void;
                    addMods(mods: globalThis.java.util.Collection<mod.Mod>): void;
                    injectAll(): void;
                    buildAll(): void;
                    initializeAll(): void;
                    launchAll(): void;
                    constructor(context: android.content.Context, resman: resource.ResourceManager, exdir: ExecutionDirectory);
                    addEventReceiver(event: string, receiver: ModContext.EventReceiver | ((...mods: mod.Mod[]) => void)): void;
                }
                export module ModContext {
                    export class EventReceiver extends globalThis.java.lang.Object {
                        static class: globalThis.java.lang.Class<EventReceiver>;
                        onEvent(...mods: mod.Mod[]): void;
                        constructor();
                        constructor(impl: {
                            onEvent: (...mods: mod.Mod[]) => void;
                        });
                    }
                }
            }
        }
    }
}