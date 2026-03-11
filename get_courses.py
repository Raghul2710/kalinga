import urllib.request
import json
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

try:
    req = urllib.request.Request("https://kalinga.dupebox.com/api/survey/questions/", headers={'User-Agent': 'Mozilla'})
    res = urllib.request.urlopen(req, context=ctx)
    data = json.loads(res.read().decode('utf-8'))
    
    questions = data.get('questions', [])
    print("Total questions global:", len(questions))
    if len(questions) > 0:
        courses = list(set([str(q.get('course')) for q in questions]))
        print('Courses with questions:', courses)
        print('First question:', questions[0])
except Exception as e:
    print(e)
