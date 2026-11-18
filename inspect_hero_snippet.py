with open('d:/dhruv work/airtribe_extracted/raw_pages/home.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find("This era runs on AI")
if idx != -1:
    print("Found at:", idx)
    snippet = text[max(0, idx - 800):min(len(text), idx + 2500)]
    print(snippet)
else:
    print("Not found")
