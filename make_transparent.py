from PIL import Image

def remove_background(input_path, output_path):
    # Open image and ensure it has an alpha channel
    img = Image.open(input_path).convert("RGBA")
    
    # Get image data
    datas = img.getdata()
    new_data = []
    
    for item in datas:
        # Strictly target PURE WHITE or extremely light background colors (like R,G,B > 240)
        # We do not want to accidentally bleed into gold or navy.
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            # Keep ALL actual logo colors exactly the same
            new_data.append(item)
            
    img.putdata(new_data)
    
    # Crop the image to its bounding box so it's a tight layout (true sticker)
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")
    print(f"Successfully processed true transparent logo: {output_path}")

img_in = r"C:\Users\ruby4\New folder\Quantumleapwealth\images\gellery\QLW_logo_pic.png"
img_out = r"C:\Users\ruby4\New folder\Quantumleapwealth\images\gellery\QLW_logo_pic_transparent.png"

remove_background(img_in, img_out)
