<script lang="ts">
	import type { IFloridamanData } from '$lib/types/dataInterfaces';
	import xButtonUnpressed from '$lib/images/X.png';
	import xButtonPressed from '$lib/images/Xpressed.png';
	import { onMount } from 'svelte';
	interface ResultWindowProps {
		floridaman: IFloridamanData;
		dateTrivia: string;
		dayTrivia: string;
		monthTrivia: string;
	}

	export let data: ResultWindowProps;

	let xButtonImage: HTMLImageElement;

	const getFloridaManText = () => {
		let text = '';

		if (!data.floridaman) {
			return 'A Day of Peace in Florida...';
		}

		if (data.floridaman.year) {
			text = `Did you know that on your birthdate in ${data.floridaman.year}, a Florida man made headlines for "${data.floridaman.title}?" That's wild!`;
		} else {
			text = `Did you know that on your birthdate, a Florida man made headlines for "${data.floridaman.title}?" That's wild!`;
		}

		return text;
	};

	onMount(() => {
		xButtonImage.addEventListener('mouseover', () => {
			xButtonImage.src = xButtonPressed;
		});
		xButtonImage.addEventListener('mouseleave', () => {
			xButtonImage.src = xButtonUnpressed;
		});
	});
</script>

<div class="flex flex-col bg-taskbar h-3/4 md:w-4/6 shadow-95 font-[win95] m-4">
	<div class="flex justify-between m-2 p-2 text-white bg-winblue">
		<h1 class="uppercase font-bold">All About Your Birthday</h1>
		<img src={xButtonUnpressed} alt="xButton" class="h-6" bind:this={xButtonImage} />
	</div>
	<div class="flex flex-col bg-white m-2 h-full p-4 gap-2 overflow-y-scroll">
		<p>Florida Man >> {getFloridaManText()}</p>
		<p>Date Trivia >> {data.dateTrivia}</p>
		<p>Day Trivia >> {data.dayTrivia}</p>
		<p>Month Trivia >> {data.monthTrivia}</p>
	</div>
</div>
