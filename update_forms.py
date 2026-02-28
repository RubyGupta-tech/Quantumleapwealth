import glob

html_files = glob.glob('images/services/*.html')

form_html = """<form id=\"contact-form\" onsubmit=\"handleSubmit(event)\">
                            <div style=\"display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;\">
                                <div><label style=\"font-size:0.8rem; font-weight:700;\">First Name *</label><input type=\"text\" name=\"first_name\" required placeholder=\"First name\" style=\"width:100%; padding:10px; border-radius:6px; border:1px solid #ddd; margin-top:4px;\" /></div>
                                <div><label style=\"font-size:0.8rem; font-weight:700;\">Last Name *</label><input type=\"text\" name=\"last_name\" required placeholder=\"Last name\" style=\"width:100%; padding:10px; border-radius:6px; border:1px solid #ddd; margin-top:4px;\" /></div>
                            </div>
                            <div style=\"margin-bottom: 12px;\">
                                <label style=\"font-size:0.8rem; font-weight:700;\">Email Address *</label>
                                <input type=\"email\" name=\"user_email\" required placeholder=\"your@email.com\" style=\"width:100%; padding:10px; border-radius:6px; border:1px solid #ddd; margin-top:4px;\" />
                            </div>
                            <div style=\"margin-bottom: 12px;\">
                                <label style=\"font-size:0.8rem; font-weight:700;\">Phone Number</label>
                                <input type=\"tel\" name=\"user_phone\" placeholder=\"(+1) 000-000-0000\" style=\"width:100%; padding:10px; border-radius:6px; border:1px solid #ddd; margin-top:4px;\" />
                            </div>
                            <div style=\"margin-bottom: 12px;\">
                                <label style=\"font-size:0.8rem; font-weight:700;\">Service of Interest</label>
                                <select name=\"service\" style=\"width:100%; padding:10px; border-radius:6px; border:1px solid #ddd; margin-top:4px;\">
                                    <option value=\"\">— Select a service —</option>
                                    <option>Investment Planning</option>
                                    <option>Living Will & Trust</option>
                                    <option>Tax Savings</option>
                                    <option>Retirement Planning</option>
                                    <option>Kids College Fund</option>
                                    <option>Life Insurance</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>
                            <div style=\"margin-bottom: 16px;\">
                                <label style=\"font-size:0.8rem; font-weight:700;\">Your Message *</label>
                                <textarea name=\"message\" required placeholder=\"Tell us about your goals...\" style=\"width: 100%; padding: 10px; border-radius: 6px; border: 1px solid #ddd; margin-top:4px; min-height: 80px;\"></textarea>
                            </div>
                            <button type=\"submit\" class=\"form-submit\" style=\"width: 100%; padding: 14px; background: #c9a84c; color: white; border: none; border-radius: 50px; font-weight: 700; cursor: pointer;\">Secure Your Future →</button>
                        </form>
                        <div class=\"form-success\" id=\"form-success\" style=\"display: none; background: #e0faea; color: #166534; padding: 15px; border-radius: 8px; margin-top: 15px; text-align: center; border: 1px solid #166534;\">✅ Message Sent! We'll contact you shortly.</div>"""

for f in html_files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    start_str = "Book a Free Consultation"
    end_str = "Our Other Services"
    
    if start_str in content and end_str in content:
        # Find the <div class="sidebar-card-body"> that follows Book a Free Consultation
        head_pos = content.find(start_str)
        body_start = content.find('<div class="sidebar-card-body">', head_pos)
        
        # Find the end of the paragraph right after the body starts
        p_end = content.find('</p>', body_start) + 4
        
        # Find the end of the card, basically right before <div class="sidebar-card"> containing Our Other Services
        next_header = content.find(end_str)
        card_end = content.rfind('</div>', 0, content.rfind('<div class="sidebar-card">', 0, next_header))
        card_inner_end = content.rfind('</div>', 0, card_end)
        
        # The segment to replace is from p_end to card_inner_end
        new_content = content[:p_end] + "\\n" + form_html + "\\n" + content[card_inner_end:]
        
        # Add EmailJS before </body>
        if 'emailjs.init' not in new_content:
            new_content = new_content.replace('<script src="../../js/main.js"></script>', 
                                            '<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>\\n    <script type="text/javascript">\\n        (function() {\\n            emailjs.init("2PSwxHV81J7_l7Nsm");\\n        })();\\n    </script>\\n    <script src="../../js/main.js"></script>')
                                            
        with open(f, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f'Updated {f}')
    else:
        print(f"Skipping {f} - markers not found")
