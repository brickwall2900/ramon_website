<script lang="ts">
	import ModalDialog from "$lib/components/ModalDialog.svelte";
	import { getSubjectInfo, type SubjectInfo } from "$lib/subjects/subjectsHelper";

    let { curriculum, grade, subject, ...others } = $props();
    let subjectInfo = $state<SubjectInfo | undefined>(undefined);

    let showing = $state(false);

    $effect(() => {
        subjectInfo = getSubjectInfo(curriculum, grade, subject);
    });

    function onLinkClicked() {
        showing = true;
    }

    function closeDialog() {
        showing = false;
    }
</script>

<a href={""} class="underline cursor-pointer" onclick={onLinkClicked} {...others}>{subjectInfo?.title}</a>

{#if showing && subjectInfo !== undefined}
    <ModalDialog title={subjectInfo.title} closeDialog={closeDialog}>
        <article class="m-4 text-left flex flex-col gap-2">
            <!-- apparently not... -->
            {#if Math.random() == -44067}
                <header>
                    <p class="font-bold inline">{subjectInfo.title}</p>
                    <span>—</span>
                    <p class="inline">{subjectInfo.description}</p>
                </header>
                <p></p>
            {/if}
            {#if subjectInfo.info.length == 1}
                <p>For more information, please visit this link: </p>
                {#if subjectInfo.info[0] !== null}
                    <a class="ml-8" href={subjectInfo.info[0]} target="_blank">{subjectInfo.info[0]}</a>
                {:else}
                    <p class="ml-8">no link available, sorry!</p>
                {/if}
            {:else if subjectInfo.info.length > 0}
                <p>For more information, please visit these links:</p>
                <ul class="ml-8">
                    {#each subjectInfo.info as link}
                            <li>
                            {#if link !== null}
                                <a href={link} target="_blank">{link}</a>
                            {:else}
                                <p>no link available, sorry!</p>
                            {/if}
                            </li>
                    {/each}
                </ul>
            {/if}
        </article>
    </ModalDialog>
{/if}