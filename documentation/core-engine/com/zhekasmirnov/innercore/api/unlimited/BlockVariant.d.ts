declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export module unlimited {
                    interface IBlockVariant extends Block.BlockVariation { isTech?: boolean }
                    export class BlockVariant extends java.lang.Object {
                        static class: java.lang.Class<BlockVariant>;
                        readonly data: number;
                        readonly inCreative: boolean;
                        isTechnical: boolean;
                        readonly name: string;
                        renderType: number;
                        shape: BlockShape;
                        readonly textureIds: number[];
                        readonly textures: string[];
                        readonly uid: number;
                        constructor(uid: number, data: number, name: string, textures: string[], textureIds: number[], inCreative: boolean);
                        constructor(uid: number, data: number, object: IBlockVariant);
                        getGuiBlockModel(): mod.ui.GuiBlockModel;
                        getSpriteTexturePath(): string;
                    }
                }
            }
        }
    }
}