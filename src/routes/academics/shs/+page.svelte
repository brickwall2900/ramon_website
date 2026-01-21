<script lang="ts">
    import Content from '$lib/components/Content.svelte';
import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<!-- TODO: i18n is built into this project, either use that or hardcode them strings -->
<h1 class="text-3xl font-bold w-full text-center underline underline-offset-12 mt-8 mb-4">RMCHS Senior High School</h1>

<section class="max-w-10/12 mx-auto">
    <Content title={"Information"}>
        <p>
            Senior High School (SHS) in the Philippines is a two-year program (Grades 11–12) curriculum that prepares 
            students for higher education, employment, entrepreneurship, or middle-level skills development through 
            academic, technical-vocational-livelihood, sports, and/or arts subjects.
        </p>
    </Content>

    <section class="flex flex-col gap-4 w-full mt-4">
        <article class="border p-4">
            <h3 class="text-2xl font-bold">Strengthened SHS Curriculum</h3>
            <section>
                <p>Starting 2026, Ramon Magsaysay (Cubao) High School will start implementing and piloting the Strengthened SHS Curriculum.</p>
                <embed class="w-full h-svh" src="https://www.deped.gov.ph/strengthened-shs-program/">
                <p>Please visit the following links for more information about the Strengthened SHS Curriculum.</p>
                <ul class="ml-8 list-disc">
                    <li><a href="https://www.deped.gov.ph/strengthened-shs-program/">https://www.deped.gov.ph/strengthened-shs-program/</a></li>
                    <li><a href="https://www.deped.gov.ph/wp-content/uploads/DM_s2025_048r.pdf">https://www.deped.gov.ph/wp-content/uploads/DM_s2025_048r.pdf</a></li>
                </ul>
            </section>
        </article>
    </section>

    <section class="flex flex-col gap-4 w-full mt-4">
        <Content title={"Enrollment"}>
            <p>Qualified applicants can proceed with enrollment by submitting the following documents onsite:</p>
            <ul class="ml-8 list-disc">
                <li><p>Duly accomplished Basic Education Enrollment Form</p></li>
                <li>
                    <p>Certified True Copy of School Form 9 (formerly Form 138-E), covering:</p>
                    <ul class="ml-8">
                        <li><p>→ Grade 10 (First to Fourth Quarter)</p></li>
                    </ul>
                </li>
            </ul>
        </Content>
    </section>
</section>