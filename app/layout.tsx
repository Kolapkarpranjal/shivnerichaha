import '../globals.css';
import { StateProvider } from './contexts/StateContext';
import StateSelectionWrapper from './components/StateSelectionWrapper';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StateProvider>
          <StateSelectionWrapper>
            {children}
          </StateSelectionWrapper>
        </StateProvider>
      </body>
    </html>
  );
}
