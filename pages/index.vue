<template>
	<div>
		<div v-if="isLoading">Loading...</div>
		<button class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">Test</button>
	</div>
</template>

<script setup lang="ts">
	const { isLoading, pokemonList } = usePokemon();
</script>
