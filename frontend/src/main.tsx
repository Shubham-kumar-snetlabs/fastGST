import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PhoneNumberProvider } from './contexts/PhoneNumberContext.tsx'
import { TeamMemberProvider } from './contexts/TeamMemberContext.tsx'
import { ClientMemberProvider } from './contexts/ClientMemberContext.tsx'
import { ClientsProvider } from './contexts/ClientsContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PhoneNumberProvider>
      <TeamMemberProvider>
        <ClientMemberProvider>
          <ClientsProvider>
            <App/>
          </ClientsProvider>
        </ClientMemberProvider>
      </TeamMemberProvider>
    </PhoneNumberProvider>
  </StrictMode>,
)
