# Nigeria Tax Reform Q&A Assistant

An intelligent chatbot application designed to help users understand the 2024 Nigerian tax reform bills. This project provides clear, accessible answers about tax exemptions, new levies, VAT changes, and personal income tax implications.

## 🚀 Features

- **Interactive Chat Interface** - Ask questions about tax reforms in natural language
- **Smart Question Cards** - Pre-configured questions covering key tax topics:
  - Cryptocurrency taxation and transaction monitoring
  - VAT and digital compliance requirements
  - Company income tax changes
  - Freelance and digital income taxation
- **Dark Mode Support** - Toggle between light and dark themes
- **Chat History** - Save and revisit previous conversations
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Real-time AI Responses** - Powered by Google's Gemini AI

## 🛠️ Technology Stack

### Frontend

- **React 19.2** - Modern UI library
- **Vite 7.3** - Fast build tool and dev server
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **ESLint** - Code quality and consistency

### Backend

- **Python** - Backend API
- **FastAPI** - Modern web framework
- **Google Gemini AI** - Natural language processing
- **ChromaDB** - Vector database for document retrieval

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Python 3.12** (for backend)
- **Google Gemini API Key**

## 🚀 Frontend Setup

### 1. Navigate to Frontend Directory

```bash
cd "frontend docs/frontend-tax"
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `frontend-tax` directory:

```env
VITE_API_URL=http://localhost:8000
```

### 4. Start Development Server

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

## 🔌 Backend Setup & Connection

### 1. Navigate to Backend Directory

```bash
cd <backend-directory>
```

### 2. Create Python Virtual Environment

```bash
python -m venv .venv
.venv\Scripts\activate  # Windows
```

### 3. Install Backend Dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure Backend Environment

Create a `.env` file in the backend directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 5. Start Backend Server

```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The backend API will be available at `http://localhost:8000`

### 6. Verify Connection

- Frontend should automatically connect to `http://localhost:8000`
- Check browser console for any connection errors
- Test by asking a question in the chat interface

## 📁 Project Structure

```
Tax_Reform_Project/
├── frontend docs/
│   └── frontend-tax/
│       ├── src/
│       │   ├── components/     # React components
│       │   │   ├── Welcome.jsx
│       │   │   ├── ChatDisplay.jsx
│       │   │   ├── Sidebar.jsx
│       │   │   └── ...
│       │   ├── utils/          # Utility functions
│       │   ├── App.jsx         # Main app component
│       │   └── main.jsx        # Entry point
│       ├── public/             # Static assets
│       ├── index.html
│       ├── package.json
│       └── vite.config.js
├── backend/                    # Backend API (if applicable)
├── .gitignore
└── README.md
```

## 🎨 Available Scripts

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Frontend Deployment (Firebase Hosting)

```bash
npm run build
firebase deploy
```

### Backend Deployment

Deploy to your preferred platform (Heroku, Railway, Google Cloud, etc.) and update the `VITE_API_URL` environment variable accordingly.

## 🔧 Configuration

### Connecting to Different Backend

Update the `.env` file in the frontend directory:

```env
VITE_API_URL=https://your-backend-url.com
```

### API Endpoints

The frontend expects the following backend endpoints:

- `POST /chat` - Send chat messages and receive AI responses
- `GET /health` - Health check endpoint

## 🐛 Troubleshooting

### Frontend won't connect to backend

- Verify backend is running on `http://localhost:8000`
- Check `.env` file has correct `VITE_API_URL`
- Ensure no CORS issues (backend should allow frontend origin)

### Build errors

- Delete `node_modules` and run `npm install` again
- Clear Vite cache: `rm -rf .vite`

### Dark mode issues

- Clear browser cache
- Check browser console for errors

## 📝 License

This project is part of the Nigeria Tax Reform initiative.

## 👥 Contributing

Contributions are welcome! Please follow the existing code style and submit pull requests for review.

## 📧 Support

For questions or issues, please open an issue in the repository.
