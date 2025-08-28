import { worker } from './mocks/browser.ts'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store.ts'
import './index.css'
import App from './App.tsx'
import { DashboardContextProvider } from './contexts/DashboardContext.tsx'
import { EventProvider } from './contexts/EventsContext.tsx'
worker.start().then(() => {
  createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <DashboardContextProvider>
        <EventProvider>
          <App />
        </EventProvider>
      </DashboardContextProvider>
    </Provider>
  )
})

