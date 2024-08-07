import React from 'react'

const Header: React.FC = () => (
  <header className="relative flex items-center justify-between p-4 text-white h-14">
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <h1>{'Notifications'}</h1>
    </div>
  </header>
)

export default Header