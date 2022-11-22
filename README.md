# Knihovna SPŠ Trutnov

## Konfigurace
1. `/src/config.php`
2. `/src/sysadmin/client/src/app/app.module.js`

## Sysadmin - kompilace clienta
1. Stáhnout [Node.js](https://nodejs.org)
2. `npm install --location=global @angular/cli`
3. V repozitáři se přepnout do `/src/sysadmin/client`
4. `npm install` (nebo pro další aktualizaci `npm update`)
5. `ng build --base-href /knihovna/sysadmin/ --deploy-url /knihovna/sysadmin/`
