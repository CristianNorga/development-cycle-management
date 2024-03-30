
export default class Task {
	Id: number;
	Name: string;
	Area: string[];

	constructor(
		id: number,
		area: string[],
		name: string,
	) {
		this.Id = id;
		this.Area = area;
		this.Name = name;
	}
}