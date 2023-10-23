<script lang="ts">
	import type { IFloridamanData } from '$lib/types/dataInterfaces';
	import xButtonUnpressed from '$lib/images/X.png';
	import xButtonPressed from '$lib/images/Xpressed.png';
	import { onMount } from 'svelte';
	import { resultWindowClassName, exitWindowClassName } from '../stores';

	interface ResultWindowProps {
		floridaman: IFloridamanData;
		dateTrivia: string;
		dayTrivia: string;
		monthTrivia: string;
	}

	export let data: ResultWindowProps;
	export let className: string;

	let left: number;
	let top: number;
	let DivContainer: HTMLDivElement;

	let moving = false;

	function onMouseDown() {
		moving = true;
	}

	function onMouseMove(e: any) {
		if (moving) {
			left += e.movementX;
			top += e.movementY;
		}
	}

	function onMouseUp() {
		moving = false;
	}

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
		// set left and top to the div current position
		left = DivContainer.getBoundingClientRect().left;
		top = DivContainer.getBoundingClientRect().top;
	});
</script>

<div
	class={`flex flex-col bg-taskbar h-3/4 md:w-4/6 shadow-95 font-[win95] m-4 absolute ${className}`}
	bind:this={DivContainer}
	style={left && top ? `left: ${left}px; top: ${top}px;` : ''}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="flex justify-between m-2 p-2 text-white bg-winblue select-none cursor-move"
		on:mousedown={onMouseDown}
	>
		<h1 class="uppercase font-bold">All About Your Birthday</h1>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<img
			src={xButtonUnpressed}
			alt="xButton"
			class="h-6 cursor-default"
			bind:this={xButtonImage}
			on:click={() => {
				exitWindowClassName.update((_) => 'visible');
                resultWindowClassName.update((_) => 'pointer-events-none');
			}}
		/>
	</div>
	<div class="flex flex-col bg-white m-2 h-full p-4 gap-2 overflow-y-auto shadow-box95">
		<p>Florida Man >> {getFloridaManText()}</p>
		<p>Date Trivia >> {data.dateTrivia}</p>
		<p>Day Trivia >> {data.dayTrivia}</p>
		<p>Month Trivia >> {data.monthTrivia}</p>
	</div>
</div>
<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />
