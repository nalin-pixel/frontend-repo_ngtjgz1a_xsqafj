import Hero from "./components/Hero";
import FlowTracks from "./components/FlowTracks";
import ProcessFaq from "./components/ProcessFaq";
import PrizesFooter from "./components/PrizesFooter";

function App() {
  return (
    <div className="font-inter bg-white text-gray-900">
      <Hero />
      <FlowTracks />
      <ProcessFaq />
      <PrizesFooter />
    </div>
  );
}

export default App;
