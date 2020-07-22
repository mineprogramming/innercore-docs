declare class RenderMesh {
	constructor(path: string, type: string, params: object);
	constructor();

	clone(): RenderMesh;
	rotate(x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number): void;
	fitIn(a: number, b: number, c: number, d: number, e: number, f: number, g: boolean): void;
	setNormal(a: number, b: number, c: number): void;
    addVertex(x: number, y: number, z: number, u: number, v: number): void
    setColor(r: number, g: number, b: number): void
    resetColor(): void
    setBlockTexture(name: string, index: number): void
    resetTexture(): void
    clear(): void
    translate(x: number, y: number, z: number): void
    scale(x: number, y: number, z: number): void
    rebuild(): void
    importFromFile(path: string, type: string, params: {
        clear?: boolean,
        invertV: boolean,
        translate?: [number, number, number],
        scale?: [number, number, number]
    }): void
}