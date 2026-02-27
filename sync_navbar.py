import os
import re

# Precise ADA-compliant Inner Template
NEW_NAVBAR_INNER_TEMPLATE = """
    <div class="navbar-inner">
      <a href="{rel}index.html" class="navbar-brand">
        <img src="{rel}images/Quantumleap_logo.png" alt="Quantum Leap Wealth Logo" class="brand-logo" />
        <div class="brand-text">
          <strong class="brand-name">Quantum Leap Wealth</strong>
          <span class="brand-tagline">Financial Excellence</span>
        </div>
      </a>
      <ul class="nav-menu" id="nav-menu">
        <li class="nav-item"><a href="{rel}index.html" class="nav-link{active_home}"{aria_home}>Home</a></li>
        <li class="nav-item has-dropdown{active_about}">
          <a href="#" class="nav-link">About <svg class="dd-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg></a>
          <ul class="dropdown" role="menu">
            <li role="none"><a href="{rel}who_we_are/about.html" class="dropdown-item{active_about_us}" role="menuitem"{aria_about_us}><span class="dd-icon"
                  aria-hidden="true">👤</span>About Us</a></li>
            <li role="none"><a href="{rel}who_we_are/partners.html" class="dropdown-item{active_partners}" role="menuitem"{aria_partners}><span
                  class="dd-icon" aria-hidden="true">🤝</span>Our Partners</a></li>
            <li role="none"><a href="{rel}who_we_are/disclaimer.html" class="dropdown-item{active_disclaimer}" role="menuitem"{aria_disclaimer}><span
                  class="dd-icon" aria-hidden="true">📋</span>Our Disclaimer</a></li>
          </ul>
        </li>
        <li class="nav-item has-dropdown{active_services}">
          <a href="#" class="nav-link">Services <svg class="dd-arrow" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg></a>
          <ul class="dropdown wide" role="menu">
            <li role="none"><a href="{rel}images/services/investment-planning.html" class="dropdown-item{active_inv}" role="menuitem"{aria_inv}><span
                  class="dd-icon" aria-hidden="true">📈</span>Investment
                Planning</a></li>
            <li role="none"><a href="{rel}images/services/living-will-trust.html" class="dropdown-item{active_will}" role="menuitem"{aria_will}><span
                  class="dd-icon" aria-hidden="true">📜</span>Living Will &amp;
                Trust</a></li>
            <li role="none"><a href="{rel}images/services/tax-saving.html" class="dropdown-item{active_tax}" role="menuitem"{aria_tax}><span class="dd-icon" aria-hidden="true">💰</span>Tax
                Savings</a></li>
            <li role="none"><a href="{rel}images/services/retirement-planning.html" class="dropdown-item{active_ret}" role="menuitem"{aria_ret}><span
                  class="dd-icon" aria-hidden="true">🏖️</span>Retirement
                Planning</a></li>
            <li role="none"><a href="{rel}images/services/kids-college.html" class="dropdown-item{active_kids}" role="menuitem"{aria_kids}><span class="dd-icon" aria-hidden="true">🎓</span>Kids
                College</a></li>
            <li role="none"><a href="{rel}images/services/life-insurance.html" class="dropdown-item{active_life}" role="menuitem"{aria_life}><span class="dd-icon" aria-hidden="true">🛡️</span>Life
                Insurance</a>
            </li>
          </ul>
        </li>
        <li class="nav-item has-dropdown{active_entre}">
          <a href="#" class="nav-link">Entrepreneurship <svg class="dd-arrow" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg></a>
          <ul class="dropdown" role="menu">
            <li role="none"><a href="{rel}Entrepreneurship/6-steps-to-financial-freedom.html" class="dropdown-item{active_freedom}" role="menuitem"{aria_freedom}><span
                  class="dd-icon" aria-hidden="true">🚀</span>6 Steps to
                Financial Freedom</a></li>
          </ul>
        </li>
        <li class="nav-item has-dropdown{active_media}">
          <a href="#" class="nav-link">Media <svg class="dd-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg></a>
          <ul class="dropdown" role="menu">
            <li role="none"><a href="{rel}Activities/blogs.html" class="dropdown-item{active_blogs}" role="menuitem"{aria_blogs}><span class="dd-icon" aria-hidden="true">✍️</span>Blog Articles</a>
            </li>
            <li role="none"><a href="{rel}Activities/videos.html" class="dropdown-item{active_videos}" role="menuitem"{aria_videos}><span class="dd-icon" aria-hidden="true">🎥</span>Video Gallery</a>
            </li>
            <li role="none"><a href="{rel}Activities/Photos.html" class="dropdown-item{active_photos}" role="menuitem"{aria_photos}><span class="dd-icon" aria-hidden="true">📸</span>Photo Gallery</a>
            </li>
          </ul>
        </li>
        <li class="nav-item"><a href="{rel}contact/contact.html" class="nav-link{active_contact}"{aria_contact}>Contact</a></li>
        <li class="nav-item">
          <a href="#"
            onclick="Calendly.initPopupWidget({{url:'https://calendly.com/webserviesbygupta/30min'}});return false;"
            class="btn-nav-cta">Book Consultation <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg></a>
        </li>
      </ul>
      <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="nav-menu">
        <span></span><span></span><span></span>
      </button>
    </div>
"""

def sync_navbar_inner(filepath):
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

    # Detect active states
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
        active_contact=active_contact,
        aria_contact=' aria-current="page"' if active_contact else ''
    )

    # Use regex to replace the entire content inside <header class="navbar"> ... </header>
    pattern = re.compile(r'(<header class="navbar">).*?(</header>)', re.DOTALL)
    new_content = pattern.sub(r'\1' + new_inner + r'\2', content)

    # Specific fix for Top Bar ADA Roles in all files
    topbar_pattern = re.compile(r'(<div class="topbar">)(.*?)(<div class="topbar-inner">)', re.DOTALL)
    new_content = topbar_pattern.sub(r'<div class="topbar" role="complementary" aria-label="Company Contact Info">\2\3', new_content)
    
    # landmark roles for accessibility
    new_content = re.sub(r'<main>', r'<main id="main-content" role="main">', new_content)
    new_content = re.sub(r'<footer(.*?)>', r'<footer\1 role="contentinfo">', new_content)

    # Add Skip to Content link at the start of <body>
    if 'skip-link' not in new_content:
        new_content = re.sub(r'(<body.*?>)', r'\1\n  <a href="#main-content" class="skip-link">Skip to main content</a>', new_content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {filepath}")

def main():
    root_dir = 'c:/Users/ruby4/New folder/Quantumleapwealth'
    for root, dirs, files in os.walk(root_dir):
        if '.git' in dirs: dirs.remove('.git')
        for file in files:
            if file.endswith('.html'):
                filepath = os.path.join(root, file)
                sync_navbar_inner(filepath)

if __name__ == '__main__':
    main()
