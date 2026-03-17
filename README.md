# 💳 WalletFlow Dashboard V2

A full-stack wallet dashboard application built with **React**, **Vite**, and **Node.js (Express)**.  
This version presents a different visual identity and structure while completing the same wallet management assignment requirements.

---

## 🚀 Live Demo

- **Frontend:** https://wallet-dashboard-v2.vercel.app/
- **Backend:** https://wallet-dashboard-v2-backend.onrender.com

---
📂 GitHub Repository

👉 https://github.com/Sneha6202/wallet-dashboard-v2-project
🌐 Alternative (GitHub Pages)

👉 https://sneha6202.github.io/wallet-dashboard-v2/

## ✨ Features

### Frontend
- Responsive navy blue / black dashboard UI
- Sidebar-based navigation
- Modular reusable React components
- Wallet overview with live balance section
- Area chart for balance trend
- Search and filter support for transactions
- Delete transaction option
- Routed pages:
  - Overview
  - People
  - Preferences

### Backend
- REST APIs built with Express
- Add money to wallet
- Cash out from wallet
- Add linked bank account
- Fetch overview data
- Fetch transaction activity
- Delete transaction record

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, CSS
- **Backend:** Node.js, Express
- **Routing:** React Router
- **Charts:** Recharts
- **API Client:** Axios
- **Deployment:** Vercel, Render
- **Version Control:** Git, GitHub

---

## 📂 Project Structure

```text
wallet-dashboard-v2/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   └── vercel.json
└── server/
    ├── controllers/
    ├── routes/
    └── data/

📡 API Endpoints
Method	Endpoint	Description
GET	/api/overview	Get full wallet overview data
GET	/api/transactions	Get activity list
POST	/api/transactions/add-money	Add money to wallet
POST	/api/transactions/cash-out	Withdraw money from wallet
DELETE	/api/transactions/:id	Delete a transaction
POST	/api/accounts/bank	Add a linked bank account

⚙️ Local Setup
1. Clone the repository
git clone <your-repo-link>
cd wallet-dashboard-v2
2. Start backend
cd server
npm install
npm run dev
3. Start frontend
Open another terminal:
cd client
npm install
npm run dev

🌐 Deployment Notes
Frontend

--Deploy the client folder to Vercel.

Backend

--Deploy the server folder to Render.

Environment Variable

If using a deployed backend, set this in Vercel:

{VITE_API_URL=https://your-backend-url/api}
📌 Highlights

Clean component-based architecture
Different UI layout from a standard wallet dashboard
Responsive design
Real-time frontend/backend integration
Search, filter, and delete transaction support
Scalable structure for future enhancement
