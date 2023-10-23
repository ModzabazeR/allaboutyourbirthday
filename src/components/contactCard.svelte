<script lang="ts">
	import mainJesus from '$lib/images/mainJesus.jpg';
	interface ContactData {
		name: string;
		age: number;
		imagePath: string;
		studentId: string;
		githubUsername: string;
	}

	export let data: ContactData;
</script>

<div class="flex flex-col bg-taskbar h-11/12 md:w-1/6 shadow-95 font-[win95]">
	<div class="m-2 p-2 text-white bg-winblue flex gap-2 pointer-events-none">
		<img src={mainJesus} alt="" class="mainjesus-img" />
		<h1 class="uppercase">Contact</h1>
	</div>

	<div class="flex flex-col gap-4 p-4 mb-20">
		<h1 class="size-text">{data.name}</h1>
		<img class="member-img h-12" src={data.imagePath} alt={data.name} />
		<p><span class="font-bold">Name:</span> {data.name}</p>
		<p><span class="font-bold">Age:</span> {data.age}</p>
		<p><span class="font-bold">Student ID:</span> {data.studentId}</p>
		<p><span class="font-bold">Github Username:</span> {data.githubUsername}</p>
	</div>
</div>

<style>
	.member-img {
		width: 170px;
		height: auto;
		margin: auto;
		border-style: inset;
	}

	.size-text {
		font-size: 30px;
		font-weight: bold;
		letter-spacing: 1px;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.mainjesus-img {
		width: 25px;
		height: 25px;
	}
</style>
