import Roteiro from '@models/Roteiro.model';

export default defineEventHandler(async (event) => {
	console.log('request to server side');

	const headers = new Headers();
	headers.set('Content-Type', 'application/json');
	headers.set('Access-Control-Allow-Origin', '*');
	headers.set(
		'api-key',
		'27kcBfahEOoO8S9iwpXERHneuSjiOPZHT06PcDZFFyoLJgm4tjZMraBPm9tX8p0I'
	);

	const body = JSON.stringify({
		collection: 'Roteiros',
		database: 'FullTest',
		dataSource: 'cluster',
		// projection: { _id: 1 },
	});

	const data = (await $fetch(
		'https://us-east-1.aws.data.mongodb-api.com/app/data-djbjh/endpoint/data/v1/action/findOne',
		{ method: 'POST', headers: headers, body: body }
	)) as { document: Roteiro };

	return data;
});
