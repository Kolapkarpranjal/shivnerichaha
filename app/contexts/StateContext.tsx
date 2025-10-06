"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface StateContextType {
  selectedState: string;
  setSelectedState: (state: string) => void;
  getStateInfo: (stateCode: string) => { name: string; capital: string; color: string } | null;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

const stateInfo = {
  MH: { name: "Maharashtra", capital: "Mumbai", color: "from-orange-500 to-red-500" },
  GJ: { name: "Gujarat", capital: "Gandhinagar", color: "from-green-500 to-blue-500" },
  UP: { name: "Uttar Pradesh", capital: "Lucknow", color: "from-purple-500 to-pink-500" }
};

interface StateProviderProps {
  children: ReactNode;
}

export function StateProvider({ children }: StateProviderProps) {
  const [selectedState, setSelectedStateState] = useState<string>("MH");

  useEffect(() => {
    // Load state from localStorage on mount
    const savedState = localStorage.getItem('selectedState');
    if (savedState && stateInfo[savedState as keyof typeof stateInfo]) {
      setSelectedStateState(savedState);
    }
  }, []);

  const setSelectedState = (state: string) => {
    setSelectedStateState(state);
    localStorage.setItem('selectedState', state);
  };

  const getStateInfo = (stateCode: string) => {
    return stateInfo[stateCode as keyof typeof stateInfo] || null;
  };

  return (
    <StateContext.Provider value={{ selectedState, setSelectedState, getStateInfo }}>
      {children}
    </StateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a StateProvider');
  }
  return context;
}
