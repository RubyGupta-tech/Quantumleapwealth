import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r'<!-- ══════════════════════════════\s*EVENTS\s*══════════════════════════════ -->\s*<style>.*?</script>', re.DOTALL)
newsletter_html = '''<!-- ══════════════════════════════
     NEWSLETTER
══════════════════════════════ -->
    <section class="events-section" id="newsletter" style="padding: 100px 0; text-align: center; background: #090f1e; color: #fff;">
      <div class="container">
        <div class="events-header reveal" style="margin-bottom: 40px;">
          <span class="section-label">Newsletter</span>
          <h2 class="section-title">Stay Connected With Us</h2>
          <p class="section-sub" style="margin: 0 auto; max-width: 600px;">Subscribe to our weekly newsletter.</p>
        </div>
        <div class="reveal">
          <a href="newsletter.html" class="btn-primary" style="display: inline-block; padding: 15px 35px; border-radius: 4px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none;">Submit for newsletter registration</a>
        </div>
      </div>
    </section>'''

new_content, count = pattern.subn(newsletter_html, content)

if count > 0:
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Replaced successfully")
else:
    print("Pattern not found")
