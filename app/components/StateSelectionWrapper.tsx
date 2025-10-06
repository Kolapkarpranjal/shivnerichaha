"use client";
import { useAppState } from '../contexts/StateContext';
import StateSelectionPopup from './StateSelectionPopup';

interface StateSelectionWrapperProps {
  children: React.ReactNode;
}

export default function StateSelectionWrapper({ children }: StateSelectionWrapperProps) {
  const { setSelectedState } = useAppState();
  
  return (
    <>
      {children}
      <StateSelectionPopup onStateSelect={setSelectedState} />
    </>
  );
}
