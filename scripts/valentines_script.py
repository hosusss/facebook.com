from PIL import Image, ImageDraw, ImageFont
import os

# Define the directory and file path where the image will be saved
image_dir = 'valentines'
image_filename = 'valentine_fireworks.png'
image_path = os.path.join(image_dir, image_filename)

# Function to create the directory if it doesn't exist
def create_directory(directory):
    try:
        if not os.path.exists(directory):
            os.makedirs(directory)
            print(f"Directory '{directory}' created successfully.")
        elif not os.path.isdir(directory):
            print(f"Error: '{directory}' exists but is not a directory!")
            exit(1)
        else:
            print(f"Directory '{directory}' already exists.")
    except Exception as e:
        print(f"Error creating directory '{directory}': {e}")
        exit(1)

# Create a new image with a pink background
def generate_image(path):
    try:
        # Create a new image with a pink background
        img = Image.new('RGB', (500, 500), color='pink')

        # Set up drawing context
        draw = ImageDraw.Draw(img)

        # Define the font for the text
        try:
            font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 40)
        except IOError:
            font = ImageFont.load_default()

        # Add some text to the image
        draw.text((150, 50), "Happy Valentine's Day!", font=font, fill="white")
        draw.text((120, 150), "Happy 7 Monthsary!", font=font, fill="white")

        # Draw a heart shape (simple heart with Pillow)
        draw.polygon([(250, 150), (300, 100), (350, 150), (250, 200), (150, 150), (200, 100)], fill="red")

        # Save the image
        img.save(path)
        print(f"Image saved successfully at {path}")
    except Exception as e:
        print(f"Error generating or saving image: {e}")
        exit(1)

# Main function
def main():
    # Ensure the directory exists
    create_directory(image_dir)

    # Generate and save the image
    generate_image(image_path)

# Run the main function
if __name__ == '__main__':
    main()
