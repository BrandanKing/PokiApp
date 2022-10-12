// TODO : Type methods, variables etc correctly

import type { Ref } from 'vue';

const usePokemon = () => {
	const isLoading: Ref<boolean> = ref(false);

	const getPokemon = async (pokemonID) => {
		return await $fetch<any>(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`).then((response) => response);
	};

	const fetchAllPokemon = async () => {
		return await $fetch<any>('https://pokeapi.co/api/v2/pokemon/?limit=105&offset=0').then(async (response) => {
			return await Promise.all(
				response.results.map(async (pokemon) => {
					return await getPokemon(pokemon.name);
				})
			);
		});
	};

	const pokemonList = computedAsync(async () => await fetchAllPokemon(), null, {
		evaluating: isLoading,
		onError: (e: any) => console.log(e.data),
	});

	return {
		isLoading,
		pokemonList,
		getPokemon,
	};
};

export default usePokemon;
