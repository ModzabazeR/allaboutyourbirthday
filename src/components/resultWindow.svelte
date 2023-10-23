<script lang="ts">
	import type { IFloridamanData } from '$lib/types/dataInterfaces';
	import xButtonUnpressed from '$lib/images/X.png';
	import xButtonPressed from '$lib/images/Xpressed.png';
	import { onMount } from 'svelte';
	import { resultWindowClassName, exitWindowClassName } from '../stores';
	import mainJesus from '$lib/images/mainJesus.jpg';

	interface ResultWindowProps {
        day: number;
        month: number;
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

    const getBirthdate = (day: number, month: number) => {
        const date = new Date();
        date.setDate(day);
        date.setMonth(month - 1);
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' });
    }

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
		class="flex justify-between items-center m-2 p-2 text-white bg-winblue select-none cursor-move"
		on:mousedown={onMouseDown}
	>
		<div class="flex gap-2 items-center">
			<img src={mainJesus} class="h-6" alt="" />
			<h1 class="uppercase">All About Your Birthday</h1>
		</div>

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
	<div class="flex flex-col text-lg bg-white m-2 h-full p-4 gap-2 overflow-y-auto shadow-box95">
        <h1 class="text-center text-3xl font-bold my-4">Your Birthdate: {getBirthdate(data.day, data.month)}</h1>
		<p><span class="font-bold">Florida Man >> </span>{getFloridaManText()} (<a href={data.floridaman.link} class="underline text-blue-600" target="_blank">Link</a>)</p>
		<p><span class="font-bold">Date Trivia >> </span>{data.dateTrivia}</p>
		<p><span class="font-bold">Day Trivia >> </span>{data.dayTrivia}</p>
		<p><span class="font-bold">Month Trivia >> </span>{data.monthTrivia}</p>
	</div>
</div>
<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />
