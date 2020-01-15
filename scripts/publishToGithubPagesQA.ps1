$lighthousePath = "lighthouse"
$docPath = "owaspzap"
$to = "ghpages"
$githubusername = "krak86"
$githubemail = "rukrak86@gmail.com"
$githubaccesstoken = "$(GITHUB-PERSONAL-ACCESS-TOKEN)"
$repositoryname = "carplatesQA"
$commitMessage = "Azure DevOps Dev release " + $(Release.ReleaseId)
$branchName = "gh-pages"

#Write-Host "---npm init -y"
#npm init -y
#Write-Host "---npm i -g lighthouse"
#npm i -g lighthouse
#New-Item -Path "$(System.DefaultWorkingDirectory)" -Name $lighthousePath -ItemType "directory"
#Write-Host "---lighthouse testing"
#lighthouse https://carsua.pp.ua --output=html --output-path=./$lighthousePath/lighthouse.html --save-assets
#Write-Host "---lighthouse folder structure"
#Get-ChildItem $(System.DefaultWorkingDirectory)\$lighthousePath

Write-Host "---Publish 'owaspzap', 'lighthouse' reports to QA branch"

git clone https://${githubusername}:$githubaccesstoken@github.com/$githubusername/$repositoryname.git --branch=$branchName $to --quiet
Remove-Item $to\* -Recurse
Copy-Item -Path $docPath\* -Destination $to -Recurse
Copy-Item -Path $lighthousePath\* -Destination $to -Recurse
cd $to
Rename-Item -Path "report.html" -NewName "index.html"
git config core.autocrlf false
git config user.email $githubemail
git config user.name $githubusername
git add .
git commit --allow-empty -m $commitMessage
git push
