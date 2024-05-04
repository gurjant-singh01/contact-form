import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />

      <div
        style={{
          paddingBottom: "5rem",
          backgroundColor: "#D3DFE8",
        }}
      >
        {/* contact form */}
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
