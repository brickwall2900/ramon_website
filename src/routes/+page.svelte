<script lang="ts">
    import { resolve } from '$app/paths';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<br>

<p><strong>For school/technical administrators:</strong></p>
<p>
    This website serves as a microsite for some pages in the official 
    <a href="https://example.com">Ramon Magsaysay (Cubao) High School</a> website. 
</p>

<p>For more information, please visit <a href={resolve("/admin")}>this link.</a></p>

<br>

<p>Fast links:</p>
<ul class="list-disc ml-8">
    <li><a href={resolve("/academics")}>/academics</a></li>
    <li><a href={resolve("/facilities")}>/facilities</a></li>
</ul>

<br>
<p><strong>Last updated: January 23, 2026</strong></p>

<p class="mb-6700"></p>
<h1 class="font-bold text-xl">six seven</h1>