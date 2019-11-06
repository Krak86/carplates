#manual step: download zip file from https://data.gov.ua/dataset/06779371-308f-42d7-895e-5a39833375f0
#manual step: unzip it
#manual step: put the path and file name
#automatical step: add 2 new fields "PartitionKey" and "RowKey"
#automatical step: export separate csv file per each 100000 items (it's easier to import data in azure storage explorer to azure table)

#path to unziped csv file
cd "C:\Path\To\Source\csv";
#sourceCSVfileName, example: "tz_opendata_z01012019_po01082019"
$filename = "sourceCSVfileName"; 
$sourceCSV = "$($filename).csv";
$rowsCount = 100000;
$rowsMaximum = 2000000;
$startrow = 0;
$counter = 1;
while ($startrow -lt $rowsMaximum){
    $ob = Import-CSV -Delimiter ';' $sourceCSV | select-object -skip $startrow -first $rowsCount 
    foreach ($item in $ob){
        $item | Add-Member -MemberType NoteProperty -Name "PartitionKey" -Value $item.n_reg_new.Trim().Substring(0,2)
        $item | Add-Member -MemberType NoteProperty -Name "RowKey" -Value $item.n_reg_new.Trim()
    }
    $ob | Export-CSV "$($filename)_$($counter).csv" -Encoding UTF8 -NoTypeInformation
    $startrow += $rowsCount ;
    $counter++ ;
}