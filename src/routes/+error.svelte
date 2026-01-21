<script lang="ts">
    import { page } from '$app/state';
</script>

<section class="w-full text-center">
    <h1> 💔🥀 An error occurred...</h1>
    <h1>{page.status}: {page.error?.message}</h1>

    <p><strong>If this appears on the embed, please report to school administrators immediately.</strong></p>
    <enhanced:img class="mx-auto" src={`https://http.cat/${page.status}`} alt={`HTTP Cat of status code ${page.status}`} />
</section>