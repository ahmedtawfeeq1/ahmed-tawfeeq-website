
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add Google Fonts (can be updated with your preferred fonts)
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
document.head.appendChild(link);

// Set data-theme attribute for dark mode by default
document.documentElement.classList.add('dark'); // optional initial flash-free default

createRoot(document.getElementById("root")!).render(<App />);
