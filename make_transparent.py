from PIL import Image
import sys

def remove_background_better(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    newData = []
    
    for item in datas:
        # Check if the pixel is dark enough to be the background
        # Option 1 (Emerald) background is dark green (r<50, g<100, b<50)
        # Option 2 (Ruby) background is dark red (r<100, g<50, b<50)
        # We'll use a general approach to remove very dark/vibrant background pixels
        if (item[0] < 80 and item[1] < 120 and item[2] < 80) or \
           (item[0] < 120 and item[1] < 60 and item[2] < 60) or \
           (item[0] < 60 and item[1] < 60 and item[2] < 60):
            newData.append((255, 255, 255, 0)) # Fully transparent
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved transparent logo to {output_path}")

img_in = sys.argv[1]
img_out = r"C:\Users\ruby4\New folder\Quantumleapwealth\images\QWL_logo.png"

remove_background_better(img_in, img_out)
