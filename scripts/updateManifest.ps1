$docPath = "docs"
cd $docPath
$manifestPath = ".\manifest.json"
$url = "https://carsua.pp.ua"
$manifest = Get-Content $manifestPath -raw | ConvertFrom-Json
$manifest.start_url = $url
$manifest | ConvertTo-Json -depth 32| set-content $manifestPath