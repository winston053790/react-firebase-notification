import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from 'features/common/components/Header'
import { cn } from 'features/common/helpers/cn'

const Layout: React.FC = () => (
  <main className={cn('flex flex-col h-screen w-full bg-blue-900 max-w-md mx-auto md:max-w-md')}>
    <Header />
    <section className={cn('flex-1 h-ull overflow-hidden')}>
      <Outlet />
    </section>
  </main>
)

export default Layout