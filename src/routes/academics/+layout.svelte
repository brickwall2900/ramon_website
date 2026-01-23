<svelte:head>
    <title>RMCHS Academics</title>
</svelte:head>

<script lang="ts">
    import type { LayoutProps } from './$types';
	import SetOfLinks from '$lib/components/SetOfLinks.svelte';

    let { data, children }: LayoutProps = $props();
</script>

<header class="fixed top-4 left-4 w-full">
    <SetOfLinks links={
        [
            { icon: "ep:back", href: "/academics", title: "Back to RMCHS Website" },
            { icon: "charm:graduate-cap", href: "/academics", title: "List of Academics" }
        ]} />
</header>

{@render children()}

<footer>
    <p class="w-full text-center text-sm my-4">This may be subject to change without prior notice!</p>
</footer>

<!-- spacing -->
<p class="mb-16"></p>