# AI Image Generator

## Overview

AI Image Generator is a full-stack web application that allows users to create custom images using AI technology. The application leverages **black-forest-labs/flux-schnell**'s powerful image generation capabilities to transform text prompts into unique visual creations.

## Features

- **Text-to-Image Generation**: Convert your ideas into images with AI
- **Community Showcase**: Browse images created by other users
- **Search Functionality**: Find images by keywords or prompts
- **Download Options**: Save your favorite generated images
- **Responsive Design**: Seamless experience on desktop and mobile devices

## Tech Stack

### Frontend
- React.js + Vite
- Tailwind CSS
- React Router
- File-saver

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- **black-forest-labs/flux-schnell** with OpenAI SDK by Nebius AI Studio API
- Cloudinary (for image storage)

## Installation

### Prerequisites
- Node.js (v14.0.0 or later)
- MongoDB
- **black-forest-labs/flux-schnell** Nebius AI Studio API Key

### Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/codexharoon/ai_image_gen.git
   cd ai_image_gen 
   ```

2. Install backend dependencies:
   ```bash
   cd server
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../client
   npm install
   ```

4. Create a `.env` file in the root directory and add your credentials:
   ```env
   MONGODB_URL=your_mongodb_connection_string
   FLUXSCHNELL_API_KEY=your_fluxschnell_api_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

5. Run the development servers:
   ```bash
   # Start the backend server
   cd server
   npm run dev

   # Start the frontend server
   cd ../client
   npm run dev
   ```

6. Access the application at [http://localhost:5173](http://localhost:5173)

## Usage

1. Enter a descriptive text prompt in the input field
2. Click "Generate" to create an AI-generated image
3. Browse the community showcase to see other users' creations
4. Download images you like by clicking the download button

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Developer**: CodeX Haroon
- **Email**: [info@codexharoon.com](mailto:info@codexharoon.com)
- **GitHub**: [codexharoon](https://github.com/codexharoon)
- **Project Link**: [https://github.com/codexharoon/ai_image_gen.git](https://github.com/codexharoon/ai_image_gen.git)

## Acknowledgments

- **black-forest-labs/flux-schnell** for the AI image generation API
- MongoDB for the database solution
- Tailwind CSS for the styling framework
- All contributors and supporters of this project
