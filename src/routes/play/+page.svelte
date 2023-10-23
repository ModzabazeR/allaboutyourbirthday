<script lang="ts">
	import Taskbar from '$components/taskbar.svelte';
	import ExitWindow from '$components/exitWindow.svelte';
    import ResultWindow from '$components/resultWindow.svelte';

	import type { IFloridaman } from '$lib/types/dataInterfaces';

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	interface PageProps {
		hasCookie: boolean;
		floridaman: IFloridaman;
		dateTrivia: string;
		dayTrivia: string;
		monthTrivia: string;
	}

	export let data: PageProps;

	onMount(() => {
		if (!data.hasCookie) {
			goto('/', { replaceState: true });
		}
        console.log(data);
	});
</script>

<section class="flex h-screen items-center justify-center bg-primary">
	<div class="box">
		<!-- <ExitWindow /> -->
        <ResultWindow data={{
            floridaman: data.floridaman.data[Math.floor(Math.random() * data.floridaman.data.length)],
            dateTrivia: data.dateTrivia,
            dayTrivia: data.dayTrivia,
            monthTrivia: data.monthTrivia
        }} />
	</div>
	<Taskbar />
</section>

<style>
	.box {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
