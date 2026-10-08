import { createRootRoute, Outlet } from '@tanstack/react-router'
import WhatsAppWidget from '../components/WhatsAppWidget'

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <WhatsAppWidget />
    </>
  ),
})

