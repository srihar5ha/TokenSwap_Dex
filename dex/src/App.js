import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Swap from "./components/Swap";
import Tokens from "./components/Tokens";
import { useConnect,useAccount } from "wagmi";
import {MetaMaskConnector} from "wagmi/connectors/metaMask";


function App() {

  const {address , isConnected} =useAccount();
  const {connect} =useConnect({
    connector: new MetaMaskConnector(),
  });

  return (
  
  <div className="App">
    <Header address={address} isConnected={isConnected} connect={connect}/>
    <div className="mainWindow">
      <Routes>
        <Route path="/" element={<Swap address={address} isConnected={isConnected}/>} />
        <Route path="/tokens" element={<Tokens />} />
      </Routes>
    </div>
  </div>
  
  
  )
}

export default App;
