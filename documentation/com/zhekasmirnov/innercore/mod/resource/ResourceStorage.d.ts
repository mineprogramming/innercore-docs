declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module mod {
                export module resource {
                    export class ResourceStorage extends java.lang.Object implements pack.IResourcePack {
                        static class: java.lang.Class<ResourceStorage>;
                        static readonly VANILLA_RESOURCE = "resource_packs/vanilla/";
                        animationList: org.json.JSONArray;
                        blockTexttureDescriptor: types.TextureAtlasDescription;
                        itemTextureDescriptor: types.TextureAtlasDescription;
                        textureList: org.json.JSONArray;
                        static addTextureToLoad(path: string): void;
                        static loadAllTextures(): void;
                        static nativeAddTextureToLoad(path: string): void;
                        addResourceFile(textureType: types.enums.TextureType, resource: horizon.modloader.resource.directory.Resource): void;
                        build(): void;
                        getAbsolutePath(): string;
                        getId(): string;
                        getLinkedFilePath(link: string): string;
                        getPackName(): string;
                    }
                }
            }
        }
    }
}