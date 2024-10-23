import Feeds from "./Components/Feeds";
import Footer from "./Components/Footer";
import Navbar from "./Components/navbar";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Feeds/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
