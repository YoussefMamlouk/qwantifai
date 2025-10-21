# Quantifai Website Deployment Guide

## Vercel Deployment Steps

### 1. Prerequisites
- GitHub repository with your code
- Vercel account
- Domain name (optional)

### 2. Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Configure the following settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
   - **Install Command**: `npm install`

#### Option B: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

### 3. Domain Configuration
If using a custom domain:
1. In Vercel dashboard, go to your project settings
2. Navigate to "Domains" section
3. Add your custom domain
4. Update your DNS records as instructed by Vercel

### 4. Environment Variables (if needed)
Add any environment variables in Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add variables like API keys, database URLs, etc.

### 5. Build Configuration
The project is configured for static export with:
- `output: 'export'` in next.config.js
- `images: { unoptimized: true }` for static hosting
- `trailingSlash: true` for better routing

### 6. Troubleshooting

#### Common Issues:
1. **Build Fails**: Check that all dependencies are in package.json
2. **Images Not Loading**: Ensure all image paths are correct
3. **404 Errors**: Check that all pages are properly exported
4. **Domain Not Working**: Verify DNS configuration

#### Missing Images Fix:
The project references these images that need to be added:
- `/images/projects/project1.jpg`
- `/images/projects/project2.jpg` 
- `/images/projects/project3.jpg`

### 7. Performance Optimization
- Images are optimized for static hosting
- CSS and JS are minified
- Static generation for better performance

### 8. Monitoring
- Check Vercel dashboard for deployment status
- Monitor build logs for errors
- Use Vercel Analytics for performance insights
