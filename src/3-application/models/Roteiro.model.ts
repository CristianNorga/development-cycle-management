import TaskRoteiro from '@models/TaskRoteiro.model';

export default class Roteiro {
	Id: string;
	Name: string;
	Environment: string;
	IsTemplate: boolean;
	deploymentDate: Date;
	relatedFeatures: string[];
	previusTask: any[];
	duringTask: any[];
	afterTask: any[];
	rollbackTask: any[];

	constructor(
		id: string,
		name: string,
		environment: string,
		isTemplate: boolean,
		deploymentDate: Date,
		relatedFeatures: string[],
		previusTask: any[],
		duringTask: any[],
		afterTask: any[],
		rollbackTask: any[]
	) {
		this.Id = id;
		this.Name = name;
		this.Environment = environment;
		this.IsTemplate = isTemplate;
		this.deploymentDate = deploymentDate;
		this.relatedFeatures = relatedFeatures;
		this.previusTask = previusTask;
		this.duringTask = duringTask;
		this.afterTask = afterTask;
		this.rollbackTask = rollbackTask;
	}
}