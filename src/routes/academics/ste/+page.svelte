<script lang="ts">
	import Content from "$lib/components/Content.svelte";
	import StepByStep from "$lib/components/StepByStep.svelte";
	import SubjectMatrix from "$lib/components/SubjectMatrix.svelte";
    import { m } from '$lib/paraglide/messages.js';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<!-- TODO: i18n is built into this project, either use that or hardcode them strings -->
<h1 class="text-3xl font-bold w-full text-center underline underline-offset-12 mt-8 mb-4">RMCHS Science, Technology, and Engineering Program</h1>

{#snippet step1()}
    <h4 class="font-bold">I. Submission of Requirements</h4>
    <section>
        <p>Applicants are required to submit the following documents onsite:</p>
        <ul class="ml-8 list-disc">
            <li><p>Duly accomplished STEP Application Form</p></li>
            <li>
                <p>Certified True Copy of School Form 9 (formerly Form 138-E), covering:</p>
                <ul class="ml-8">
                    <li><p>→ Grade 5 (First to Fourth Quarter) </p></li>
                    <li><p>→ Grade 6 (First to Second Quarter)</p></li>
                </ul>
            </li>
            <li><p>Certificate of Enrollment for the current school year</p></li>
            <li><p>Birth Certificate issued by the Philippine Statistics Authority (PSA) or National Statistics Office (NSO) (Original copy and one (1) photocopy)</p></li>
            <li><p>Two (2) recent 1” × 1” ID photographs with white background</p></li>
            <li><p>Photocopy of Winning Certificates in Science and Mathematics (if applicable)</p></li>
        </ul>
        <br>
        <p><strong>Minimum Grade Requirements:</strong></p>
        <ul class="ml-8 list-disc">
            <li><p>The applicant’s final grades in English, Science, and Mathematics for Grade 5 must be no lower than 85%, and no lower than 83% in all other subjects.</p></li>
            <li><p>Additionally, the applicant’s current academic ratings in Grade 6 must NOT fall below 80% in any subject.</p></li>
        </ul>
        <br>
        <p>The requirements must be placed inside a long brown envelope with the applicant name, contact number, and email address included.</p>
    </section>
{/snippet}

{#snippet step2()}
    <h4 class="font-bold">II. Admission Test</h4>
        <p class="inline">Applicants must take the Admission Test on the scheduled date to be officially announced on the</p>
        <a href="https://www.facebook.com/p/Ramon-Magsaysay-Cubao-High-School-Special-Science-Program-100064188963192/">Ramon Magsaysay (Cubao) High School – Special Science Program Facebook Page.</a>
        <br>
        
        <p>The Admission Test consists of four (4) subtests: </p>
        <ul class="ml-8 list-disc">
            <li><p>English</p></li>
            <li><p>Mathematics</p></li>
            <li><p>Science</p></li>
            <li><p>Abstract Reasoning</p></li>
        </ul>
        <br>

        <p><strong>There will also be an interview after the test.</strong></p>
{/snippet}

{#snippet step3()}
    <h4 class="font-bold">III. Release of Results</h4>
    <p class="inline">The list of qualified applicants will be posted on the </p>
    <a href="https://www.facebook.com/p/Ramon-Magsaysay-Cubao-High-School-Special-Science-Program-100064188963192/">Ramon Magsaysay (Cubao) High School – Special Science Program Facebook Page.</a>
{/snippet}

<section class="max-w-10/12 mx-auto">
    <Content title={"Information"}>
        <p>
            The Science, Technology, and Engineering (STE) Program is a science and mathematics-oriented curriculum 
            devised for high schools in the Philippines. The STE program is offered by high schools supervised by 
            the Department of Education (DepEd) and formerly by the Department of Science and Technology (DOST)
            who piloted the program in 1994.
        </p>
    </Content>

    <SubjectMatrix curriculum={"ste"} hasSpecialSubjects={true} specialSubjects={["special1", "special2", "special3"]} />

    <section class="flex flex-col gap-4 w-full mt-4">
        <StepByStep title={"Admission Guidelines"} items={[step1, step2, step3]} />
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