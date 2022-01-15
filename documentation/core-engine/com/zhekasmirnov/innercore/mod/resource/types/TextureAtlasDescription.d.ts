declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module mod {
                export module resource {
                    export module types {
                        export class TextureAtlasDescription extends java.lang.Object {
                            static class: java.lang.Class<TextureAtlasDescription>;
                            jsonObject: org.json.JSONObject;
                            textureData: org.json.JSONObject;
                            constructor(path: string);
                            constructor(json: org.json.JSONObject);
                            addTextureFile(file: java.io.File, name: string): void;
                            addTexturePath(path: string, meta: number, name: string): void;
                            getTextureCount(texture: string): number;
                            getTextureName(texture: string, meta: number): string;
                        }
                    }
                }
            }
        }
    }
}