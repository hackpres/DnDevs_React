import React from 'react'
import { Outlet } from 'react-router-dom'

function RootLayout({ children }) {
  return (
    <>
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default RootLayout