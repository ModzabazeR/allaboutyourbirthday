<script lang="ts">
	let timeElement: HTMLParagraphElement;
</script>

<footer class="footer">
	<div class="flex gap-4 text-white p-2 box">
		<p>logo1</p>
		<p>logo2</p>
		<p bind:this={timeElement}>11:11</p>
	</div>
</footer>

<style>
	.footer {
		background-color: gray;
		width: 100%;
		position: fixed;
		bottom: 0;
	}
</style>
