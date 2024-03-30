import { defineStore } from 'pinia';
import Task from '@models/Task.model';

export const useTaskStore = defineStore('taskStore', {
	state: () => ({
		dataUpdated: new Date(),
		dataCollected: new Date(),
		tasksOrigin: [] as Task[],
		tasks: [] as Task[],
		test: '' as string,
	}),
	// getters: {
	// 	async getTasksFilter(state): Promise<Task[]> {
	// 		console.log('getTasksByArea', state);

	// 		if (this.tasks.length === 0) {
	// 			const response = await $fetch('/api/task');
	// 			state.tasks = response as Task[];
	// 			console.log('reponse fetch', response);
	// 		}

	// 		return state.tasks;
	// 		// return this.tasks.filter((task) => task.Area.includes(area));
	// 	},
	// },
	actions: {
		async getTasksByArea(area: string) {
			console.log('action.getTasksByArea', area);

			if (this.tasks.length === 0) {
				const response = await $fetch('/api/task');
				this.tasks = response as Task[];
				console.log('reponse fetch', response);
			}
			// return this.tasks.filter((task) => task.Area.includes(area));
		},
	},
});