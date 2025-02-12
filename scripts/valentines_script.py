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
            print(f"✅ Directory '{directory}' created successfully.")
        elif not os.path.isdir(directory):
            print(f"❌ Error: '{directory}' exists but is not a directory!")
            return False
        else:
            print(f"ℹ️ Directory '{directory}' already exists.")
        return True
    except Exception as e:
        print(f"❌ Error creating directory '{directory}': {e}")
        return False

# Function to generate and save the image
def generate_image(path):
    try:
        # Create a new image with a pink background
        img = Image.new('RGB', (500, 500), color='pink')
        draw = ImageDraw.Draw(img)

        # Define font (fallback handling)
        try:
            font_path = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
            font = ImageFont.truetype(font_path, 40)
        except IOError:
            print(f"⚠️ Font '{font_path}' not found. Using default font.")
            font = ImageFont.load_default()

        # Text details
        text1 = "Happy Valentine's Day!"
        text2 = "Happy 7 Monthsary!"

        # Calculate text size and center it
        text1_position = (50, 50)
        text2_position = (50, 200)

        # Draw heart shape
        heart_points = [(250, 150), (300, 100), (350, 150), 
                        (325, 200), (250, 300), (175, 200), (150, 150), (200, 100)]
        draw.polygon(heart_points, fill='red')

        # Add text
        draw.text(text1_position, text1, font=font, fill="white")
        draw.text(text2_position, text2, font=font, fill="white")

        # Save the image
        img.save(path)
        print(f"✅ Image saved successfully at: {os.path.abspath(path)}")
    except Exception as e:
        print(f"❌ Error generating or saving image: {e}")

# Main function
def main():
    if create_directory(image_dir):
        generate_image(image_path)

# Run the main function
if __name__ == '__main__':
    main()
