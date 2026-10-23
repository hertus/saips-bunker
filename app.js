(() => {
  'use strict';

  // =========================================================================
  // CONSTANTS & EMBEDDED 2024 DATASET (1:1 aus Zeit_eintragen_2024_leer.xls)
  // =========================================================================
  const STORAGE_KEY = 'saips_bunker_db_v1';

  const SEED_2024 = {
    version: "1.0",
    settings: {
      eventTitle: "das saips BUNKERweekend",
      adminPassword: "Admin1234",
      classicMessages: true,
      lastManStandingEasterEgg: true,
      kioskHideCursor: false,
      maskPasswordInput: false
    },
    targets: [
      { id: 1, stepIndex: 1, label: "1. Schätzung (Fr 12:00)", targetTime: "2024-11-01T12:00:00", multiplier: 1.0 },
      { id: 2, stepIndex: 2, label: "2. Schätzung (Fr 18:00)", targetTime: "2024-11-01T18:00:00", multiplier: 1.0 },
      { id: 3, stepIndex: 3, label: "3. Schätzung (Sa 12:00)", targetTime: "2024-11-02T12:00:00", multiplier: 1.0 },
      { id: 4, stepIndex: 4, label: "4. Schätzung (Sa 18:00)", targetTime: "2024-11-02T18:00:00", multiplier: 1.0 },
      { id: 5, stepIndex: 5, label: "5. Schätzung (So 12:00)", targetTime: "2024-11-03T12:00:00", multiplier: 1.0 }
    ],
    participants: [
      { id: 1, name: "Damian", password: "Damian1572", active: true },
      { id: 2, name: "MartinBu", password: "MartinBu2569", active: true },
      { id: 3, name: "Carlo", password: "Carlo4329", active: true },
      { id: 4, name: "David", password: "David6710", active: true },
      { id: 5, name: "Philipp", password: "Philipp5422", active: true },
      { id: 6, name: "Toni", password: "Toni5839", active: true },
      { id: 7, name: "Toby", password: "Toby9348", active: true },
      { id: 8, name: "Lukas", password: "Lukas3498", active: true },
      { id: 9, name: "Christian", password: "Christian9381", active: true },
      { id: 10, name: "Zusatz", password: "Zusatz1234", active: false }
    ],
    estimations: [
      { id: 1, participantId: 1, stepIndex: 1, estimatedTime: "2024-11-01T11:44:20" },
      { id: 2, participantId: 1, stepIndex: 2, estimatedTime: "2024-11-01T17:32:38" },
      { id: 3, participantId: 1, stepIndex: 3, estimatedTime: "2024-11-02T10:46:48" },
      { id: 4, participantId: 1, stepIndex: 4, estimatedTime: "2024-11-02T20:04:07" },
      { id: 5, participantId: 1, stepIndex: 5, estimatedTime: "2024-11-03T13:53:55" },

      { id: 6, participantId: 2, stepIndex: 1, estimatedTime: "2024-11-01T12:50:23" },
      { id: 7, participantId: 2, stepIndex: 2, estimatedTime: "2024-11-01T17:27:17" },
      { id: 8, participantId: 2, stepIndex: 3, estimatedTime: "2024-11-02T13:54:23" },
      { id: 9, participantId: 2, stepIndex: 4, estimatedTime: "2024-11-02T18:56:24" },
      { id: 10, participantId: 2, stepIndex: 5, estimatedTime: "2024-11-03T09:08:34" },

      { id: 11, participantId: 3, stepIndex: 1, estimatedTime: "2024-11-01T13:49:52" },
      { id: 12, participantId: 3, stepIndex: 2, estimatedTime: "2024-11-01T19:28:21" },
      { id: 13, participantId: 3, stepIndex: 3, estimatedTime: "2024-11-02T13:11:14" },
      { id: 14, participantId: 3, stepIndex: 4, estimatedTime: "2024-11-02T19:48:02" },
      { id: 15, participantId: 3, stepIndex: 5, estimatedTime: "2024-11-03T12:56:00" },

      { id: 16, participantId: 4, stepIndex: 1, estimatedTime: "2024-11-01T12:12:22" },
      { id: 17, participantId: 4, stepIndex: 2, estimatedTime: "2024-11-01T16:22:21" },
      { id: 18, participantId: 4, stepIndex: 3, estimatedTime: "2024-11-02T14:12:49" },
      { id: 19, participantId: 4, stepIndex: 4, estimatedTime: "2024-11-02T19:40:55" },
      { id: 20, participantId: 4, stepIndex: 5, estimatedTime: "2024-11-03T12:30:01" },

      { id: 21, participantId: 5, stepIndex: 1, estimatedTime: "2024-11-01T12:54:51" },
      { id: 22, participantId: 5, stepIndex: 2, estimatedTime: "2024-11-01T16:22:36" },
      { id: 23, participantId: 5, stepIndex: 3, estimatedTime: "2024-11-02T14:10:54" },
      { id: 24, participantId: 5, stepIndex: 4, estimatedTime: "2024-11-02T19:10:27" },
      { id: 25, participantId: 5, stepIndex: 5, estimatedTime: "2024-11-03T13:01:55" },

      { id: 26, participantId: 6, stepIndex: 1, estimatedTime: "2024-11-01T13:01:55" },
      { id: 27, participantId: 6, stepIndex: 2, estimatedTime: "2024-11-01T17:21:20" },
      { id: 28, participantId: 6, stepIndex: 3, estimatedTime: "2024-11-02T14:36:46" },
      { id: 29, participantId: 6, stepIndex: 4, estimatedTime: "2024-11-02T17:25:32" },
      { id: 30, participantId: 6, stepIndex: 5, estimatedTime: "2024-11-03T13:04:06" },

      { id: 31, participantId: 7, stepIndex: 1, estimatedTime: "2024-11-01T13:31:20" },
      { id: 32, participantId: 7, stepIndex: 2, estimatedTime: "2024-11-01T17:57:38" },
      { id: 33, participantId: 7, stepIndex: 3, estimatedTime: "2024-11-02T13:59:15" },
      { id: 34, participantId: 7, stepIndex: 4, estimatedTime: "2024-11-02T19:38:52" },
      { id: 35, participantId: 7, stepIndex: 5, estimatedTime: "2024-11-03T12:21:52" },

      { id: 36, participantId: 8, stepIndex: 1, estimatedTime: "2024-11-01T14:20:55" },
      { id: 37, participantId: 8, stepIndex: 2, estimatedTime: "2024-11-01T19:04:24" },
      { id: 38, participantId: 8, stepIndex: 3, estimatedTime: "2024-11-02T12:07:59" },
      { id: 39, participantId: 8, stepIndex: 4, estimatedTime: "2024-11-02T18:26:51" },
      { id: 40, participantId: 8, stepIndex: 5, estimatedTime: "2024-11-03T13:33:18" },

      { id: 41, participantId: 9, stepIndex: 1, estimatedTime: "2024-11-01T13:01:40" },
      { id: 42, participantId: 9, stepIndex: 2, estimatedTime: "2024-11-01T16:04:52" },
      { id: 43, participantId: 9, stepIndex: 3, estimatedTime: "2024-11-02T12:38:12" },
      { id: 44, participantId: 9, stepIndex: 4, estimatedTime: "2024-11-02T17:41:54" },
      { id: 45, participantId: 9, stepIndex: 5, estimatedTime: "2024-11-03T12:36:41" }
    ]
  };

  // =========================================================================
  // STATE MANAGEMENT, DUAL PERSISTENCE (LocalStorage + IndexedDB) & FILE-SYNC
  // =========================================================================
  const IDB_NAME = 'saips_bunker_idb';
  const IDB_VERSION = 1;
  const IDB_STORE_STATE = 'state_store';
  const IDB_STORE_HANDLES = 'file_handles';

  let state = null;
  let mode = 'kiosk'; // 'kiosk' | 'admin'
  let modalQueue = [];
  let modalAutoCloseTimer = null;
  let wakeLockSentinel = null;
  let liveBackupFileHandle = null;
  let lineChartMode = "signed"; // "signed" | "abs"
  let highlightedParticipantId = null;
  let lastSyncIso = null;

  // IndexedDB Promise Helper
  function openDatabase() {
    return new Promise((resolve, reject) => {
      if (!window.indexedDB) {
        return resolve(null);
      }
      const req = indexedDB.open(IDB_NAME, IDB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(IDB_STORE_STATE)) {
          db.createObjectStore(IDB_STORE_STATE);
        }
        if (!db.objectStoreNames.contains(IDB_STORE_HANDLES)) {
          db.createObjectStore(IDB_STORE_HANDLES);
        }
      };
      req.onsuccess = (e) => resolve(e.target.result);
      req.onerror = () => resolve(null);
    });
  }

  async function idbGet(storeName, key) {
    try {
      const db = await openDatabase();
      if (!db) return null;
      return new Promise((resolve) => {
        const tx = db.transaction(storeName, 'readonly');
        const req = tx.objectStore(storeName).get(key);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => resolve(null);
      });
    } catch {
      return null;
    }
  }

  async function idbSet(storeName, key, value) {
    try {
      const db = await openDatabase();
      if (!db) return false;
      return new Promise((resolve) => {
        const tx = db.transaction(storeName, 'readwrite');
        const req = tx.objectStore(storeName).put(value, key);
        req.onsuccess = () => resolve(true);
        req.onerror = () => resolve(false);
      });
    } catch {
      return false;
    }
  }

  async function idbDelete(storeName, key) {
    try {
      const db = await openDatabase();
      if (!db) return false;
      return new Promise((resolve) => {
        const tx = db.transaction(storeName, 'readwrite');
        const req = tx.objectStore(storeName).delete(key);
        req.onsuccess = () => resolve(true);
        req.onerror = () => resolve(false);
      });
    } catch {
      return false;
    }
  }

  // Crash-Resilient Dual Load (LocalStorage + IndexedDB Fallback)
  async function loadStateWithRecovery() {
    let lsState = null;
    let idbState = null;

    // 1. Try LocalStorage
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        lsState = JSON.parse(raw);
      }
    } catch (err) {
      console.warn('LocalStorage parse error:', err);
    }

    // 2. Try IndexedDB Mirror
    try {
      idbState = await idbGet(IDB_STORE_STATE, 'latest_state');
    } catch (err) {
      console.warn('IndexedDB read error:', err);
    }

    // 3. Choose the most complete state (Crash recovery)
    if (lsState && idbState) {
      const lsCount = (lsState.estimations || []).length;
      const idbCount = (idbState.estimations || []).length;
      if (idbCount > lsCount) {
        console.warn('Crash recovery: IndexedDB hat mehr Einträge als LocalStorage. Stelle aus IndexedDB wieder her.');
        state = idbState;
      } else {
        state = lsState;
      }
    } else if (lsState) {
      state = lsState;
    } else if (idbState) {
      console.warn('Crash recovery: LocalStorage war leer, stelle aus IndexedDB wieder her.');
      state = idbState;
    } else {
      // First boot: Initial Seed
      state = JSON.parse(JSON.stringify(SEED_2024));
    }

    state.settings = { ...SEED_2024.settings, ...(state.settings || {}) };
    saveState();

    // 4. Try to restore persisted FileSystemFileHandle
    await restorePersistedFileHandle();
  }

  function saveState() {
    // 1. Synchronous write to LocalStorage
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.error('LocalStorage write error:', err);
    }

    // 2. Asynchronous mirror write to IndexedDB
    idbSet(IDB_STORE_STATE, 'latest_state', state);

    // 3. Asynchronous write to live physical backup file (if linked)
    syncToLinkedFile();
  }

  async function syncToLinkedFile() {
    if (!liveBackupFileHandle) return;
    try {
      // Verify permission if needed
      const hasPermission = await verifyPermission(liveBackupFileHandle, true);
      if (!hasPermission) {
        updateFileStatusUI(false, `Berechtigung für ${liveBackupFileHandle.name} erforderlich`);
        return;
      }

      const writable = await liveBackupFileHandle.createWritable();
      const payload = exportPayload();
      await writable.write(JSON.stringify(payload, null, 2));
      await writable.close();

      lastSyncIso = toLocalIsoString(new Date());
      updateFileStatusUI(true, `Aktiv: ${liveBackupFileHandle.name}`);
    } catch (err) {
      console.warn('Live file sync warning:', err);
      updateFileStatusUI(false, `Fehler: ${err.message}`);
    }
  }

  async function verifyPermission(fileHandle, readWrite = true) {
    const options = {};
    if (readWrite) {
      options.mode = 'readwrite';
    }
    if ((await fileHandle.queryPermission(options)) === 'granted') {
      return true;
    }
    if ((await fileHandle.requestPermission(options)) === 'granted') {
      return true;
    }
    return false;
  }

  async function restorePersistedFileHandle() {
    try {
      const handle = await idbGet(IDB_STORE_HANDLES, 'live_backup_handle');
      if (handle && handle.kind === 'file') {
        liveBackupFileHandle = handle;
        const granted = (await handle.queryPermission({ mode: 'readwrite' })) === 'granted';
        if (granted) {
          updateFileStatusUI(true, `Automatisch verbunden: ${handle.name}`);
          await syncToLinkedFile();
        } else {
          updateFileStatusUI(false, `Wiederhergestellt: ${handle.name} (Klicke auf Button um Berechtigung zu bestätigen)`);
        }
      } else {
        updateFileStatusUI(false, 'Nicht verknüpft (Aktiv: LocalStorage + IndexedDB Dual-Store)');
      }
    } catch (err) {
      console.warn('File handle restore warning:', err);
      updateFileStatusUI(false, 'Nicht verknüpft (Aktiv: LocalStorage + IndexedDB Dual-Store)');
    }
  }

  function updateFileStatusUI(isActive, message) {
    const statusEl = document.getElementById('live-file-status');
    const timeEl = document.getElementById('last-backup-time');
    const unlinkBtn = document.getElementById('btn-unlink-live-file');

    if (statusEl) {
      statusEl.innerHTML = isActive
        ? `Status: <span style="color:var(--success)">● <strong>${escapeHtml(message)}</strong> (Jeder Eintrag wird sofort auf die Festplatte gespiegelt)</span>`
        : `Status: <span style="color:var(--warning)">○ ${escapeHtml(message)}</span>`;
    }

    if (timeEl && lastSyncIso) {
      timeEl.textContent = `Letzter Disk-Sync: ${formatDisplayDateTime(lastSyncIso)}`;
    }

    if (unlinkBtn) {
      unlinkBtn.classList.toggle('hidden', !liveBackupFileHandle);
    }
  }

  // =========================================================================
  // HELPER FUNCTIONS (Date, Time, Formats)
  // =========================================================================
  function toLocalIsoString(date = new Date()) {
    const pad = (n) => String(n).padStart(2, '0');
    return (
      `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` +
      `T${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
    );
  }

  function parseLocalIso(isoStr) {
    if (!isoStr) return new Date();
    const normalized = String(isoStr).trim().replace(' ', 'T');
    const d = new Date(normalized);
    return isNaN(d.getTime()) ? new Date() : d;
  }

  function formatDurationSeconds(totalSeconds) {
    const sec = Math.round(Math.abs(totalSeconds));
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  function formatDisplayDateTime(isoStr) {
    if (!isoStr) return '—';
    const [d, t] = String(isoStr).replace(' ', 'T').split('T');
    if (!d) return isoStr;
    const [y, m, day] = d.split('-');
    return `${day}.${m}.${y} ${t || '00:00:00'}`;
  }

  function escapeHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // =========================================================================
  // EVALUATION CALCULATION ENGINE
  // =========================================================================
  function computeEvaluation(currState) {
    const targets = [...(currState.targets || [])].sort((a, b) => a.stepIndex - b.stepIndex);
    const participants = currState.participants || [];
    const estimations = currState.estimations || [];

    const estMap = new Map();
    for (const e of estimations) {
      const key = `${e.participantId}_${e.stepIndex}`;
      estMap.set(key, e);
    }

    const participantSheets = [];

    for (const p of participants) {
      let sumDiffSecWithoutMulti = 0;
      let sumDiffSecWithMulti = 0;
      let completedCount = 0;
      const rows = [];

      for (const t of targets) {
        const est = estMap.get(`${p.id}_${t.stepIndex}`);
        const sollDate = parseLocalIso(t.targetTime);

        if (est) {
          completedCount++;
          const istDate = parseLocalIso(est.estimatedTime);
          const signedDiffSeconds = Math.round((istDate.getTime() - sollDate.getTime()) / 1000);
          const absDiffSeconds = Math.abs(signedDiffSeconds);
          const weightedDiffSeconds = absDiffSeconds * Number(t.multiplier);
          const tooLateFlag = signedDiffSeconds >= 0 ? 1 : 0; // 0 = Zu früh, 1 = Zu spät
          const excelDecimalDays = weightedDiffSeconds / 86400;

          sumDiffSecWithoutMulti += absDiffSeconds;
          sumDiffSecWithMulti += weightedDiffSeconds;

          const [datePart, timePart] = String(est.estimatedTime).replace(' ', 'T').split('T');

          rows.push({
            estimationId: est.id,
            stepIndex: t.stepIndex,
            targetLabel: t.label,
            passwordEntered: p.password,
            estimatedTime: est.estimatedTime,
            estimatedDate: datePart,
            estimatedClock: timePart || '00:00:00',
            targetTime: t.targetTime,
            diffSeconds: absDiffSeconds,
            signedDiffSeconds,
            diffFormatted: formatDurationSeconds(absDiffSeconds),
            signedDiffFormatted: `${signedDiffSeconds < 0 ? '-' : '+'}${formatDurationSeconds(absDiffSeconds)}`,
            tooLateFlag,
            directionLabel: signedDiffSeconds < 0 ? 'Zu früh (0)' : signedDiffSeconds > 0 ? 'Zu spät (1)' : 'Exakt (0)',
            multiplier: Number(t.multiplier),
            weightedDiffSeconds,
            weightedDiffFormatted: formatDurationSeconds(weightedDiffSeconds),
            excelDecimalDays,
            completed: true
          });
        } else {
          rows.push({
            estimationId: null,
            stepIndex: t.stepIndex,
            targetLabel: t.label,
            passwordEntered: null,
            estimatedTime: null,
            estimatedDate: null,
            estimatedClock: null,
            targetTime: t.targetTime,
            diffSeconds: null,
            signedDiffSeconds: null,
            diffFormatted: '—',
            signedDiffFormatted: '—',
            tooLateFlag: null,
            directionLabel: 'Offen',
            multiplier: Number(t.multiplier),
            weightedDiffSeconds: null,
            weightedDiffFormatted: '—',
            excelDecimalDays: null,
            completed: false
          });
        }
      }

      const excelTotalWithMulti = sumDiffSecWithMulti / 86400;
      const excelTotalWithoutMulti = sumDiffSecWithoutMulti / 86400;

      participantSheets.push({
        id: p.id,
        name: p.name,
        password: p.password,
        active: Boolean(p.active),
        completedCount,
        totalTargets: targets.length,
        allCompleted: targets.length > 0 && completedCount >= targets.length,
        sumDiffSecWithoutMulti,
        sumDiffSecWithMulti,
        sumDiffWithoutMultiFormatted: formatDurationSeconds(sumDiffSecWithoutMulti),
        sumDiffWithMultiFormatted: formatDurationSeconds(sumDiffSecWithMulti),
        excelTotalWithMulti,
        excelTotalWithoutMulti,
        avgDiffFormatted: completedCount > 0 ? formatDurationSeconds(sumDiffSecWithoutMulti / completedCount) : '—',
        rows
      });
    }

    // Ranking Table
    const rankedList = participantSheets
      .filter((p) => p.active || p.completedCount > 0)
      .sort((a, b) => {
        if (b.completedCount !== a.completedCount) {
          return b.completedCount - a.completedCount;
        }
        if (a.completedCount === 0 && b.completedCount === 0) {
          return a.name.localeCompare(b.name);
        }
        return a.sumDiffSecWithMulti - b.sumDiffSecWithMulti;
      })
      .map((p, idx) => ({
        rank: idx + 1,
        id: p.id,
        name: p.name,
        password: p.password,
        active: p.active,
        completedCount: p.completedCount,
        totalTargets: p.totalTargets,
        sumDiffSecWithMulti: p.sumDiffSecWithMulti,
        sumDiffSecWithoutMulti: p.sumDiffSecWithoutMulti,
        sumDiffWithMultiFormatted: p.sumDiffWithMultiFormatted,
        sumDiffWithoutMultiFormatted: p.sumDiffWithoutMultiFormatted,
        excelTotalWithMulti: p.excelTotalWithMulti,
        excelTotalWithoutMulti: p.excelTotalWithoutMulti,
        avgDiffFormatted: p.avgDiffFormatted
      }));

    // Matrix Table
    const matrixRows = targets.map((t) => {
      const cells = {};
      let bestParticipant = null;
      let bestDiffSec = Infinity;

      for (const p of participantSheets) {
        const row = p.rows.find((r) => r.stepIndex === t.stepIndex);
        cells[p.name] = row || null;
        if (row && row.completed && row.diffSeconds < bestDiffSec) {
          bestDiffSec = row.diffSeconds;
          bestParticipant = p.name;
        }
      }

      return {
        stepIndex: t.stepIndex,
        label: t.label,
        targetTime: t.targetTime,
        multiplier: Number(t.multiplier),
        bestParticipant,
        bestDiffSec: bestDiffSec === Infinity ? null : bestDiffSec,
        cells
      };
    });

    const activeParticipants = participantSheets.filter((p) => p.active);
    const allActiveFinished =
      activeParticipants.length > 0 &&
      targets.length > 0 &&
      activeParticipants.every((p) => p.completedCount >= targets.length);

    return {
      targets,
      participants: participantSheets,
      ranking: rankedList,
      matrix: matrixRows,
      summary: {
        totalParticipants: participants.length,
        activeParticipants: activeParticipants.length,
        totalTargets: targets.length,
        totalEstimationsSubmitted: estimations.length,
        totalEstimationsExpected: activeParticipants.length * targets.length,
        allActiveFinished
      }
    };
  }

  // =========================================================================
  // KIOSK LOGIC (Zero-Time-Leak Submission)
  // =========================================================================
  function handleKioskSubmit(rawPassword) {
    const input = String(rawPassword || '').trim();
    if (!input) return;

    // 1. Admin Unlock Check
    const adminPwd = String(state.settings.adminPassword || 'Admin1234').trim();
    if (input.toLowerCase() === adminPwd.toLowerCase()) {
      return { ok: true, isAdminUnlock: true };
    }

    // 2. Participant Search (case-insensitive)
    const participant = state.participants.find(
      (p) => String(p.password).trim().toLowerCase() === input.toLowerCase()
    );

    if (!participant) {
      return {
        ok: false,
        message: state.settings.classicMessages
          ? `Du bist ein faltscher Keib! Das ist faltsch: ${input}`
          : `Ungültiges Kennwort: ${input}`
      };
    }

    // 3. Find next open target step
    const targets = [...state.targets].sort((a, b) => a.stepIndex - b.stepIndex);
    if (targets.length === 0) {
      return { ok: false, message: 'Es sind noch keine Soll-Zeiten konfiguriert.' };
    }

    const participantEstSteps = new Set(
      state.estimations
        .filter((e) => e.participantId === participant.id)
        .map((e) => e.stepIndex)
    );

    const nextTarget = targets.find((t) => !participantEstSteps.has(t.stepIndex));
    if (!nextTarget) {
      return {
        ok: false,
        message: `${participant.name}, du hast bereits alle ${targets.length} Schätzungen abgegeben!`
      };
    }

    // 4. Record estimation with client system time (RTC)
    const nowIso = toLocalIsoString(new Date());
    const nextEstId = state.estimations.reduce((max, e) => Math.max(max, e.id || 0), 0) + 1;

    state.estimations.push({
      id: nextEstId,
      participantId: participant.id,
      stepIndex: nextTarget.stepIndex,
      estimatedTime: nowIso
    });

    if (!participant.active) {
      participant.active = true;
    }

    saveState();

    // 5. Check if all active finished
    const activeParticipants = state.participants.filter((p) => p.active);
    let allFinished = activeParticipants.length > 0;
    for (const ap of activeParticipants) {
      const cnt = state.estimations.filter((e) => e.participantId === ap.id).length;
      if (cnt < targets.length) {
        allFinished = false;
        break;
      }
    }

    const entryNum = nextTarget.stepIndex;
    const primaryMsg = `${entryNum}. Eintragung von ${participant.password} erfolgreich`;
    const secondaryMsg = state.settings.classicMessages
      ? `${participant.password}, Superduper - setz dich nun wieder an den Tisch und geh spielen!`
      : `Danke ${participant.name}! Deine ${entryNum}. Schätzung wurde gespeichert.`;

    const lastManMessages =
      allFinished && state.settings.lastManStandingEasterEgg
        ? [
            'Du warst der LETZTE! HEURIKAAAAA!',
            'Jawoll der aller LETZTE!',
            'Der LETZTE der LETZTEN!',
            'Sieh es ein, das war ES!',
            'Schon gewusst? Derinderinderinderin',
            'Fang schonmal an zu Putzen!',
            'Putzen ist so geil!',
            'Putzen ist so schön!',
            'Du warst der LETZTE!',
            'Damian putzt gerne Füdlis!',
            'Putzen ist doch toll! Ne?',
            'DIE LETZTE SCHÄTZUNG WURDE ABGEGEBEN - DAS BUNKERWEEKEND IST NUN VORBEI (leider)'
          ]
        : [];

    return {
      ok: true,
      isAdminUnlock: false,
      primaryMessage: primaryMsg,
      secondaryMessage: secondaryMsg,
      lastManMessages
    };
  }

  // =========================================================================
  // DOM REFERENCES
  // =========================================================================
  const kioskView = document.getElementById('kiosk-view');
  const kioskForm = document.getElementById('kiosk-form');
  const kioskInput = document.getElementById('kiosk-input');
  const kioskSubmitBtn = document.getElementById('kiosk-submit-btn');
  const kioskLockedBanner = document.getElementById('kiosk-locked-banner');
  const kioskModal = document.getElementById('kiosk-modal');
  const kioskModalBox = document.getElementById('kiosk-modal-box');
  const kioskModalHeader = document.getElementById('kiosk-modal-header');
  const kioskModalPrimary = document.getElementById('kiosk-modal-primary');
  const kioskModalSecondary = document.getElementById('kiosk-modal-secondary');
  const kioskModalOk = document.getElementById('kiosk-modal-ok');
  const kioskFullscreenPill = document.getElementById('kiosk-fullscreen-pill');

  const adminView = document.getElementById('admin-view');
  const adminTitle = document.getElementById('admin-title');
  const adminSummaryLine = document.getElementById('admin-summary-line');
  const btnReturnKiosk = document.getElementById('btn-return-kiosk');
  const btnExportJsonTop = document.getElementById('btn-export-json-top');

  // =========================================================================
  // KIOSK LOCKDOWN & FULLSCREEN CONTROLS
  // =========================================================================
  async function requestWakeLock() {
    if ('wakeLock' in navigator) {
      try {
        wakeLockSentinel = await navigator.wakeLock.request('screen');
      } catch {
        // Ignored
      }
    }
  }

  function updateFullscreenPill() {
    if (mode !== 'kiosk') {
      kioskFullscreenPill.classList.add('hidden');
      return;
    }
    kioskFullscreenPill.classList.toggle('hidden', Boolean(document.fullscreenElement));
  }

  async function enterFullscreen() {
    try {
      if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
    } catch {
      // User gesture needed
    }
    updateFullscreenPill();
  }

  kioskFullscreenPill.addEventListener('click', () => {
    enterFullscreen();
    focusKioskInput();
  });

  document.addEventListener('fullscreenchange', updateFullscreenPill);

  function focusKioskInput() {
    if (mode !== 'kiosk') return;
    if (!kioskModal.classList.contains('hidden')) {
      kioskModalOk.focus();
      return;
    }
    kioskInput.focus();
  }

  kioskInput.addEventListener('blur', () => {
    if (mode === 'kiosk' && kioskModal.classList.contains('hidden')) {
      setTimeout(focusKioskInput, 10);
    }
  });

  document.addEventListener('click', (e) => {
    if (mode === 'kiosk') {
      if (e.target !== kioskFullscreenPill) {
        enterFullscreen();
      }
      setTimeout(focusKioskInput, 10);
    }
  });

  window.addEventListener('contextmenu', (e) => {
    if (mode === 'kiosk') {
      e.preventDefault();
    }
  });

  window.addEventListener(
    'keydown',
    (e) => {
      if (mode !== 'kiosk') return;

      const key = e.key;
      const isFunctionKey = /^F([1-9]|1[0-2])$/.test(key);
      const isBlockedCombo =
        e.ctrlKey ||
        e.altKey ||
        e.metaKey ||
        isFunctionKey ||
        key === 'Tab' ||
        key === 'Escape' ||
        key === 'ContextMenu';

      if (isBlockedCombo) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      if (!kioskModal.classList.contains('hidden')) {
        if (key === 'Enter' || key === ' ') {
          e.preventDefault();
          advanceModalQueue();
        }
        return;
      }

      if (key.length === 1 && !/^[a-zA-Z0-9_-]$/.test(key)) {
        e.preventDefault();
      }
    },
    true
  );

  // =========================================================================
  // KIOSK MODAL QUEUE
  // =========================================================================
  function showKioskModalMessages(messages, type = 'success') {
    modalQueue = [...messages];
    kioskModalBox.classList.remove('error', 'success');
    kioskModalBox.classList.add(type === 'error' ? 'error' : 'success');
    kioskModalHeader.textContent = type === 'error' ? 'BunkerWeekend – Fehler' : 'BunkerWeekend';
    advanceModalQueue();
  }

  function advanceModalQueue() {
    if (modalAutoCloseTimer) {
      clearTimeout(modalAutoCloseTimer);
      modalAutoCloseTimer = null;
    }

    if (modalQueue.length === 0) {
      kioskModal.classList.add('hidden');
      kioskInput.value = '';
      focusKioskInput();
      return;
    }

    const nextItem = modalQueue.shift();
    kioskModalPrimary.textContent = nextItem.primary || '';
    kioskModalSecondary.textContent = nextItem.secondary || '';
    kioskModal.classList.remove('hidden');
    kioskModalOk.focus();

    if (modalQueue.length === 0) {
      modalAutoCloseTimer = setTimeout(() => {
        advanceModalQueue();
      }, 4500);
    }
  }

  kioskModalOk.addEventListener('click', () => {
    advanceModalQueue();
  });

  // =========================================================================
  // KIOSK SUBMISSION HANDLER
  // =========================================================================
  kioskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pwd = kioskInput.value.trim();
    if (!pwd) return;

    kioskInput.value = '';
    enterFullscreen();

    const result = handleKioskSubmit(pwd);
    if (!result) return;

    if (result.isAdminUnlock) {
      switchToAdminMode();
      return;
    }

    if (!result.ok) {
      showKioskModalMessages(
        [{ primary: result.message, secondary: 'Bitte überprüfe dein persönliches Kennwort.' }],
        'error'
      );
      return;
    }

    const queue = [{ primary: result.primaryMessage, secondary: result.secondaryMessage }];
    if (Array.isArray(result.lastManMessages)) {
      for (const msg of result.lastManMessages) {
        queue.push({
          primary: msg,
          secondary: 'Alle Teilnehmer haben ihre letzte Schätzung eingetragen!'
        });
      }
    }

    showKioskModalMessages(queue, 'success');
    updateKioskUI();
  });

  function updateKioskUI() {
    document.body.classList.toggle('kiosk-hide-cursor', Boolean(state.settings.kioskHideCursor && mode === 'kiosk'));
    kioskInput.type = state.settings.maskPasswordInput ? 'password' : 'text';

    const ev = computeEvaluation(state);
    kioskLockedBanner.classList.toggle('hidden', !ev.summary.allActiveFinished);
  }

  // =========================================================================
  // MODE SWITCHING (KIOSK <-> ADMIN)
  // =========================================================================
  function switchToAdminMode() {
    mode = 'admin';
    document.body.classList.remove('kiosk-active', 'kiosk-hide-cursor');
    kioskView.classList.add('hidden');
    adminView.classList.remove('hidden');
    if (document.fullscreenElement && document.exitFullscreen) {
      try {
        document.exitFullscreen();
      } catch {
        // ignore
      }
    }
    renderAdminDashboard();
  }

  function switchToKioskMode() {
    mode = 'kiosk';
    adminView.classList.add('hidden');
    kioskView.classList.remove('hidden');
    document.body.classList.add('kiosk-active');
    updateKioskUI();
    enterFullscreen();
    focusKioskInput();
  }

  btnReturnKiosk.addEventListener('click', switchToKioskMode);

  // =========================================================================
  // ADMIN DASHBOARD RENDERING
  // =========================================================================
  function renderAdminDashboard() {
    const ev = computeEvaluation(state);
    const { settings } = state;
    const { summary, ranking, matrix, participants, targets } = ev;

    adminTitle.textContent = `${settings.eventTitle} – Administration & Auswertung`;
    adminSummaryLine.textContent = `${summary.activeParticipants} aktive Teilnehmer | ${summary.totalTargets} Soll-Zeiten | ${summary.totalEstimationsSubmitted} von ${summary.totalEstimationsExpected} Schätzungen abgegeben`;

    renderPodiumAndRanking(ranking);
    renderLineChart(participants, targets);
    renderComparisonChart(participants, targets);
    renderMatrixTable(matrix, participants);
    renderParticipantDetailsTab(participants, targets);
    renderTargetsTab(targets);
    renderParticipantsTab(state.participants, targets, ev.participants);
    renderSettingsForm(settings);
  }

  function renderPodiumAndRanking(ranking) {
    const podiumContainer = document.getElementById('podium-container');
    podiumContainer.innerHTML = '';

    const medals = ['🥇', '🥈', '🥉'];
    ranking.slice(0, 3).forEach((r, idx) => {
      const card = document.createElement('div');
      card.className = `podium-card rank-${idx + 1}`;
      card.innerHTML = `
        <div class="podium-medal">${medals[idx]}</div>
        <div class="podium-info">
          <h3>${r.rank}. ${escapeHtml(r.name)}</h3>
          <p>Daneben: ${r.sumDiffWithMultiFormatted}</p>
          <small style="color: var(--text-muted)">${r.completedCount}/${r.totalTargets} Schätzungen (Ø ${r.avgDiffFormatted})</small>
        </div>
      `;
      podiumContainer.appendChild(card);
    });

    const tbody = document.querySelector('#ranking-table tbody');
    tbody.innerHTML = '';

    for (const r of ranking) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>#${r.rank}</strong></td>
        <td><strong>${escapeHtml(r.name)}</strong></td>
        <td><span class="badge">${r.completedCount} / ${r.totalTargets}</span></td>
        <td class="mono"><strong>${r.sumDiffWithMultiFormatted}</strong></td>
        <td class="mono">${r.sumDiffWithoutMultiFormatted}</td>
        <td class="mono">${r.avgDiffFormatted}</td>
        <td class="mono" style="color: var(--text-muted)">${r.excelTotalWithMulti.toFixed(6)}</td>
        <td>
          <button type="button" class="btn btn-secondary btn-sm" data-jump-participant="${r.id}">
            Details ansehen
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    }

    tbody.querySelectorAll('[data-jump-participant]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const pid = btn.getAttribute('data-jump-participant');
        activateTab('tab-details');
        const select = document.getElementById('detail-participant-select');
        select.value = pid;
        select.dispatchEvent(new Event('change'));
      });
    });
  }

  
  // 10 distinct vibrant colors for participant lines
  const PARTICIPANT_COLORS = [
    '#f59e0b', '#3b82f6', '#10b981', '#ec4899', '#8b5cf6',
    '#06b6d4', '#ef4444', '#84cc16', '#eab308', '#14b8a6'
  ];

  function getParticipantColor(idx) {
    return PARTICIPANT_COLORS[idx % PARTICIPANT_COLORS.length];
  }

    function renderLineChart(participants, targets) {
    const wrapper = document.getElementById('line-chart-wrapper');
    const legendEl = document.getElementById('line-chart-legend');
    if (!wrapper || !legendEl) return;

    const activeList = participants.filter((p) => p.active || p.completedCount > 0);
    if (activeList.length === 0 || targets.length === 0) {
      wrapper.innerHTML = '<p class="help-text">Noch keine Daten für das Liniendiagramm vorhanden.</p>';
      legendEl.innerHTML = '';
      return;
    }

    // Sort activeList by ranking for legend consistency
    const sorted = [...activeList].sort((a, b) => a.sumDiffSecWithMulti - b.sumDiffSecWithMulti);

    // 1. Render Colored Interactive Legend Chips
    let legendHtml = '';
    sorted.forEach((p, idx) => {
      const color = getParticipantColor(idx);
      const isHighlighted = highlightedParticipantId === p.id;
      const isDimmed = highlightedParticipantId !== null && !isHighlighted;

      // Color badge with 18% background of participant line color and solid border
      const chipBg = isHighlighted ? color : 'rgba(' + hexToRgb(color) + ', 0.16)';
      const chipBorder = color;
      const textColor = isHighlighted ? '#ffffff' : color;
      const subTextColor = isHighlighted ? '#f3f4f6' : 'rgba(255,255,255,0.65)';

      legendHtml += `
        <button type="button" class="legend-chip ${isHighlighted ? 'active' : ''} ${isDimmed ? 'dimmed' : ''}"
          data-legend-p="${p.id}"
          style="background:${chipBg}; border:1.5px solid ${chipBorder}; color:${textColor};"
          title="${escapeHtml(p.name)} im Liniengraph fokussieren">
          <span class="legend-chip-dot" style="background:${color}"></span>
          <span style="font-weight:800;">${escapeHtml(p.name)}</span>
          <span style="font-size:0.76rem; color:${subTextColor}; margin-left:3px;">${p.sumDiffWithMultiFormatted}</span>
        </button>
      `;
    });
    legendEl.innerHTML = legendHtml;

    legendEl.querySelectorAll('[data-legend-p]').forEach((chip) => {
      chip.addEventListener('click', () => {
        const pId = Number(chip.getAttribute('data-legend-p'));
        highlightedParticipantId = (highlightedParticipantId === pId) ? null : pId;
        renderLineChart(participants, targets);
      });
    });

    // 2. Setup Dimensions (extended right margin for in-graph participant labels)
    const svgWidth = 920;
    const svgHeight = 390;
    const padLeft = 70;
    const padRight = 105; // Space for participant name badges at line ends
    const padTop = 32;
    const padBottom = 60;
    const plotWidth = svgWidth - padLeft - padRight;
    const plotHeight = svgHeight - padTop - padBottom;

    // 3. Compute Value Bounds (in minutes)
    let minMin = 0;
    let maxMin = 0;

    sorted.forEach((p) => {
      p.rows.forEach((r) => {
        if (r.completed) {
          const valMin = lineChartMode === 'signed'
            ? r.signedDiffSeconds / 60
            : r.diffSeconds / 60;
          if (valMin < minMin) minMin = valMin;
          if (valMin > maxMin) maxMin = valMin;
        }
      });
    });

    if (minMin === 0 && maxMin === 0) {
      maxMin = 60;
      minMin = lineChartMode === 'signed' ? -60 : 0;
    } else {
      const span = Math.max(20, maxMin - minMin);
      maxMin = Math.ceil(maxMin + span * 0.1);
      if (lineChartMode === 'signed') {
        minMin = Math.floor(minMin - span * 0.1);
      } else {
        minMin = 0;
      }
    }

    if (lineChartMode === 'signed') {
      const absMax = Math.max(Math.abs(minMin), Math.abs(maxMin));
      minMin = -absMax;
      maxMin = absMax;
    }

    const valToY = (val) => {
      if (maxMin === minMin) return padTop + plotHeight / 2;
      return padTop + plotHeight - ((val - minMin) / (maxMin - minMin)) * plotHeight;
    };

    const stepToX = (stepIndex) => {
      if (targets.length <= 1) return padLeft + plotWidth / 2;
      return padLeft + ((stepIndex - 1) / (targets.length - 1)) * plotWidth;
    };

    // 4. Build SVG Grid & Axes
    let svgContent = '';

    // Horizontal Grid Lines & Y-Axis Labels
    const numYGrid = 6;
    for (let i = 0; i <= numYGrid; i++) {
      const gridVal = minMin + (i / numYGrid) * (maxMin - minMin);
      const yPos = valToY(gridVal);
      const isZero = Math.abs(gridVal) < 0.001;

      svgContent += `
        <line x1="${padLeft}" y1="${yPos}" x2="${padLeft + plotWidth}" y2="${yPos}"
          stroke="${isZero ? '#10b981' : '#262d33'}"
          stroke-width="${isZero ? 2 : 1}"
          stroke-dasharray="${isZero ? '6,4' : '3,3'}" />
        <text x="${padLeft - 10}" y="${yPos + 4}"
          fill="${isZero ? '#34d399' : '#9ca3af'}"
          font-size="11" font-family="monospace" text-anchor="end" font-weight="${isZero ? '800' : '500'}">
          ${isZero ? '0 (Soll)' : (gridVal > 0 ? '+' : '') + Math.round(gridVal) + 'm'}
        </text>
      `;
    }

    // Vertical Target Lines & X-Axis Labels
    targets.forEach((t) => {
      const xPos = stepToX(t.stepIndex);
      const dateLabel = formatDisplayDateTime(t.targetTime);
      const shortTime = dateLabel.split(' ')[1] ? dateLabel.split(' ')[1].slice(0, 5) : '';
      const shortDay = dateLabel.split(' ')[0] ? dateLabel.split(' ')[0].slice(0, 5) : '';

      svgContent += `
        <line x1="${xPos}" y1="${padTop}" x2="${xPos}" y2="${padTop + plotHeight}"
          stroke="#262d33" stroke-width="1" />
        <circle cx="${xPos}" cy="${padTop + plotHeight}" r="3" fill="#4b5563" />
        <text x="${xPos}" y="${padTop + plotHeight + 18}"
          fill="#f3f4f6" font-size="11" font-weight="700" text-anchor="middle">
          #${t.stepIndex}
        </text>
        <text x="${xPos}" y="${padTop + plotHeight + 32}"
          fill="#9ca3af" font-size="10" font-family="monospace" text-anchor="middle">
          ${shortDay} ${shortTime}
        </text>
      `;
    });

    // 5. Calculate non-overlapping Y positions for line-end labels
    const endLabels = [];
    sorted.forEach((p, idx) => {
      const color = getParticipantColor(idx);
      const isHighlighted = highlightedParticipantId === p.id;
      const isDimmed = highlightedParticipantId !== null && !isHighlighted;
      const strokeWidth = isHighlighted ? 4 : 2.5;
      const opacity = isDimmed ? 0.15 : (isHighlighted ? 1 : 0.88);

      const points = [];
      p.rows.forEach((r) => {
        if (r.completed) {
          const valMin = lineChartMode === 'signed'
            ? r.signedDiffSeconds / 60
            : r.diffSeconds / 60;
          points.push({
            x: stepToX(r.stepIndex),
            y: valToY(valMin),
            stepIndex: r.stepIndex,
            targetLabel: r.targetLabel,
            valMin,
            diffFormatted: r.diffFormatted,
            directionLabel: r.directionLabel,
            signedDiffFormatted: r.signedDiffFormatted,
            clock: r.estimatedClock
          });
        }
      });

      if (points.length > 0) {
        const lastPt = points[points.length - 1];
        endLabels.push({
          participantId: p.id,
          name: p.name,
          color,
          lastX: lastPt.x,
          rawY: lastPt.y,
          displayY: lastPt.y,
          isHighlighted,
          isDimmed
        });
      }

      svgContent += `<g class="chart-series-group" data-series-p="${p.id}">`;

      // Glow backdrop line when highlighted
      if (isHighlighted && points.length > 1) {
        let pathD = `M ${points[0].x} ${points[0].y}`;
        for (let i = 1; i < points.length; i++) pathD += ` L ${points[i].x} ${points[i].y}`;
        svgContent += `
          <path d="${pathD}" fill="none" stroke="${color}" stroke-width="8" opacity="0.25" stroke-linecap="round" />
        `;
      }

      // Main line
      if (points.length > 1) {
        let pathD = `M ${points[0].x} ${points[0].y}`;
        for (let i = 1; i < points.length; i++) {
          pathD += ` L ${points[i].x} ${points[i].y}`;
        }
        svgContent += `
          <path class="chart-line" d="${pathD}" fill="none" stroke="${color}" stroke-width="${strokeWidth}"
            opacity="${opacity}" stroke-linecap="round" stroke-linejoin="round" />
        `;
      }

      // Interactive Point Circles
      points.forEach((pt) => {
        svgContent += `
          <circle class="chart-node-circle" cx="${pt.x}" cy="${pt.y}" r="${isHighlighted ? 6.5 : 4.5}"
            fill="${color}" stroke="#0f1316" stroke-width="2" opacity="${opacity}"
            style="cursor:pointer;"
            data-pt-name="${escapeHtml(p.name)}"
            data-pt-step="#${pt.stepIndex} (${escapeHtml(pt.targetLabel)})"
            data-pt-diff="${escapeHtml(pt.signedDiffFormatted)}"
            data-pt-clock="Ist: ${escapeHtml(pt.clock)}"
            data-pt-dir="${escapeHtml(pt.directionLabel)}" />
        `;
      });

      svgContent += `</g>`;
    });

    // 6. Draw End-of-Line Participant Badges inside the graph
    // Sort labels vertically to prevent overlap
    endLabels.sort((a, b) => a.rawY - b.rawY);
    for (let i = 1; i < endLabels.length; i++) {
      if (endLabels[i].displayY - endLabels[i - 1].displayY < 18) {
        endLabels[i].displayY = endLabels[i - 1].displayY + 18;
      }
    }

    endLabels.forEach((lbl) => {
      const isHigh = lbl.isHighlighted;
      const isDim = lbl.isDimmed;
      const opacity = isDim ? 0.25 : 1;
      const labelX = padLeft + plotWidth + 8;
      const labelY = Math.min(padTop + plotHeight + 10, Math.max(padTop - 8, lbl.displayY));

      svgContent += `
        <g class="chart-series-group" data-series-p="${lbl.participantId}" opacity="${opacity}">
          <line x1="${lbl.lastX}" y1="${lbl.rawY}" x2="${labelX}" y2="${labelY}"
            stroke="${lbl.color}" stroke-width="1" stroke-dasharray="2,2" opacity="0.6" />
          <rect x="${labelX + 2}" y="${labelY - 10}" width="88" height="20" rx="10"
            fill="${isHigh ? lbl.color : '#161b20'}"
            stroke="${lbl.color}" stroke-width="${isHigh ? 2 : 1.5}" />
          <circle cx="${labelX + 11}" cy="${labelY}" r="4" fill="${isHigh ? '#fff' : lbl.color}" />
          <text x="${labelX + 20}" y="${labelY + 4}"
            fill="${isHigh ? '#ffffff' : lbl.color}"
            font-size="11" font-weight="800">
            ${escapeHtml(lbl.name)}
          </text>
        </g>
      `;
    });

    // 7. Outer frame & Axis titles
    svgContent += `
      <rect x="${padLeft}" y="${padTop}" width="${plotWidth}" height="${plotHeight}"
        fill="none" stroke="#2d353c" stroke-width="1" />
      <text x="${padLeft}" y="${padTop - 12}" fill="#9ca3af" font-size="11" font-weight="600">
        ${lineChartMode === 'signed' ? 'Abweichung: Zu früh (-) / Zu spät (+) in Minuten' : 'Absolute Abweichung in Minuten'}
      </text>
      <text x="${padLeft + plotWidth}" y="${padTop + plotHeight + 48}" fill="#9ca3af" font-size="11" text-anchor="end">
        Soll-Zeiten (Chronologisch) →
      </text>
    `;

    wrapper.innerHTML = `
      <div style="position:relative;">
        <svg class="line-chart-svg" viewBox="0 0 ${svgWidth} ${svgHeight}">
          ${svgContent}
        </svg>
        <div id="chart-tooltip-box" class="chart-tooltip hidden"></div>
      </div>
    `;

    // 8. Connect SVG element clicks for highlighting
    const svgEl = wrapper.querySelector('.line-chart-svg');

    svgEl.querySelectorAll('.chart-series-group').forEach((grp) => {
      grp.addEventListener('click', () => {
        const pId = Number(grp.getAttribute('data-series-p'));
        highlightedParticipantId = (highlightedParticipantId === pId) ? null : pId;
        renderLineChart(participants, targets);
      });
    });

    // 9. Interactive Tooltips on Points
    const tooltipEl = document.getElementById('chart-tooltip-box');

    svgEl.querySelectorAll('circle[data-pt-name]').forEach((c) => {
      c.addEventListener('mouseenter', () => {
        const name = c.getAttribute('data-pt-name');
        const step = c.getAttribute('data-pt-step');
        const diff = c.getAttribute('data-pt-diff');
        const clock = c.getAttribute('data-pt-clock');
        const dir = c.getAttribute('data-pt-dir');
        const color = c.getAttribute('fill');

        tooltipEl.innerHTML = `
          <div style="font-weight:800; font-size:0.95rem; color:${color};">${name}</div>
          <div style="font-size:0.75rem; color:#9ca3af;">${step}</div>
          <div class="mono" style="font-weight:700; margin-top:4px; font-size:0.9rem;">Abweichung: ${diff}</div>
          <div style="font-size:0.75rem; color:#93c5fd; margin-top:2px;">${clock} | ${dir}</div>
        `;

        const rect = svgEl.getBoundingClientRect();
        const cx = parseFloat(c.getAttribute('cx'));
        const cy = parseFloat(c.getAttribute('cy'));
        const scaleX = rect.width / svgWidth;
        const scaleY = rect.height / svgHeight;

        tooltipEl.style.left = (cx * scaleX) + 'px';
        tooltipEl.style.top = (cy * scaleY) + 'px';
        tooltipEl.classList.remove('hidden');
      });

      c.addEventListener('mouseleave', () => {
        tooltipEl.classList.add('hidden');
      });
    });

    // 10. Wire Toggle Buttons
    const btnSigned = document.getElementById('btn-chart-mode-signed');
    const btnAbs = document.getElementById('btn-chart-mode-abs');

    if (btnSigned && !btnSigned.dataset.wired) {
      btnSigned.dataset.wired = 'true';
      btnSigned.addEventListener('click', () => {
        lineChartMode = 'signed';
        btnSigned.classList.add('active');
        if (btnAbs) btnAbs.classList.remove('active');
        const ev = computeEvaluation(state);
        renderLineChart(ev.participants, ev.targets);
      });
    }

    if (btnAbs && !btnAbs.dataset.wired) {
      btnAbs.dataset.wired = 'true';
      btnAbs.addEventListener('click', () => {
        lineChartMode = 'abs';
        btnAbs.classList.add('active');
        if (btnSigned) btnSigned.classList.remove('active');
        const ev = computeEvaluation(state);
        renderLineChart(ev.participants, ev.targets);
      });
    }
  }

  function hexToRgb(hex) {
    const clean = hex.replace('#', '');
    const num = parseInt(clean, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return r + ', ' + g + ', ' + b;
  }

  function renderComparisonChart(participants, targets) {
    const container = document.getElementById('chart-container');
    const activeList = participants.filter((p) => p.active || p.completedCount > 0);
    if (activeList.length === 0 || targets.length === 0) {
      container.innerHTML = '<p class="help-text">Noch keine Daten für das Diagramm vorhanden.</p>';
      return;
    }

    const colors = ['#f59e0b', '#3b82f6', '#10b981', '#ec4899', '#8b5cf6', '#06b6d4', '#ef4444'];
    const sorted = [...activeList].sort((a, b) => a.sumDiffSecWithMulti - b.sumDiffSecWithMulti);
    const maxSec = Math.max(60, ...sorted.map((p) => p.sumDiffSecWithMulti));

    let html = `<div style="display:flex; flex-wrap:wrap; gap:14px; margin-bottom:14px;">`;
    targets.forEach((t, idx) => {
      const color = colors[idx % colors.length];
      html += `
        <div style="display:flex; align-items:center; gap:6px; font-size:0.82rem;">
          <span style="display:inline-block; width:12px; height:12px; border-radius:3px; background:${color};"></span>
          <span>${escapeHtml(t.label)} (${formatDisplayDateTime(t.targetTime)})</span>
        </div>
      `;
    });
    html += `</div><div style="display:flex; flex-direction:column; gap:10px;">`;

    for (const p of sorted) {
      html += `
        <div style="display:grid; grid-template-columns: 120px 1fr 110px; align-items:center; gap:12px;">
          <div style="font-weight:700; font-size:0.9rem;">${escapeHtml(p.name)}</div>
          <div style="display:flex; height:24px; background:#101316; border-radius:6px; overflow:hidden; border:1px solid var(--border-color);">
      `;
      p.rows.forEach((r, idx) => {
        if (r.completed && r.weightedDiffSeconds > 0) {
          const widthPct = Math.max(0.5, (r.weightedDiffSeconds / maxSec) * 100);
          const color = colors[idx % colors.length];
          html += `
            <div
              title="${escapeHtml(p.name)} – ${escapeHtml(r.targetLabel)}: ${r.diffFormatted} (${r.directionLabel})"
              style="width:${widthPct.toFixed(2)}%; background:${color}; border-right:1px solid #111;"
            ></div>
          `;
        }
      });
      html += `
          </div>
          <div class="mono" style="text-align:right; font-weight:700; font-size:0.88rem;">
            ${p.sumDiffWithMultiFormatted}
          </div>
        </div>
      `;
    }
    html += `</div>`;
    container.innerHTML = html;
  }

  function renderMatrixTable(matrix, participants) {
    const activeList = participants.filter((p) => p.active || p.completedCount > 0);
    const thead = document.querySelector('#matrix-table thead');
    const tbody = document.querySelector('#matrix-table tbody');

    let headHtml = `<tr><th>Soll-Zeitpunkt</th><th>Multi</th>`;
    for (const p of activeList) {
      headHtml += `<th>${escapeHtml(p.name)}</th>`;
    }
    headHtml += `</tr>`;
    thead.innerHTML = headHtml;

    tbody.innerHTML = '';
    for (const row of matrix) {
      const tr = document.createElement('tr');
      let cellsHtml = `
        <td>
          <strong>${escapeHtml(row.label)}</strong><br/>
          <small class="mono" style="color:var(--text-muted)">${formatDisplayDateTime(row.targetTime)}</small>
        </td>
        <td class="mono">${row.multiplier.toFixed(2)}×</td>
      `;

      for (const p of activeList) {
        const cell = row.cells[p.name];
        if (!cell || !cell.completed) {
          cellsHtml += `<td class="mono" style="color:var(--text-muted)">—</td>`;
        } else {
          const isBest = row.bestParticipant === p.name;
          const badgeClass = cell.tooLateFlag === 0 ? 'badge-early' : 'badge-late';
          const dirShort = cell.tooLateFlag === 0 ? 'Früh (0)' : 'Spät (1)';
          cellsHtml += `
            <td class="mono ${isBest ? 'cell-best' : ''}">
              <div><strong>${cell.diffFormatted}</strong></div>
              <div style="font-size:0.75rem; color:var(--text-muted)">Ist: ${cell.estimatedClock}</div>
              <span class="${badgeClass}">${dirShort}</span>
            </td>
          `;
        }
      }

      tr.innerHTML = cellsHtml;
      tbody.appendChild(tr);
    }

    const sumTr = document.createElement('tr');
    sumTr.style.background = '#121619';
    let sumHtml = `<td colspan="2"><strong>Summe (inkl. Multiplikator)</strong></td>`;
    for (const p of activeList) {
      sumHtml += `<td class="mono"><strong>${p.sumDiffWithMultiFormatted}</strong></td>`;
    }
    sumTr.innerHTML = sumHtml;
    tbody.appendChild(sumTr);
  }

  function renderParticipantDetailsTab(participants, targets) {
    const select = document.getElementById('detail-participant-select');
    const prevVal = select.value || 'ALL';
    select.innerHTML = `<option value="ALL">Alle Teilnehmer untereinander anzeigen</option>`;
    for (const p of participants) {
      const opt = document.createElement('option');
      opt.value = String(p.id);
      opt.textContent = `${p.name} (${p.password}) – ${p.completedCount}/${targets.length}`;
      select.appendChild(opt);
    }
    if ([...select.options].some((o) => o.value === prevVal)) {
      select.value = prevVal;
    }

    const renderSheets = () => {
      const filterVal = select.value;
      const container = document.getElementById('participant-sheets-container');
      container.innerHTML = '';

      const list =
        filterVal === 'ALL'
          ? participants
          : participants.filter((p) => String(p.id) === String(filterVal));

      for (const p of list) {
        const card = document.createElement('div');
        card.className = 'participant-sheet-card';
        let rowsHtml = '';

        for (const r of p.rows) {
          const dirBadge = !r.completed
            ? `<span style="color:var(--text-muted)">Offen</span>`
            : r.tooLateFlag === 0
            ? `<span class="badge-early">0 – Zu früh (${r.signedDiffFormatted})</span>`
            : `<span class="badge-late">1 – Zu spät (${r.signedDiffFormatted})</span>`;

          rowsHtml += `
            <tr>
              <td><strong>#${r.stepIndex}</strong></td>
              <td class="mono">${r.completed ? escapeHtml(r.passwordEntered) : '—'}</td>
              <td class="mono">${r.completed ? formatDisplayDateTime(r.estimatedTime) : '—'}</td>
              <td class="mono">${formatDisplayDateTime(r.targetTime)}</td>
              <td class="mono"><strong>${r.diffFormatted}</strong></td>
              <td>${dirBadge}</td>
              <td class="mono">${r.multiplier.toFixed(2)}</td>
              <td class="mono"><strong>${r.weightedDiffFormatted}</strong></td>
              <td class="mono" style="color:var(--text-muted)">${r.completed ? r.excelDecimalDays.toFixed(6) : '—'}</td>
              <td>
                <button type="button" class="btn btn-secondary btn-sm" data-edit-est-p="${p.id}" data-edit-est-step="${r.stepIndex}" data-edit-est-time="${r.estimatedTime || r.targetTime}">
                  ✎ Bearbeiten
                </button>
                ${
                  r.completed
                    ? `<button type="button" class="btn btn-danger btn-sm" data-del-est="${r.estimationId}">✕</button>`
                    : ''
                }
              </td>
            </tr>
          `;
        }

        card.innerHTML = `
          <div class="participant-sheet-header">
            <div>
              <h3>Blatt «${escapeHtml(p.name)}» (Kennwort: <code>${escapeHtml(p.password)}</code>)</h3>
            </div>
            <div>
              <span class="badge">Summe ohne Multi: ${p.sumDiffWithoutMultiFormatted}</span>
              <span class="badge">Summe inkl. Multi: ${p.sumDiffWithMultiFormatted} (Excel: ${p.excelTotalWithMulti.toFixed(6)})</span>
            </div>
          </div>
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Nr.</th>
                  <th>Name / Code</th>
                  <th>Geschätzte Zeit (Tag & Uhrzeit)</th>
                  <th>Soll-Zeit</th>
                  <th>Differenz</th>
                  <th>ZuFrüh0 / Spät1</th>
                  <th>Multiplikator</th>
                  <th>TotalDifferenzUhrzeit</th>
                  <th>TotalDifferenzZahl</th>
                  <th>Aktion</th>
                </tr>
              </thead>
              <tbody>${rowsHtml}</tbody>
            </table>
          </div>
        `;
        container.appendChild(card);
      }

      container.querySelectorAll('[data-edit-est-p]').forEach((btn) => {
        btn.addEventListener('click', () => {
          openManualEstimationModal(
            btn.getAttribute('data-edit-est-p'),
            btn.getAttribute('data-edit-est-step'),
            btn.getAttribute('data-edit-est-time')
          );
        });
      });

      container.querySelectorAll('[data-del-est]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const estId = Number(btn.getAttribute('data-del-est'));
          if (!confirm('Diese Schätzung wirklich löschen?')) return;
          state.estimations = state.estimations.filter((e) => e.id !== estId);
          saveState();
          renderAdminDashboard();
        });
      });
    };

    select.onchange = renderSheets;
    renderSheets();
  }

  function renderTargetsTab(targets) {
    const tbody = document.querySelector('#targets-table tbody');
    tbody.innerHTML = '';

    for (const t of targets) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>#${t.stepIndex}</strong></td>
        <td>${escapeHtml(t.label)}</td>
        <td class="mono"><strong>${formatDisplayDateTime(t.targetTime)}</strong></td>
        <td class="mono">${Number(t.multiplier).toFixed(2)}×</td>
        <td>
          <button type="button" class="btn btn-secondary btn-sm" data-edit-target="${t.id}">✎ Bearbeiten</button>
          <button type="button" class="btn btn-danger btn-sm" data-del-target="${t.id}">🗑 Löschen</button>
        </td>
      `;
      tbody.appendChild(tr);
    }

    if (!document.getElementById('target-id').value) {
      const maxStep = targets.reduce((m, t) => Math.max(m, t.stepIndex), 0);
      document.getElementById('target-step').value = maxStep + 1;
    }

    tbody.querySelectorAll('[data-edit-target]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = Number(btn.getAttribute('data-edit-target'));
        const t = state.targets.find((x) => x.id === id);
        if (!t) return;
        document.getElementById('target-form-title').textContent = `Soll-Zeit #${t.stepIndex} bearbeiten`;
        document.getElementById('target-id').value = t.id;
        document.getElementById('target-step').value = t.stepIndex;
        document.getElementById('target-label').value = t.label;
        document.getElementById('target-datetime').value = t.targetTime;
        document.getElementById('target-multiplier').value = t.multiplier;
        document.getElementById('target-form-cancel').classList.remove('hidden');
      });
    });

    tbody.querySelectorAll('[data-del-target]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = Number(btn.getAttribute('data-del-target'));
        const t = state.targets.find((x) => x.id === id);
        if (!t) return;
        if (!confirm('Soll-Zeit wirklich löschen? Zugehörige Schätzungen dieser Runde werden ebenfalls entfernt.')) return;
        state.estimations = state.estimations.filter((e) => e.stepIndex !== t.stepIndex);
        state.targets = state.targets.filter((x) => x.id !== id);
        saveState();
        renderAdminDashboard();
      });
    });
  }

  function renderParticipantsTab(participants, targets, computedParticipants) {
    const tbody = document.querySelector('#participants-table tbody');
    tbody.innerHTML = '';

    for (const p of participants) {
      const computed = computedParticipants.find((cp) => cp.id === p.id);
      const completedCount = computed ? computed.completedCount : 0;
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${escapeHtml(p.name)}</strong></td>
        <td class="mono"><code>${escapeHtml(p.password)}</code></td>
        <td>
          ${
            p.active
              ? '<span class="badge badge-best">Aktiv</span>'
              : '<span class="badge" style="opacity:0.6">Inaktiv / Reserve</span>'
          }
        </td>
        <td class="mono">${completedCount} / ${targets.length}</td>
        <td>
          <button type="button" class="btn btn-secondary btn-sm" data-edit-p="${p.id}">✎ Bearbeiten</button>
          <button type="button" class="btn btn-danger btn-sm" data-del-p="${p.id}">🗑 Löschen</button>
        </td>
      `;
      tbody.appendChild(tr);
    }

    tbody.querySelectorAll('[data-edit-p]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = Number(btn.getAttribute('data-edit-p'));
        const p = state.participants.find((x) => x.id === id);
        if (!p) return;
        document.getElementById('participant-form-title').textContent = `Teilnehmer «${p.name}» bearbeiten`;
        document.getElementById('participant-id').value = p.id;
        document.getElementById('participant-name').value = p.name;
        document.getElementById('participant-password').value = p.password;
        document.getElementById('participant-active').value = String(Boolean(p.active));
        document.getElementById('participant-form-cancel').classList.remove('hidden');
      });
    });

    tbody.querySelectorAll('[data-del-p]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = Number(btn.getAttribute('data-del-p'));
        if (!confirm('Teilnehmer inklusive aller Schätzungen wirklich löschen?')) return;
        state.estimations = state.estimations.filter((e) => e.participantId !== id);
        state.participants = state.participants.filter((p) => p.id !== id);
        saveState();
        renderAdminDashboard();
      });
    });
  }

  function renderSettingsForm(settings) {
    document.getElementById('setting-event-title').value = settings.eventTitle || '';
    document.getElementById('setting-classic-messages').checked = Boolean(settings.classicMessages);
    document.getElementById('setting-last-man').checked = Boolean(settings.lastManStandingEasterEgg);
    document.getElementById('setting-mask-input').checked = Boolean(settings.maskPasswordInput);
    document.getElementById('setting-hide-cursor').checked = Boolean(settings.kioskHideCursor);
  }

  // =========================================================================
  // ADMIN INTERACTION & FORM HANDLERS
  // =========================================================================
  function activateTab(tabId) {
    document.querySelectorAll('.admin-tab').forEach((t) => {
      t.classList.toggle('active', t.getAttribute('data-tab') === tabId);
    });
    document.querySelectorAll('.tab-panel').forEach((panel) => {
      const isMatch = panel.id === tabId;
      panel.classList.toggle('active', isMatch);
      panel.classList.toggle('hidden', !isMatch);
    });
  }

  document.querySelectorAll('.admin-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      activateTab(btn.getAttribute('data-tab'));
    });
  });

  // Target Form
  const targetForm = document.getElementById('target-form');
  const targetFormCancel = document.getElementById('target-form-cancel');

  function resetTargetForm() {
    document.getElementById('target-form-title').textContent = 'Neue Soll-Zeit hinzufügen';
    document.getElementById('target-id').value = '';
    targetForm.reset();
    targetFormCancel.classList.add('hidden');
    const maxStep = state.targets.reduce((m, t) => Math.max(m, t.stepIndex), 0);
    document.getElementById('target-step').value = maxStep + 1;
    document.getElementById('target-multiplier').value = '1.0';
  }

  targetFormCancel.addEventListener('click', resetTargetForm);

  targetForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const idVal = document.getElementById('target-id').value;
    let dt = document.getElementById('target-datetime').value;
    if (dt.length === 16) dt += ':00';
    const stepIdx = Number(document.getElementById('target-step').value);
    const label = document.getElementById('target-label').value.trim();
    const multiplier = Number(document.getElementById('target-multiplier').value) || 1.0;

    if (idVal) {
      const targetId = Number(idVal);
      const t = state.targets.find((x) => x.id === targetId);
      if (t) {
        t.stepIndex = stepIdx;
        t.label = label;
        t.targetTime = dt;
        t.multiplier = multiplier;
      }
    } else {
      const nextId = state.targets.reduce((max, t) => Math.max(max, t.id || 0), 0) + 1;
      state.targets.push({ id: nextId, stepIndex: stepIdx, label, targetTime: dt, multiplier });
    }

    state.targets.sort((a, b) => a.stepIndex - b.stepIndex);
    saveState();
    resetTargetForm();
    renderAdminDashboard();
  });

  // Participant Form & Generator
  const participantForm = document.getElementById('participant-form');
  const participantFormCancel = document.getElementById('participant-form-cancel');
  const btnGenPassword = document.getElementById('btn-gen-password');

  btnGenPassword.addEventListener('click', () => {
    const rawName = document.getElementById('participant-name').value.trim() || 'Teilnehmer';
    const cleanName = rawName.replace(/[^a-zA-Z0-9]/g, '');
    const digits = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('participant-password').value = `${cleanName}${digits}`;
  });

  document.getElementById('participant-name').addEventListener('input', (e) => {
    const id = document.getElementById('participant-id').value;
    const pwdField = document.getElementById('participant-password');
    if (!id && !pwdField.value) {
      const clean = e.target.value.replace(/[^a-zA-Z0-9]/g, '');
      if (clean.length >= 2) {
        pwdField.placeholder = `z. B. ${clean}1234`;
      }
    }
  });

  function resetParticipantForm() {
    document.getElementById('participant-form-title').textContent = 'Neuen Teilnehmer anlegen';
    document.getElementById('participant-id').value = '';
    participantForm.reset();
    participantFormCancel.classList.add('hidden');
  }

  participantFormCancel.addEventListener('click', resetParticipantForm);

  participantForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const idVal = document.getElementById('participant-id').value;
    const name = document.getElementById('participant-name').value.trim();
    const password = document.getElementById('participant-password').value.trim();
    const active = document.getElementById('participant-active').value === 'true';

    if (idVal) {
      const pId = Number(idVal);
      const p = state.participants.find((x) => x.id === pId);
      if (p) {
        p.name = name;
        p.password = password;
        p.active = active;
      }
    } else {
      const nextId = state.participants.reduce((max, p) => Math.max(max, p.id || 0), 0) + 1;
      state.participants.push({ id: nextId, name, password, active });
    }

    saveState();
    resetParticipantForm();
    renderAdminDashboard();
  });

  document.getElementById('btn-copy-passwords').addEventListener('click', async () => {
    const lines = state.participants
      .filter((p) => p.active)
      .map((p) => `${p.name}: ${p.password}`);
    try {
      await navigator.clipboard.writeText(lines.join('\n'));
      alert('Kennwort-Liste wurde in die Zwischenablage kopiert!');
    } catch {
      alert('Kopieren fehlgeschlagen. Kennwörter:\n\n' + lines.join('\n'));
    }
  });

  // Manual Estimation Modal
  const adminEstModal = document.getElementById('admin-est-modal');
  const adminEstForm = document.getElementById('admin-est-form');

  function openManualEstimationModal(participantId = '', stepIndex = '', initialIso = '') {
    const pSelect = document.getElementById('manual-est-participant');
    const sSelect = document.getElementById('manual-est-step');
    pSelect.innerHTML = state.participants
      .map((p) => `<option value="${p.id}">${escapeHtml(p.name)} (${escapeHtml(p.password)})</option>`)
      .join('');
    sSelect.innerHTML = state.targets
      .map((t) => `<option value="${t.stepIndex}">#${t.stepIndex} – ${escapeHtml(t.label)} (${formatDisplayDateTime(t.targetTime)})</option>`)
      .join('');

    if (participantId) pSelect.value = String(participantId);
    if (stepIndex) sSelect.value = String(stepIndex);

    const defaultIso = initialIso || (state.targets[0] && state.targets[0].targetTime) || '2024-11-01T12:00:00';
    document.getElementById('manual-est-time').value = defaultIso;
    adminEstModal.classList.remove('hidden');
  }

  document.getElementById('btn-open-manual-est').addEventListener('click', () => {
    openManualEstimationModal();
  });

  document.getElementById('manual-est-cancel').addEventListener('click', () => {
    adminEstModal.classList.add('hidden');
  });

  adminEstForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let dt = document.getElementById('manual-est-time').value;
    if (dt.length === 16) dt += ':00';
    const participantId = Number(document.getElementById('manual-est-participant').value);
    const stepIndex = Number(document.getElementById('manual-est-step').value);

    const existing = state.estimations.find(
      (x) => x.participantId === participantId && x.stepIndex === stepIndex
    );

    if (existing) {
      existing.estimatedTime = dt;
    } else {
      const nextId = state.estimations.reduce((max, x) => Math.max(max, x.id || 0), 0) + 1;
      state.estimations.push({ id: nextId, participantId, stepIndex, estimatedTime: dt });
    }

    saveState();
    adminEstModal.classList.add('hidden');
    renderAdminDashboard();
  });

  // Settings Form
  document.getElementById('settings-form').addEventListener('submit', (e) => {
    e.preventDefault();
    state.settings.eventTitle = document.getElementById('setting-event-title').value.trim();
    state.settings.classicMessages = document.getElementById('setting-classic-messages').checked;
    state.settings.lastManStandingEasterEgg = document.getElementById('setting-last-man').checked;
    state.settings.maskPasswordInput = document.getElementById('setting-mask-input').checked;
    state.settings.kioskHideCursor = document.getElementById('setting-hide-cursor').checked;

    const newPwd = document.getElementById('setting-admin-password').value.trim();
    if (newPwd) {
      state.settings.adminPassword = newPwd;
    }

    saveState();
    document.getElementById('setting-admin-password').value = '';
    renderAdminDashboard();
    alert('Einstellungen gespeichert!');
  });

  // File System Access API (Live File Sync & Handle Persistence)
  document.getElementById('btn-link-live-file').addEventListener('click', async () => {
    if (!('showSaveFilePicker' in window)) {
      alert('Die File System Access API wird von diesem Browser nicht unterstützt. Verwende Microsoft Edge oder Google Chrome.');
      return;
    }
    try {
      if (liveBackupFileHandle) {
        const granted = await verifyPermission(liveBackupFileHandle, true);
        if (granted) {
          await syncToLinkedFile();
          alert(`Berechtigung für "${liveBackupFileHandle.name}" bestätigt! Live-Spiegelung ist aktiv.`);
          return;
        }
      }

      liveBackupFileHandle = await window.showSaveFilePicker({
        suggestedName: 'bunker-live-backup.json',
        types: [{ description: 'JSON Datei', accept: { 'application/json': ['.json'] } }]
      });

      // Persist handle in IndexedDB across restarts
      await idbSet(IDB_STORE_HANDLES, 'live_backup_handle', liveBackupFileHandle);
      await syncToLinkedFile();
      alert(`Auto-Backup-Datei "${liveBackupFileHandle.name}" erfolgreich verknüpft! Jeder Eintrag wird ab jetzt sofort auf die Festplatte gespiegelt.`);
    } catch (err) {
      if (err.name !== 'AbortError') {
        alert('Fehler beim Verknüpfen der Datei: ' + err.message);
      }
    }
  });

  document.getElementById('btn-unlink-live-file').addEventListener('click', async () => {
    if (!confirm('Verknüpfung zur Backup-Datei wirklich aufheben?')) return;
    liveBackupFileHandle = null;
    await idbDelete(IDB_STORE_HANDLES, 'live_backup_handle');
    updateFileStatusUI(false, 'Nicht verknüpft (Aktiv: LocalStorage + IndexedDB Dual-Store)');
    alert('Verknüpfung wurde aufgehoben.');
  });

  // Export & Import JSON
  function exportPayload() {
    const ev = computeEvaluation(state);
    return {
      version: state.version || "1.0",
      eventName: state.settings.eventTitle,
      exportedAt: toLocalIsoString(new Date()),
      settings: state.settings,
      targets: state.targets,
      participants: state.participants,
      estimations: state.estimations,
      evaluationSummary: {
        ranking: ev.ranking,
        matrix: ev.matrix
      }
    };
  }

  function triggerJsonExport() {
    const payload = exportPayload();
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const safeName = (state.settings.eventTitle || 'bunker-weekend').replace(/[^a-zA-Z0-9_-]/g, '_');
    a.href = url;
    a.download = `${safeName}_export.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  document.getElementById('btn-export-json').addEventListener('click', triggerJsonExport);
  btnExportJsonTop.addEventListener('click', triggerJsonExport);

  document.getElementById('btn-import-json').addEventListener('click', () => {
    const fileInput = document.getElementById('json-import-file');
    if (!fileInput.files || fileInput.files.length === 0) {
      alert('Bitte zuerst eine JSON-Datei auswählen.');
      return;
    }
    const file = fileInput.files[0];
    const includeEstimations = document.getElementById('json-import-with-estimations').checked;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const parsed = JSON.parse(evt.target.result);
        if (parsed.settings) state.settings = { ...state.settings, ...parsed.settings };
        if (Array.isArray(parsed.targets)) state.targets = parsed.targets;
        if (Array.isArray(parsed.participants)) state.participants = parsed.participants;
        if (includeEstimations && Array.isArray(parsed.estimations)) {
          state.estimations = parsed.estimations;
        } else if (!includeEstimations) {
          state.estimations = [];
        }
        saveState();
        fileInput.value = '';
        renderAdminDashboard();
        alert('JSON-Import erfolgreich durchgeführt!');
      } catch (err) {
        alert('Ungültige JSON-Datei: ' + err.message);
      }
    };
    reader.readAsText(file);
  });

  document.getElementById('btn-reset-estimations').addEventListener('click', () => {
    if (!confirm('Wirklich ALLE abgegebenen Schätzungen löschen? Teilnehmer und Soll-Zeiten bleiben erhalten.')) {
      return;
    }
    state.estimations = [];
    saveState();
    renderAdminDashboard();
    alert('Alle Schätzungen wurden zurückgesetzt. Bereit für den Start im Bunker!');
  });

  document.getElementById('btn-restore-2024').addEventListener('click', () => {
    if (!confirm('Original-Datensatz aus der Excel-Datei 2024 wiederherstellen?')) {
      return;
    }
    state = JSON.parse(JSON.stringify(SEED_2024));
    saveState();
    renderAdminDashboard();
    alert('2024er Datensatz aus der Excel-Datei wurde wiederhergestellt!');
  });

  // =========================================================================
  // INITIALIZATION (Async Dual-Store & File Handle Recovery)
  // =========================================================================
  (async function init() {
    await loadStateWithRecovery();
    requestWakeLock();
    updateKioskUI();
    focusKioskInput();

    // Periodic Background Disk Sync (every 5 minutes)
    setInterval(() => {
      syncToLinkedFile();
    }, 5 * 60 * 1000);
  })();

})();

