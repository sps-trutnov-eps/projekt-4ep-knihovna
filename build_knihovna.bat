@echo off
echo\
echo Odstraneni souboru puvodniho sestaveni (config.php se zachovava)...

rd /S /Q dist\authentication
rd /S /Q dist\knihovnik
rd /S /Q dist\sysadmin
rd /S /Q dist\uzivatel
del dist\index.php

echo.
echo Build sysadmin casti v Angularu...

cd src\sysadmin\client
cmd /c npm install
cmd /c ng build --base-href /knihovna/sysadmin/ --deploy-url /knihovna/sysadmin/
cd ..\..\..\

echo\
echo Kopirovani aktualnich souboru...

xcopy /Q src\index.php dist\
xcopy /E /Q src\authentication dist\authentication\
xcopy /E /Q src\knihovnik dist\knihovnik\
xcopy /E /Q src\sysadmin\client\dist\sysadmin dist\sysadmin\
xcopy /E /Q src\sysadmin\api dist\sysadmin\api\
xcopy /E /Q src\uzivatel dist\uzivatel\

echo\
echo Hotovo. V adresari dist\ je pripravena aktualni verze.
echo\
pause
