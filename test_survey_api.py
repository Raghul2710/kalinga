import urllib.request
import urllib.error
import json
import ssl

def test_survey_endpoint(course_id, categories):
    base_url = "https://kalinga.dupebox.com/api/survey/questions/"
    
    # Ignore SSL context errors if any
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    print(f"Testing Survey API for course_id: {course_id}\n")
    print(f"{'Category Slug':<25} | {'Status':<10} | {'Questions Count':<15} | {'Error Details'}")
    print("-" * 80)

    for category in categories:
        url = f"{base_url}?course_id={course_id}&category={category}"
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, context=ctx) as response:
                status = response.getcode()
                data = json.loads(response.read().decode('utf-8'))
                questions_count = len(data.get('questions', []))
                print(f"{category:<25} | {status:<10} | {questions_count:<15} | -")
                
        except urllib.error.HTTPError as e:
            error_data = e.read().decode('utf-8')
            print(f"{category:<25} | {e.code:<10} | {'-':<15} | {error_data}")
        except Exception as e:
            print(f"{category:<25} | {'Error':<10} | {'-':<15} | {str(e)}")

if __name__ == "__main__":
    course_id_to_test = 5
    
    # Categories to test (including singular and plural forms to find the right slug)
    test_categories = [
        "course_exit",
        "course-exit-survey", 
        "student",
        "students",
        "teacher",
        "teachers",
        "employer",
        "alumni"
    ]
    
    test_survey_endpoint(course_id_to_test, test_categories)
