<script lang="ts">
    import { resolve } from '$app/paths';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<br>

<p><strong>For school/technical administrators:</strong></p>
<p>
    This website serves as an embed for some pages in the official 
    <a href="https://example.com">Ramon Magsaysay (Cubao) High School</a> website. 
</p>

<details>
    <summary>Why?</summary>
    <a href={resolve("/admin")}>Please visit this link.</a>
</details>

<br>

<p><strong>For other people:</strong></p>
<h1 class="font-bold text-xl">You should not be here.</h1>

<br>

<p>Fast links:</p>
<ul class="list-disc ml-8">
    <li><a href={resolve("/academics/ste")}>/academics/ste</a></li>
</ul>

<p class="mb-6700"></p>
<h1 class="font-bold text-xl">six seven</h1>