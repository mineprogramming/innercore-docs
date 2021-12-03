declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export class NativeRenderer extends java.lang.Object {
                    static class: java.lang.Class<NativeRenderer>;
                    static createHumanoidRenderer(d: number): NativeRenderer.Renderer;
                    static createItemSpriteRenderer(id: number): NativeRenderer.Renderer;
                    static createRendererWithSkin(skin: string, d: number): NativeRenderer.Renderer;
                    static getRendererById(id: number): Nullable<NativeRenderer.Renderer>;
                }
                export module NativeRenderer {
                    export class FinalizeCallback extends java.lang.Object {
                        static class: java.lang.Class<FinalizeCallback>;
                        onFinalized(renderer: Renderer): void;
                    }
                    export type FinalizeCallbackJS = (renderer: Renderer) => void;
                    export class Model extends java.lang.Object {
                        static class: java.lang.Class<Model>;
                        /**
                         * Clears all parts of the model
                         */
                        clearAllParts(): void;
                        /**
                         * @param partName part name
                         * @returns part by its name or null if part doesn't exist
                         */
                        getPart(partName: string): Nullable<ModelPart>;
                        /**
                         * @param partName part name
                         * @returns true if part with specified name exists in the model, 
                         * false otherwise
                         */
                        hasPart(partName: string): boolean;
                        /**
                         * Resets the model
                         */
                        reset(): void;
                    }
                    export class ModelPart extends java.lang.Object {
                        static class: java.lang.Class<ModelPart>;
                        /**
                         * Adds a new box to the part on the specified coordinates (relative to 
                         * the part's coordinates) of the specified size (width, height, length)
                         */
                        addBox(x: number, y: number, z: number, w: number, h: number, l: number): void;
                        /**
                         * Adds a new box to the part on the specified coordinates (relative to 
                         * the part's coordinates) of the specified size (width, height, length)
                         * @param add additional size to be added from all the six sizes of the 
                         * box
                         */
                        addBox(x: number, y: number, z: number, w: number, h: number, l: number, add: number): void;
                        /**
                         * Creates a new part with specified name. If a part with specified name
                         * already exists, returns the existing part
                         * @param name name of the part to create or return
                         */
                        addPart(name: string): ModelPart;
                        /**
                         * Clears the contents of the part
                         */
                        clear(): void;
                        /**
                         * @returns [[NativeRenderMesh]] specified via [[setMesh]] call or null, if 
                         * this part doesn't contain mesh
                         */
                        getMesh(): Nullable<NativeRenderMesh>;
                        /**
                         * Specifies [[NativeRenderMesh]] to be used as a part
                         */
                        setMesh(mesh: Nullable<NativeRenderMesh>): void;
                        /**s
                         * Specifies part default offset
                         */
                        setOffset(offsetX: number, offsetY: number, offsetZ: number): void;
                        /**
                         * Specifies part rotation
                         */
                        setRotation(rotationX: number, rotationY: number, rotationZ: number): void;
                        /**
                         * Specifies texture uv offset
                         */
                        setTextureOffset(u: number, v: number): void;
                        /**
                         * Specifies texture uv offset
                         * @param placeholder deprecated boolean parameter
                         */
                        setTextureOffset(u: number, v: number, placeholder: boolean): void;
                        /**
                         * Specifies texture size size, use the real texture file size or change 
                         * it to stretch texture
                         */
                        setTextureSize(w: number, h: number): void;
                        /**
                         * Specifies texture size size, use the real texture file size or change 
                         * it to stretch texture
                         * @param placeholder deprecated boolean parameter
                         */
                        setTextureSize(w: number, h: number, placeholder: boolean): void;
                    }
                    export class RenderPool extends java.lang.Object {
                        static class: java.lang.Class<RenderPool>;
                        constructor();
                        constructor(factory: IFactory | IFactoryJS);
                        getRender(): Renderer;
                    }
                    export module RenderPool {
                        export type IFactory = NativeRenderer.IFactory
                    }
                    export class IFactory extends java.lang.Object {
                        static class: java.lang.Class<IFactory>;
                        newRender(): Renderer;
                        constructor();
                        constructor(impl: {
                            newRender: () => Renderer
                        });
                    }
                    export type IFactoryJS = () => Renderer;
                    export class Renderer extends java.lang.Object {
                        static class: java.lang.Class<Renderer>;
                        isHumanoid: boolean;
                        transform: Transform;
                        constructor(pointer: number);
                        addFinalizeCallback(callback: FinalizeCallback | FinalizeCallbackJS): void;
                        getModel(): Model;
                        getPointer(): number;
                        getRenderType(): number;
                        getScale(): number;
                        release(): void;
                        setFinalizeable(finalizeable: boolean): void;
                        setScale(scale: number): void;
                        setSkin(skin: string): void;
                    }
                    export module Renderer {
                        type Transform = NativeRenderer.Transform;
                    }
                    class Transform extends java.lang.Object {
                        static class: java.lang.Class<Transform>;
                        /**
                         * Clears all the transformations applied to the render
                         * @returns reference to itself to be used in sequential calls
                         */
                        clear(): Transform;
                        /**
                         * @returns reference to itself to be used in sequential calls
                         */
                        lock(): Transform;
                        /**
                         * Performs arbitrary matrix transformations on the render
                         * @returns reference to itself to be used in sequential calls
                         */
                        matrix(m00: number, m01: number, m02: number, m03: number,
                                m10: number, m11: number, m12: number, m13: number,
                                m20: number, m21: number, m22: number, m23: number,
                                m30: number, m31: number, m32: number, m33: number): Transform;
                        /**
                         * Rotates render along three axes
                         * @returns reference to itself to be used in sequential calls
                         */
                        rotate(rotX: number, rotY: number, rotZ: number): Transform;
                        /**
                         * Scales render along the three axes
                         * @returns reference to itself to be used in sequential calls
                         */
                        scale(scaleX: number, scaleY: number, scaleZ: number): Transform;
                        /**
                         * Translates render along three axes
                         * @returns reference to itself to be used in sequential calls
                         */
                        translate(x: number, y: number, z: number): Transform;
                        /**
                         * @returns reference to itself to be used in sequential calls
                         */
                        unlock(): Transform;
                    }
                    export class SpriteRenderer extends Renderer {
                        static class: java.lang.Class<SpriteRenderer>;
                    }
                }
            }
        }
    }
}