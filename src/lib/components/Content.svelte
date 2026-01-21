<script lang="ts">
    let { title = "title", children = undefined } = $props();
</script>

<article>
    <section class="flex flex-col gap-4 w-full mt-4">
        <article class="border p-4">
            <h3 class="text-2xl font-bold underline underline-offset-4 mb-2">{title}</h3>
            <section>
                {@render children?.()}
            </section>
        </article>
    </section>
</article>