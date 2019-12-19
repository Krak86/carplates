$docPath = "docs"
$to = "ghpages"
$githubusername = "krak86"
$githubemail = "rukrak86@gmail.com"
$githubaccesstoken = "$(GITHUB-PERSONAL-ACCESS-TOKEN)"
$repositoryname = "carplates"
$commitMessage = "Azure DevOps release " + $(Release.ReleaseId)
$branchName = "gh-pages"
git clone https://${githubusername}:$githubaccesstoken@github.com/$githubusername/$repositoryname.git --branch=$branchName $to --quiet
Remove-Item $to\* -Recurse
Copy-Item -Path $docPath\* -Destination $to -Recurse
cd $to
git config core.autocrlf false
git config user.email $githubemail
git config user.name $githubusername
git add .
git commit --allow-empty -m $commitMessage
git push
