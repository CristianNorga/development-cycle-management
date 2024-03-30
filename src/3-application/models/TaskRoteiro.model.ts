import Task from './Task.model';
import Content from './Content.model';
import Status from './Status.model';

export default class TaskRoteiro extends Task{
	Content: Content;
	Status: Status;
	AreaSelected: string;
	Dependencies: string[];
	Service: string;

	constructor(
		id: number,
		area: string[],
		name: string,
		content: Content,
		status: Status,
		areaSelected: string,
		dependencies: string[],
		service: string
	) {
		super(id, area, name);
		this.Content = content;
		this.Status = status;
		this.AreaSelected = areaSelected;
		this.Dependencies = dependencies;
		this.Service = service;
	}
}