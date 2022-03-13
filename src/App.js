import About from "./components/About.js";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact"

function App() {
  return (
    <div className="flex flex-col items-center text-white bg-white">
      <Navbar />
      <div id="content" className="flex flex-col items-center space-y-12 mt-10">
        <h1 className="text-6xl hover:animate-spin text-black">Hi! I'm <span className=" hover:animate-spin text-8xl italic bg-blue-200 p-2 rounded-xl text-black">Henry.</span></h1>
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;