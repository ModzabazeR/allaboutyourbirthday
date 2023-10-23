<script>
	import Taskbar from '$components/taskbar.svelte';
	import ContactCard from '$components/contactCard.svelte';

	const contactData = [
		{
			name: 'Phachara Chirapakachote',
			imagePath: '/images/moddaeng.jpg',
			age: 19,
			studentId: '65050581',
			githubUsername: 'ModzabazeR'
		},
		{
			name: 'Prepat Jarundechakorn',
			imagePath: '/images/j.jpg',
			age: 20,
			studentId: '65050650',
			githubUsername: 'ZilviaS'
		},
		{
			name: 'Worachisa Boonlert',
			imagePath: '/images/tsuki.jpg',
			age: 19,
			studentId: '65050777',
			githubUsername: 'daisuki0i'
		},
		{
			name: 'Worawit Rodtahoy',
			imagePath: '/images/m.jpg',
			age: 20,
			studentId: '65050792',
			githubUsername: 'SonataYuya'
		}
	];
</script>

<svelte:head>
	<title>Contact | All About Your Birthday</title>
</svelte:head>

<section class="flex justify-center items-center h-screen gap-4 bg-primary">
        {#each contactData as contact}
            <ContactCard data={contact} />
        {/each}
	<Taskbar />
</section>
