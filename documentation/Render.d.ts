

interface PartObject {

}

/**
 * Class that is used to give mobs, animations and blocks custom shape.
 */
declare class Render {
    /**
     * Creates a new Render instance with specified parameters
     * @param parameters specifies all the 
     * properties of the object. If it is a number, vanilla render id is used,
     * if it is a string, used as [[RenderParameters.name]] name property
     */
    constructor(parameters?: Render.RenderParameters | string | number);

    /** 
     * @deprecated use [[getId]] instead
     */
    getID(): number;

    /**
     * @returns render id that can be used to set render to the mob, animation 
     * or block
     */
    getId(): number;

    /**
     * @deprecated use [[getId]] instead
     */
    getRenderType(): number;

    /** 
     * Returns render's model that defines its visual shape. 
     */
    getModel(): Render.Model;

    /**
     * @returns [[Render.Transform]] object used to manipulate current render
     */
    transform(): Render.Transform;

    /** 
     * @returns a part of the render by its full name. By default, there are six 
     * parts available to the user. However, you can create your own parts that 
     * suit your needs and get them by their names.
     * @param partName full name of the part separated by "."
     * @returns part of the render with specified full name
     */
    getPart(partName: string): Render.ModelPart;

    /**
     * Adds a part to the render by its full name. The part should be descendent 
     * of one of the six default parts, see [[ModelPart]] for details.
     * @param partName full name of the part separated by "."
     * @param partParams specifies all the parameters of the part
     * @returns newly created part
     */
    addPart(partName: string, partParams?: Render.PartParameters): Render.ModelPart;

    /**
     * Sets all the properties of the part by its full name. 
     * @param partName full name of the part separated by "."
     * @param partParams specifies all the parameters of the part
     */
    setPartParams(partName: string, partParams?: Render.PartParameters): never;

    /**
     * Sets the content and all properties of the part by its full name.
     * @param name full name of the part separated by "."
     * @param data array of part data objects to be applied to the part
     * @param params specifies all the parameters of the part
     */
    setPart(name: string, data: PartObject[], params: Render.PartParameters): never;
}

declare namespace Render {
    /** 
     * An interface of the object that is used as [[Render.constructor]] parameter 
     * */
    interface RenderParameters {
        /** 
         * Name of the cached Render object to be used 
         */
        name?: string;
        /** 
         * Item ID for Item Sprite render type
         */
        item?: number;
        /** 
         * Relative path to the texture used by render 
         */
        skin?: string;
        /** 
         * Render scale multiplier 
         */
        scale?: number;
        /** 
         * If set to true, a humanoid render is constructed, empty otherwise 
         */
        raw?: boolean;
    }

    /**
     * Interface used to perform transformation on the specified render object
     */
    interface Transform {
        /**
         * Clears all the transformations applied to the render
         * @returns reference to itself to be used in sequential calls
         */
        clear(): Transform;
        
        /**
         * 
         * @returns reference to itself to be used in sequential calls
         */
        lock(): Transform;
        
        /**
         * 
         * @returns reference to itself to be used in sequential calls
         */
        unlock(): Transform;
        
        /**
         * Performs arbitrary matrix transformations on the render
         * @returns reference to itself to be used in sequential calls
         */
        matrix(f0: number, f1: number, f2: number, f3: number, f4: number, f5: number, f6: number, f7: number, f8: number, f9: number, f10: number, f11: number, f12: number, f13: number, f14: number, f15: number): Transform;
        
        /**
         * Scales render along the three axes
         * @returns reference to itself to be used in sequential calls
         */
        scale(x: number, y: number, z: number): Transform;

        /**
         * Rotates render along three axes
         * @returns reference to itself to be used in sequential calls
         */
        rotate(x: number, y: number, z: number): Transform;
        /**
         * Translates render along three axes
         * @returns reference to itself to be used in sequential calls
         */
        translate(x: number, y: number, z: number): Transform;

        /**
         * Scales the render along all the three axes. Applicable only to the 
         * [[Animation]]'s transformations
         * @deprecated consider using [[Transform.scale]] instead
         * @returns reference to itself to be used in sequential calls
         */
        scaleLegacy(scale: number): Transform;
    }

    /** 
     * An interface of the object that is used as [[Render.addPart]] parameter
     */
    interface PartParameters {

    }

    interface Model {

    }

    interface ModelPart {

    }

    interface ShaderUniformSet {
        
        /**
         * 
         * @returns reference to itself to be used in sequential calls
         */
        lock(): ShaderUniformSet;
        
        /**
         * 
         * @returns reference to itself to be used in sequential calls
         */
        unlock(): ShaderUniformSet;
        
        /**
         * 
         * @param uniformSet 
         * @param uniformName 
         * @param values 
         * @returns reference to itself to be used in sequential calls
         */
        setUniformValue(uniformSet: string, uniformName: string, ...values: number[]): ShaderUniformSet;
        
        /**
         * 
         * @param uniformSet 
         * @param uniformName 
         * @param values 
         * @returns reference to itself to be used in sequential calls
         */
        setUniformValueArr(uniformSet: string, uniformName: string, values: number[]): ShaderUniformSet;
    }
}