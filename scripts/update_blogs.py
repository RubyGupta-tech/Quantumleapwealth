import os
import re
from datetime import datetime

# Configuration
ACTIVITIES_DIR = "Activities"
BLOGS_HTML = os.path.join(ACTIVITIES_DIR, "blogs.html")
RSS_FILE = os.path.join(ACTIVITIES_DIR, "rss.xml")
BASE_URL = "https://quantumleapwealth.com/Activities"

def get_blog_posts():
    posts = []
    # Files to ignore
    ignore = ["blogs.html", "Photos.html", "videos.html", "rss.xml"]
    
    for filename in os.listdir(ACTIVITIES_DIR):
        if filename.endswith(".html") and filename not in ignore:
            filepath = os.path.join(ACTIVITIES_DIR, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                
                # Extract Title
                title_match = re.search(r'<title>(.*?)</title>', content)
                title = title_match.group(1) if title_match else filename
                title = title.split('|')[0].strip()
                
                # Extract Date (looking for spans with dates)
                date_match = re.search(r'<span>(.*?, 202\d)</span>', content)
                date_str = date_match.group(1) if date_match else "Mar 19, 2026"
                
                # Extract Description (First paragraph or meta)
                desc_match = re.search(r'<p class="blog-excerpt">(.*?)</p>', content)
                if not desc_match:
                    desc_match = re.search(r'<p>(.*?)</p>', content)
                desc = desc_match.group(1)[:150] + "..." if desc_match else "Latest post from Quantum Leap Wealth."
                
                # Extract Image - Skip the brand-logo and look for article image
                # First, try to find an image within the article-body section
                body_match = re.search(r'<div class="article-body">(.*?)</div>', content, re.DOTALL)
                body_content = body_match.group(1) if body_match else content
                
                img_match = re.search(r'<img [^>]*src="([^"]+)"(?![^>]*class="brand-logo")', body_content)
                if not img_match:
                    img_match = re.search(r"background-image:url\(['\"]?(.*?)['\"]?\)", body_content)
                
                img = img_match.group(1) if img_match else "../images/blog-placeholder.jpg"
                
                # Try to parse date for sorting
                try:
                    sort_date = datetime.strptime(date_str, "%b %d, %Y")
                except:
                    sort_date = datetime.now()
                
                posts.append({
                    "filename": filename,
                    "title": title,
                    "date": date_str,
                    "sort_date": sort_date,
                    "description": desc,
                    "image": img
                })
    
    # Sort by date descending
    posts.sort(key=lambda x: x['sort_date'], reverse=True)
    return posts

def update_rss(posts):
    items = ""
    for post in posts:
        pub_date = post['sort_date'].strftime("%a, %d %b %Y %H:%M:%S GMT")
        items += f"""
  <item>
    <title>{post['title']}</title>
    <link>{BASE_URL}/{post['filename']}</link>
    <description>{post['description']}</description>
    <pubDate>{pub_date}</pubDate>
  </item>"""

    rss_content = f"""<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>Quantum Leap Wealth Blog</title>
  <link>{BASE_URL}/blogs.html</link>
  <description>Latest financial insights, tax strategies, and wealth-building tips from Quantum Leap Wealth.</description>
  <language>en-us</language>
  {items}
</channel>
</rss>"""

    with open(RSS_FILE, 'w', encoding='utf-8') as f:
        f.write(rss_content)
    print(f"Updated {RSS_FILE}")

def update_blogs_page(posts):
    if not os.path.exists(BLOGS_HTML):
        print(f"Error: {BLOGS_HTML} not found.")
        return

    grid_html = ""
    for post in posts:
        # User requested to include all posts now with high-res images
        pass

        grid_html += f"""
                                        <div class="blog-card reveal" style="display:flex; flex-direction:column;">
                                            <div class="blog-card-img">
                                                <a href="{post['filename']}">
                                                    <img src="{post['image']}" alt="{post['title']}" style="object-fit:cover; height:200px; width:100%;" />
                                                </a>
                                            </div>
                                            <div class="blog-card-content" style="flex-grow:1; display:flex; flex-direction:column; padding: 24px 24px 32px;">
                                                <div class="blog-card-meta" style="margin-bottom: 10px; font-size: 0.85rem; color: #666;">
                                                    <span>{post['date']}</span>
                                                    <span>•</span>
                                                    <span>2 min read</span>
                                                </div>
                                                <h3 class="blog-card-title" style="margin-bottom: 12px; font-size: 1.25rem;">
                                                    <a href="{post['filename']}" style="text-decoration: none; color: inherit;">{post['title']}</a>
                                                </h3>
                                                <p class="blog-card-excerpt" style="margin-bottom: 20px; color: #555; line-height: 1.6;">{post['description']}</p>
                                                <div style="margin-top:auto">
                                                    <a href="{post['filename']}" class="blog-read-more" style="color: var(--accent); font-weight: 600; text-decoration: none;">Read Article →</a>
                                                </div>
                                            </div>
                                        </div>"""

    with open(BLOGS_HTML, 'r', encoding='utf-8') as f:
        content = f.read()

    start_marker = "<!-- BLOG_GRID_START -->"
    end_marker = "<!-- BLOG_GRID_END -->"
    
    pattern = re.compile(f"{re.escape(start_marker)}.*?{re.escape(end_marker)}", re.DOTALL)
    new_content = pattern.sub(f"{start_marker}\n                                    <div class=\"blog-grid\" id=\"blogGrid\">{grid_html}\n                                    </div>\n                                    {end_marker}", content)

    # --- Update Sidebar Recent Posts ---
    recent_posts_html = ""
    # Use top 5 recent posts for the sidebar
    for post in posts[:5]:
        # Format date for sidebar (e.g., "Mar 19")
        try:
            short_date = post['sort_date'].strftime("%b %d")
        except:
            short_date = "Mar 19"
            
        recent_posts_html += f'                                            <li><a href="{post["filename"]}">{post["title"]}</a><span>{short_date}</span></li>\n'

    start_sidebar = "<!-- SIDEBAR_RECENT_START -->"
    end_sidebar = "<!-- SIDEBAR_RECENT_END -->"
    
    sidebar_pattern = re.compile(f"{re.escape(start_sidebar)}.*?{re.escape(end_sidebar)}", re.DOTALL)
    new_content = sidebar_pattern.sub(f"{start_sidebar}\n{recent_posts_html}                                            {end_sidebar}", new_content)

    with open(BLOGS_HTML, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {BLOGS_HTML} grid and sidebar.")


if __name__ == "__main__":
    posts = get_blog_posts()
    update_rss(posts)
    update_blogs_page(posts)
    print("Automation complete.")

