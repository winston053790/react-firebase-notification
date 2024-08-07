import React, { createContext, useContext, useState } from 'react'

export interface AppProviderProps {
  children: React.ReactNode
}

export interface IContextProps {
  showBack: boolean
  setShowBack: (v: boolean) => void
}

export const AppContext = createContext<IContextProps>({
  showBack: false,
  setShowBack: () => undefined,
})

export const useSearch = (): IContextProps => useContext(AppContext)

const AppProvider = ({ children }: AppProviderProps) => {
  const [showBack, setShowBack] = useState<boolean>(false)

  return (
    <AppContext.Provider
      value={{
        showBack,
        setShowBack,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
