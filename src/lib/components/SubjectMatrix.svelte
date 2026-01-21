<script lang="ts">
	import Content from "./Content.svelte";
	import SubjectInfo from "./SubjectInfo.svelte";

    let { 
        curriculum = "common",
        hasSpecialSubjectContainer = false,
        children = undefined,
        hasSpecialSubjects = false,
        specialSubjects = []
    } = $props();

    const grades = [ 7, 8, 9, 10 ];
    const subjects = [ "science", "math", "english", "filipino", "ap", "mapeh" , "esp"];
</script>

<Content title={"Subject Matrix"}>
    <div class="overflow-scroll mx-auto">
        <table class="max-w-6xl mx-auto">
            <thead>
                <tr class="bg-green-200">
                    {#each grades as grade}
                        <th>Grade {grade}</th>
                    {/each}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="bg-blue-200" colspan="4">Core Subjects</td>
                </tr>
                    {#each subjects as subject}
                        <tr>
                            {#each grades as grade}
                                <td><SubjectInfo curriculum={"common"} grade={grade} subject={subject} /></td>
                            {/each}
                        </tr>
                    {/each}
                {#if hasSpecialSubjects}
                    <tr>
                        <td class="bg-yellow-100" colspan="4">Specialized Subjects</td>
                    </tr>
                    {#if hasSpecialSubjectContainer && children !== undefined}
                        <tr>
                            <td colspan="4">{@render children?.()}</td>
                        </tr>
                    {:else}
                        {#each specialSubjects as subject}
                            <tr>
                                {#each grades as grade}
                                    <td><SubjectInfo curriculum={curriculum} grade={grade} subject={subject} /></td>
                                {/each}
                            </tr>
                        {/each}
                    {/if}
                {/if}
            </tbody>
        </table>
    </div>
</Content>