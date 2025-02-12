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

        # Add the text
        text1 = "Happy Valentine's Day!"
        text2 = "Happy 7 Monthsary!"

        # Set the position of the text
        text1_position = (50, 50)  # Just placing it at the top left, it can overlap
        text2_position = (50, 200)  # Placing it below the heart

        # Draw the heart shape using a polygon
        heart_points = [(250, 150), (300, 100), (350, 150), (250, 250), (150, 150), (200, 100)]
        draw.polygon(heart_points, fill='red')

        # Add the text on the image
        draw.text(text1_position, text1, font=font, fill="white")
        draw.text(text2_position, text2, font=font, fill="white")

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
