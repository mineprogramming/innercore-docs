declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module mod {
                export module resource {
                    export module types {
                        export class ResourceFile extends java.io.File {
                            static class: java.lang.Class<ResourceFile>;
                            constructor(rp: pack.IResourcePack, file: java.io.File);
                            constructor(path: NonNullable<string>);
                            getAnimationType(): enums.AnimationType;
                            getLocalDir(): string;
                            getLocalPath(): string;
                            getParseError(): enums.ParseError;
                            getResourcePack(): pack.IResourcePack;
                            getTextureType(): enums.TextureType;
                            getType(): enums.FileType;
                            setResourcePack(rp: pack.IResourcePack): void;
                        }
                    }
                }
            }
        }
    }
}