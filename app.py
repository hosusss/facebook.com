from flask import Flask, send_file
import os
from scripts.valentines_script import generate_image, image_path, create_directory

app = Flask(__name__)

@app.route("/")
def home():
    # Ensure directory exists
    create_directory(os.path.dirname(image_path))  

    # Generate the Valentine's image
    generate_image(image_path)  

    # Return the image as a response
    return send_file(image_path, mimetype="image/png")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
