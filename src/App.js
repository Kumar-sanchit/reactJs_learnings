import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './Functional';
import { ClassicComponent } from './ClassComp';
import {OriginalComponent} from './HelloComps';
import {Functional} from './FunctionalComp';
import {MyIncDec} from './IncrementDecrement';
import {MyUseState} from './UseStateExample'; 
import {UseEffectExample} from './UseEffectExample';
import {MyRef} from './useReference';
import {UsemyLayoutEffect} from './UseLayoutEffect';
import {MyReducer} from './UseReducer';
import {MyReducerEx} from './MyReducerEx';
import {MyContext } from './UseContextEx';
import {Posts} from './Posts';

function App() {
  return (
    <div>
      {/*<OriginalComponent id="1" name ="Original"/>
          <Functional/>
          <MyIncDec/>
          <MyUseState></MyUseState>
          <UseEffectExample/>
          <MyRef></MyRef>
          <UsemyLayoutEffect>
           <MyReducer></MyReducer>
          </UsemyLayoutEffect>
          <MyReducerEx></MyReducerEx>
          <MyContext/>*/}
          <Posts/>
    </div>
  );
}

export default App;
