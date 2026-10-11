import { createRootRoute, Outlet } from '@tanstack/react-router'
import WhatsAppWidget from '../components/WhatsAppWidget'
import { GlobalAnimationProvider } from '../components/GlobalAnimationProvider'

export const Route = createRootRoute({
  component: () => (
    <>
      <GlobalAnimationProvider>
        <Outlet />
      </GlobalAnimationProvider>
      <WhatsAppWidget />
    </>
  ),
})

