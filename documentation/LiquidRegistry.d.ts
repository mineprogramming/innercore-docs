declare namespace LiquidRegistry {
    var liquidStorageSaverId: number;
    namespace liquids {}

    function registerLiquid(key: string, name: string, uiTextures: string[], modelTextures?: string[]): void;

    function getLiquidData(key: string): any;

    function isExists(key: string): boolean;

    function getLiquidName(key: string): string;

    function getLiquidUITexture(key: string, width: number, height: number): string;

    function getLiquidUIBitmap(key: string, width: number, height: number): android.graphics.Bitmap;
    namespace FullByEmpty {}
    namespace EmptyByFull {}

    function registerItem(liquid: string, empty: {id: number, data: number}, full: {id: number, data: number}): void;

    function getEmptyItem(id: number, data: number): {id: number, data: number, liquid: string};

    function getItemLiquid(id: number, data: number): string;

    function getFullItem(id: number, data: number, liquid: string): {id: number, data: number};

    function Storage(tileEntity: TileEntity): any;
}