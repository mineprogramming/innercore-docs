declare namespace LiquidRegistry {
    var liquidStorageSaverId: number;
    var liquids: object;

    function registerLiquid(key: string, name: string, uiTextures: string[], modelTextures?: string[]): void;

    function getLiquidData(key: string): any;

    function isExists(key: string): boolean;

    function getLiquidName(key: string): string;

    function getLiquidUITexture(key: string, width: number, height: number): string;

    function getLiquidUIBitmap(key: string, width: number, height: number): android.graphics.Bitmap;
    var FullByEmpty: object;
    var EmptyByFull: object;

    function registerItem(liquid: string, empty: { id: number, data: number }, full: { id: number, data: number }): void;

    function getEmptyItem(id: number, data: number): { id: number, data: number, liquid: string };

    function getItemLiquid(id: number, data: number): string;

    function getFullItem(id: number, data: number, liquid: string): { id: number, data: number };

    class Storage {
        liquidAmounts: {[key: string]: number};
        liquidLimits: {[key: string]: number};
        tileEntity: TileEntity;

        constructor(tileEntity: TileEntity);

        setParent(tileEntity: TileEntity): void;
        getParent(): TileEntity;
        hasDataFor(liquid: string): boolean;
        setLimit(liquid: Nullable<string>, limit: number): void;
        getLimit(liquid: string): number;
        getAmount(liquid: string): number;
        getRelativeAmount(liquid: string): number;
        setAmount(liquid: string, amount: number): void;
        getLiquidStored(): Nullable<string>;
        isFull(liquid?: string): boolean;
        isEmpty(liquid?: string): boolean;
        addLiquid(liquid: string, amount: number, onlyFullAmount?: boolean): number;
        getLiquid(liquid: string, amount: number, onlyFullAmount?: boolean): number;
        updateUiScale(scale: string, liquid: string, container?: UI.Container): void;
        _setContainerScale(container: UI.Container, scale: string, liquid: string, val: number): void;
    }

    /**
     * @returns string id of a liquid for given block,
     * or null, if a block with given id is not a liquid
     */
    function getLiquidByBlock(id: number): Nullable<string>;

    /**
     * @returns numeric id of the liquid block by given [[LiquidRegistry]] string id.
     * If `isStatic` param is passed and it is true, the static liquid block id will be returned,
     * otherwise the dynamic block id will be returned.
     * This function will return 0 if no liquid with given string id exists
     */
    function getBlockByLiquid(liquidId: string, isStatic?: boolean): number;

}