#manual step: download zip file from https://data.gov.ua/dataset/06779371-308f-42d7-895e-5a39833375f0
#manual step: unzip it
#manual step: adjust the path and file name: "cd" and "$filename"
#automatical step: add 2 new fields "PartitionKey" and "RowKey"
#automatical step: export separate csv file per each 100000 items (it's easier to import data in azure storage explorer to azure table)
#manual step: replace header per each file with: "person","reg_addr_koatuu","oper_code","oper_name","d_reg","dep_code","dep","brand","model","make_year","color","kind","body","purpose","fuel","capacity","own_weight","total_weight","n_reg_new","PartitionKey","RowKey"
#manual step: import generated CSVs to azure storage explorer

#path to unziped csv file
cd "C:\Personal\rkor01\Downloads\cosmosDB";
#sourceCSVfileName, example: "tz_opendata_z01012019_po01082019"
$filename = "tz_opendata_z01012019_po01112019";
$sourceCSV = "$($filename).csv";
$rowsCount = 200000;
$rowsMaximum = 2000000;
$startrow = 0;
$counter = 1;
$separateByMonthValue = "*.08.2019";
while ($startrow -lt $rowsMaximum){
    $ob_source = Import-CSV -Delimiter ';' $sourceCSV | select-object -skip $startrow -first $rowsCount
    $ob_filtered = @()
    foreach ($item in $ob_source){
        if(($item.d_reg -Like $separateByMonthValue) -and ($item.n_reg_new -ne "")){
            $item | Add-Member -MemberType NoteProperty -Name "PartitionKey" -Value $item.n_reg_new.Trim().Substring(0,2)
            $item | Add-Member -MemberType NoteProperty -Name "RowKey" -Value $item.n_reg_new.Trim()
            $ob_filtered = $ob_filtered + $item
        }
    }
    if($ob_filtered.Length -ne 0){
        $ob_filtered | Export-CSV "$($filename)_$($counter).csv" -Encoding UTF8 -NoTypeInformation
    }
    $startrow += $rowsCount ;
    $counter++ ;
}