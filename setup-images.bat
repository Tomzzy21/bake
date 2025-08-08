@echo off
echo Setting up 3D Bakery Images...
echo.
echo Please save the following images to the public\images\ directory:
echo.
echo 1. Image 1 (Croissant) -> Save as: croissant.png
echo 2. Image 2 (Chocolate Cake) -> Save as: chocolate-cake.png  
echo 3. Image 3 (Macarons Stack) -> Save as: macarons.png
echo 4. Image 4 (Bakery Storefront) -> Save as: bakery-storefront.png
echo 5. Image 5 (Bread Roll) -> Save as: sourdough-bread.png
echo.
echo Target directory: %~dp0public\images\
echo.
echo After saving all images, press any key to open the website...
pause
echo.
echo Opening website at http://localhost:5173
start http://localhost:5173
echo.
echo If the development server is not running, use: npm run dev
pause
