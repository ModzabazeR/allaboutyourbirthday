<script lang="ts">
	import startUnpress from '$lib/images/startUnpress.png';
	import startPress from '$lib/images/startPress.png';
	import bg from '$lib/images/background.png';
	import logo from '$lib/images/logo.png';
	import god from '$lib/images/JesusCrist.png';

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	const monthsName = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	let startButtonImage: HTMLImageElement;

	const clickHandler = (e: any) => {
		const date: string = e.target.date.value;
		const example = 'eg. 4 March as 04/03, 12 June as 12/06, 25 December as 25/12';

		if (!/^\d{2}\/\d{2}$/.test(date)) {
			alert(`Please enter a valid date in the format dd/mm\n${example}`);
			return;
		}

		// check if date is valid
		const [day, month] = date.split('/').map(Number);
		if (month < 1 || month > 12 || day < 1 || day > daysInMonth[month - 1]) {
			if (month >= 1 && month <= 12) {
				alert(`There is no ${day} ${monthsName[month - 1]} in the calendar, enter a real date!\n${example}`);
			} else {
				alert(`There is no month ${month} in the calendar, enter a real date!\n${example}`);
			}
			return;
		}

		// set cookie and expire in 1 day
		document.cookie = `date=${date}; max-age=${60 * 60 * 24}`;
		goto('/play', { replaceState: true });
	};

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
	<title>All About Your Birthday</title>
</svelte:head>

<section class="flex h-screen w-full font-[win95] justify-center md:justify-normal">
	<div class="flex w-full">
		<img src={bg} alt="" class="bg-img" />
		<div class="w-0 md:w-1/2">
			<img
				src={god}
				alt=""
				class="jesus-img invisible md:visible md:left-8 md:h-[60vh] lg:left-24 lg:h-[80vh]"
			/>
		</div>
		<div class="w-full md:w-1/2 box flex flex-col items-center my-auto gap-8">
			<img src={logo} alt="" class="h-44 md:h-60" />
			<form on:submit|preventDefault={clickHandler} class="flex h-max border-black border-[3px]">
				<input
					class="p-2 md:p-4 w-40 md:w-72 h-9 md:text-lg"
					type="text"
					name="date"
					placeholder="Enter your birthdate"
				/>
				<button type="submit">
					<img
						src={startUnpress}
						alt=""
						class="startUnpress-img h-9"
						bind:this={startButtonImage}
					/>
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
		bottom: 0;
	}
	.box input {
		outline: none;
	}
</style>
