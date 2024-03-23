import { Status as StatusEnum } from '../enums/Status.enum';

export default class Trazability {
	Status: StatusEnum;
	StartDate: Date;
	EndDate: Date;

	constructor(status: StatusEnum, startDate: Date, endDate: Date) {
		this.Status = status;
		this.StartDate = startDate;
		this.EndDate = endDate;
	}
}