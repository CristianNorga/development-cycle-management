import { defineStore } from 'pinia';
import TaskRoteiro from '../models/TaskRoteiro.model';

export const useRoteiroStore = defineStore('roteiroStore', {
	state: () => ({
		roteiros: [] as TaskRoteiro[],
		roteiro: {} as TaskRoteiro,
	}),
	actions: {
	},
});
