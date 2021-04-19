import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/*<Greet/>
      <Welcome/>
      <Hello/>
      <Greet name="Bruce" heroName="Batman">
        <p>This is children this.props.</p>
      </Greet>
      <Greet name="Clark" heroName="Supserman">
         <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman"/>

      <Welcome name="Bruce" heroName="Batman"></Welcome>
      <Welcome name="Clark" heroName="Supserman"></Welcome>
      <Welcome name="Diana" heroName="Wonder Woman"></Welcome>

      <Message></Message>

      <Counter/>
      <Greet/>*/}
      <Welcome/>
    </div>
  );
}

export default App;
