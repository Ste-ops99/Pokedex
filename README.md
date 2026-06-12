# Pokédex

Pokédex interattivo che copre tutte le 9 generazioni (1025 Pokémon). Filtri per generazione e per gioco, ordinamento multiplo, mini-giochi e modalità avventura.

## Funzionalità

### Pokédex
- **1025 Pokémon** con artwork ufficiale da PokéAPI
- **Filtro per generazione** (Gen I–IX + Tutte)
- **Filtro per gioco** (Rosso/Blu → Scarlatto/Violetto) — mostra solo i Pokémon presenti in quel gioco
- **Filtro per tipo** (18 tipi) e per categoria (Leggendari, Misteriosi, Pseudo-legg., Starter)
- **Ordinamento**: N° ↑↓, A→Z / Z→A, Attacco ↓, Velocità ↓, HP ↓
- Badge **★ Starter** e **◆ Pseudo-legg.** sulle tile
- Ricerca per nome, sprite retro toggle, preferiti, confronto tra Pokémon
- **🎲 Pokémon casuale** — apre un Pokémon a caso tra quelli caricati
- **🏆 Tier List** drag & drop (tier S/A/B/C/D) con salvataggio automatico in `localStorage`
- **Scroll reveal** — le card entrano in scena solo quando visibili (IntersectionObserver)
- **Nomi italiani** sulle card (caricati in cache all'apertura del modal)
- **URL condivisibili** — `index.html#charizard` apre direttamente il modal

### Modal dettaglio
- Nomi in 8 lingue (🇮🇹 🇬🇧 🇯🇵 🇫🇷 🇩🇪 🇰🇷 🇨🇳 🇪🇸)
- **Forme alternative** (Mega, Alola, Galar, Hisui…)
- **Catena evolutiva ramificata** — gestisce Eevee, Tyrogue e tutti i casi multipli
- Pulsante **🔗 Copia link** per condividere il Pokémon
- Navigazione con ← → da tastiera tra i Pokémon filtrati
- Verso originale e 8-bit, toggle shiny/retro sprite, carta TCG

### Mini-giochi
- **Chi è?** — indovina il Pokémon dalla sagoma
- **Quiz Debolezze** — indovina il tipo debole

### Avventura — "Le Cronache di Velmora"
Avventura narrativa a scelte multiple con conseguenze, tono serio/epico.
- **Storia originale** in 5 capitoli: il mistero del "Risveglio" (la Cometa millenaria), l'Ordine del Sigillo (Team cattivo), il rivale Kael, Jirachi il Pokémon dei Desideri
- **Scelte a bivi con conseguenze**: le decisioni si memorizzano (sistema di flag) e sbloccano dialoghi, strade e finali diversi
- **3 finali** (Custode / Sigillatore / Domatore) in base a morale, scelte e rapporto col rivale
- **Spawn tematici per zona**: ogni luogo pesca Pokémon da tipi coerenti ma di **qualunque generazione** (squadre gen-miste)
- **Combattimento a turni** completo: mosse per tipo, efficacia, stati (burn/paralisi/sonno/veleno/gelo), cattura con Ball diverse, cambio Pokémon, borsa, fuga
- HUD con monete, Ball, Pokémon catturati, bussola morale e rapporto con Kael
- Salvataggio automatico con possibilità di riprendere o ricominciare

> Lo spawn pesato per zona è il compromesso scelto per avere gen miste *coerenti*: se cerchi un certo tipo, sai in quale zona andare.

## Avvio

```bash
python3 -m http.server 8081
# poi apri http://localhost:8081/Index.html
```

## Struttura file

```
Index.html      — markup, carica i tre JS nell'ordine corretto
Pokedex.js      — Pokédex: costanti, stato, filtri, modal, quiz, tier list
Adventure.js    — Motore di battaglia + sistema RPG (usato anche dalla storia)
Story.js        — Avventura narrativa "Le Cronache di Velmora" (nodi, scelte, finali)
Style.css       — tutti gli stili
```

> Ordine di caricamento: `Pokedex.js` → `Adventure.js` → `Story.js`. Story riusa le funzioni di battaglia di Adventure.

## Stack

Vanilla JS, zero dipendenze, zero build step.

## API

| Sorgente | Uso |
|----------|-----|
| [PokéAPI](https://pokeapi.co) | Lista Pokémon, sprite, stats, dati per gioco |

Gratuita, pubblica, senza API key. I dati vengono cachati in `localStorage`.

---

*Fan project — not affiliated with Nintendo or The Pokémon Company.*
