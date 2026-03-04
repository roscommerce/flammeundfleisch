# 🔥 Flamme & Fleisch – flammeundfleisch.de

Grill- & BBQ Affiliate-Website. Gebaut mit Next.js 14, TypeScript, Tailwind CSS. Hosting via Netlify.

---

## 🚀 Setup (einmalig)

### 1. Abhängigkeiten installieren
```bash
npm install
```

### 2. Lokal starten (Vorschau)
```bash
npm run dev
```
→ Öffne http://localhost:3000

### 3. Build für Produktion
```bash
npm run build
```
→ Erzeugt den `out/` Ordner

---

## 🌐 Deployment auf Netlify

1. GitHub Repo erstellen und Code pushen
2. Netlify → "Add new site" → "Import from Git"
3. Build command: `npm run build`
4. Publish directory: `out`
5. Domain: `flammeundfleisch.de` in Netlify verknüpfen

---

## 📁 Projektstruktur

```
app/
├── page.tsx              → Homepage
├── ratgeber/
│   ├── page.tsx          → Ratgeber-Übersicht
│   └── spanferkel/       → Spanferkel-Artikel
├── grills/               → Grill-Kategorien (noch auszubauen)
├── smoker/               → Smoker-Kategorien (noch auszubauen)
├── zubehoer/             → Zubehör-Kategorien (noch auszubauen)
├── impressum/            → Impressum
├── datenschutz/          → Datenschutz
└── affiliate-hinweis/    → Affiliate-Hinweis

components/
├── Header.tsx            → Navigation
├── Footer.tsx            → Footer
├── ProductCard.tsx       → Produkt-Karte mit Affiliate-Link
└── CookieBanner.tsx      → Cookie-Banner
```

---

## 💰 Amazon Affiliate Links eintragen

In den Produktkarten (`ProductCard`-Komponente) und direkt in den Seiten:

1. Bei Amazon PartnerNet einloggen: https://partnernet.amazon.de
2. Produkt suchen → "Kurzlink abrufen"
3. Link in der jeweiligen Seite ersetzen: `https://amzn.to/XXXXX` → echter Link

---

## ✍️ Neue Artikel anlegen

1. Ordner erstellen: `app/ratgeber/mein-thema/`
2. Datei anlegen: `page.tsx`
3. Am Spanferkel-Artikel orientieren als Vorlage

---

## 📊 SEO Tipps

- Jede Seite hat eigene `metadata` (Title + Description)
- Keyword in H1 und ersten 100 Wörtern
- Interne Links zu anderen Artikeln und Produktseiten setzen
- Bilder mit `alt`-Text versehen wenn hinzugefügt
