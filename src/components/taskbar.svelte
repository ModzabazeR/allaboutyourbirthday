<script lang="ts">
	let timeElement: HTMLParagraphElement;
	import folder from '$lib/images/fold.png';
	import window from '$lib/images/window.png';
	import aButton from '$lib/images/aButton.png';	
</script>

<footer class="footer">
	<div class="flex text-white p-4 box">
		<div class="flex h-max gap-12">					 
			<img src={window} alt="" class="window-img" />
			<img src={folder} alt="" class="folder-img" />
									
		</div>	
		<img src={aButton} alt="" class="aButton-img" />	
		<p bind:this={timeElement} class="time">11:17 PM</p>
	</div>	
</footer>

<style>
	.footer {
		background-color: #CCCCCC;
		width: 100%;
		position: fixed;
		bottom: 0;
	}	
	.time {
		position: absolute;		
		right: 30px;
   	}
	.window-img {
		width:50px;
		height: 30px;		
	}
	.folder-img {
		width:50px;
		height: 30px;
	}
	.aButton-img {
		position: absolute;	
		z-index: -1;	
		width:60px;
		height: 40px;
	}
	
</style>
