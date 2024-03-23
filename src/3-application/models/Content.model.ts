export default class Content {
	Inputs: { key: string; value: any }[];
	Outputs: { key: string; value: any }[];

	constructor(
		inputs: { key: string; value: any }[],
		outputs: { key: string; value: any }[]
	) {
		this.Inputs = inputs;
		this.Outputs = outputs;
	}
}
