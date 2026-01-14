import { LanguageProvider } from "./components/LanguageContext.tsx";
import Home from "./pages/Home.tsx";

function App() {
  return (
      <LanguageProvider>
        <div className="min-h-screen bg-indigo-50 dark:bg-gray-900 text-gray-900 dark:text-white">
          <Home />
        </div>
      </LanguageProvider>
  );
}

export default App;