import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
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
      <Greet/>
      <Welcome/>
      <FunctionClick/>
      <ClassClick/>
      <EventBind/>
      <ParentComponent/>
      <UserGreeting/>
      <NameList/>

      <Stylesheet primary={true}/>
      <Inline/>
      <Form/>*/}
      <LifecycleA/>
    </div>
  );
}

export default App;
