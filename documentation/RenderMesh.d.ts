declare class RenderMesh {
	constructor(path: string, type: string, params: object);
	constructor();

	setBlockTexture(texture: string, index: number): void;
	setColor(red: number, green: number, blue: number): void;
	clone(): RenderMesh;
	rotate(x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number): void;
	translate(x: number, y: number, z: number): void;
	addVertex(a: number, b: number, c: number, d: number, e: number): void;
	fitIn(a: number, b: number, c: number, d: number, e: number, f: number, g: boolean): void;
	setNormal(a: number, b: number, c: number): void;

	importFromFile(path: string, type: string, params: object): void;
}