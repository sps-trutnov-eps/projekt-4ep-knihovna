@echo off
echo\
echo Zacina aktualizace sysadmin modulu...

cd src\sysadmin\client

echo Update verzi balicku pomoci npm...

echo.
cmd /c npm update
echo.

echo Oprava zranitelnosti balicku pomoci npm...

echo.
cmd /c npm audit fix
echo.

echo Update Angularu...

echo.
cmd /c npm update --global @angular/cli
echo.

cd ..\..\..\

echo\
echo Hotovo. V adresari src\sysadmin\client je pripravena aktualni verze.
echo\
pause
