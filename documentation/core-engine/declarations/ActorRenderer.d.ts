/**
 * Class, upon which armor and attachments render is based
 * It is a model that consists of parts, same as in deprecated [[Render]],
 * but more abstract, allows creating root parts instead of
 * inheritance from old humanoid model
 */
declare class ActorRenderer {
    /**
     * Constructs new [[ActorRenderer]] object without parts
     */
    constructor();
    /**
     * Constructs new [[ActorRenderer]] object,
     * based on one of default Minecraft render templates
     * @param templateName default template name
     */
    constructor(templateName: DefaultRenderTemplate);

    getUniformSet(): ShaderUniformSet;

    setTexture(textureName: string): void;

    setMaterial(materialName: string): void;

    getPart(name: string): ActorRenderer.ModelPart;

    /**
     * Adds a child model part of an existing one
     * @param name child model name
     * @param parentName parent model name
     */
    addPart(name: string, parentName: string, mesh?: RenderMesh): ActorRenderer.ModelPart;

    /**
     * Adds a root model part
     */
    addPart(name: string, mesh?: RenderMesh): ActorRenderer.ModelPart;

}

declare namespace ActorRenderer {

    class ModelPart {

        /**
         * All methods of [[ActorRenderer.ModelPart]] build in such a way,
         * that you can create full render in one chain of calls
         * ```js
         * new ActorRenderer().addPart("Child", "Parent").addPart("Grandchild", "Child").endPart();
         * ```
         */
        endPart(): ActorRenderer;

        setTexture(textureName: string): ModelPart;

        setMaterial(materialName: string): ModelPart;

        setTextureSize(w: number, h: number): ModelPart;

        setOffset(x: number, y: number, z: number): ModelPart;

        setRotation(x: number, y: number, z: number): ModelPart;

        setPivot(x: number, y: number, z: number): ModelPart;

        setMirrored(isMirrored: boolean): ModelPart;

        /**
         * @param inflate increases the box by a certain value in all directions
         */
        addBox(x: number, y: number, z: number, sizeX: number, sizeY: number, sizeZ: number, inflate: number, u: number, v: number): ModelPart;

        clear(): ModelPart;

    }

}