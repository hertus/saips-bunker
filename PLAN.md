# PLAN & ANFORDERUNGSKATALOG: SAIPS BunkerWeekend Zeitschätzung

![das saips BUNKERweekend](./assets/bunker-bg.jpg)

Dieses Dokument enthält das Fachkonzept, die Analyse der bestehenden Excel-Vorlage ([Zeit_eintragen_2024_leer.xls](./Zeit_eintragen_2024_leer.xls)), die Berechnungslogik sowie das Sicherheits- und Kiosk-Konzept für den Einsatz im Bunker.

---

## 1. Ausgangslage & Spielprinzip im Bunker

- **Umgebung:** Ein Wochenend-Aufenthalt in einem Bunker komplett ohne Uhren, Fenster, Handys oder andere digitale Zeitquellen.
- **Ziel des Spiels:** Die Teilnehmer müssen zu mehreren vordefinierten Zeitpunkten (*Soll-Zeiten*, z. B. Fr 12:00, Fr 18:00, Sa 12:00, Sa 18:00, So 12:00) schätzen, wann diese Zeit erreicht ist.
- **Ablauf der Schätzung:**
  - Die Teilnehmer tippen **keine Uhrzeit** ein.
  - Sobald ein Teilnehmer das Gefühl hat, dass der nächste Zielzeitpunkt erreicht ist, geht er an den bereitgestellten Laptop.
  - Er gibt im einzigen Eingabefeld sein persönliches Kennwort ein (z. B. `Damian1572` oder `Reto1234`) und drückt `Enter` bzw. klickt auf **Eintragen**.
  - Das System speichert im Moment des Absendens die exakte lokale Systemzeit des Laptops (`new Date()`) als nächste Schätzung ($1 \dots N$) dieses Teilnehmers ab.
  - Der Teilnehmer erhält eine Bestätigung (z. B. *«1. Eintragung von Damian1572 erfolgreich – bitte setz dich an den Tisch und geh spielen!»*), sieht jedoch **niemals** die tatsächliche Uhrzeit oder seine Abweichung.
  - Sobald alle aktiven Teilnehmer alle Schätzungen abgegeben haben, sperrt sich das System und zeigt die humorvolle *«Du warst der LETZTE! Putzen!»*-Meldungssequenz aus dem Original-VBA-Makro.

---

## 2. Analyse der Excel-Vorlage (`Zeit_eintragen_2024_leer.xls`)

Aus der historischen Arbeitsmappe wurden die Daten und die Logik vollständig extrahiert:

### 2.1 Teilnehmer & Kennwörter (Stand 2024)
Jeder Teilnehmer besitzt ausschliesslich ein Kennwort (ohne Benutzernamen):

| Nr. | Name | Kennwort | Rolle | 2024 Gesamtabweichung | Endrang 2024 |
| :---: | :--- | :--- | :---: | :---: | :---: |
| 1 | **Christian** | `Christian9381` | Aktiv | `04:29:47` (`0.187350` Tage) | **1.** |
| 2 | **Lukas** | `Lukas3498` | Aktiv | `05:33:27` (`0.231563` Tage) | **2.** |
| 3 | **Toby** | `Toby9348` | Aktiv | `05:33:41` (`0.231725` Tage) | **3.** |
| 4 | **Damian** | `Damian1572` | Aktiv | `05:54:16` (`0.246019` Tage) | **4.** |
| 5 | **Toni** | `Toni5839` | Aktiv | `05:55:55` (`0.247164` Tage) | **5.** |
| 6 | **David** | `David6710` | Aktiv | `06:13:46` (`0.259560` Tage) | **6.** |
| 7 | **Philipp** | `Philipp5422` | Aktiv | `06:55:31` (`0.288553` Tage) | **7.** |
| 8 | **MartinBu** | `MartinBu2569` | Aktiv | `07:05:19` (`0.295359` Tage) | **8.** |
| 9 | **Carlo** | `Carlo4329` | Aktiv | `07:13:29` (`0.301030` Tage) | **9.** |
| 10 | **Zusatz** | `Zusatz1234` | Reserve | — (keine Einträge) | — |

### 2.2 Soll-Zeiten (Blatt «Soll»)
1. **1. Schätzung:** `2024-11-01 12:00:00` (Multiplikator `1.0`)
2. **2. Schätzung:** `2024-11-01 18:00:00` (Multiplikator `1.0`)
3. **3. Schätzung:** `2024-11-02 12:00:00` (Multiplikator `1.0`)
4. **4. Schätzung:** `2024-11-02 18:00:00` (Multiplikator `1.0`)
5. **5. Schätzung:** `2024-11-03 12:00:00` (Multiplikator `1.0`)

