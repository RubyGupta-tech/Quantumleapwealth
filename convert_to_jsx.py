import re

def convert_html_to_jsx(filepath, outpath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract the main content
    main_match = re.search(r'<main id="main-content" role="main">(.*?)<\/main>', content, re.DOTALL)
    if not main_match:
        print("Could not find <main> block")
        return
    main_html = main_match.group(1)

    # Basic JSX conversions
    jsx = main_html.replace('class="', 'className="')
    jsx = jsx.replace('for="', 'htmlFor="')
    
    # Inline styles conversion: style="width: 100%; height: 100%;" -> style={{width: '100%', height: '100%'}}
    # This is complex with regex, we can try a basic one or just wrap the whole thing in dangerouslySetInnerHTML to avoid headaches.
    # Given the complexity of converting inline CSS strings to React objects, dangerouslySetInnerHTML is safer for an exact port.
    pass

# For an exact, zero-change port that guarantees identical design, dangerouslySetInnerHTML is technically perfect for the static parts.
# Let's try doing the style conversion.
def style_to_object(style_str):
    styles = []
    for prop in style_str.split(';'):
        if ':' in prop:
            key, val = prop.split(':', 1)
            key = key.strip()
            val = val.strip().replace("'", "\\'")
            # camelCase key
            parts = key.split('-')
            key = parts[0] + ''.join(p.title() for p in parts[1:])
            styles.append(f"{key}: '{val}'")
    return "{{" + ", ".join(styles) + "}}"

def convert_styles(match):
    return 'style=' + style_to_object(match.group(1))

def process_file(filepath, outpath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    main_match = re.search(r'<main id="main-content" role="main">(.*?)<\/main>', content, re.DOTALL)
    if not main_match:
        print("No main tag found")
        return
    raw_html = main_match.group(1)
    
    # Escape for JS template literal
    raw_html = raw_html.replace('\\', '\\\\')
    raw_html = raw_html.replace('`', '\\`')
    raw_html = raw_html.replace('$', '\\$')
    
    # We still need to replace {rel} since it's now Next.js root
    raw_html = raw_html.replace('{rel}', '/')
    
    final_jsx = f"""export default function HomePage() {{
  return (
    <div dangerouslySetInnerHTML={{{{ __html: `{raw_html}` }}}} />
  );
}}
"""
    with open(outpath, 'w', encoding='utf-8') as f:
        f.write(final_jsx)
    print("Done")

process_file('index.html', 'qlw-app/src/app/page.js')

