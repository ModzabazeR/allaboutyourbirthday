<script>
	import catcry from '$lib/images/cat-cry.jpeg';
</script>

<div class="box flex flex-col gap-4 h-72 w-96 p-4">
	<p>You want to leave this page?</p>
	<img src={catcry} alt="The cat doesn't love you" class="catcry-img" />

	<div class="button-container flex gap-2 text-center">
		<a href="/" class="text-center button">Cancel</a>
		<a href="/" class="text-center button">Yes</a>
	</div>
</div>

<style>
	.box {
		background-color: #bdbdbd;
		box-shadow: inset 1px 1px #fff, 1px 1px #000;
	}

	.button-container {
		width: 100%;
		align-items: center;
	}

	.button {
		background-color: #bdbdbd;
		box-shadow: inset 1px 1px #fff, 1px 1px #000;
		border: 3px solid black;

		padding-bottom: 7px;
		padding-top: 7px;
		width: 120px;
	}

	.catcry-img {
		width: 140px;
		height: auto;
	}
</style>
