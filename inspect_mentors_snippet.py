with open('d:/dhruv work/airtribe_extracted/raw_pages/home.html', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find("Mentors from")
print(text[idx:idx + 4000])
