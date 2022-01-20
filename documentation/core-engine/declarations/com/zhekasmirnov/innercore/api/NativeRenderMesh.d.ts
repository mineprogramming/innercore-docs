declare module com {
    export module zhekasmirnov {
        export module innercore {
            export module api {
                export class NativeRenderMesh extends java.lang.Object {
                    static class: java.lang.Class<NativeRenderMesh>;
                    /**
                     * Adds new mesh to the current one on the specified coordinates with specified scale
                     * @param mesh [[NativeRenderMesh]] object to be added to current mesh
                     */
                    addMesh(mesh: NativeRenderMesh): void;
                    addMesh(mesh: NativeRenderMesh, addX: number, addY: number, addZ: number): void;
                    addMesh(mesh: NativeRenderMesh, addX: number, addY: number, addZ: number, scaleX: number, scaleY: number, scaleZ: number): void;
                    /**
                     * Adds a new vertex on the specified coordinates
                     */
                    addVertex(x: number, y: number, z: number): void;
                    /**
                     * Adds a new vertex on the specified coordinates
                     * @param u x texture offset of the vertex
                     * @param v y texture offset of the vertex
                     */
                    addVertex(x: number, y: number, z: number, u: number, v: number): void;
                    /**
                     * Removes all vertices of the mesh
                     */
                    clear(): void;
                    /**
                     * Creates a copy of current [[NativeRenderMesh]]
                     */
                    clone(): NativeRenderMesh;
                    /**
                     * Scales the mesh to fit into the specified box
                     */
                    fitIn(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
                    /**
                     * Scales the mesh to fit into the specified box
                     * @param keepRatio if true, the ratio of the dimensions are preserved
                     */
                    fitIn(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, keepRatio: boolean): void;
                    /**
                     * @returns pointer to the native object instance of the
                     * following [[NativeRenderMesh]], represented as long number
                     */
                    getPtr(): number;
                    getReadOnlyVertexData(): NativeRenderMesh.ReadOnlyVertexData;
                    /**
                     * Imports mesh file using specified path
                     * @param path path to the mesh file. Path should be absolute path or
                     * be relative to the resources folder or to the "models/" folder
                     * @param type file type to read mesh from. The only currently supported mesh file 
                     * type is "obj"
                     * @param params additional import parameters or null, if not needed
                     */
                    importFromFile(path: string, type: "obj", importParams: Nullable<NativeRenderMesh.ImportParams>): void;
                    invalidate(): void;
                    newGuiRenderMesh(): mod.ui.GuiRenderMesh;
                    /**
                     * Forces Minecraft to rebuild specified [[NativeRenderMesh]] object
                     */
                    rebuild(): void;
                    /**
                     * Resets color applied to the mesh. Default is white
                     */
                    resetColor(): void;
                    /**
                     * Resets texture of the mesh
                     */
                    resetTexture(): void;
                    /**
                     * Rotates the mesh around the specified coordinates
                     * @param rotX rotation angle along X axis, in radians
                     * @param rotY rotation angle along Y axis, in radians
                     * @param rotZ rotation angle along Z axis, in radians
                     */
                    rotate(x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number): void;
                    /**
                     * Rotates the mesh around the (0, 0, 0) coordinates
                     * @param rotX rotation angle along X axis, in radians
                     * @param rotY rotation angle along Y axis, in radians
                     * @param rotZ rotation angle along Z axis, in radians
                     */
                    rotate(rotX: number, rotY: number, rotZ: number): void;
                    /**
                     * Scales the whole mesh along the three axis
                     */
                    scale(x: number, y: number, z: number): void;
                    /**
                     * Specifies block texture to be used by mesh
                     */
                    setBlockTexture(textureName: string, textureMeta: number): void;
                    /**
                     * Specifies color to be applied to the next vertices. If the color is not white and 
                     * the texture is applied to mesh, texture's colors will be affected
                     */
                    setColor(r: number, g: number, b: number): void;
                    setColor(r: number, g: number, b: number, a: number): void;
                    /**
                     * Makes specified [[NativeRenderMesh]] foliage tinted
                     */
                    setFoliageTinted(): void;
                    setFoliageTinted(tintSource: number): void;
                    /**
                     * Makes specified [[NativeRenderMesh]] grass tinted
                     */
                    setGrassTinted(): void;
                    /**
                     * Sets following [[NativeRenderMesh]] light direction
                     */
                    setLightDir(x: number, y: number, z: number): void;
                    setLightIgnore(ignore: boolean, bool2: boolean): void;
                    setLightParams(float1: number, float2: number, float3: number): void;
                    /**
                     * Sets following [[NativeRenderMesh]] light position
                     */
                    setLightPos(x: number, y: number, z: number): void;
                    /**
                     * Removes any tint from specified [[NativeRenderMesh]]
                     */
                    setNoTint(): void;
                    /**
                     * Specifies the normal vector for the next vertices
                     */
                    setNormal(x: number, y: number, z: number): void;
                    /**
                     * Makes specified [[NativeRenderMesh]] water tinted
                     */
                    setWaterTinted(): void;
                    /**
                     * Translates the whole mesh along three axis
                     */
                    translate(x: number, y: number, z: number): void;
                }
                export module NativeRenderMesh {
                    export class ReadOnlyVertexData {
                        static class: java.lang.Class<ReadOnlyVertexData>;
                        readonly colors: native.Array<number>;
                        readonly dataSize: number;
                        readonly indices: native.Array<number>;
                        readonly uvs: native.Array<number>;
                        readonly vertices: native.Array<number>;
                        private constructor(dataSize: number);
                    }
                    /**
                     * Object used in [[NativeRenderMesh.importFromFile]] and one of [[NativeRenderMesh]] constructors.
                     * Here you can put some additional parameters, that will be applied to the mesh,
                     * when the file is being imported
                     */
                    export interface ImportParams {
                        /**
                         * If true, all existing vertices of the mesh are deleted
                         * before the file is imported
                         */
                        clear?: boolean,
                        /**
                         * If true, v of the texture is inverted
                         */
                        invertV: boolean,
                        /**
                         * Additional translation along x, y and z axis
                         */
                        translate?: [number, number, number],
                        /**
                         * Additional scale along x, y and z axis
                         */
                        scale?: [number, number, number],
                        /**
                         * If true, Minecraft won't be forced to rebuild the following [[NativeRenderMesh]]
                         * before the file is imported
                         */
                        noRebuild: boolean
                    }
                }
            }
        }
    }
}