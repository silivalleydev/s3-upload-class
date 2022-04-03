import logo from './logo.svg';
import './App.css';
import { onFileUpload } from "./fileUploadFunction";

function App() {

  return (
    <div className="App">
      <input type={"file"} onChange={onFileUpload} />
    </div>
  );
}

export default App;
