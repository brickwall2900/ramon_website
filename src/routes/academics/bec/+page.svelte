<script lang="ts">
	import Content from "$lib/components/Content.svelte";
import SubjectMatrix from "$lib/components/SubjectMatrix.svelte";
    import { m } from '$lib/paraglide/messages.js';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<!-- TODO: i18n is built into this project, either use that or hardcode them strings -->
<h1 class="text-3xl font-bold w-full text-center underline underline-offset-12 mt-8 mb-4">RMCHS Basic Education Curriculum</h1>

<section class="max-w-10/12 mx-auto">
    <Content title={"Information"}>
        <p>
            The Basic Education Curriculum (BEC) of the Philippines provides a comprehensive foundation from 
            Kindergarten to Grade 10, focusing on essential knowledge, skills, values, and competencies to 
            prepare learners for Senior High School, lifelong learning, and responsible citizenship.
        </p>
    </Content>

    <SubjectMatrix />

    <section class="flex flex-col gap-4 w-full mt-4">
        <Content title={"Enrollment"}>
            <p>Qualified applicants can proceed with enrollment by submitting the following documents onsite:</p>
            <ul class="ml-8 list-disc">
                <li><p>Duly accomplished Basic Education Enrollment Form</p></li>
                <li>
                    <p>Certified True Copy of School Form 9 (formerly Form 138-E), covering:</p>
                    <ul class="ml-8">
                        <li><p>→ Grade 6 (First to Fourth Quarter)</p></li>
                    </ul>
                </li>
            </ul>
        </Content>
    </section>
</section>