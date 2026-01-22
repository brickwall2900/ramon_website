<script lang="ts">
    import ImageViewer from "./ImageViewer.svelte";
    import Portal from "svelte-portal";

    let { src, alt, popupContainer = undefined, ...others } = $props();
    let isOpen = $state(false);

    function onImageClicked() {
        isOpen = true;
    }

    function closeTheDamnPopup() {
        isOpen = false;
    }
</script>

<enhanced:img src={src} alt={alt} {...others} onclick={onImageClicked} />

{#if isOpen}
    {#if popupContainer !== undefined}
        <Portal target={popupContainer}>
            <ImageViewer src={src} alt={alt} closePopup={closeTheDamnPopup} {...others} />
        </Portal>
    {:else}
        <ImageViewer src={src} alt={alt} closePopup={closeTheDamnPopup} {...others} />
    {/if}
{/if}