import Aurora from './Aurora';

function App() {
  return (
    <Aurora
      colorStops={["#3A29FF", "#7CFF67", "#00FFD0"]}
      blend={0.5}
      amplitude={1.0}
      speed={1}
    />
  );
}

export default App;
