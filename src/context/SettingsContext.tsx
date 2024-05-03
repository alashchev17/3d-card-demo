import React, { createContext, useContext, useState } from 'react'
import { texturesArray } from '../constants'

type SettingsContextType = {
  currentTexture: string
  setCurrentTexture: (texture: string) => void
}

export const SettingsContext = createContext<SettingsContextType | null>(null)

type SettingsProviderProps = {
  children: React.ReactNode
}

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [currentTexture, setCurrentTexture] = useState(texturesArray[0].texture)

  return <SettingsContext.Provider value={{ currentTexture, setCurrentTexture }}>{children}</SettingsContext.Provider>
}

export const useSettings = () => {
  const context = useContext(SettingsContext)

  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }

  return context
}
