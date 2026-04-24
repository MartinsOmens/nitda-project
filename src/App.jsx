import AppRouter from "./routes/AppRouter";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 pt-20">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
