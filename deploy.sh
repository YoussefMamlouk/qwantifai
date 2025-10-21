#!/bin/bash

# Quantifai Website Deployment Script
echo "🚀 Starting Quantifai website deployment..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next out

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ -d "out" ]; then
    echo "✅ Build successful! Static files generated in 'out' directory."
    echo "📁 Build contents:"
    ls -la out/
    echo ""
    echo "🌐 Ready for deployment to Vercel!"
    echo ""
    echo "Next steps:"
    echo "1. Push your code to GitHub"
    echo "2. Connect your repository to Vercel"
    echo "3. Set Output Directory to 'out'"
    echo "4. Deploy!"
else
    echo "❌ Build failed! Check the error messages above."
    exit 1
fi
