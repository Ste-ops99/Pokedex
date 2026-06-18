/*!
 * BoxSystem.js — Patch per il sistema Box/PC
 * Da caricare DOPO Adventure.js e Story.js in index.html
 *
 * Cosa fa:
 *  1. Aggiunge game.box (array) allo stato di gioco
 *  2. Migrazioni automatiche per save esistenti senza .box
 *  3. Override di attemptCatch → se squadra piena, va nel Box
 *  4. Nuova schermata renderBox() con swap squadra ↔ box
 *  5. Patch a renderTeam() per mostrare i tab Squadra / Box
 */

(function () {
  /* ─────────────────────────────────────────────
     1. INIZIALIZZAZIONE BOX NELLO STATO DI GIOCO
  ───────────────────────────────────────────── */

  // Aspetta che il game object sia disponibile, poi migra
  function ensureBox() {
    if (typeof game === 'undefined') return;
    if (!Array.isArray(game.box)) game.box = [];
  }

  // Monkey-patch defaultGame per includere box nei nuovi salvataggi
  const _origDefaultGame = window.defaultGame;
  if (typeof _origDefaultGame === 'function') {
    window.defaultGame = function () {
      const g = _origDefaultGame();
      g.box = [];
      return g;
    };
  }

  // Migrazione save esistente
  ensureBox();

  /* ─────────────────────────────────────────────
     2. OVERRIDE attemptCatch — salva nel box se
        la squadra è piena
  ───────────────────────────────────────────── */

  const _origAttemptCatch = window.attemptCatch;

  window.attemptCatch = function (ballType) {
    // Intercettiamo il momento in cui il Pokémon verrebbe perso.
    // La logica originale già gestisce l'animazione e il calcolo;
    // ci inseriamo solo nel branch "squadra piena".

    if (typeof game === 'undefined' || !game.wildPokemon) return;

    // Salviamo il team length prima della chiamata originale
    const teamBefore = game.team.length;

    // Patch temporanea: sostituiamo la funzione showCatchSuccess
    // per intercettare il caso "squadra piena"
    const _origShowCatchSuccess = window.showCatchSuccess;

    window.showCatchSuccess = function (caughtPokemon) {
      ensureBox();

      if (game.team.length < 6) {
        // Slot libero → comportamento originale
        window.showCatchSuccess = _origShowCatchSuccess;
        return _origShowCatchSuccess(caughtPokemon);
      }

      // Squadra piena → manda nel Box
      const boxEntry = {
        pokemon:     caughtPokemon.pokemon,
        level:       caughtPokemon.level,
        hp:          caughtPokemon.hp,
        maxHp:       caughtPokemon.maxHp,
        ivs:         caughtPokemon.ivs,
        moves:       caughtPokemon.moves,
        status:      null,
        statusTurns: 0,
        xp:          0,
      };

      game.box.push(boxEntry);
      saveGame();

      // Ripristina showCatchSuccess per la prossima volta
      window.showCatchSuccess = _origShowCatchSuccess;

      // UI: overlay "Mandato nel Box"
      showBoxSentOverlay(caughtPokemon, boxEntry);
    };

    // Chiama la funzione originale (gestisce animazione pokéball, calcolo catch rate, ecc.)
    _origAttemptCatch(ballType);
  };

  /* Overlay "Pokémon mandato nel Box" */
  function showBoxSentOverlay(caughtPokemon, boxEntry) {
    ensureBox();

    const overlay = document.createElement('div');
    overlay.className = 'catch-result-overlay';
    overlay.style.zIndex = '9998';

    const card = document.createElement('div');
    card.className = 'catch-result-card';
    card.style.cssText = 'border-color:#4fc3f7;background:linear-gradient(135deg,rgba(79,195,247,0.12),var(--surface));';

    const title = document.createElement('div');
    title.className = 'catch-result-title';
    title.style.color = '#4fc3f7';
    title.textContent = '📦 Mandato nel Box!';

    const img = document.createElement('img');
    img.className = 'catch-result-img';
    img.src =
      caughtPokemon.pokemon.sprites?.other?.['official-artwork']?.front_default ||
      caughtPokemon.pokemon.sprites?.front_default || '';

    const nameEl = document.createElement('div');
    nameEl.className = 'catch-result-name';
    nameEl.textContent = capitalize(caughtPokemon.pokemon.name);

    const infoEl = document.createElement('div');
    infoEl.style.cssText = 'font-size:12px;color:var(--gray);font-weight:700;margin:4px 0 12px;';
    infoEl.textContent =
      caughtPokemon.pokemon.types.map(t => capitalize(t.type.name)).join(' / ') +
      ' · Lv' + caughtPokemon.level;

    const note = document.createElement('div');
    note.style.cssText =
      'font-family:var(--pixel);font-size:7px;color:var(--text-muted);' +
      'background:rgba(79,195,247,0.08);border:1px solid rgba(79,195,247,0.2);' +
      'border-radius:8px;padding:10px 14px;margin-bottom:16px;line-height:1.8;';
    note.innerHTML =
      'La squadra è piena (6/6).<br>' +
      capitalize(caughtPokemon.pokemon.name) + ' è nel Box.<br>' +
      '<span style="color:#4fc3f7;">Box: ' + game.box.length + ' Pokémon</span>';

    const btn = document.createElement('button');
    btn.className = 'who-next-btn';
    btn.textContent = 'OK →';
    btn.addEventListener('click', () => {
      overlay.remove();

      // Torna alla mappa
      game.battleLog = [];
      game.battleType = 'wild';
      game.phase = 'node_map';
      saveGame();
      renderAdventure();
    });

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(nameEl);
    card.appendChild(infoEl);
    card.appendChild(note);
    card.appendChild(btn);
    overlay.appendChild(card);
    document.body.appendChild(overlay);
  }

  /* ─────────────────────────────────────────────
     3. SCHERMATA BOX — renderBox()
  ───────────────────────────────────────────── */

  window.renderBox = function (container) {
    ensureBox();

    container.innerHTML = '';

    /* Header */
    const header = document.createElement('div');
    header.style.cssText =
      'display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;';

    const titleEl = document.createElement('div');
    titleEl.style.cssText =
      'font-family:var(--pixel);font-size:10px;color:#4fc3f7;letter-spacing:2px;';
    titleEl.textContent = '📦 BOX PC — ' + game.box.length + ' Pokémon';

    const backBtn = document.createElement('button');
    backBtn.className = 'explore-btn';
    backBtn.style.cssText = 'font-size:7px;padding:8px 12px;';
    backBtn.textContent = '← Squadra';
    backBtn.addEventListener('click', () => {
      game.phase = 'team';
      renderAdventure();
    });

    header.appendChild(titleEl);
    header.appendChild(backBtn);
    container.appendChild(header);

    /* Info squadra attuale (mini panel) */
    const squadraInfo = document.createElement('div');
    squadraInfo.style.cssText =
      'background:rgba(255,255,255,0.04);border:1px solid var(--card-border);' +
      'border-radius:12px;padding:12px 16px;margin-bottom:20px;' +
      'display:flex;gap:8px;flex-wrap:wrap;align-items:center;';

    const squadraLabel = document.createElement('span');
    squadraLabel.style.cssText =
      'font-family:var(--pixel);font-size:7px;color:var(--gold);margin-right:4px;';
    squadraLabel.textContent = 'SQUADRA:';
    squadraInfo.appendChild(squadraLabel);

    game.team.forEach((member, idx) => {
      const slot = document.createElement('div');
      slot.style.cssText =
        'display:flex;align-items:center;gap:4px;background:rgba(255,255,255,0.06);' +
        'border:1px solid var(--card-border);border-radius:8px;padding:4px 8px;' +
        'cursor:default;';
      slot.title = capitalize(member.pokemon.name) + ' Lv' + member.level;

      const slotImg = document.createElement('img');
      slotImg.src = member.pokemon.sprites?.front_default || '';
      slotImg.style.cssText = 'width:28px;height:28px;image-rendering:pixelated;';

      const slotName = document.createElement('span');
      slotName.style.cssText =
        'font-family:var(--pixel);font-size:6px;color:var(--white);';
      slotName.textContent = capitalize(member.pokemon.name).slice(0, 8);

      slot.appendChild(slotImg);
      slot.appendChild(slotName);
      squadraInfo.appendChild(slot);
    });

    // Slot vuoti
    for (let i = game.team.length; i < 6; i++) {
      const empty = document.createElement('div');
      empty.style.cssText =
        'width:40px;height:36px;border:1px dashed rgba(255,255,255,0.1);' +
        'border-radius:8px;opacity:0.3;';
      squadraInfo.appendChild(empty);
    }

    container.appendChild(squadraInfo);

    /* Griglia box */
    if (game.box.length === 0) {
      const empty = document.createElement('p');
      empty.style.cssText =
        'color:var(--gray);font-size:13px;font-weight:700;text-align:center;padding:60px 20px;';
      empty.textContent = 'Il Box è vuoto. Cattura più Pokémon!';
      container.appendChild(empty);
      return;
    }

    const grid = document.createElement('div');
    grid.style.cssText =
      'display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;';

    game.box.forEach((member, boxIdx) => {
      const card = buildBoxCard(member, boxIdx);
      grid.appendChild(card);
    });

    container.appendChild(grid);
  };

  /* Singola card nel box */
  function buildBoxCard(member, boxIdx) {
    ensureBox();

    const typeColor = (typeof getTypeColor === 'function')
      ? getTypeColor(member.pokemon.types[0].type.name)
      : '#888';

    const card = document.createElement('div');
    card.style.cssText =
      'background:var(--bg2);border-radius:14px;' +
      'border:1.5px solid ' + typeColor + '40;' +
      'padding:14px;display:flex;flex-direction:column;align-items:center;' +
      'gap:6px;position:relative;transition:transform 0.18s,border-color 0.18s;';

    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-3px)';
      card.style.borderColor = typeColor + 'aa';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.borderColor = typeColor + '40';
    });

    /* Sprite */
    const img = document.createElement('img');
    img.src =
      member.pokemon.sprites?.other?.['official-artwork']?.front_default ||
      member.pokemon.sprites?.front_default || '';
    img.style.cssText =
      'width:72px;height:72px;object-fit:contain;image-rendering:pixelated;';
    card.appendChild(img);

    /* Nome */
    const nameEl = document.createElement('div');
    nameEl.style.cssText =
      'font-weight:800;font-size:13px;color:var(--white);text-transform:capitalize;text-align:center;';
    nameEl.textContent = capitalize(member.pokemon.name);
    card.appendChild(nameEl);

    /* Tipi */
    const typesRow = document.createElement('div');
    typesRow.style.cssText = 'display:flex;gap:5px;';
    member.pokemon.types.forEach(t => {
      if (typeof createBadge === 'function') {
        typesRow.appendChild(createBadge(t.type.name));
      }
    });
    card.appendChild(typesRow);

    /* Livello e HP */
    const stats = document.createElement('div');
    stats.style.cssText =
      'font-family:var(--pixel);font-size:7px;color:var(--gold);text-align:center;';
    stats.textContent = 'Lv' + member.level + '  ·  HP ' + member.hp + '/' + member.maxHp;
    card.appendChild(stats);

    /* Barra HP */
    const hpBg = document.createElement('div');
    hpBg.style.cssText =
      'width:100%;height:5px;background:rgba(255,255,255,0.08);border-radius:5px;overflow:hidden;';
    const hpFill = document.createElement('div');
    const hpPct = Math.max(0, Math.round(member.hp / member.maxHp * 100));
    hpFill.style.cssText =
      'height:100%;border-radius:5px;transition:width 0.4s;width:' + hpPct + '%;' +
      'background:' + (hpPct > 50 ? '#66bb6a' : hpPct > 25 ? '#ffb300' : '#ef5350') + ';';
    hpBg.appendChild(hpFill);
    card.appendChild(hpBg);

    /* IVs medi */
    const ivAvg = Math.round(
      Object.values(member.ivs).reduce((a, b) => a + b, 0) / 6
    );
    const ivLabel = document.createElement('div');
    ivLabel.style.cssText =
      'font-size:10px;color:var(--gray);font-weight:700;';
    ivLabel.textContent =
      'IV: ' + ivAvg + '/31 — ' +
      (ivAvg >= 28 ? '⭐ Eccellente' : ivAvg >= 22 ? '✦ Buono' : ivAvg >= 15 ? 'Discreto' : 'Ordinario');
    card.appendChild(ivLabel);

    /* Pulsante: metti in squadra / scambia */
    const actionBtn = document.createElement('button');
    actionBtn.className = 'explore-btn';
    actionBtn.style.cssText =
      'width:100%;margin-top:4px;font-size:7px;padding:8px;';

    if (game.team.length < 6) {
      actionBtn.textContent = '➕ Metti in squadra';
      actionBtn.addEventListener('click', () => moveBoxToTeam(boxIdx, null));
    } else {
      // Squadra piena: mostra submenu per scegliere chi sostituire
      actionBtn.textContent = '↕ Scambia con squadra';
      actionBtn.addEventListener('click', () => showSwapMenu(card, member, boxIdx));
    }

    card.appendChild(actionBtn);

    /* Pulsante: rilascia */
    const releaseBtn = document.createElement('button');
    releaseBtn.className = 'explore-btn danger';
    releaseBtn.style.cssText =
      'width:100%;font-size:6px;padding:6px;margin-top:2px;';
    releaseBtn.textContent = '× Rilascia';
    releaseBtn.addEventListener('click', () => {
      if (confirm('Rilasciare ' + capitalize(member.pokemon.name) + '?')) {
        game.box.splice(boxIdx, 1);
        saveGame();
        game.phase = 'box';
        renderAdventure();
      }
    });
    card.appendChild(releaseBtn);

    return card;
  }

  /* Submenu swap: scegli quale membro della squadra sostituire */
  function showSwapMenu(parentCard, boxMember, boxIdx) {
    // Rimuovi eventuale menu già aperto
    document.querySelectorAll('.box-swap-menu').forEach(m => m.remove());

    const menu = document.createElement('div');
    menu.className = 'box-swap-menu';
    menu.style.cssText =
      'position:absolute;inset:0;border-radius:14px;' +
      'background:rgba(15,15,25,0.97);backdrop-filter:blur(4px);' +
      'display:flex;flex-direction:column;padding:10px;gap:6px;z-index:10;' +
      'overflow:auto;';

    const menuTitle = document.createElement('div');
    menuTitle.style.cssText =
      'font-family:var(--pixel);font-size:7px;color:#4fc3f7;' +
      'text-align:center;margin-bottom:4px;';
    menuTitle.textContent = 'Sostituisci con:';
    menu.appendChild(menuTitle);

    game.team.forEach((teamMember, teamIdx) => {
      const row = document.createElement('button');
      row.className = 'explore-btn';
      row.style.cssText =
        'display:flex;align-items:center;gap:8px;width:100%;' +
        'font-size:7px;padding:7px 10px;text-align:left;';

      const rowImg = document.createElement('img');
      rowImg.src = teamMember.pokemon.sprites?.front_default || '';
      rowImg.style.cssText = 'width:24px;height:24px;image-rendering:pixelated;flex-shrink:0;';

      const rowInfo = document.createElement('span');
      const hpPct = Math.round(teamMember.hp / teamMember.maxHp * 100);
      rowInfo.innerHTML =
        '<span style="color:var(--white);">' + capitalize(teamMember.pokemon.name) + '</span>' +
        ' <span style="color:var(--gold);">Lv' + teamMember.level + '</span>' +
        ' <span style="color:' + (hpPct > 50 ? '#66bb6a' : hpPct > 25 ? '#ffb300' : '#ef5350') + ';">' +
        hpPct + '%</span>';

      row.appendChild(rowImg);
      row.appendChild(rowInfo);
      row.addEventListener('click', () => {
        menu.remove();
        moveBoxToTeam(boxIdx, teamIdx);
      });
      menu.appendChild(row);
    });

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'explore-btn danger';
    cancelBtn.style.cssText = 'font-size:6px;padding:6px;margin-top:2px;';
    cancelBtn.textContent = '← Annulla';
    cancelBtn.addEventListener('click', () => menu.remove());
    menu.appendChild(cancelBtn);

    parentCard.style.position = 'relative';
    parentCard.appendChild(menu);
  }

  /* Sposta un Pokémon dal box alla squadra,
     opzionalmente sostituendo un membro esistente */
  function moveBoxToTeam(boxIdx, teamIdx) {
    ensureBox();

    const boxMember = game.box[boxIdx];
    if (!boxMember) return;

    if (teamIdx === null) {
      // Slot libero in squadra
      game.team.push(boxMember);
      game.box.splice(boxIdx, 1);
    } else {
      // Scambio: il membro della squadra va nel box
      const teamMember = game.team[teamIdx];
      game.team[teamIdx] = boxMember;
      game.box[boxIdx] = teamMember;

      // Se lo slot attivo era quello sostituito, resetta
      if (game.activeSlot === teamIdx && boxMember.hp <= 0) {
        const newActive = game.team.findIndex(p => p.hp > 0);
        game.activeSlot = newActive >= 0 ? newActive : 0;
      }
    }

    saveGame();
    game.phase = 'box';
    renderAdventure();
  }

  /* ─────────────────────────────────────────────
     4. PATCH renderTeam — aggiunge bottone "Box"
        e gestisce la phase 'box'
  ───────────────────────────────────────────── */

  // Intercetta renderAdventure per gestire la phase 'box'
  const _origRenderAdventure = window.renderAdventure;

  window.renderAdventure = function () {
    ensureBox();

    if (game.phase === 'box') {
      const container = document.getElementById('adventureContainer');
      if (container) {
        container.innerHTML = '';
        renderBox(container);
      }
      return;
    }

    _origRenderAdventure.apply(this, arguments);
  };

  // Patch renderTeam: aggiunge pulsante Box dopo la griglia
  const _origRenderTeam = window.renderTeam;

  window.renderTeam = function (container) {
    ensureBox();
    _origRenderTeam(container);

    // Trova il div con class team-panel (l'ultimo elemento aggiunto)
    // e appende il pulsante Box
    const teamPanel = container.querySelector('.team-panel') ||
                      container.lastElementChild;
    if (!teamPanel) return;

    const sep = document.createElement('div');
    sep.style.cssText =
      'border-top:1px solid var(--card-border);margin:20px 0 14px;';
    teamPanel.appendChild(sep);

    const boxRow = document.createElement('div');
    boxRow.style.cssText =
      'display:flex;align-items:center;justify-content:space-between;';

    const boxCount = document.createElement('div');
    boxCount.style.cssText =
      'font-family:var(--pixel);font-size:8px;color:#4fc3f7;';
    boxCount.textContent =
      '📦 Box PC: ' + game.box.length + ' Pokémon';
    boxRow.appendChild(boxCount);

    const boxBtn = document.createElement('button');
    boxBtn.className = 'explore-btn';
    boxBtn.style.cssText = 'font-size:7px;padding:10px 16px;border-color:rgba(79,195,247,0.3);color:#4fc3f7;';
    boxBtn.textContent = game.box.length > 0
      ? '📦 Gestisci Box (' + game.box.length + ')'
      : '📦 Box vuoto';
    boxBtn.disabled = false; // sempre cliccabile (per info o per mandare pok dalla squadra al box futuro)
    boxBtn.addEventListener('click', () => {
      game.prevPhase = 'team';
      game.phase = 'box';
      renderAdventure();
    });
    boxRow.appendChild(boxBtn);

    teamPanel.appendChild(boxRow);
  };

  /* ─────────────────────────────────────────────
     5. CSS AGGIUNTIVO per il Box
  ───────────────────────────────────────────── */

  const style = document.createElement('style');
  style.textContent = `
    /* Box overlay animazione entrata */
    #adventureContainer .box-swap-menu {
      animation: boxMenuIn 0.15s ease;
    }
    @keyframes boxMenuIn {
      from { opacity: 0; transform: scale(0.96); }
      to   { opacity: 1; transform: scale(1); }
    }

    /* Card box hover glow */
    .box-pokemon-card:hover {
      box-shadow: 0 6px 24px rgba(79,195,247,0.15);
    }

    /* Pill badge box count nella nav squadra */
    .box-count-badge {
      display: inline-block;
      background: rgba(79,195,247,0.15);
      border: 1px solid rgba(79,195,247,0.35);
      color: #4fc3f7;
      font-family: var(--pixel);
      font-size: 6px;
      padding: 2px 7px;
      border-radius: 20px;
      margin-left: 6px;
      vertical-align: middle;
    }
  `;
  document.head.appendChild(style);

  console.log('[BoxSystem] Caricato. Box Pokémon:', (typeof game !== 'undefined' ? game.box?.length : '—'));
})();
