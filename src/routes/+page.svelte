<script lang="ts">
	import startUnpress from '$lib/images/startUnpress.png';
	import startPress from '$lib/images/startPress.png';
	import bg from '$lib/images/background.png';
	import logo from '$lib/images/logo.png';
	import god from '$lib/images/JesusCrist.png';

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let startButtonImage: HTMLImageElement;

	const clickHandler = (e: any) => {
		const date: string = e.target.date.value;

		if (!/^\d{2}\/\d{2}$/.test(date)) {
			alert('Please enter a valid date in the format dd/mm');
			return;
		}

		// set cookie and expire in 1 day
		document.cookie = `date=${date}; max-age=${60 * 60 * 24}`;
		goto('/play', { replaceState: true });
	}

	onMount(() => {
		startButtonImage.addEventListener('mouseover', () => {
			startButtonImage.src = startPress;
		});
		startButtonImage.addEventListener('mouseleave', () => {
			startButtonImage.src = startUnpress;
		});
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex h-screen w-full">
	<div class="flex w-full">
		<img src={bg} alt="" class="bg-img" />
		<div class="w-1/2">
			<img src={god} alt="" class="jesus-img" />
		</div>
		<div class="w-1/2 box flex flex-col items-center my-auto gap-8">
<<<<<<< HEAD
			<img src={logo} alt="" class="logo-img">
			<div class="flex h-max border-black border-2">
				<input type="text" name="day"/>
				<button> 
					<img src={startUnpress} alt="" class="startUnpress-img" />
=======
			<img src={logo} alt="" class="logo-img" />
			<form on:submit|preventDefault={clickHandler} class="flex h-max border-black border-2">
				<input class="p-4" type="text" name="date" placeholder="eg. 25 December as 25/12" />
				<button type="submit">
					<img src={startUnpress} alt="" class="startUnpress-img" bind:this={startButtonImage} />
>>>>>>> ff4e3400f0dd1b9abc1208dad039295360cd284d
				</button>
			</form>
		</div>
	</div>
</section>

<style>
	.bg-img {
		position: absolute;
		height: 100vh;
		width: 100vw;
		z-index: -1;
	}
	.jesus-img {
		position: absolute;
		width: auto;
		height: 80vh;
		bottom: 0;
		left: 130px;
	}
	.logo-img {
		width: 500px;
	}
	.box input {
		height: 50px;
		width: 300px;
		outline: none;
		font-size: 22px;
	}
	.box button {
		height: 50px;
		width: 130px;
	}
</style>
