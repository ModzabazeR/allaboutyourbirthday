<script>
    import Taskbar from "../../components/taskbar.svelte";
    import ExitWindow from "../../components/exitWindow.svelte";
</script>

<section>
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