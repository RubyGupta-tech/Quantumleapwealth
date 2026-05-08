import os
import re

def sync_components(filepath):
    # Load templates from files
    script_dir = os.path.dirname(os.path.abspath(__file__))
    navbar_path = os.path.join(script_dir, 'components', 'navbar.html')
    footer_path = os.path.join(script_dir, 'components', 'footer.html')
    
    with open(navbar_path, 'r', encoding='utf-8') as f:
        NEW_NAVBAR_INNER_TEMPLATE = f.read()
    with open(footer_path, 'r', encoding='utf-8') as f:
        NEW_FOOTER_TEMPLATE = f.read()

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Normalize path and split
    filepath_norm = filepath.replace('\\', '/')
    parts = filepath_norm.split('/')
    
    # Robustly find root index
    try:
        root_idx = parts.index('Quantumleapwealth')
    except ValueError:
        # Fallback for "New folder" or other naming variations
        root_idx = -1
        for i, p in enumerate(parts):
            if 'Quantumleapwealth' in p:
                root_idx = i
                break
        if root_idx == -1: return # Skip if not found

    depth = len(parts) - root_idx - 2
    rel = '../' * depth if depth > 0 else ''

    # Detect active states for navbar
    active_home = " active" if "index.html" in parts and depth == 0 else ""
    active_about = " active" if "who_we_are" in parts else ""
    active_about_us = " active" if "about.html" in parts else ""
    active_partners = " active" if "partners.html" in parts else ""
    active_disclaimer = " active" if "disclaimer.html" in parts else ""
    
    active_services = " active" if "services" in parts else ""
    active_inv = " active" if "investment-planning.html" in parts else ""
    active_will = " active" if "living-will-trust.html" in parts else ""
    active_tax = " active" if "tax-saving.html" in parts else ""
    active_ret = " active" if "retirement-planning.html" in parts else ""
    active_kids = " active" if "kids-college.html" in parts else ""
    active_life = " active" if "life-insurance.html" in parts else ""

    active_entre = " active" if "Entrepreneurship" in parts else ""
    active_freedom = " active" if "6-steps-to-financial-freedom.html" in parts else ""

    active_media = " active" if "Activities" in parts else ""
    active_blogs = " active" if "blogs.html" in parts else ""
    active_videos = " active" if "videos.html" in parts else ""
    active_photos = " active" if "Photos.html" in parts else ""

    active_resources = " active" if "resources" in parts else ""
    active_calculators = " active" if "resources.html" in parts else ""

    active_contact = " active" if "contact" in parts else ""

    new_inner = NEW_NAVBAR_INNER_TEMPLATE.format(
        rel=rel,
        active_home=active_home,
        aria_home=' aria-current="page"' if active_home else '',
        active_about=active_about,
        active_about_us=active_about_us,
        aria_about_us=' aria-current="page"' if active_about_us else '',
        active_partners=active_partners,
        aria_partners=' aria-current="page"' if active_partners else '',
        active_disclaimer=active_disclaimer,
        aria_disclaimer=' aria-current="page"' if active_disclaimer else '',
        active_services=active_services,
        active_inv=active_inv,
        aria_inv=' aria-current="page"' if active_inv else '',
        active_will=active_will,
        aria_will=' aria-current="page"' if active_will else '',
        active_tax=active_tax,
        aria_tax=' aria-current="page"' if active_tax else '',
        active_ret=active_ret,
        aria_ret=' aria-current="page"' if active_ret else '',
        active_kids=active_kids,
        aria_kids=' aria-current="page"' if active_kids else '',
        active_life=active_life,
        aria_life=' aria-current="page"' if active_life else '',
        active_entre=active_entre,
        active_freedom=active_freedom,
        aria_freedom=' aria-current="page"' if active_freedom else '',
        active_media=active_media,
        active_blogs=active_blogs,
        aria_blogs=' aria-current="page"' if active_blogs else '',
        active_videos=active_videos,
        aria_videos=' aria-current="page"' if active_videos else '',
        active_photos=active_photos,
        aria_photos=' aria-current="page"' if active_photos else '',
        active_resources=active_resources,
        active_calculators=active_calculators,
        aria_calculators=' aria-current="page"' if active_calculators else '',
        active_contact=active_contact,
        aria_contact=' aria-current="page"' if active_contact else ''
    )

    # Format the footer with rel
    new_footer = NEW_FOOTER_TEMPLATE.format(rel=rel)

    # Replace Navbar Inner
    pattern_nav = re.compile(r'(<header class="navbar">).*?(</header>)', re.DOTALL)
    new_content = pattern_nav.sub(r'\1\n' + new_inner + r'\n\2', content)

    # Replace Footer (matching the whole footer block from <footer ...> to </footer>)
    pattern_footer = re.compile(r'<footer class="footer".*?>.*?</footer>', re.DOTALL)
    new_content = pattern_footer.sub(new_footer, new_content)

    # Specific fix for Top Bar ADA Roles in all files
    topbar_pattern = re.compile(r'(<div class="topbar">)(.*?)(<div class="topbar-inner">)', re.DOTALL)
    new_content = topbar_pattern.sub(r'<div class="topbar" role="complementary" aria-label="Company Contact Info">\2\3', new_content)
    
    # landmark roles for accessibility
    new_content = re.sub(r'<main>', r'<main id="main-content" role="main">', new_content)

    # Add Skip to Content link at the start of <body> if not present
    if 'skip-link' not in new_content:
        new_content = re.sub(r'(<body.*?>)', r'\1\n  <a href="#main-content" class="skip-link">Skip to main content</a>', new_content)

    # Add/Update Google Analytics (GA4) Tag
    ga_tag = """  <!-- Google Analytics (GA4) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-3RWBTCCG9V"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-3RWBTCCG9V');
  </script>"""
    
    # If a GA tag already exists, replace it to ensure it's up to date
    if 'googletagmanager.com/gtag/js' in new_content:
        # Match the whole GA block we previously inserted
        ga_pattern = re.compile(r'  <!-- Google Analytics \(GA4\) -->.*?gtag\(\'config\', \'G-.*?\'\);.*?<\/script>', re.DOTALL)
        new_content = ga_pattern.sub(ga_tag, new_content)
    else:
        # Insert GA tag right after <head>
        if '<head>' in new_content:
            new_content = new_content.replace('<head>', '<head>\n' + ga_tag)
        elif '<head ' in new_content:
             new_content = re.sub(r'(<head.*?>)', r'\1\n' + ga_tag, new_content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {filepath}")

def main():
    root_dir = os.path.dirname(os.path.abspath(__file__))
    if not os.path.exists(os.path.join(root_dir, 'components', 'navbar.html')):
        print("components/navbar.html not found.")
        return
        
    for root, dirs, files in os.walk(root_dir):
        if '.git' in dirs: dirs.remove('.git')
        if 'components' in dirs: dirs.remove('components') # Do not sync into components HTML files
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                sync_components(filepath)

if __name__ == '__main__':
    main()
