@echo off
setlocal enabledelayedexpansion

REM Check if the file argument is provided
if "%~1"=="" (
    echo Usage: %0 FILENAME_OF_FILE_WITH_URL_on_each_line
    exit /b
)

REM Check if the file exists
if not exist "%~1" (
    echo File not found: %~1
    exit /b
)

REM Loop through each line in the file and open the URL in the default browser
for /f "usebackq delims=" %%A in ("%~1") do (
    start "" "%%A"
)

endlocal
