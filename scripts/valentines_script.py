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

# Function to center the text
def center_text(draw, text, font, image_width, y_position):
    # Using textbbox instead of textsize
    text_bbox = draw.textbbox((0, 0), text, font=font)  # Get bounding box
    text_width = text_bbox[2] - text_bbox[0]  # Width of the text
    text_height = text_bbox[3] - text_bbox[1]  # Height of the text
    position = ((image_width - text_width) / 2, y_position)  # Adjust vertical position (y_position) as needed
    return position

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

        # Add the first text above the heart
        text1 = "Happy Valentine's Day!"

        # Draw a heart shape (centered)
        heart_width, heart_height = 200, 200  # Adjust heart dimensions
        heart_position = ((img.width - heart_width) / 2, 200)  # Adjust vertical position as needed
        draw.polygon(
            [(heart_position[0] + 100, heart_position[1] + 50),  # Bottom center
             (heart_position[0] + 50, heart_position[1] + 100),  # Left bottom
             (heart_position[0] + 100, heart_position[1] + 150),  # Bottom center again
             (heart_position[0] + 150, heart_position[1] + 100),  # Right bottom
             (heart_position[0] + 100, heart_position[1] + 50)],  # Back to center bottom
            fill="red"
        )

        # Add the first text above the heart (centered)
        text1_position = center_text(draw, text1, font, img.width, 50)  # Positioned above the heart
        draw.text(text1_position, text1, font=font, fill="white")

        # Add the second text below the heart
        text2 = "Happy 7 Monthsary!"
        text2_position = center_text(draw, text2, font, img.width, 350)  # Positioned below the heart
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
