
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
}

/**
 * Class representing item model in player's hand and/or inventory. To get an instance of this
 * class from yout code, use [[ItemModel.getFor]] static function. The coordinates of the full block in 
 * player's hand or inventory is (0, 0, 0), (1, 1, 1), so it is generally recommended to use the models 
 * that fit that bound at least for the inventory 
 */
declare class ItemModel {
    /**
     * @returns true, if the model is empty
     */
    isEmpty(): boolean;

    /**
     * @returns true, if this item model overrides the default model in player's hand
     */
    overridesHand(): boolean;

    /**
     * @returns true, if this item model overrides the default model in player's inventory
     */
    overridesUi(): boolean;

    /**
     * Sets item's model to display both in the inventory and in hand
     * @param model [[RenderMesh]], [[ICRender.Model]] or [[BlockRenderer.Model]] to be used as item model
     * @param texture texture name to be used for the model
     * @param material material name to be used for the model
     */
    setModel(model: RenderMesh|ICRender.Model|BlockRenderer.Model, texture?: string, material?: string): ItemModel;

    /**
     * Sets item's model to display only in player's hand
     * @param model [[RenderMesh]], [[ICRender.Model]] or [[BlockRenderer.Model]] to be used as item model
     * @param texture texture name to be used for the model
     * @param material material name to be used for the model
     */
    setHandModel(model: RenderMesh|ICRender.Model|BlockRenderer.Model, texture?: string, material?: string): ItemModel;

    /**
     * Sets item's model to display only in player's inventory
     * @param model [[RenderMesh]], [[ICRender.Model]] or [[BlockRenderer.Model]] to be used as item model
     * @param texture texture name to be used for the model
     * @param material material name to be used for the model
     */
    setUiModel(model: RenderMesh|ICRender.Model|BlockRenderer.Model, texture?: string, material?: string): ItemModel;

    /**
     * Sets item model's texture in both player's invantory and in hand
     * @param texture texture name to be used for the model
     */
    setTexture(texture: string): ItemModel;
    
    /**
     * Sets item model's texture only in player's hand
     * @param texture texture name to be used for the model
     */
    setHandTexture(texture: string): ItemModel;
    
    /**
     * Sets item model's texture only in player's inventory
     * @param texture texture name to be used for the model
     */
    setUiTexture(texture: string): ItemModel;

    /**
     * Sets item model's material in both player's invantory and in hand
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
}