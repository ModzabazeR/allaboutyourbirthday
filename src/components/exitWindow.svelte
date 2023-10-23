<script lang="ts">
	import catcry from '$lib/images/cat-cry.jpeg';
	import mainJesus from '$lib/images/mainJesus.jpg';

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { resultWindowClassName, exitWindowClassName } from '../stores';

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

	onMount(() => {
		// set left and top to the div current position
		left = DivContainer.getBoundingClientRect().left;
		top = DivContainer.getBoundingClientRect().top;
	});

	export let className: string;
</script>

<div
	class={`flex flex-col bg-taskbar h-max md:w-1/3 shadow-95 font-[win95] absolute z-10 ${className}`}
	style={left && top ? `left: ${left}px; top: ${top}px;` : ''}
	bind:this={DivContainer}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="flex flex-row m-2 p-2 gap-2 text-white bg-winblue select-none cursor-move"
		on:mousedown={onMouseDown}
	>
		<img src={mainJesus} alt="" class="h-6" />
		<h1 class="uppercase">All About Your Birthday</h1>
	</div>

	<div class="flex flex-col justify-center bg-white m-2 h-80">
		<div class="flex flex-col gap-6 p-2">
			<h1 class="size-far text-2xl">You want to leave this page ?</h1>
			<img src={catcry} alt="The cat doesn't love you" class="catcry-img w-1/3" />

			<div class="button-container flex flex-row justify-center gap-4 md:gap-12">
				<button
					class="button py-1 w-1/3 text-lg text-center shadow-95 bg-taskbar"
					on:click={() => {
						exitWindowClassName.update((_) => 'invisible');
						resultWindowClassName.update((_) => 'pointer-events-auto');
					}}>Cancel</button
				>
				<button
					class="button py-1 w-1/3 text-lg text-center shadow-95 bg-taskbar"
					on:click={() => {
						exitWindowClassName.update((_) => 'invisible');
						resultWindowClassName.update((_) => 'pointer-events-auto');
						document.cookie = 'date=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
						goto('/', { replaceState: true });
					}}>Yes</button
				>
			</div>
		</div>
	</div>
</div>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style>
	.button-container {
		width: 100%;
		align-items: center;
	}

	.button {
		border: 2px solid black;
	}

	.catcry-img {
		height: auto;
		margin: auto;
	}

	.size-far {
		letter-spacing: 1px;
	}
</style>