### 2.3 Mathematische Formeln & Auswertung
Für jeden Teilnehmer $p$ und Schätzrunde $i \in \{1 \dots N\}$ mit Sollzeit $\text{Soll}_i$, abgegebenem Zeitstempel $\text{Ist}_{p,i}$ und Multiplikator $m_i$:
- **Abweichung mit Vorzeichen:** $\Delta t_{p,i} = \text{Ist}_{p,i} - \text{Soll}_i$ (in Sekunden)
- **Absolute Differenz (`Differenz`):** $|\Delta t_{p,i}|$
- **Richtung (`ZuFrüh0/Spät1`):** `0` (falls $\text{Ist} < \text{Soll}$), `1` (falls $\text{Ist} \ge \text{Soll}$)
- **Gewichtete Abweichung (`TotalDifferenzUhrzeit`):** $|\Delta t_{p,i}| \times m_i$
- **Excel-Tagesdezimalwert:** $\text{Sekunden} / 86400$
- **Rangliste (`Alle`):** Sortiert aufsteigend nach der Summe der gewichteten Differenzen (`Daneben inkl. Multi`).
- **Differenzen-Matrix:** Gegenüberstellung aller Soll-Zeiten mit allen Teilnehmern, wobei der beste Schätzer der Runde farblich hervorgehoben wird.
- **Excel-24h-Limit behoben:** Excel zeigte bei $> 24\text{h}$ fehlerhafte Werte an (*«Achtung nur bis 24h»*). Die Webanwendung formatiert Dauern beliebig hoch als `HH:MM:SS` (z. B. `27:15:40`).

---

## 3. Architektur: Serverless Dual-Store mit Crash-Recovery & Disk-Sync

- **Vollständig serverlos:** Reines HTML5, CSS3 und Vanilla JavaScript ohne Node.js oder Webserver.
- **Direkt ausführbar über `file://`:** Doppelklick auf `index.html` genügt in jedem modernen Chromium-Browser oder Firefox.
- **4-Stufen-Persistenz & Crash-Resilienz:**
  1. **Synchroner `localStorage` (`saips_bunker_db_v1`):** Synchrones Schreiben bei jedem Tastendruck/Eintrag in die browserinterne LevelDB.
  2. **Asynchroner `IndexedDB`-Spiegel (`saips_bunker_idb`):** Zweite, unabhängige Browser-Datenbank. Erkennt beim Systemstart nach einem unsauberen Computerabsturz eventuell unvollständige `localStorage`-Stände und stellt den konsistenten Stand wieder her.
  3. **Persistentes Live-Datei-Backup (Chromium File System Access API):**
     - Einmalige Verknüpfung einer lokalen JSON-Datei (z. B. `data/bunker-live-backup.json`).
     - Das Handle wird in IndexedDB persistiert und übersteht Browser-Neustarts.
     - Jeder Schätzungseintrag sowie ein 5-Minuten-Intervall schreiben die Daten physisch direkt auf die Festplatte.
  4. **Manueller JSON-Export & Import:** 1-Klick-Sicherung zur Archivierung auf einem USB-Stick.

---

## 4. Mehrstufiges Kiosk- & Anti-Cheat-Konzept

1. **In-Browser Lockdown:**
   - Keine Zeitanzeige im Kiosk-DOM.
   - Permanenter Fokus-Trap auf dem Kennwortfeld.
   - Abfangen aller System-Tasten (`F1`–`F12`, `Tab`, `Escape`, `Ctrl+*`, `Alt+*`, `Meta`).
   - Blockieren des Kontextmenüs (Rechtsklick), der Textauswahl und von Drag & Drop.
   - Screen Wake Lock API verhindert Bildschirm-Standby.
2. **Nativer Browser-Kiosk:**
   - Starten des Browsers mit `--kiosk "file:///..." --edge-kiosk-type=fullscreen`. Keine Tabs, keine Adressleiste, kein Beenden mit `F11`.
3. **Betriebssystem-Schutz (Windows & Linux):**
   - **Windows:** `start-bunker-kiosk-hardlock.bat` beendet für die Kiosk-Dauer `explorer.exe` (wodurch die Taskleiste, Systemuhr und Benachrichtigungen nicht existieren).
   - **Linux:** `start-bunker-kiosk.sh` schaltet Standby via `xset` aus und startet Chromium/Chrome/Firefox im Vollbild-Kiosk.
