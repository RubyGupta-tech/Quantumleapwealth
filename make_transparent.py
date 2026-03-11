from PIL import Image

def remove_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    newData = []
    # Dark navy blue background from generation is roughly #0a2540 (R:10, G:37, B:64)
    # We'll remove pixels that are very dark blue/black
    for item in datas:
        # Check if pixel is dark (r<40, g<60, b<90)
        if item[0] < 40 and item[1] < 60 and item[2] < 90:
            newData.append((255, 255, 255, 0)) # Make transparent
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved transparent logo to {output_path}")

img_in = r"C:\Users\ruby4\.gemini\antigravity\brain\09ee67ff-bd21-4714-8923-9a5a938c83c1\qlw_logo_transparent_1773198525916.png"
img_out = r"C:\Users\ruby4\New folder\Quantumleapwealth\images\QWL_logo.png"

remove_background(img_in, img_out)
