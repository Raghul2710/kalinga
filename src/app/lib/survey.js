export const API = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://kalinga.dupebox.com/api';

export async function getSurveyQuestions(courseId, category) {
    const url = `${API}/survey/questions/?course_id=${courseId}&category=${category}`;
    const res = await fetch(url, { headers: { 'Content-Type': 'application/json' } });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
}

export async function submitSurvey(payload) {
    const res = await fetch(`${API}/survey/submit/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (!res.ok) throw new Error(JSON.stringify(data));
    return data;
}
