import Content from './Content.model';
import Status  from './Status.model';

class Task {
	Id: number;
	Name: string;
	Content: Content;
	Area: string;
	Status: Status;
	Dependencies: string[];
	Service: string;

	constructor(
		id: number,
		title: string,
		name: string,
		content: Content,
		status: Status,
		dependencies: string[],
		service: string
	) {
		this.Id = id;
		this.Area = title;
		this.Name = name;
		this.Content = content;
		this.Status = status;
		this.Dependencies = dependencies;
		this.Service = service;
	}
}