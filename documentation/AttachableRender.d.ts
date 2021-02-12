/**
 * Class used to attach attachables to entities
 */
declare class AttachableRender {

    static attachRendererToItem(id: number, renderer: AttachableRender, texture?: string, material?: string): void;

    static detachRendererFromItem(id: number): void;

    /**
     * Constructs new [[AttachableRender]] object bind to given entity
     */
    constructor(actorUid: number);

    getUniformSet(): ShaderUniformSet;

    /**
     * Sets the render, root render parts will be drawing
     * together with mob's render parts with same names
     * (names can be seen in json description of the model in resources)
     */
    setRenderer(actorRenderer: ActorRenderer): AttachableRender;

    setTexture(textureName: string): AttachableRender;

    setMaterial(materialName: string): AttachableRender;

    destroy(): void;

    isAttached(): boolean;

}