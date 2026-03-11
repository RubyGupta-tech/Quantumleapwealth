from PIL import Image

def remove_background_better(input_path, output_path):
    # Open the generated original logo (Option 1 has a white background)
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    # We want to remove the WHITE background.
    # Option 1 had a solid white background (#FFFFFF) with the gold/navy logo in the center.
    newData = []
    
    for item in datas:
        # Check if pixel is white or very close to white (background)
        # We will make pixels transparent if they are bright white
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0)) # Fully transparent
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved better transparent logo to {output_path}")

img_in = r"C:\Users\ruby4\New folder\Quantumleapwealth\images\QWL_logo_original.png"
img_out = r"C:\Users\ruby4\New folder\Quantumleapwealth\images\QWL_logo.png"

remove_background_better(img_in, img_out)
