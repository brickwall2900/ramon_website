<script lang="ts">
    import Autoplay from 'embla-carousel-autoplay'
	import Content from '$lib/components/Content.svelte';
	import { getFacilities, type FacilityInfo, getFacilityInfo } from '$lib/facilities/facilityHelper';
    import type { PageProps } from './$types';
    import { asset, resolve } from "$app/paths";
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
	import ModalDialog from '$lib/components/ModalDialog.svelte';
	import Image from '$lib/components/Image.svelte';

    let { data }: PageProps = $props();

    let selected = $state<string | undefined>(undefined);
    let facilityInfo = $derived(selected !== undefined ? getFacilityInfo(selected) : undefined);
    let dialogOpen = $state(false);

    const MAP_LINK = "https://drive.google.com/file/d/1xbNek8AuwkQhZGGPgIYrmkP6dJRnSiNA/view?usp=drive_link";

    let api = $state<CarouselAPI>();
    let count = $derived(api ? api.scrollSnapList().length : 0);
    let current = $state(0);
    let page = $state(1);
    let imageViewerContent = $state<HTMLElement | undefined>(undefined);

    const autoplay = Autoplay(
        {
        delay: 3000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
        }
    );

    let timer: any = null;

    function onSelect(facility: string) {
        selected = facility;
        dialogOpen = true;
        page = 1;
        api?.plugins().autoplay?.play()
    }

    function closeDialog() {
        dialogOpen = false;
        api?.plugins().autoplay?.stop();
    }

    // we are charlie kirk we carry the flames we fight  for the gospel
    // haha i am just copy pasting
    $effect(() => {
        if (api) {
            api.scrollTo(page - 1);
            current = page;
        }
    });

    $effect(() => {
        if (api) {
            current = api.selectedScrollSnap() + 1;
            api.plugins().autoplay || api.reInit({}, [ autoplay ])
            api.on("select", () => {
                current = api!.selectedScrollSnap() + 1;
                page = current;
            });
        }
    });
</script>

<h1 class="text-3xl font-bold w-full text-center underline underline-offset-12 my-12">Facilities</h1>

{#snippet facilityItem(facility: string, facilityInfo: FacilityInfo | undefined)}
    <li>
        <button 
            class={"text-2xl hover:underline hover:font-bold cursor-pointer w-full hover:brightness-125 hover:contrast-125 duration-150 transition-all"}
            onclick={() => onSelect(facility)}>
            <enhanced:img class="object-contain xl:size-full size-2/3 m-auto cursor-pointer" src={asset(`/assets/facilities/${facility}/cover.png`)}  alt={facilityInfo?.name} />
            <p class="my-6">{facilityInfo?.name}</p>    
        </button>
        <p class="text-sm no-underline font-normal text-justify">{facilityInfo?.description} <a href={MAP_LINK} target="_blank">View map.</a></p>
    </li>
{/snippet}

<section class="max-w-10/12 mx-auto gap-4">
    <Content className="size-full" centerHeader hasTopMargin={false} hasTitle={false}>
        <ul class="grid xl:grid-cols-4 xl:grid-rows-2 grid-rows-8 grid-flow-col gap-6">
            {#each getFacilities() as facility}
                {@render facilityItem(facility, getFacilityInfo(facility))}
            {/each}
        </ul>
    </Content>

    <!-- spacing -->
    <p class="mb-16"></p>
</section>

{#if selected !== null && dialogOpen}
    <ModalDialog closeDialog={closeDialog} title={facilityInfo?.name}>
        <section class="m-4">
            <Carousel class="mx-16 my-4 p-4 border" setApi={(emblaApi) => (api = emblaApi)}>
                <CarouselContent>
                    {#if selected !== undefined}
                        {#each getFacilityInfo(selected)?.imgPaths as item}
                            <CarouselItem>
                                <figure>
                                    <figcaption class="w-full top-0 left-0 lg:my-4 my-2 text-center font-bold mix-blend-exclusion lg:text-2xl text-sm">{item.name}</figcaption>
                                    <Image popupContainer={imageViewerContent} class="max-w-3/4 max-h-3/4 mx-auto cursor-pointer" src={asset(item.asset)} alt={item.name} />
                                </figure>
                            </CarouselItem>
                        {/each}
                    {/if}
                </CarouselContent>
            </Carousel>
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
        </section>
    </ModalDialog>
{/if}

<div bind:this={imageViewerContent}>

</div>