import './App.scss';
import Signup from './components/Signup/Signup';
import Signup2 from './components/Signup/Signup2';
import { SignupContextProvider } from './components/Signup/SignupContext';

function App() {
  return (
    <main>
      <SignupContextProvider>
        <Signup />
        <Signup2 />
      </SignupContextProvider>
    </main>
  );
}

export default App;
