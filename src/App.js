import './App.css';
import 'quill-paste-smart';
import ReactQuill from 'react-quill';

function App() {
  return (
    <div className="App">
      <ReactQuill
        modules={{
          toolbar: false,
        }}
        placeholder="Type a message..."
        ></ReactQuill>
    </div>
  );
}

export default App;
