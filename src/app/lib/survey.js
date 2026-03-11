export const API = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://kalinga.dupebox.com/api';

export async function getSurveyQuestions(courseId, category) {
    let url = `${API}/survey/questions/?course_id=${courseId}&category=${category}`;
    let res = await fetch(url, { headers: { 'Content-Type': 'application/json' } });
    let data = await res.json();
    
    // If no course-specific questions are found, fallback to fetching general questions for the category
    if (res.ok && (!data.questions || data.questions.length === 0)) {
        url = `${API}/survey/questions/?category=${category}`;
        const fallbackRes = await fetch(url, { headers: { 'Content-Type': 'application/json' } });
        if (fallbackRes.ok) {
            const fallbackData = await fallbackRes.json();
            if (fallbackData.questions && fallbackData.questions.length > 0) {
                // Ensure the returned data object still carries the intended course_id for the form
                fallbackData.course_id = courseId;
                return fallbackData;
            }
        }
    }
    
    if (!res.ok) throw new Error(JSON.stringify(data));
    return data;
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
