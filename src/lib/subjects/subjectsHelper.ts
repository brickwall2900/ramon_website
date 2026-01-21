import data from "$lib/data/subjects.json";

export interface SubjectInfo {
    title: string,
    description: string,
    info: Array<string | null>
}

const TEMPLATE = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed aliquam ante, commodo mattis leo."
 + "Maecenas vitae odio metus. Donec tempor finibus mi, in efficitur libero dapibus a. Morbi purus elit, accumsan in "
 + "pulvinar sed, scelerisque in mauris. In vitae sodales leo, at scelerisque eros. Nam porttitor odio congue suscipit "
 + "maximus. Nullam consequat convallis est et congue. Quisque odio libero, rutrum nec mattis et, fermentum non est.";
const TEMPLATE_LINK = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

// FIXME ???
export function getSubjectInfo(curriculum: string, grade: number, subject: string): SubjectInfo {
    const curriculumData = (data as any)[curriculum];
    if (curriculumData === undefined) {
        if (curriculum !== "common") return getSubjectInfo("common", grade, subject);
        throw TypeError("curriculum not found");
    }
    const gradeData = curriculumData[grade];
    if (gradeData === undefined) {
        if (curriculum !== "common") return getSubjectInfo("common", grade, subject);
        throw TypeError("grade not found");
    }
    const subjectData = gradeData[subject];
    if (subjectData === undefined) {
        if (curriculum !== "common") return getSubjectInfo("common", grade, subject);
        throw TypeError("subject not found");
    }
    let subjectInfo: SubjectInfo = subjectData;
    subjectInfo.title = subjectInfo.title || TEMPLATE;
    subjectInfo.description = subjectInfo.description || TEMPLATE;
    for (let i = 0; i < subjectInfo.info.length; i++) {
        subjectInfo.info[i] = subjectInfo.info[i] || null;
    }
    return subjectInfo;
}