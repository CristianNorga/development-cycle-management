import {Status as StatusEnum} from '../enums/Status.enum'

export default class Status {
	Current: StatusEnum;
	Trace: string;

	constructor(current: StatusEnum, trace: string) {
		this.Current = current;
		this.Trace = trace;
	}
}