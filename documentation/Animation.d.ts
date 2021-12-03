/**
 * Animations are used to display some 3d models in the world without use of 
 * entities
 */
declare namespace Animation {
    /**
     * Base animations are used to display arbitrary model in the world
     */
    class Base {
        /**
         * Constructs a new Base animation on the specified coordinates
         */
        constructor(x: number, y: number, z: number);

        /**
         * Changes the animation's position
         */
        setPos(x: number, y: number, z: number): void;

        /**
         * @param enabled if true, animation position will be interpolated 
         * between tick calls
         */
        setInterpolationEnabled(enabled: boolean): void;

        /**
         * @deprecated use [[setBlockLightPos]] and related methods instead
         */
        setIgnoreBlocklight(ignore: boolean): void;

        /**
         * Sets specified coordinates as light measuring position for the 
         * animation. In other words, animation lightning will be calculated 
         * as if animation was at the specified coordinates
         */
        setBlockLightPos(x: number, y: number, z: number): void;

        /**
         * Resets light measuring position for the animation (to its coordinates)
         */
        resetBlockLightPos(): void;

        /**
         * Sets light measuring position to always match day/night lightning, 
         * even when the animation is not directly illuminated
         */
        setSkylightMode(): void;

        /**
         * Sets light measuring to match the animation coordinated
         */
        setBlocklightMode(): void;

        /**
         * Makes the animation ignore light at all
         */
        setIgnoreLightMode(): void;

        /**
         * @returns [[Render.Transform]] object for current animation's render
         */
        transform(): Render.Transform;

        /**
         * @returns [[ShaderUniformSet]] object for current animation's 
         * render
         */
        getShaderUniforms(): ShaderUniformSet;

        /**
         * Creates a set of transformations for the current animation
         * @param transformations 
         * @param noClear 
         */
        newTransform(transformations: {
            /**
             * Transformation function name, one of [[Render.Transform]] class member 
             * functions names
             */
            name: string,
            /**
             * Transformation function parameters, see [[Render.Transform]] functions
             * for details
             */
            params: any[]
        }[], noClear: boolean): void;

        /**
         * Creates render if it was not previously created and applies all the 
         * parameters from animation description
         */
        createRenderIfNeeded(): void;

        /**
         * Refreshes the animation
         */
        updateRender(): void;

        /**
         * Loads animation in the world
         */
        load(): void;

        /**
         * Loads animation in the world registering it as an [[Updatable]]
         * @param func function to be used as [[Updatable.update]] function
         */
        loadCustom(func: () => void): void;

        /**
         * @deprecated always returns 0
         */
        getAge(): void;

        /**
         * Refreshes the animation
         */
        refresh(): void;

        /**
         * Describes animation parameters for the future use. Call [[load]] or 
         * [[loadCustom]] to actually launch the animation
         * @param description an object containing all the required data about 
         * animation
         */
        describe(description: {
            /**
             * [[RenderMesh]] object to be displayed with animation
             */
            mesh?: RenderMesh,
            /**
             * Numeric id of the [[Render]] object to be displayed with animation.
             * Can be obtained using [[Render.getId]]
             */
            render?: number,
            /**
             * Name of the texture to be used as render's skin
             */
            skin?: string,
            /**
             * Animation scale, default is 1
             */
            scale?: number,
            /**
             * Animation material, can be used to apply custom materials to the 
             * animation
             */
            material?: string
        }): void;

        /**
         * @deprecated
         */
        getRenderAPI(base: any): any;

        /**
         * Destroys animation and releases all the resources
         */
        destroy(): void;
    }

    /**
     * Item animations are used to display items or blocks models in the world
     */
    class Item extends Base {
        /**
         * Constructs a new Item animation on the specified coordinates
         */
        constructor(x: number, y: number, z: number);

        /**
         * Describes item to be used for the animation
         * @param item item parameters object
         */
        describeItem(item: {
            /**
             * Item id
             */
            id: number,

            /**
             * Item count, will be transform to display an appropriate animation
             */
            count?: number,

            /**
             * Item data
             */
            data?: number,

            /**
             * Item extra
             */
            extra?: ItemExtraData,

            /**
             * Whether the item should be in glint state or not
             */
            glint?: boolean,

            /**
             * Item/block size, default is 0.5
             */
            size?: number,

            /**
             * If true, the position of the item will not be randomized
             */
            notRandomize?: boolean,

            /**
             * If string "x" is passed, the item is rotated 90 along x axis, if
             * "z" is passed, the item is rotated 90 along z axis, otherwise the
             * item is rotated according to the rotation array along all the three 
             * axes
             */
            rotation?: string | [number, number, number],

            /**
             * Skin name to be used for the render. If no skin is passed, default 
             * item skin is used
             */
            skin?: string,


            /**
             * Shader material name
             */
            material?: string,
        }): void;

        /**
         * Same as [[Item.describeItem]]
         * @deprecated consider using [[Item.describeItem]] instead
         */
        describeItemDefault(item: any): void;

        /**
         * @deprecated use [[Item.describeItem]] instead
         */
        describeItemAlternative(item: any, offset: any): void;

        /**
         * Resets all the transformations made via [[Item.transform]] calls
         */
        resetTransform(): void;

        /**
         * Specifies item rotation along the three axes
         */
        setItemRotation(x: number, y: number, z: number): void;

        /**
         * Specifies item size, default value is 0.5
         */
        setItemSize(size: number): void;

        /**
         * Specifies item size and rotation via single function call
         */
        setItemSizeAndRotation(size: number, x: number, y: number, z: number): void;
    }
}