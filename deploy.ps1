# deploy.ps1 - Build and deploy to gh-pages branch

Write-Host "Building the project..." -ForegroundColor Cyan
npm run build

Write-Host "Deploying to gh-pages branch..." -ForegroundColor Cyan

# Go to dist folder
Set-Location -Path .\dist

# Initialize git if not already
if (-not (Test-Path ".git")) {
    git init
    git remote add origin https://github.com/acgis-hama0098/wishin-bloom-web-2.git
}

git checkout -B gh-pages
git add -A
git commit -m "Deploy updated site $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')" -q
git push origin gh-pages --force

Write-Host "Deployment completed!" -ForegroundColor Green

# Return to root folder
Set-Location -Path ..
