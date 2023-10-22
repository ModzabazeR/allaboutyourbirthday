<script lang="ts">
	import startUnpress from '$lib/images/startUnpress.png';
	import bg from '$lib/images/background.png';
	import logo from '$lib/images/logo.png';
	import god from '$lib/images/JesusCrist.png';

	import { goto } from '$app/navigation';
	import { day, month } from '../stores';

	const clickHandler = (e: any) => {
		const date: string = e.target.date.value;
		const [dayStr, monthStr] = date.split('/');
		day.update((_) => parseInt(dayStr));
		month.update((_) => parseInt(monthStr));
		goto('/play', { replaceState: true });
	}
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
			<img src={logo} alt="" class="logo-img" />
			<form on:submit|preventDefault={clickHandler} class="flex h-max border-black border-2">
				<input class="p-4" type="text" name="date" placeholder="eg. 25 December as 25/12" />
				<button type="submit">
					<img src={startUnpress} alt="" class="startUnpress-img" />
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
