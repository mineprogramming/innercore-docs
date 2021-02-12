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
     * @returns render's model that defines its visual shape. 
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
    setPartParams(partName: string, partParams?: Render.PartParameters): void;

    /**
     * Sets the content and all properties of the part by its full name.
     * @param name full name of the part separated by "."
     * @param data array of part data objects to be applied to the part
     * @param params specifies all the parameters of the part
     */
    setPart(name: string, data: Render.PartElement[], params: Render.PartParameters): void;

    /**
     * @deprecated
     */
    setTextureResolution(...params: any): void;


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
     * Part's box description specified in [[Render.setPart]] method
     */
    interface PartElement {
        /**
         * Box coordinates, relative to part's coordinates
         */
        coords: Vector,

        /**
         * Box texture offset
         */
        uv?: { x: number, y: number },

        /**
         * Box size
         * @param w additional size to be added from all the six sizes of the
         * box
         */
        size: { x: number, y: number, z: number, w?: number },

        /**
         * Specifies child elements, using current box coordinates as base for the
         * child boxes
         */
        children?: PartElement[]
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
        /**
         * If false or not specified in [[Render.setPart]] call, the part is 
         * cleared, otherwise new parts and params are applied to the existing parts 
         */
        add?: boolean,

        /**
         * Texture width, use the real texture file width or change it to stretch 
         * texture
         */
        width?: number,

        /**
         * Texture height, use the real texture file height or change it to stretch 
         * texture
         */
        height?: number,

        /**
         * Texture horizontal offset
         */
        u?: number,

        /**
         * Texture vertical offset
         */
        v?: number,

        /**
         * Part center position
         */
        pos?: Vector | [number, number, number];

        /**
         * Part rotation
         */
        rotation?: Vector | [number, number, number];
    }

    interface Model {
        /**
         * @param name part name
         * @returns true if part with specified name exists in the model, 
         * false otherwise
         */
        hasPart(name: string): boolean;

        /**
         * @param name part name
         * @returns part by its name or null if part doesn't exist
         */
        getPart(name: string): Nullable<ModelPart>;

        /**
         * Resets model
         */
        reset(): void;

        /**
         * Clears all parts of the model
         */
        clearAllParts(): void;
    }

    interface ModelPart {
        /**
         * Clears the contents of the part
         */
        clear(): void;

        /**
         * Adds a new box to the part on the specified coordinates (relative to 
         * the part's coordinates) of the specified size (width, height, length)
         * @param add additional size to be added from all the six sizes of the 
         * box
         */
        addBox(x: number, y: number, z: number, w: number, h: number, l: number, add?: number): void;

        /**
         * Creates a new part with specified name. If a part with specified name
         * already exists, returns the existing part
         * @param name name of the part to create or return
         */
        addPart(name: string): ModelPart;

        /**
         * Specifies texture uv offset
         * @param placeholder deprecated boolean parameter
         */
        setTextureOffset(x: number, y: number, placeholder?: boolean): void;

        /**
         * Specifies texture size size, use the real texture file size or change 
         * it to stretch texture
         * @param placeholder deprecated boolean parameter
         */
        setTextureSize(x: number, y: number, placeholder?: boolean): void;

        /**
         * Specifies part default offset
         */
        setOffset(x: number, y: number, z: number): void;

        /**
         * Specifies part rotation
         */
        setRotation(x: number, y: number, z: number): void;

        /**
         * Specifies [[RenderMesh]] to be used as a part
         */
        setMesh(mesh: RenderMesh): void;

        /**
         * @returns [[RenderMesh]] specified via [[setMesh]] call or null, if 
         * this part doesn't contain mesh
         */
        getMesh(): Nullable<RenderMesh>;
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