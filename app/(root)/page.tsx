import React from 'react' // root is route group i.e. (root) so no need to include 'root' in link
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSideBar from '@/components/RightSideBar';
// classNames from globals.css

const HomePage = () => {
  const loggedIn = { firstName: 'Lawrence', lastName: 'Wang', email: 'jiabin2003@gmail.com' };

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

        RECENT TRANSACTIONS
      </div>

      <RightSideBar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 175.35 }, { currentBalance: 345.68 }]}
      />
    </section>
  )
}

export default HomePage
