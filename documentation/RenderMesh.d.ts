/**
 * Class representing a set of vertices with some other parameters required to
 * display them correctly. Used as block, entity and item models, in animations 
 * and actually anywhere you need some physical shape
 */
declare class RenderMesh {

    /**
     * @returns pointer to the native object instance of the
     * following [[RenderMesh]], represented as long number
     */
    getPtr(): number;

    getReadOnlyVertexData(): RenderMesh.ReadOnlyVertexData;

    newGuiRenderMesh(): RenderMesh.GuiRenderMesh;

    /**
     * Creates a new [[RenderMesh]] and initializes it from file. 
     * See [[RenderMesh.importFromFile]] for parameters details
     */
    constructor(path: string, type: string, params: object);

    /**
     * Creates a new empty [[RenderMesh]]
     */
    constructor();

    /**
     * Creates a copy of current [[RenderMesh]]
     */
    clone(): RenderMesh;

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
     * Scales the mesh to fit into the specified box
     * @param keepRatio if true, the ratio of the dimensions are preserved
     */
    fitIn(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, keepRatio: boolean): void;

    /**
     * Specifies the normal vector for the next vertices
     */
    setNormal(x: number, y: number, z: number): void;

    /**
     * Adds a new vertex on the specified coordinates
     * @param u x texture offset of the vertex
     * @param v y texture offset of the vertex
     */
    addVertex(x: number, y: number, z: number, u: number, v: number): void;

    /**
     * Specifies color to be applied to the next vertices. If the color is not white and 
     * the texture is applied to mesh, texture's colors will be affected
     */
    setColor(r: number, g: number, b: number, a?: number): void;

    /**
     * Resets color applied to the mesh. Default is white
     */
    resetColor(): void;

    /**
     * Specifies block texture to be used by mesh
     */
    setBlockTexture(name: string, index: number): void;

    /**
     * Resets texture of the mesh
     */
    resetTexture(): void;

    /**
     * Removes all vertices of the mesh
     */
    clear(): void;

    /**
     * Translates the whole mesh along three axis
     */
    translate(x: number, y: number, z: number): void;

    /**
     * Scales the whole mesh along the three axis
     */
    scale(x: number, y: number, z: number): void;

    /**
     * Forces Minecraft to rebuild specified [[RenderMesh]] object
     */
    rebuild(): void;

    /**
     * Makes specified [[RenderMesh]] foliage tinted
     */
    setFoliageTinted(): void;
    setFoliageTinted(int: number): void;

    /**
     * Makes specified [[RenderMesh]] grass tinted
     */
    setGrassTinted(): void;

    /**
     * Sets following [[RenderMesh]] light direction
     */
    setLightDir(x: number, y: number, z: number): void;

    setLightIgnore(ignore: boolean, bool2: boolean): void;

    setLightParams(float1: number, float2: number, float3: number): void;

    /**
     * Sets following [[RenderMesh]] light position
     */
    setLightPos(x: number, y: number, z: number): void;

    /**
     * Removes any tint from specified [[RenderMesh]]
     */
    setNoTint(): void;

    /**
     * Makes specified [[RenderMesh]] water tinted
     */
    setWaterTinted(): void;

    /**
     * Imports mesh file using specified path
     * @param path path to the mesh file. Path should be absolute path or
     * be relative to the resources folder or to the "models/" folder
     * @param type file type to read mesh from. The only currently supported mesh file 
     * type is "obj"
     * @param params additional import parameters
     */
    importFromFile(path: string, type: string, params: {
        /**
         * If true, all existing vertices of the mesh are deleted before the file
         * is imported
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
         * 
         */
        noRebuild: boolean
    }): void;

    /**
     * Adds new mesh to the current one on the specified coordinates with specified scale
     * @param mesh [[RenderMesh]] object to be added to current mesh
     */
    addMesh(mesh: RenderMesh, x: number, y: number, z: number, sx: number, sy: number, sz: number): void;

    /**
     * Adds new mesh to the current one on the specified coordinates
     * @param mesh [[RenderMesh]] object to be added to current mesh
     */
    addMesh(mesh: RenderMesh, x: number, y: number, z: number): void;

    /**
     * Adds new mesh to the current one
     * @param mesh [[RenderMesh]] object to be added to current mesh
     */
    addMesh(mesh: RenderMesh): void;
}

declare namespace RenderMesh {
    /**
     * Object returned by [[RenderMesh.getReadOnlyVertexData]].
     */
    interface ReadOnlyVertexData {
        readonly colors: number[];
        readonly dataSize: number;
        readonly indices: number[];
        readonly uvs: number[];
        readonly vertices: number[];
    }
    /**
     * Object returned by [[RenderMesh.newGuiRenderMesh]]
     */
    interface GuiRenderMesh extends Vector {
        rx: number;
        ry: number;
        rz: number;
        draw(gl10: java.lang.Object): void;
        loadBitmap(bitmap: android.graphics.Bitmap): void;
        setColors(floatArray: number[]): void;
        setIndices(shortArray: number[]): void;
        setTextureCoordinates(floatArray: number[]): void;
        setVertices(floatArray: number[]): void;
    }
}