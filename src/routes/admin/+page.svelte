<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<p>
    This website serves as an embed for some pages in the official 
    <a href="https://example.com">Ramon Magsaysay (Cubao) High School</a> website. 
</p>

<hr class="my-4">

<p>
    Some elements of the RMCHS website can not be made possible in Google Sites.
    It is limited and there are constraints, therefore this website was created.
</p>
<br>
<p>To any student/administrator who wishes to change anything in this website:</p>
<ul class="ml-8 list-disc">
    <li>
        <p>This website is made in Svelte.</p>
        <a href="https://svelte.dev/docs/kit">Learn more about Svelte here.</a>
    </li>
    <li>
        <p>
            Internationalization (i18n) exists in this project, but has not yet been implemented.
            This means changing the website language is currently not yet supported.
        </p>
    </li>
    <li>
        <p>Lastly, the source code of this website can be found at...</p>
        <p>It is currently being hosted at the</p>
        <a href="https://github.com/rmchsresearchclub">RMCHS Research Club Github account.</a>
    </li>
</ul>