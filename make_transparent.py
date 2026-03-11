from PIL import Image

def remove_background(input_path, output_path):
    # Open image and ensure it has an alpha channel
    img = Image.open(input_path).convert("RGBA")
    
    # Get image data
    datas = img.getdata()
    new_data = []
    
    for item in datas:
        # We want to remove the WHITE/LIGHT GRAY background completely
        # Anything close to white (R>200, G>200, B>200) becomes fully transparent
        if item[0] > 200 and item[1] > 200 and item[2] > 200:
            # Change all white/light pixels to 100% transparent
            new_data.append((255, 255, 255, 0))
        # Remove any dark navy blue background artifacts as well
        # In case the previous step accidentally left navy blocks
        elif item[0] < 40 and item[1] < 60 and item[2] < 90:
            new_data.append((255, 255, 255, 0))
        else:
            # Keep the actual logo pixels (gold/white text)
            new_data.append(item)
            
    img.putdata(new_data)
    
    # Crop the image to its bounding box so it's a tight layout (true sticker)
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")
    print(f"Successfully processed true transparent logo: {output_path}")

img_in = r"C:\Users\ruby4\New folder\Quantumleapwealth\images\QWL_logo_original.png"
img_out = r"C:\Users\ruby4\New folder\Quantumleapwealth\images\QWL_logo.png"

remove_background(img_in, img_out)
