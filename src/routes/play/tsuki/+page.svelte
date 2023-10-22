<script>
	import Taskbar from '$components/taskbar.svelte';
	import ContactCard from '$components/contactCard.svelte';
</script>

<section class="bg-primary">
	<div class="box gap-4">
		<ContactCard
			data={{
				name: 'Phachara Chirapakachote',
				imagePath: '/images/moddaeng.jpg',
				age: 19,
				studentId: '65050581',
				githubUsername: 'ModzabazeR'
			}}
		/>

		<ContactCard
			data={{
				name: 'Prepat Jarundechakorn',
				imagePath: '/images/j.jpg',
				age: 20,
				studentId: '65050650',
				githubUsername: 'ZilviaS'
			}}
		/>

		<ContactCard
			data={{
				name: 'Worachisa Boonlert',
				imagePath: '/images/tsuki.jpg',
				age: 19,
				studentId: '65050777',
				githubUsername: 'daisuki0i'
			}}
		/>

		<ContactCard
			data={{
				name: 'Worawit Rodtahoy',
				imagePath: '/images/m.jpg',
				age: 20,
				studentId: '65050792',
				githubUsername: 'SonataYuya'
			}}
		/>
	</div>
	<Taskbar />
</section>

<style>
	.box {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
