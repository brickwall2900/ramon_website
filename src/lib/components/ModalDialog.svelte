<script lang="ts">
	import { fade, fly, slide } from "svelte/transition";

    let { closeDialog, title = "Dialog", children } = $props();

    function tryClosingTheDamnDialog(e: Event) {
        if (e.target === e.currentTarget) {
            closeDialog(e);
        }
    }
</script>

<!-- dark mode doesn't exist on Google Sites. -->
<dialog 
    class="fixed w-full h-full mx-auto my-auto inset-0 bg-black/70 flex items-center justify-center z-50"
    onclick={tryClosingTheDamnDialog}
    in:fade={{duration: 100}}
    out:fade={{duration: 100}}>
    <section 
        class="rounded bg-white text-black max-w-3/4 max-h-15/16 overflow-scroll" 
        in:fly={{duration: 500, y: 1000}}
        out:fly={{duration: 500, y: 500}}>
        <nav class="w-full bg-gray-300 px-2 py-1 rounded-tl rounded-tr flex flex-row justify-between align-middle">
            <p class="font-bold text-lg mr-2">{title}</p>
            <button 
                class="rounded-full bg-red-500 hover:bg-red-600 active:bg-red-700 text-white px-2"
                onclick={tryClosingTheDamnDialog}>
                Close
            </button>
        </nav>
        {@render children?.()}
    </section>
</dialog>