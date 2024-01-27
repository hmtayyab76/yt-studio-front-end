import { Suspense } from 'react';
import './App.css';
import AppLayout from './components/AppLayout';
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/Loading';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Suspense
          fallback={
            <div>
              <Loading />
            </div>
          }
        >
          <AppLayout />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

