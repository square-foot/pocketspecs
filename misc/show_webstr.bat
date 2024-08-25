@echo off
@REM Please do NOT rename this batch file
powershell -Command "Invoke-WebRequest -Uri '%1' | Select-Object -ExpandProperty Content"
