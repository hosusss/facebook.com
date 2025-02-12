# scripts/valentines_script.py
import os
from PIL import Image

# Path for the image
image_path = 'valentines/valentine_fireworks.png'  # Save it in a "valentines" folder

# Generate the image (you can replace this with your full script logic)
img = Image.new('RGB', (100, 100), color='red')
img.save(image_path)

# Check if the image file exists
if os.path.exists(image_path):
    print('Image was created successfully!')
else:
    print('Failed to create image.')
