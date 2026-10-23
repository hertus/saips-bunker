# Implementierungsplan (Execution Blueprint): SAIPS Bunker-Weekend – Serverless Static Web-App

![SAIPS BunkerWeekend Original-Banner](C:/Users/nued/.gemini/antigravity/brain/f021db09-b848-4815-bfb4-e3b3c971f18e/bunker_form_bg.jpg)

> [!IMPORTANT]
> **Ziel-Architektur:**
> Eine **rein statische, serverlose Webapplikation** (HTML5 + CSS3 + Vanilla JS), die direkt über das Dateisystem (`file:///.../index.html`) im Browser ohne Node.js und ohne Webserver läuft – sowohl unter **Windows** als auch unter **Linux**.

---

## 1. Übersicht & Cross-Platform Kiosk-Starter

Die Applikation läuft ohne Webserver direkt in modernen Chromium-Browsern (oder Firefox) und wird über plattformspezifische Kiosk-Starter gestartet:

```text
d:\llm\agy\saips-bunker\
├── index.html                      # Hauptdatei (Kiosk-Ansicht + Admin-Ansicht)
├── styles.css                      # Styling (Bunker-Design, Vollbild-Kiosk, Admin-Tabellen)
├── app.js                          # Logik, eingebetteter 2024-Seed, LocalStorage-DB & Auswertung
├── assets\
│   └── bunker-bg.jpg               # Extrahiertes Original-Hintergrundbild
├── data\
│   └── seed-2024.json              # JSON-Referenzdatei mit 2024er Daten
├── scripts\
│   ├── start-bunker-kiosk.ps1      # Windows PowerShell Starter (Edge / Chrome)
│   └── start-bunker-kiosk.sh       # Linux Bash Starter (Chromium / Chrome / Firefox)
├── start-bunker-kiosk.bat          # Windows 1-Klick-Starter (Standard)
├── start-bunker-kiosk-hardlock.bat # Windows 1-Klick-Starter (beendet explorer.exe)
├── start-bunker-kiosk.sh           # Linux 1-Klick-Starter
└── Zeit_eintragen_2024_leer.xls    # Original Excel-Datei (Referenz)
```

---

## 2. Kiosk-Modus unter Linux ([scripts/start-bunker-kiosk.sh](file:///d:/llm/agy/saips-bunker/scripts/start-bunker-kiosk.sh))

Das Bash-Skript [start-bunker-kiosk.sh](file:///d:/llm/agy/saips-bunker/start-bunker-kiosk.sh) bzw. [scripts/start-bunker-kiosk.sh](file:///d:/llm/agy/saips-bunker/scripts/start-bunker-kiosk.sh) übernimmt unter Linux folgende Aufgaben:
1. **Bildschirmschoner & Standby deaktivieren:**
   - Schaltet via `xset s off`, `xset -dpms` und `xset s noblank` die automatische Bildschirmabschaltung und den Ruhezustand unter X11 ab.
2. **Browser-Erkennung:**
   - Sucht automatisch in dieser Reihenfolge nach installierten Browsern:
     1. `chromium` / `chromium-browser`
     2. `google-chrome` / `google-chrome-stable`
     3. `microsoft-edge` / `microsoft-edge-stable`
     4. `brave-browser`
     5. `firefox` (mit `--kiosk`)
     6. `xdg-open` (Fallback)
3. **Kiosk-Parameter:**
   - Startet Chromium/Chrome mit:
     `--kiosk "file://$INDEX_FILE" --no-first-run --disable-pinch --overscroll-history-navigation=0 --disable-features=TranslateUI --disable-session-crashed-bubble --disable-infobars`
   - Beendet werden kann der Kiosk-Modus wie gewohnt mit `Alt+F4`.

---

## 3. Datenmodell & Auswertungs-Engine

- **Datenbank:** Synchrones `localStorage` unter dem Schlüssel `saips_bunker_db_v1`.
- **Eingebettete 2024-Daten:** Direkt in `app.js` als Konstante `SEED_2024` integriert.
- **Formeln & Excel-Abstimmung:**
  - `Differenz` = $|\text{Ist} - \text{Soll}|$
  - `ZuFrüh0/Spät1` = `0` (falls $\text{Ist} < \text{Soll}$), `1` (falls $\text{Ist} \ge \text{Soll}$)
  - `TotalDifferenzUhrzeit` = $\text{Differenz} \times \text{Multiplikator}$
  - `Rangliste`: Sortierung aufsteigend nach `sumDiffSecWithMulti`
- **Ergebnis-Check:**
  - Christian: `04:29:47` (Excel: `0.187350`)
  - Lukas: `05:33:27` (Excel: `0.231563`)
  - Toby: `05:33:41` (Excel: `0.231725`)
  - Damian: `05:54:16` (Excel: `0.246019`)
