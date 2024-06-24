import React from 'react' // root is route group i.e. (root) so no need to include 'root' in link
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
// classNames from globals.css

const HomePage = () => {
  const loggedIn = { firstName: 'Lawrence' };

  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            subtext="Access your account and manage your transactions efficiently"
            user={loggedIn?.firstName || 'Guest'}
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1500.75}
          />
        </header>
      </div>
    </section>
  )
}

export default HomePage
