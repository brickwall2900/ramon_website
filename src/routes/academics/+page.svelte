<script lang="ts">
    import type { PageProps } from './$types';
    import Icon from "@iconify/svelte";
    import { asset, resolve } from "$app/paths";

    let { data }: PageProps = $props();


</script>

<h1 class="text-3xl font-bold w-full text-center underline underline-offset-12 my-12">Academics</h1>

{#snippet card(icon: string, name: string, sublink: string, otherClass: string)}
    <article class={"border p-4 flex flex-row items-center justify-between gap-2 " + otherClass}>
        <Icon icon={icon} height={80} />
        <h1 class="font-bold text-xl">{name}</h1>
        <a href={resolve(`/academics/${sublink}`)} class="border p-2 border-black hover:bg-gray-300 no-underline text-black">Learn more</a>
    </article>
{/snippet}

<section class="max-w-10/12 mx-auto flex flex-col gap-4">
    {@render card("mdi:teach", "Basic Education Curriculum", "bec", "")}
    {@render card("icomoon-free:lab", "Science, Technology, and Engineering Program", "ste", "")}
    {@render card("mdi:paint-outline", "Special Program in the Arts", "spa", "")}
    {@render card("charm:graduate-cap", "Senior High School", "shs", "")}
    {@render card("mi:document", "Alternative Learning System", "als", "")}
    {@render card("mdi:brain", "Special Needs Education", "sned", "")}
</section>

<!-- spacing -->
<p class="mb-16"></p>