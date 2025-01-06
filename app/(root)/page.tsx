import React from 'react'
import HeaderBox from '../components/HeaderBox'
import TotalBalanceBox from '../components/TotalBalanceBox';
import RightSideBar from '../components/RightSideBar';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const home = async() => {
    const loggedIn = await getLoggedInUser()
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox type='greeting'
                title='Welcome'
                user={loggedIn?.name || 'Guest'} 
                subtext="Manage your finances and transactions convienently" />
            </header>
            <TotalBalanceBox accounts= {[]}
            totalBanks= {1}
                totalCurrentBalance={1250.94}
             />
        </div>
        <RightSideBar user={loggedIn} transactions={[]} banks={[{currentBalance:500}, {currentBalance:7000}]} />
    </section>
  )
}

export default home



