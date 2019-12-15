<?php if(pathinfo($_SERVER["SCRIPT_FILENAME"], PATHINFO_FILENAME) != "index") die("error, no dirrect access aproved"); ?>
     
<h1 class="stranka_nadpis">Knihovna SPŠ Trutnov</h1>
<p>Vítejte v systému pro procházení knih a jejich rezervaci zapůjčení ze školní knihovny SPŠ Trutnov. Připravili jsme pro vás několik užitečných funkcí pro pohodlnější práci.</p>

<p>V sekci Seznam knih můžete prohlížet kompletní seznam knih včetně informací o nich a o jejich dostupnosti. Na stránce s detailem knihy
    naleznete podrobnější informace o knize, můžete zde také zažádat o zapůjčení knihy. V sekci Moje knihy naleznete knihy, o jejichž zapůjčení máte
    zažádáno či již zapůjčené knihy. Pro jednodušší vyhledávání využijte čtečku QR kódů.
</p>           
        
<h2>Profil uživatele</h2>

<div id="logged_user"><p>Přihlášený uživatel: <b> <?php echo $_SESSION["name"] ?> </b></p></div>

<ul class="list_profile">
    
    <a href="./?p=pass_change"><div class="zoom"><img src="./img/flaticon/010-pass.png" alt="zmena_hesla"><br>Změna hesla</div></a>
    <a href="./?p=list"><div class="zoom"><img src="./img/flaticon/014-folder.png" alt="seznam_knih"><br>Seznam knih</div></a>
    <a href="./?p=myBooks"><div class="zoom"><img src="./img/flaticon/003-bookmark.png" alt="moje_knihy"><br>Moje knihy</div></a>
    <a href="./?p=qr_reader"><div class="zoom"><img src="./img/flaticon/015-qr-code.png" alt="qr_ctecka"><br>QR čtečka</div></a>
    <a href="./?a=logout"><div class="zoom"><img src="./img/flaticon/013-exit.png" alt="log_out"><br>Odhlásit se</div></a>
</ul>