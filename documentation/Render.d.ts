/** 
 * An interface of the object that is used as [[Render.constructor]] parameter 
 * */
interface RenderParameters {
    /** Name of the cached Render object to be used */
    name?: string;
    /** Item ID for Item Sprite render type */
    item?: number;
    /** Relative path to the texture used by render */
    skin?: string;
    /** Render scale multiplier */
    scale?: number;
    /** If set to true, a humanoid render is constructed, empty otherwise */
    raw?: boolean;
}

/** An interface of the object that is used as [[Render.addPart]] parameter*/
interface PartParameters {

}

interface PartObject {

}

/**
 * Class that is used to give mobs, animations and blocks custom shape.
 */
declare class Render {
    /**
     * Creates a new Render instance with specified parameters
     * @param {RenderParameters | number | string} parameters specifies all the 
     * properties of the object. If it is a number, vanilla render id is used,
     * if it is a string, used as [[RenderParameters.name]] name property
     */
    constructor(parameters?: RenderParameters | string | number);

    /** 
     * Returns render id that can be used to set render to the mob, animation 
     * or block.
     */
    getID(): number;
    /**
     * Same as [[getId]]
     */
    getId(): number;
    /**
     * Same as [[getId]]
     */
    getRenderType(): number;

    /** Returns render's model that defines its visual shape. */
    getModel(): Model;

    /** 
     * Returns a part of the render by its full name. By default, there are six 
     * parts available to the user. However, you can create your own parts that 
     * suit your needs and get them by their names.
     * @param partName full name of the part separated by "."
     * @returns part of the render with specified full name
     */
    getPart(partName: string): ModelPart;

    /**
     * Adds a part to the render by its full name. The part should be descendent 
     * of one of the six default parts, see [[ModelPart]] for details.
     * @param partName full name of the part separated by "."
     * @param partParams specifies all the parameters of the part
     * @returns newly created part
     */
    addPart(partName: string, partParams?: PartParameters): ModelPart;

    /**
     * Sets all the properties of the part by its full name. 
     * @param partName full name of the part separated by "."
     * @param partParams specifies all the parameters of the part
     */
    setPartParams(partName: string, partParams?: PartParameters): never;

    /**
     * Sets the content and all properties of the part by its full name.
     * @param name full name of the part separated by "."
     * @param data array of part data objects to be applied to the part
     * @param params specifies all the parameters of the part
     */
    setPart(name: string, data: PartObject[], params: PartParameters): never;
    
}

declare class Model {

}

declare class ModelPart {

}