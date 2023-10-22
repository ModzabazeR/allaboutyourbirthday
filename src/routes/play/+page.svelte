<script lang="ts">
    import Taskbar from "$components/taskbar.svelte";
    import ExitWindow from "$components/exitWindow.svelte";

    import { day, month } from "../../stores";
	import { onMount } from "svelte";

    let dayValue: number, monthValue: number;

    day.subscribe((value) => (dayValue = value));
    month.subscribe((value) => (monthValue = value));

    const fetchFloridaman = async () => {
        const res = await fetch(`/api/floridaman?day=${dayValue}&month=${monthValue}`);
        const data = await res.json();
        return data;
    };

    onMount( async () => {
        console.log(`day: ${dayValue}, month: ${monthValue}`)
        console.log(await fetchFloridaman());
    });
</script>

<section class="bg-primary">
    <div class="box">
        <ExitWindow />
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