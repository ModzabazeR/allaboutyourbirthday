<script>
	import catcry from '$lib/images/cat-cry.jpeg';
</script>

<div class="flex flex-col bg-taskbar h-[24rem] w-[36rem] shadow-95 font-[win95]">
	<div class="flex flex-row m-2 p-2 text-white bg-winblue">
		<h1 class="uppercase">All About Your Birthday</h1>
	</div>

	<div class="bg-white m-2 h-80">
		<div class="flex flex-col gap-6 p-2">
			<h1 class="size-far">You want to leave this page ?</h1>
			<img src={catcry} alt="The cat doesn't love you" class="catcry-img" />

			<div class="button-container flex flex-row text-center">
				<a href="/" class="text-center button shadow-95">Cancel</a>
				<a href="/" class="text-center button shadow-95">Yes</a>
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
		margin: auto;

		font-size: 18px;
	}

	.catcry-img {
		width: 155px;
		height: auto;
		margin: auto auto;
	}

	.size-far {
		letter-spacing: 1px;
		font-size: 24px;
	}
</style>
