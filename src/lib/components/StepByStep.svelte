<script lang="ts">
    import Content from "$lib/components/Content.svelte";
    import CarouselContent from "$lib/components/shadcn/ui/carousel/carousel-content.svelte";
	import CarouselItem from "$lib/components/shadcn/ui/carousel/carousel-item.svelte";
	import Carousel from "$lib/components/shadcn/ui/carousel/carousel.svelte";
    import type { CarouselAPI } from "$lib/components/shadcn/ui/carousel/context";
	import PaginationContent from "$lib/components/shadcn/ui/pagination/pagination-content.svelte";
	import PaginationEllipsis from "$lib/components/shadcn/ui/pagination/pagination-ellipsis.svelte";
	import PaginationItem from "$lib/components/shadcn/ui/pagination/pagination-item.svelte";
	import PaginationLink from "$lib/components/shadcn/ui/pagination/pagination-link.svelte";
	import PaginationNext from "$lib/components/shadcn/ui/pagination/pagination-next.svelte";
	import PaginationPrevious from "$lib/components/shadcn/ui/pagination/pagination-previous.svelte";
	import Pagination from "$lib/components/shadcn/ui/pagination/pagination.svelte";

    let { items = [], title = "Title" } = $props();

    let api = $state<CarouselAPI>();
    let count = $derived(api ? api.scrollSnapList().length : 0);
    let current = $state(0);

    let page = $state(1);

    // we are charlie kirk we carry the flames we fight  for the gospel
    $effect(() => {
        if (api) {
            api.scrollTo(page - 1);
            current = page;
        }
    });

    $effect(() => {
        if (api) {
            current = api.selectedScrollSnap() + 1;
            api.on("select", () => {
                current = api!.selectedScrollSnap() + 1;
                page = current;
            });
        }
    });
</script>

<Content title={title}>
    <p class="font-bold py-2 w-full text-center text-sm">STEP {current} OF {count}</p>
    <Carousel class="mx-16 mt-0 mb-4 p-4 border" setApi={(emblaApi) => (api = emblaApi)}>
        <CarouselContent>
            {#each items as item}
                <CarouselItem>
                    {@render item()}
                </CarouselItem>
            {/each}
        </CarouselContent>
    </Carousel>
    <p class="w-full text-center">← Swipe or use the arrow buttons to go previous/next →</p>
    <Pagination count={count} perPage={1} bind:page={page}>
        {#snippet children({ pages, currentPage })}
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious />
                </PaginationItem>
                {#each pages as page (page.key)}
                    {#if page.type === "ellipsis"}
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    {:else}
                        <PaginationItem>
                            <PaginationLink {page} isActive={currentPage === page.value}>
                                {page.value}
                            </PaginationLink>
                        </PaginationItem>
                    {/if}
                {/each}
                <PaginationItem>
                    <PaginationNext />
                </PaginationItem>
            </PaginationContent>
        {/snippet}
    </Pagination>
</Content>