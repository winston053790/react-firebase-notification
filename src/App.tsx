import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import AppProvider from 'contexts/AppProvider'
import Layout from 'features/common/components/Layout'
import Loading from 'features/common/components/Loading'

import './index.css'

const HomePage = lazy(() => import('pages/HomePage'))

const App = () => (
  <BrowserRouter>
    <AppProvider>
      <Suspense fallback={<Loading label='Loading...' />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </AppProvider>
  </BrowserRouter>
)

export default App
