<script lang="ts">
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { asset, resolve } from "$app/paths";

	let { children } = $props();

	const enableNavBar = false;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preload" as="font" href="/fonts/Avenir_Regular.ttf" crossorigin="anonymous">
	<meta name="super-nice-meta-tag" content="six-seven">
	<title>Ramon Magsaysay (Cubao) High School Sub-section</title>
</svelte:head>

{#if enableNavBar}
	<enhanced:img class="fixed z-100 mx-3" src={asset("/favicon.png")} alt={"RMCHS Logo"} width="48" height="48" />

	<nav class="fixed left-0 top-0 p-2 bg-yellow-200/50 backdrop-blur-md w-full">
		<div class="flex flex-wrap items-center justify-between mx-auto">
			<div class="items-center justify-between flex w-auto md:order-1">
				<ul class="font-medium flex p-0 border-default rounded-base flex-row space-x-2 rtl:space-x-reverse mt-0">
					<li>
						<p class="mx-6"></p>
					</li>
					<li>
						<a href={resolve("/")} class="block px-3 rounded bg-transparent h-full hover:bg-yellow-300">Main Website</a>
					</li>
					<li>
						<a href={resolve("/academics")} class="block px-3 rounded border-0 h-full hover:bg-yellow-300">Academics</a>
					</li>
				</ul>
			</div>
			<div class="md:order-2">
				
			</div>
		</div>
	</nav>

	<div class="p-4"></div>
{/if}

<main class="m-4">
	{@render children()}
</main>

<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>
			{locale}
		</a>
	{/each}
</div>
