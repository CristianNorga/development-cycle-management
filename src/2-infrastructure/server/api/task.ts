import Task from '@models/Task.model';
import Content from '@models/Content.model';
import Status from '@models/Status.model';
import { Status as StatusEnum } from '@enums/Status.enum';


export default defineEventHandler(async (event) => {
	console.log('request to server side');

	// const headers = new Headers();
	// headers.set('Content-Type', 'application/json');
	// headers.set('Access-Control-Allow-Origin', '*');
	// headers.set(
	// 	'api-key',
	// 	'27kcBfahEOoO8S9iwpXERHneuSjiOPZHT06PcDZFFyoLJgm4tjZMraBPm9tX8p0I'
	// );

	// const body = JSON.stringify({
	// 	collection: 'Tasks',
	// 	database: 'FullTest',
	// 	dataSource: 'cluster',
	// 	// projection: { _id: 1 },
	// });

	// const data = await $fetch(
	// 	'https://us-east-1.aws.data.mongodb-api.com/app/data-djbjh/endpoint/data/v1/action/find',
	// 	{ method: 'POST', headers: headers, body: body }
	// ) as Task[];

	const content = new Content([{ key: 'key1', value: 'value1' }], [{ key: 'key2', value: 'value2' }]);

	const status = new Status('Status1', 'Description1');

	const data = [
		new Task(1, ['Cloud'], 'Task1', content, 'Status1', ['Dependency1'], 'Service1'),
		new Task(2, ['Cloud'], 'Task2', content, 'Status2', ['Dependency2'], 'Service2'),
		new Task(3, ['Cloud'], 'Task3', content, 'Status3', ['Dependency3'], 'Service3'),
		new Task(4, ['Devops'], 'Task4', content, 'Status4', ['Dependency4'], 'Service4'),
		new Task(5, ['Devops'], 'Task5', content, 'Status5', ['Dependency5'], 'Service5'),
	];

	return data;
});
