<script lang="ts">
	import Taskbar from '$components/taskbar.svelte';
	import ExitWindow from '$components/exitWindow.svelte';
	import ResultWindow from '$components/resultWindow.svelte';
	import { resultWindowClassName, exitWindowClassName } from '../../stores';

	import type { IFloridaman } from '$lib/types/dataInterfaces';

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let resultWindowClassNameValue: string;
	let exitWindowClassNameValue: string;

	resultWindowClassName.subscribe((value) => {
		resultWindowClassNameValue = value;
	});

	exitWindowClassName.subscribe((value) => {
		exitWindowClassNameValue = value;
	});

	interface PageProps {
        day: number;
        month: number;
		floridaman: IFloridaman;
		dateTrivia: string;
		dayTrivia: string;
		monthTrivia: string;
	}

	export let data: PageProps;

	onMount(() => {
		if (data.day === 0 && data.month === 0) {
			goto('/', { replaceState: true });
		}
	});
</script>

<svelte:head>
	<title>Play | All About Your Birthday</title>
</svelte:head>

<section class="flex h-[93vh] items-center justify-center bg-primary relative overflow-hidden">
	<ExitWindow className={exitWindowClassNameValue} />
	<ResultWindow
		data={{
            day: data.day,
            month: data.month,
			floridaman: data.floridaman.data[Math.floor(Math.random() * data.floridaman.data.length)],
			dateTrivia: data.dateTrivia,
			dayTrivia: data.dayTrivia,
			monthTrivia: data.monthTrivia
		}}
		className={resultWindowClassNameValue}
	/>
	<Taskbar />
</section>

<style>
</style>
