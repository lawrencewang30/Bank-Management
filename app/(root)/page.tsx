import React from 'react' // root is route group i.e. (root) so no need to include 'root' in link
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSideBar from '@/components/RightSideBar';
import { getLoggedInUser } from '@/lib/actions/user.actions';
// classNames from globals.css

const HomePage = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            subtext="Access your account and manage your transactions efficiently"
            user={loggedIn?.name || 'Guest'} // dynamically assign name based on account
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
