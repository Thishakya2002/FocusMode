import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {SettingProvider} from "./context/SettingsContext"
import SetPomodoro from "./component/SetPomodoro";

function App() {
  return (
    <div className="container">
    <h1>Focus Mode</h1>
    <small>Be productive the right way</small>
    <SetPomodoro/>
    {/*<CountdownCircleTimer/>*/}
    </div>
  );
}

export default App;
