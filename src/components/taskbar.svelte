<script lang="ts">
	let timeElement: HTMLParagraphElement;
	import folder from '$lib/images/fold.png';
	import window from '$lib/images/window.png';
	import aButton from '$lib/images/aButton.png';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	function realtimeClock() {
		const rtClock = new Date();

		let hours = rtClock.getHours();
		let minutes = rtClock.getMinutes();

		const amPm = hours < 12 ? 'AM' : 'PM';

		hours = hours > 12 ? hours - 12 : hours;

		const hoursStr = ('0' + hours).slice(-2);
		const minutesStr = ('0' + minutes).slice(-2);

		timeElement.textContent = `${hoursStr}:${minutesStr} ${amPm}`;
		const t = setTimeout(realtimeClock, 1000);
	}

	onMount(realtimeClock);
</script>

<footer class="flex items-center text-white p-4 footer z-20 bg-taskbar">
	<div class="flex h-max gap-12">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<img
			src={window}
			alt=""
			class="window-img cursor-pointer"
			on:click={() => {
				goto('/play', { replaceState: true });
			}}
		/>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<img
			src={folder}
			alt=""
			class="folder-img cursor-pointer"
			on:click={() => {
				goto('/contact', { replaceState: true });
			}}
		/>
	</div>
	<img src={aButton} alt="" class="aButton-img" />
	<p bind:this={timeElement} class="time font-[win95] text-xl text-black" />
</footer>

<style>
	.footer {
		width: 100%;
		position: fixed;
		bottom: 0;
	}
	.time {
		position: absolute;
		right: 30px;
	}
	.window-img {
		width: 50px;
		height: 30px;
	}
	.folder-img {
		width: 50px;
		height: 30px;
	}
	.aButton-img {
		position: absolute;
		z-index: -1;
		width: 60px;
		height: 40px;
	}
</style>
