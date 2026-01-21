<script lang="ts">
    import { marked } from 'marked';
    import DOMPurify from 'dompurify';
    let { content } = $props();

    // Sanitize or parse the markdown reactively
    
    const html = $derived(DOMPurify.sanitize(marked.parse(content) as string));
</script>

<div class="prose max-w-none">
    {@html html}
</div>