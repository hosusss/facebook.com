import os
from PIL import Image

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
        elif not os.path.isdir(directory):  # Ensure it's a directory, not a file
            print(f"Error: '{directory}' exists but is not a directory.")
            exit(1)
        else:
            print(f"Directory '{directory}' already exists.")
    except Exception as e:
        print(f"Error creating directory '{directory}': {e}")
        exit(1)

# Function to generate and save the image
def generate_image(path):
    try:
        # Generate a simple red image (you can replace this with your custom logic)
        img = Image.new('RGB', (100, 100), color='red')
        
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
