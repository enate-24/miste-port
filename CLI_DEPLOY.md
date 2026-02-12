# 🚀 Deploy to Vercel via Command Line

## Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

## Step 2: Login to Vercel

```bash
vercel login
```

This will open your browser to authenticate with Vercel.

## Step 3: Deploy Your Portfolio

```bash
vercel --prod
```

## Complete Command Sequence:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to your Vercel account
vercel login

# Deploy to production
vercel --prod
```

## What Happens During Deployment:

1. **Vercel CLI detects** your React app automatically
2. **Builds your project** using `npm run build`
3. **Uploads** the build folder to Vercel's CDN
4. **Provides** your live URL

## Expected Output:

```
🔍  Inspect: https://vercel.com/enate-24/miste-port/[deployment-id]
✅  Production: https://miste-port-[random].vercel.app [copied to clipboard]
```

## Alternative: One-Command Deploy

If you want to deploy without prompts:

```bash
vercel --prod --yes
```

## Project Settings (Auto-detected):

- **Framework:** Create React App
- **Build Command:** `npm run build`
- **Output Directory:** `build`
- **Install Command:** `npm install`

## Environment Variables (if needed):

```bash
# Add environment variables
vercel env add REACT_APP_API_KEY production
```

## Custom Domain (optional):

```bash
# Add custom domain
vercel domains add yourdomain.com
vercel alias set miste-port-[random].vercel.app yourdomain.com
```

## Useful Vercel CLI Commands:

```bash
# Check deployment status
vercel ls

# View project info
vercel inspect

# Remove deployment
vercel rm [deployment-url]

# View logs
vercel logs [deployment-url]

# Open project in browser
vercel open
```

## Troubleshooting:

**Command not found?**
- Restart your terminal after installing
- Try: `npx vercel` instead of `vercel`

**Login issues?**
- Make sure you have a Vercel account
- Check your internet connection
- Try: `vercel logout` then `vercel login`

**Build fails?**
- Run `npm run build` locally first
- Check for any errors in the build process
- Ensure all dependencies are installed

## Success! 🎉

After deployment, your portfolio will be live at:
`https://miste-port-[random].vercel.app`

## Next Steps:

1. **Test your live site** - Check all features work
2. **Share the URL** - Add to resume/LinkedIn  
3. **Set up custom domain** (optional)
4. **Monitor analytics** in Vercel dashboard

Your professional portfolio with animated backgrounds is now live! 🌟