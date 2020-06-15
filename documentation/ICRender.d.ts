declare namespace ICRender {
	function getGroup(name: string): ICRender.Group;

	class Model {
		addEntry(model: BlockRenderer.Model);
	}

	class Group {
		add(id: number, data: number);
	}

	class CollisionShape {

	}

	function RANDOM(need: number, max: number, seed: number): any;
	function OR(condition1: any, condition2: any): any;
	function AND(condition1: any, condition2: any): any;
	function BLOCK(x: number, y: number, z: number, group: ICRender.Group, exclude: boolean): any;
}