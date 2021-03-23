
import 'bootswatch/dist/lux/bootstrap.min.css';
import './App.css'

//import Components
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';

import NoteState from './context/Notes/NoteState';
function App() {
  return (
    <div className="container mt-4">
      <NoteState>
        <div className="row">
          <div className="col-md-4">
            <NoteForm/>
          </div>
          <div className="col-md-8">
            <NotesList/>
          </div>
        </div>
      </NoteState>
    </div>
  );
}

export default App;
