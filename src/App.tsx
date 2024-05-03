import './App.css'

import Model from './components/Model'
import SettingsContainer from './components/SettingsContainer'
import { SettingsProvider } from './context/SettingsContext'

const App = () => {
  return (
    <SettingsProvider>
      <SettingsContainer />
      <Model />
    </SettingsProvider>
  )
}

export default App
