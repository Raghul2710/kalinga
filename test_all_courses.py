import urllib.request
import json
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

for i in range(1, 40):
    url = f"https://kalinga.dupebox.com/api/survey/questions/?course_id={i}&category=students"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req, context=ctx)
        data = json.loads(res.read().decode('utf-8'))
        questions = data.get('questions', [])
        if len(questions) > 0:
            print(f"course_id {i} has {len(questions)} questions for students category.")
    except Exception as e:
        pass

for i in range(1, 40):
    url = f"https://kalinga.dupebox.com/api/survey/questions/?course_id={i}&category=course-exit-survey"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req, context=ctx)
        data = json.loads(res.read().decode('utf-8'))
        questions = data.get('questions', [])
        if len(questions) > 0:
            print(f"course_id {i} has {len(questions)} questions for course-exit-survey category.")
    except Exception as e:
        pass
print("Done")
