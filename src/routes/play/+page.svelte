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
	});
</script>

<section class="flex h-screen items-center justify-center bg-primary">
		<ExitWindow />
        <!-- <ResultWindow data={{
            floridaman: data.floridaman.data[Math.floor(Math.random() * data.floridaman.data.length)],
            dateTrivia: data.dateTrivia,
            dayTrivia: data.dayTrivia,
            monthTrivia: data.monthTrivia
        }} /> -->
	<Taskbar />
</section>

<style>
</style>
