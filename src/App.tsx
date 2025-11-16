import { ThemeProvider } from "@/components/theme-provider";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="wordcounter-ui-theme">
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1 container mx-auto py-8 px-4">
          <Home />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
