<script lang="ts">
	import Content from "$lib/components/Content.svelte";
    import SubjectMatrix from "$lib/components/SubjectMatrix.svelte";
    import { m } from '$lib/paraglide/messages.js';
	import Icon from "@iconify/svelte";
    import type { PageProps } from './$types';
	import SubjectInfo from "$lib/components/SubjectInfo.svelte";

    let { data }: PageProps = $props();
</script>

<!-- TODO: i18n is built into this project, either use that or hardcode them strings -->
<h1 class="text-3xl font-bold w-full text-center underline underline-offset-12 my-12">RMCHS Special Needs Education</h1>

<section class="max-w-9/12 mx-auto">
    <Content title={"Information"}>
        <p>
            The Special Needs Education (SNED) Program is an educational program/service designed to meet the needs 
            of children with disabilities who cannot profit from general or regular education.
        </p>
        <p>Facebook: <a href="https://www.facebook.com/rmchssned"><Icon icon={"ic:baseline-facebook"} class="inline mx-2" />Ramon Magsaysay Cubao High School - Special Needs Education</a></p>
    </Content>

    <SubjectMatrix hasSpecialSubjects={true} hasSpecialSubjectContainer={true} specialSubjRenderAsOne={true}>
        <tr>
            <td><SubjectInfo curriculum="sned" grade={7} subject="tle" /></td>
            <td><SubjectInfo curriculum="sned" grade={8} subject="tle" /></td>
            <td colspan="2">
                <p>Any one of the following:</p>
                <ul class="ml-8 list-disc text-left">
                    <li><p>Cookery</p></li>
                    <li><p>Dressmaking</p></li>
                    <li><p>Massaging</p></li>
                    <li><p>EIM</p></li>
                    <li><p>Technical Drafting</p></li>
                    <li><p>Cosmetology</p></li>
                </ul>
            </td>
        </tr>
    </SubjectMatrix>

    <Content title={"Enrollment"}>
        <p>Applicants can proceed with enrollment by submitting the following documents onsite:</p>
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
    <!-- spacing -->
    <p class="mb-16"></p>
</section>