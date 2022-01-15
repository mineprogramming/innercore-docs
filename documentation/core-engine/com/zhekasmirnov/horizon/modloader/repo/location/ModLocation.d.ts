declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export module repo {
                    export module location {
                        export class ModLocation extends globalThis.java.lang.Object {
                            static class: globalThis.java.lang.Class<ModLocation>;
                            initializeInLocalStorage(temporaryStorage: storage.TemporaryStorage, logger: runtime.logger.EventLogger): globalThis.java.io.File;
                            constructor();
                            constructor(impl: {
                                initializeInLocalStorage: (temporaryStorage: storage.TemporaryStorage, logger: runtime.logger.EventLogger) => globalThis.java.io.File;
                            });
                        }
                    }
                }
            }
        }
    }
}