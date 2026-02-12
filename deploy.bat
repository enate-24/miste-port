@echo off
echo.
echo ========================================
echo   DEPLOYING WUBALEM'S PORTFOLIO
echo ========================================
echo.
echo Starting deployment to Vercel...
echo.

npx vercel --prod

echo.
echo ========================================
echo   DEPLOYMENT COMPLETE!
echo ========================================
echo.
echo Your portfolio is now live!
echo Check the URL above to view your site.
echo.
pause