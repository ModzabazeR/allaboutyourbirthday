<script lang="ts">
    interface ContactData {
        name: string;
        age: number;
        imagePath: string;
        studentId: string;
        githubUsername: string;
    }

    export let data: ContactData;
</script>

<div class="border border-black p-4">
    <img class="h-12" src={data.imagePath} alt={data.name}>
    <p>Name: {data.name}</p>
    <p>Age: {data.age}</p>
    <p>Student ID: {data.studentId}</p>
    <p>Github Username: {data.githubUsername}</p>
</div>