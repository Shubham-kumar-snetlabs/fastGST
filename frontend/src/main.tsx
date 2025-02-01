import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PhoneNumberProvider } from './contexts/PhoneNumberContext.tsx'
import { TeamMemberProvider } from './contexts/TeamMemberContext.tsx'
import { ClientMemberProvider } from './contexts/ClientMemberContext.tsx'
import { ClientsProvider } from './contexts/ClientsContext.tsx'
import { BusinessProvider } from './contexts/BusinessContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PhoneNumberProvider>
      <TeamMemberProvider>
        <ClientMemberProvider>
          <ClientsProvider>
            <BusinessProvider>
              <App/>
            </BusinessProvider>
          </ClientsProvider>
        </ClientMemberProvider>
      </TeamMemberProvider>
    </PhoneNumberProvider>
  </StrictMode>,
)
