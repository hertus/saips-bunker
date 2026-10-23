param(
  [switch]$KillExplorer = $false
)

$ErrorActionPreference = "Continue"
$ProjectRoot = Split-Path -Parent $PSScriptRoot
$IndexFile = Join-Path $ProjectRoot "index.html"
$FileUri = ([System.Uri]$IndexFile).AbsoluteUri

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  SAIPS BUNKER WEEKEND - SERVERLESS KIOSK LAUNCHER" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. Standby & Bildschirm-Timeout deaktivieren
Write-Host "[1/3] Deaktiviere Bildschirm-Timeout & Standby..." -ForegroundColor Yellow
powercfg /change monitor-timeout-ac 0 | Out-Null
powercfg /change monitor-timeout-dc 0 | Out-Null
powercfg /change standby-timeout-ac 0 | Out-Null
powercfg /change standby-timeout-dc 0 | Out-Null

# 2. Optional: Windows Explorer (Taskleiste, Systemuhr, Startmenü) für die Kiosk-Dauer beenden
if ($KillExplorer) {
  Write-Host "[2/3] Beende Windows Explorer (Taskleiste & Systemuhr komplett ausgeblendet)..." -ForegroundColor Yellow
  Stop-Process -Name "explorer" -Force -ErrorAction SilentlyContinue
} else {
  Write-Host "[2/3] Info: Explorer aktiv. Nutze start-bunker-kiosk-hardlock.bat um Taskleiste/Uhr ganz abzuschalten." -ForegroundColor Gray
}

# 3. Edge oder Chrome im nativen Vollbild-Kiosk-Modus direkt mit der lokalen Datei starten
$edgePaths = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "${env:ProgramFiles}\Microsoft\Edge\Application\msedge.exe"
)
$chromePaths = @(
  "${env:LocalAppdata}\Chromium\Application\chrome.exe",
  "${env:ProgramFiles}\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe"
)
$browserExe = ($edgePaths + $chromePaths | Where-Object { Test-Path $_ } | Select-Object -First 1)

if ($browserExe) {
  Write-Host "[3/3] Starte Browser im nativen Vollbild-Kiosk-Modus ($browserExe)..." -ForegroundColor Green
  Write-Host "      Datei: $FileUri" -ForegroundColor Gray
  Write-Host "      Hinweis: Zum Beenden des Kiosk-Browsers Alt+F4 drücken." -ForegroundColor Gray
  $kioskArgs = @(
    "--kiosk",
    "`"$FileUri`"",
    "--edge-kiosk-type=fullscreen",
    "--no-first-run",
    "--disable-pinch",
    "--overscroll-history-navigation=0",
    "--disable-features=TranslateUI"
  )
  Start-Process -FilePath $browserExe -ArgumentList $kioskArgs -Wait
} else {
  Write-Host "[3/3] Öffne lokale Datei im Standard-Browser: $FileUri" -ForegroundColor Yellow
  Start-Process $IndexFile
}

# 4. Windows Explorer wiederherstellen, falls er beendet wurde
if ($KillExplorer) {
  Write-Host "Stelle Windows Explorer (Taskleiste) wieder her..." -ForegroundColor Green
  Start-Process "explorer.exe"
}

