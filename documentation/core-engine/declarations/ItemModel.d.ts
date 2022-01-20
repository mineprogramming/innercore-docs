
/**
 * Namespace used to change item models in player's hand and/or inventory. 
 * By default, if the block has an [[ICRender]], it is automatically applied as item's model
 */
declare namespace ItemModel {
    /**
     * Gets [[ItemModel]] object for the specified id and data
     * @param id item or block id
     * @param data item or block data
     * @returns [[ItemModel]] object used to manipulate item's model
     */
	function getFor(id: number, data: number): ItemModel;
	
	function setCurrentCacheGroup(mod: string, version: string): void;

    /**
     * Gets [[ItemModel]] object for the specified id and data. If no [[ItemModel]] for
     * specified data exist, uses default data (0)
     * @returns [[ItemModel]] object used to manipulate item's model
     */
    function getForWithFallback(id: number, data: number): ItemModel;

    /**
     * Creates a new standalone item model that is not connected with any item or block
     */
    function newStandalone(): ItemModel;

    /**
     * @returns a collection of all existing item models
     */
    function getAllModels(): java.util.Collection<ItemModel>;

    /**
     * Releases some of the bitmaps to free up memory
     * @param bytes bytes count to be released
     */
    function tryReleaseModelBitmapsOnLowMemory(bytes: number): void;

    interface ModelOverrideFunction {
        (item: ItemInstance): ItemModel
    }

    interface IconRebuildListener {
        (model: ItemModel, newIcon: android.graphics.Bitmap): void
    }

    /**
     * @returns empty [[RenderMesh]] from the pool or creates an empty one. Used 
     * to reduce constructors/destructors calls
     */
    function getEmptyMeshFromPool(): RenderMesh;

    /**
     * Releases [[RenderMesh]] and returns it to the pool. Used to reduce
     * constructors/destructors calls
     */
    function releaseMesh(mesh: RenderMesh): void;

    /**
     * @param randomize if true, item mesh position is randomized
     * @returns [[RenderMesh]] generated for specified item
     */
    function getItemRenderMeshFor(id: number, count: number, data: number, randomize: boolean): RenderMesh;

    /**
     * @param id item or block numeric id
     * @param data item or block data
     * @returns texture name for the specified item or block
     */
    function getItemMeshTextureFor(id: number, data: number): string;
}

/**
 * Class representing item model in player's hand and/or inventory. To get an instance of this
 * class from your code, use [[ItemModel.getFor]] static function. The coordinates of the full block in
 * player's hand or inventory is (0, 0, 0), (1, 1, 1), so it is generally recommended to use the models 
 * that fit that bound at least for the inventory 
 */
declare interface ItemModel {
    /**
     * Item or block id current [[ItemModel]] relates to
     */
    readonly id: number;

    /**
     * Item or block data current [[ItemModel]] relates to
     */
    readonly data: number;

    occupy(): ItemModel;

    isSpriteInUi(): boolean;

    isEmptyInUi(): boolean;

    isSpriteInWorld(): boolean;

    isEmptyInWorld(): boolean;

    /**
     * @returns true, if the model is empty
     */
    isEmpty(): boolean;

    isNonExistant(): boolean;

    /**
     * @returns true, if this item model overrides the default model in player's hand
     */
    overridesHand(): boolean;

    /**
     * @returns true, if this item model overrides the default model in player's inventory
     */
    overridesUi(): boolean;

    getShaderUniforms(): ShaderUniformSet;

    setSpriteUiRender(isSprite: boolean): ItemModel;


    /**
     * Sets item's model to display both in the inventory and in hand
     * @param model [[RenderMesh]], [[ICRender.Model]] or [[BlockRenderer.Model]] to be used as item model
     * @param texture texture name to be used for the model (use "atlas::terrain" for block textures)
     * @param material material name to be used for the model
     */
    setModel(model: RenderMesh | ICRender.Model | BlockRenderer.Model, texture?: string, material?: string): ItemModel;

