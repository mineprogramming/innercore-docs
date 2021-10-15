declare module com {
    export module zhekasmirnov {
        export module horizon {
            export module modloader {
                export module mod {
                    export class ModManifest extends globalThis.java.lang.Object {
                        static class: globalThis.java.lang.Class<ModManifest>;
                        constructor(file: globalThis.java.io.File);
                        getParentDirectory(): globalThis.java.io.File;
                        getDirectories(): globalThis.java.util.List<ModManifest.Directory>;
                        getModules(): globalThis.java.util.List<ModManifest.Module>;
                        getMainModule(): ModManifest.Module;
                        getName(): string;
                    }
                    export module ModManifest {
                        export class DirectoryType extends globalThis.java.lang.Object {
                            static class: globalThis.java.lang.Class<DirectoryType>;
                            static readonly LIBRARY: DirectoryType;
                            static readonly RESOURCE: DirectoryType;
                            static readonly SUBMOD: DirectoryType;
                            static readonly JAVA: DirectoryType;
                            static byName(name: string): DirectoryType;
                        }
                        export class Directory extends globalThis.java.lang.Object {
                            static class: globalThis.java.lang.Class<Directory>;
                            readonly file: globalThis.java.io.File;
                            readonly type: DirectoryType;
                            constructor(file: globalThis.java.io.File, type: DirectoryType);
                            constructor(json: org.json.JSONObject);
                            asModLocation(): repo.location.ModLocation;
                        }
                        export class Module extends globalThis.java.lang.Object {
                            static class: globalThis.java.lang.Class<Module>;
                            readonly nameId: string;
                            readonly name: string;
                            readonly author: string;
                            readonly description: string;
                            readonly versionName: string;
                            readonly versionCode: number;
                            constructor(nameId: string, json: org.json.JSONObject);
                            getDisplayedDescription(): string;
                        }
                    }
                }
            }
        }
    }
}