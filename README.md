# 🚀 Richard Tekula - Full-Stack Developer Portfolio

> Modern, interactive portfolio showcasing 18+ production projects, AI integrations, and real-world development experience.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-000000?style=for-the-badge)](https://richard-tekula.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-FoxerBN-181717?style=for-the-badge&logo=github)](https://github.com/FoxerBN)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Richard_Tekula-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/richard-tekula-957b74326/)

---

## 👨‍💻 About This Portfolio

Interaktívne portfólio postavené na **Next.js 14** s podporou **internacionalizácie** (SK/EN), moderným dizajnom a integrovaným **AI chatbotom** odpovedajúcim na otázky o mojich projektoch a skúsenostiach.

### ✨ Hlavné featury:
- 🌍 **Dvojjazyčné** (Slovenčina / Angličtina)
- 🤖 **AI Chatbot** (OpenAI GPT-4) - odpovedá na otázky v reálnom čase
- 🎨 **Moderný dizajn** s Particle.js animáciami
- 📱 **Responzívny** (mobile-first prístup)
- ⚡ **Optimalizované** (Next.js SSG, lazy loading)
- 🔄 **Real-time updates** cez chatbot widget

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **UI Components:** Custom React components
- **Animations:** tsParticles, custom CSS animations
- **Icons:** FontAwesome

### Backend & Integration
- **AI Chatbot:** [My Chatbot](https://my-chatty.streamlit.app) (Flask + OpenAI API)
- **Deployment:** [Vercel](https://vercel.com)
- **Analytics:** (Optional) Vercel Analytics

### Internationalization
- **i18n:** Custom hook `useTranslation`
- **Locales:** SK (Slovenčina), EN (English)
- **JSON-based** translations (`/locales/sk.json`, `/locales/en.json`)

---

## 🚀 Quick Start

### Predpoklady
- Node.js 18+
- npm / yarn / pnpm / bun

### Inštalácia

```bash
# Klonuj repository
git clone https://github.com/FoxerBN/portfolio.git
cd portfolio

# Nainštaluj dependencies
npm install

# Spusti development server
npm run dev
```

Otvor [http://localhost:3000](http://localhost:3000) v prehliadači.

---

## 📁 Štruktúra projektu

```
portfolio/
├── app/                      # Next.js App Router
│   └── [locale]/            # Locale-based routing (sk/en)
│       └── page.tsx         # Hlavná stránka
├── components/              # React komponenty
│   ├── ChatBot.tsx         # AI chatbot widget
│   ├── DottedDivider.tsx   # Separator komponent
│   └── ParticleBackground.tsx
├── sections/                # Sekcie portfólia
│   ├── Info.tsx            # O mne
│   ├── Tools.tsx           # Nástroje
│   ├── Skills.tsx          # Zručnosti
│   ├── Experience.tsx      # Skúsenosti
│   └── Projects.tsx        # Projekty
├── hooks/                   # Custom React hooks
│   └── useTranslation.ts   # i18n hook
├── locales/                 # Preklady
│   ├── sk.json             # Slovenčina
│   └── en.json             # Angličtina
├── public/                  # Statické súbory
│   ├── Richard-Tekula.pdf  # CV
│   └── photos/             # Screenshoty projektov
└── styles/                  # Globálne CSS
    └── globals.css
```

---

## 🎨 Funkcionality

### 🤖 AI Chatbot Integration
- **Live chatbot** embedovaný do portfólia
- Odpovedá na otázky o mojich projektoch, skúsenostiach a tech stacku
- Používa OpenAI GPT-4 s RAG architektúrou
- Automatické čistenie starých konverzácií

### 🌍 Internacionalizácia
- Prepínanie medzi SK/EN (URL-based routing)
- JSON súbory pre jednoduché pridanie nových jazykov
- Dynamické načítavanie textov cez `useTranslation` hook

### 📱 Responzívny dizajn
- Mobile-first prístup
- Optimalizované pre všetky zariadenia
- Smooth scrolling a animácie

---

## 🧑‍💻 Development

### Dostupné príkazy

```bash
# Development server
npm run dev

# Production build
npm run build

# Spusti production server
npm run start

# Linting
npm run lint
```

### Pridanie novej sekcie

1. Vytvor nový komponent v `/sections/`
2. Pridaj preklady do `/locales/sk.json` a `/locales/en.json`
3. Importuj komponent do `/app/[locale]/page.tsx`

### Úprava prekladov

Jednoducho uprav JSON súbory v `/locales/`:

```json
{
  "newSection": {
    "title": "## Nová Sekcia",
    "description": "Popis sekcie"
  }
}
```

---

## 🌟 Featured Projects (v portfóliu)

- **Python Microservices** - FastAPI + Docker mikroslužby
- **AI Portfolio Chatbot** - Flask + OpenAI API ([Live](https://my-chatty.streamlit.app))
- **School Management API** - Node.js + PostgreSQL ([Live](https://school-api.railway.app))
- **MCP Server** - Vector + SQL database toolkit
- **Live Support Chat** - React + Socket.io real-time chat
- **Resume Checker** - n8n + AI automatizácia
- **Back-EX Starter** - Express.js boilerplate
- **Onepas** - React Native password manager
- **Login Template** - Next.js + NextAuth
- **Discord Bot** - TypeScript bot (500+ users)
- **+ 8 ďalších projektov**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📫 Contact

- **Portfolio:** [richard-tekula.vercel.app](https://richard-tekula.vercel.app)
- **Email:** richard.tekula@protonmail.com
- **GitHub:** [@FoxerBN](https://github.com/FoxerBN)
- **LinkedIn:** [Richard Tekula](https://linkedin.com/in/richard-tekula-957b74326/)

---

## 🙏 Acknowledgments

- **Next.js** - React framework
- **Vercel** - Deployment platform
- **TailwindCSS** - Styling
- **tsParticles** - Particle animations
- **FontAwesome** - Icons

---

<div align="center">

**Built with ❤️ using Next.js, React, and TailwindCSS**

⭐ Star this repo if you find it helpful!

</div>
