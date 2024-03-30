import {Status as StatusEnum} from '../enums/Status.enum'

export default class Status {
	Current: StatusEnum;
	Trace: StatusEnum[];

	constructor(current: StatusEnum, trace: StatusEnum[]) {
		this.Current = current;
		this.Trace = trace;
	}
}