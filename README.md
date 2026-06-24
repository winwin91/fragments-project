# „Fragments" – Portfolio Website

## Projektstruktur

```
fragments-site/
├── index.html      ← Hauptseite (Inhalt bearbeiten)
├── style.css       ← Alle Farben, Abstände, Schriften
├── script.js       ← Animationen (Thread, Reveal, Nav)
├── images/         ← Alle Fotos
│   ├── bewunderung-konzert.jpg
│   ├── bewunderung-handy.jpg
│   ├── vergleich-spiegel.jpg
│   ├── vergleich-waage.jpg
│   ├── tiefpunkt-tunnel.jpg
│   ├── tiefpunkt-messer.jpg
│   ├── tiefpunkt-schatten.jpg
│   ├── identitaet-klamotten.jpg
│   ├── identitaet-schild.jpg
│   ├── identitaet-kirche.jpg
│   ├── akzeptanz-pflaster.jpg
│   └── akzeptanz-natur.jpg
└── README.md       ← Diese Datei
```

---

## Inhalt bearbeiten (IntelliJ)

### Bildbeschreibungen eintragen
In `index.html` nach `<!-- BESCHREIBUNG -->` suchen oder direkt den Text
zwischen `<p class="photo-caption">` und `</p>` ersetzen.

### Kameraeinstellungen eintragen
In `index.html` die leeren `<span class="setting-val">` befüllen:

```html
<span class="setting-val">f/2.8</span>   <!-- Blende -->
<span class="setting-val">1/200s</span>  <!-- Belichtungszeit -->
<span class="setting-val">1600</span>    <!-- ISO -->
<span class="setting-val">35mm</span>    <!-- Brennweite -->
```

### Zitate ändern
In `index.html` den Text innerhalb `<blockquote class="chapter-quote">` ersetzen.

### Farben ändern
In `style.css` ganz oben unter `:root { }` die CSS-Variablen anpassen:
```css
--gold:   #c8a97e;   /* Akzentfarbe */
--text:   #e8e0d5;   /* Haupttextfarbe */
--black:  #080808;   /* Hintergrund */
```

---

## GitHub Pages einrichten (kostenlose Domain)

### Schritt 1 – GitHub-Account erstellen
Gehe auf **github.com** → „Sign up" → kostenlosen Account erstellen.

### Schritt 2 – Neues Repository anlegen
1. Klick oben rechts auf **„+"** → **„New repository"**
2. Name: `fragments-portfolio` (oder beliebig)
3. Sichtbarkeit: **Public** ← wichtig für kostenlose GitHub Pages
4. Klick **„Create repository"**

### Schritt 3 – Dateien hochladen
**Option A – direkt im Browser (einfach):**
1. Im neuen Repository auf **„uploading an existing file"** klicken
2. Den gesamten `fragments-site/` Ordnerinhalt hochladen
   (alle Dateien + den `images/` Ordner)
3. Commit-Nachricht: `"Initial upload"` → **„Commit changes"**

**Option B – mit IntelliJ (empfohlen für weiteres Bearbeiten):**
1. IntelliJ öffnen → **„Get from VCS"**
2. Die Repository-URL einfügen (z.B. `https://github.com/dein-name/fragments-portfolio`)
3. Projekt klonen → Dateien lokal bearbeiten → über Git pushen

### Schritt 4 – GitHub Pages aktivieren
1. Im Repository oben auf **„Settings"** klicken
2. Links im Menü: **„Pages"**
3. Unter „Branch": **`main`** auswählen, Ordner: **`/ (root)`**
4. Klick **„Save"**

### Schritt 5 – Fertig! 🎉
Nach 1–2 Minuten ist die Website live unter:
```
https://dein-github-name.github.io/fragments-portfolio/
```
Diese URL könnt ihr dem Professor schicken.

---

## Änderungen live stellen (nach erstem Setup)

### Im Browser (GitHub):
1. Datei im Repository anklicken → Stift-Icon (✏️) → bearbeiten → „Commit"
2. Nach ~30 Sekunden ist die Änderung live.

### In IntelliJ:
1. Datei bearbeiten & speichern
2. Oben: **Git → Commit** → Nachricht eingeben → **„Push"**
3. Nach ~30 Sekunden live.

---

## Neue Fotos hinzufügen

1. Foto in den `images/` Ordner legen (z.B. `akzeptanz-blumen.jpg`)
2. In `index.html` ein neues `<div class="photo-entry">` Block kopieren
   und `src="images/akzeptanz-blumen.jpg"` anpassen
3. Pushen → fertig.

---

*Portfolio für Digitale Bildbearbeitung & Fotografierung, SoSe 2026*
