$dynamicBuildFile = Get-Content -Path C:\Users\PC\workspace\AntMigrationTool\build.xml

$runTests = ""
$loc = "C:\Users\PC\workspace\" + "principalLife\src\classes\*"

$testClasses = Get-ChildItem -Path $loc -Include Life*Test.cls,LA*Test.cls
foreach ($file in $testClasses)
{
    $runTests += "`r`n`t`t`t<runTest>" + $file.Name.Replace(".cls","") + "</runTest>"
}

$dynamicBuildFile = $dynamicBuildFile -replace "{!runTests}", $runTests

Set-Content -Path C:\Users\PC\workspace\AntMigrationTool\dynamicBuild.xml -Value $dynamicBuildFile