    /**
     * Sets item's model to display only in player's hand
     * @param model [[RenderMesh]], [[ICRender.Model]] or [[BlockRenderer.Model]] to be used as item model
     * @param texture texture name to be used for the model (use "atlas::terrain" for block textures)
     * @param material material name to be used for the model
     */
    setHandModel(model: RenderMesh | ICRender.Model | BlockRenderer.Model, texture?: string, material?: string): ItemModel;

    /**
     * Sets item's model to display only in player's inventory
     * @param model [[RenderMesh]], [[ICRender.Model]] or [[BlockRenderer.Model]] to be used as item model
     * @param texture texture name to be used for the model (use "atlas::terrain" for block textures)
     * @param material material name to be used for the model
     */
    setUiModel(model: RenderMesh | ICRender.Model | BlockRenderer.Model, texture?: string, material?: string): ItemModel;

    /**
     * Sets item model's texture in both player's inventory and in hand
     * @param texture texture name to be used for the model (use "atlas::terrain" for block textures)
     */
    setTexture(texture: string): ItemModel;

    /**
     * Sets item model's texture only in player's hand
     * @param texture texture name to be used for the model (use "atlas::terrain" for block textures)
     */
    setHandTexture(texture: string): ItemModel;

    /**
     * Sets item model's texture only in player's inventory
     * @param texture texture name to be used for the model (use "atlas::terrain" for block textures)
     */
    setUiTexture(texture: string): ItemModel;

    /**
     * Sets item model's material in both player's inventory and in hand
     * @param texture material name to be used for the model. See 
     * {@page Materials and Shaders} for more information
     */
    setMaterial(texture: string): ItemModel;

    /**
     * Sets item model's material only in player's hand
     * @param texture material name to be used for the model
     */
    setHandMaterial(texture: string): ItemModel;

    /**
     * Sets item model's material only in player's inventory
     * @param texture material name to be used for the model
     */
    setUiMaterial(texture: string): ItemModel;

    setGlintMaterial(material: string): ItemModel;

    setHandGlintMaterial(material: string): ItemModel;

    setUiGlintMaterial(material: string): ItemModel;

    getUiTextureName(): string;

    getWorldTextureName(): string;

    getUiMaterialName(): string;

    getWorldMaterialName(): string;

    getUiGlintMaterialName(): string;

    getWorldGlintMaterialName(): string;

    newTexture(): android.graphics.Bitmap;

    getSpriteMesh(): RenderMesh;

    addToMesh(mesh: RenderMesh, x: number, y: number, z: number): void;

    getMeshTextureName(): string;

    setItemTexturePath(path: string): ItemModel;

    setItemTexture(name: string, index: number): ItemModel;

    removeModUiSpriteTexture(): ItemModel;

    setModUiSpritePath(path: string): ItemModel;

    setModUiSpriteName(name: string, index: number): ItemModel;

    setModUiSpriteBitmap(bitmap: android.graphics.Bitmap): ItemModel;

    getModelForItemInstance(id: number, count: number, data: number, extra: ItemExtraData): ItemModel;

    setModelOverrideCallback(callback: ItemModel.ModelOverrideFunction): ItemModel;

    isUsingOverrideCallback(): boolean;

    releaseIcon(): void;

    reloadIconIfDirty(): void;

    getIconBitmap(): android.graphics.Bitmap;

    getIconBitmapNoReload(): android.graphics.Bitmap;

    reloadIcon(): void;

    queueReload(listener?: ItemModel.IconRebuildListener): android.graphics.Bitmap;

    setCacheKey(key: string): void;

    getCacheKey(): string;

    updateForBlockVariant(variant: com.zhekasmirnov.innercore.api.unlimited.BlockVariant): void;

    getItemRenderMesh(count: number, randomize: boolean): RenderMesh;


}