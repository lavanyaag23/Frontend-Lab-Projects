import './App.css';
import Navbar from './navbar';
import TextForm from './TextForm'; 
function App() {
  return (
    <>
      <Navbar title="TextUtils" />

      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;