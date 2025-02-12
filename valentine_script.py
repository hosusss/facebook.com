from PIL import Image, ImageDraw, ImageFont
import random

# Function to create the confetti fireworks image with the Valentine's Day message
def create_valentine_image():
    # Image size
    width, height = 800, 600
    image = Image.new('RGB', (width, height), 'black')
    draw = ImageDraw.Draw(image)

    # Create confetti fireworks effect (random circles in various colors)
    confetti_colors = ['#FF0000', '#FF69B4', '#FFD700', '#00FFFF', '#32CD32']
    for _ in range(150):  # Random placement of confetti
        x = random.randint(0, width)
        y = random.randint(0, height)
        color = random.choice(confetti_colors)
        draw.ellipse([x-5, y-5, x+5, y+5], fill=color)

    # Add the Valentine's message
    message = "Happy Valentine's and Happy 7 Monthsary My Love"
    font = ImageFont.load_default()  # Use default font, can be replaced with a custom one
    text_width, text_height = draw.textsize(message, font)
    text_x = (width - text_width) / 2
    text_y = height - 100  # Position the text near the bottom
    draw.text((text_x, text_y), message, fill="white", font=font)

    # Save the image to a file
    file_path = "valentine_fireworks.png"
    image.save(file_path)

    return file_path

# Run the function and create the image
create_valentine_image()
