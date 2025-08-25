import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="bg-[#363f4a] h-screen overflow-y-auto pb-20">
      <div className="p-4">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
