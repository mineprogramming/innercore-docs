/**
 * Class representing a set of vertices with some other parameters required to
 * display them correctly. Used as block, entity and item models, in animations 
 * and actually anywhere you need some physical shape
 */
declare class RenderMesh extends com.zhekasmirnov.innercore.api.NativeRenderMesh {
    /**
     * Creates a new [[RenderMesh]] and initializes it from file. 
     * See [[importFromFile]] method description for parameters details
     */
    constructor(path: string, type: string, params: Nullable<RenderMesh.ImportParams>);
    /**
     * Creates a new empty [[RenderMesh]]
     */
    constructor();
}

declare namespace RenderMesh { type ImportParams = com.zhekasmirnov.innercore.api.NativeRenderMesh.ImportParams }