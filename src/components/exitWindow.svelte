<script>
	import catcry from '$lib/images/cat-cry.jpeg';
	import mainJesus from '$lib/images/mainJesus.jpg';
</script>

<div class="flex flex-col bg-taskbar h-[24rem] w-[36rem] shadow-95 font-[win95]">
	<div class="flex flex-row m-2 p-2 gap-2 text-white bg-winblue">
		<img src={mainJesus} alt="" class="mainjesus-img" />
		<h1 class="uppercase">All About Your Birthday</h1>
	</div>

	<div class="bg-white m-2 h-80">
		<div class="flex flex-col gap-6 p-2">
			<h1 class="size-far">You want to leave this page ?</h1>
			<img src={catcry} alt="The cat doesn't love you" class="catcry-img" />

			<div class="button-container flex flex-row">
				<a href="/" class="button text-center shadow-95">Cancel</a>
				<a href="/" class="button text-center shadow-95">Yes</a>
			</div>
		</div>
	</div>
</div>

<style>
	.button-container {
		width: 100%;
		align-items: center;
	}

	.button {
		background-color: #cccccc;
		/* box-shadow: inset 1px 1px #fff, 1px 1px #000; */
		border: 2px solid black;

		padding-bottom: 5px;
		padding-top: 5px;

		width: 155px;

		/* margin-left: 85px;
		margin-right: -35px; */

		margin: auto;

		font-size: 18px;
	}

	.catcry-img {
		width: 155px;
		height: auto;
		margin: auto;
	}

	.mainjesus-img {
		width: 25px;
		height: 25px;
	}

	.size-far {
		letter-spacing: 1px;
		font-size: 24px;
	}
</style>
