with open('d:/dhruv work/airtribe_extracted/raw_pages/home.html', 'r', encoding='utf-8') as f:
    text = f.read()

hero_idx = text.find('<section')
print("Section index:", hero_idx)
print(text[hero_idx:hero_idx + 6000])
