import os
import re
import glob

def process_file(filepath, outpath):
    # Ensure directory exists
    os.makedirs(os.path.dirname(outpath), exist_ok=True)
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    main_match = re.search(r'<main[^>]*>(.*?)<\/main>', content, re.DOTALL)
    if main_match:
        raw_html = main_match.group(1)
    else:
        # Fallback for pages without <main> (like resources.html)
        fallback_match = re.search(r'<\/header>(.*?)<footer', content, re.DOTALL)
        if fallback_match:
            raw_html = fallback_match.group(1)
        else:
            print(f"Skipped {filepath}: No main or fallback found")
            return
    
    # Escape for JS template literal
    raw_html = raw_html.replace('\\', '\\\\')
    raw_html = raw_html.replace('`', '\\`')
    raw_html = raw_html.replace('$', '\\$')
    
    # Replace relative links back to root
    raw_html = raw_html.replace('{rel}', '/')
    
    final_jsx = f"""export default function Page() {{
  return (
    <div dangerouslySetInnerHTML={{{{ __html: `{raw_html}` }}}} />
  );
}}
"""
    with open(outpath, 'w', encoding='utf-8') as f:
        f.write(final_jsx)
    print(f"Converted {filepath} -> {outpath}")

# Find all HTML files
html_files = glob.glob('**/*.html', recursive=True)

for file in html_files:
    # Skip excluded files and directories
    if file.startswith('qlw-app') or file.startswith('components') or file.startswith('demo') or file == 'index.html' or file == 'index_backup.html':
        continue
    
    # Example: Activities\blogs.html -> qlw-app/src/app/Activities/blogs/page.js
    rel_path = file.replace('.html', '')
    # Normalize path separators
    rel_path = rel_path.replace('\\', '/')
    
    out_path = f"qlw-app/src/app/{rel_path}/page.js"
    
    process_file(file, out_path)
