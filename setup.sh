#!/bin/bash

# Install dependencies
npm install

# Create public directories if they don't exist
mkdir -p public/images

# Copy logo to public folder if not already there
if [ ! -f "public/images/logo.png" ]; then
  cp src/data/logo.png public/images/logo.png
fi

# Start development server
echo "Setup complete! Run 'npm run dev' to start the development server." 