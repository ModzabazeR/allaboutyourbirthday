<script>
	import './styles.css';
	import { navigating } from '$app/stores';
	import Loading from '$components/loading.svelte';
</script>

<svelte:head>
	<meta name="description" content="Find interesting facts all about your birthday!" />
</svelte:head>

<div class="app">
	<main>
		{#if $navigating}
			<Loading />
		{/if}
		<slot />
	</main>
</div>

