/**
 * Class that is used to give mobs, animations and blocks custom shape.
 */
declare class Render {
    isEmpty: boolean;
    isChangeable: boolean;
    renderer: Nullable<Render.Renderer>;
    model: Nullable<Render.Model>;
    parts: { [key: string]: Render.ModelPart };
    renderId: number;
    /**
     * Creates a new Render instance with specified parameters
     * @param parameters specifies all the 
     * properties of the object. If it is a number, vanilla render id is used,
     * if it is a string, used as [[RenderParameters.name]] name property
     */
    constructor(parameters?: Render.RenderParameters | string | number);
    /**
     * Specifies additional params for the following [[Render]]
     * @param params specifies all the 
     * properties of the object. If it is a number, vanilla render id is used,
     * if it is a string, used as [[RenderParameters.name]] name property
     */
    init(params?: Render.RenderParameters | string | number): void;
    initModel(): void;
    checkChangeable(): void;
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
    _setPartRecursive(part: Render.ModelPart, data: Render.PartElement[], coords: Vector): void;
    localCache: Render.Cache | {};
    fromCache(data: Render.Cache): void;
    toCache(): Render.Cache;
    saveState(name: string, isLocal: boolean): void;
    loadState(name: string, isLocal: boolean): void;
    loadInitialState(name: string): void;
    saveToNext(name: string, isLocal: boolean): void;
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
    interface Transform extends com.zhekasmirnov.innercore.api.NativeRenderer.Transform {
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
    interface Model extends com.zhekasmirnov.innercore.api.NativeRenderer.Model {}
    interface ModelPart extends com.zhekasmirnov.innercore.api.NativeRenderer.ModelPart {}
    interface Renderer extends com.zhekasmirnov.innercore.api.NativeRenderer.Renderer {}
    interface Cache {
        renderer: Nullable<Renderer>,
        renderId: number,
        model: Nullable<Model>,
        isChangeable: boolean,
        parts: { [key: string]: ModelPart }
    }
}