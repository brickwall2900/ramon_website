<script lang="ts">
	import Content from "$lib/components/Content.svelte";
	import StepByStep from "$lib/components/StepByStep.svelte";
	import SubjectInfo from "$lib/components/SubjectInfo.svelte";
	import SubjectMatrix from "$lib/components/SubjectMatrix.svelte";
    import { m } from '$lib/paraglide/messages.js';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<!-- FIXME: copy paste entire pages? -->
<h1 class="text-3xl font-bold w-full text-center underline underline-offset-12 my-12">RMCHS Special Program in the Arts</h1>

{#snippet step1()}
    <h4 class="font-bold">I. Submission of Requirements</h4>
    <section>
        <a href="https://drive.google.com/file/d/10Zi_eanUzwlqrqJ8TpfZZqVDr62hnwdx/view?usp=sharing">
            ℹ️ Click me to open the SPA Application Form you would need to fill out.
        </a>
        <p>Applicants are required to submit the following documents onsite:</p>
        <ul class="ml-8 list-disc">
            <li><p>Duly accomplished SPA Application Form</p></li>
            <li>
                <p>Certified True Copy of School Form 9 (formerly Form 138-E), covering:</p>
                <ul class="ml-8">
                    <li><p>→ Grade 6 (First to Fourth Quarter)</p></li>
                </ul>
            </li>
            <li><p>Certificate of Good Moral Character from the previous school year</p></li>
            <li><p>Birth Certificate issued by the Philippine Statistics Authority (PSA) (Photocopy)</p></li>
            <li><p>One (1) recent 2” × 2” ID photograph with white background</p></li>
            <li><p>Photocopy of Winning Certificates in Arts (if applicable)</p></li>
        </ul>
        <br>
        <p><strong>Minimum Grade Requirements:</strong></p>
        <ul class="ml-8 list-disc">
            <li><p>The applicant’s quarterly for Grade 6 must be no lower than 80% in all other subjects.</p></li>
        </ul>
        <br>
        <p>The requirements must be placed inside a long brown envelope with the applicant name, contact number, and email address included.</p>
    </section>
{/snippet}

{#snippet step2()}
    <h4 class="font-bold">II. Interview</h4>
    <p><strong>Applicants who passed the first screening will have a scheduled interview in their chosen specialization. </strong></p>
{/snippet}

<section class="max-w-10/12 mx-auto">
    <Content title={"Information"}>
        <p>
            The Special Program in the Arts (SPA) offers a comprehensive Basic Education centered on the Arts, 
            covering a range of art forms and disciplines. This is a program which also helps learners with 
            potentials or talents in the arts that will contribute to the socio-cultural and economic growth of the country.
        </p>
        <p class="inline">Facebook: </p>
        <a href="example.com">RMCHS something something</a>
    </Content>

    <SubjectMatrix hasSpecialSubjectContainer={true} hasSpecialSubjects={true} specialSubjRenderAsOne={true}>
        <tr>
            <td><SubjectInfo curriculum="spa" grade={7} subject="music" /></td>
            <td><SubjectInfo curriculum="spa" grade={8} subject="music" /></td>
            <td><SubjectInfo curriculum="spa" grade={9} subject="music" /></td>
            <td><SubjectInfo curriculum="spa" grade={10} subject="music" /></td>
        </tr>
        <tr>
            <td colspan="4">
                <p>Any one of the following:</p>
                <ul class="ml-8 list-disc text-left">
                    <li><p>Music</p></li>
                    <li><p>Visual Arts</p></li>
                    <li><p>Theater Arts</p></li>
                    <li><p>Media Arts</p></li>
                    <li><p>Dance</p></li>
                    <li><p>Creative Writing</p></li>
                </ul>
            </td>
        </tr>
    </SubjectMatrix>

    <section class="flex flex-col gap-4 w-full mt-4">
        <StepByStep title={"Admission Guidelines"} items={[step1, step2]} />
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
    <!-- spacing -->
    <p class="mb-16"></p>
</section>