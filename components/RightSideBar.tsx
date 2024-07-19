import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BankCard from './BankCard'
import { countTransactionCategories } from '@/lib/utils'
import Category from './Category'

const RightSideBar = ({ user, transactions, banks }: RightSidebarProps) => {
  const categories: CategoryCount[] = countTransactionCategories(transactions);

  // console.log(categories);

  return ( // this only shows up on bigger devices (not mobile)
    <aside className='right-sidebar'>
        <section className='flex flex-col pb-8'>
            <div className='profile-banner' />
            <div className='profile'>
                <div className='profile-img' >
                    <span className='text-6xl font-bold text-blue-500'>{user.firstName[0]}</span>
                </div>

                <div className='profile-details'>
                    <h1 className='profile-name'>
                        {user.firstName} { user.lastName}
                    </h1>
                    <p className='profile-email'>
                        {user.email}
                    </p>
                </div>
            </div>
        </section>

        <section className='banks'>
            <div className='flex w-full justify-between'>
                <h2 className='header-2'>My Banks</h2>
                <Link href="/" className='flex gap-2'>
                    <Image
                    src="/icons/plus.svg" // plus sign next to "Add Bank"
                    width={20}
                    height={20}
                    alt="plus"
                    />
                    <h2 className='text-14 font-semibold text-gray-600'>
                    Add Bank
                    </h2>
                </Link>
            </div>

            {banks?.length > 0 && ( // set first card text location and information
                <div className='relative flex flex-1 flex-col items-center justify-center gap-5'>
                    <div className='relative z-10'>
                        <BankCard
                          key={banks[0].$id}
                          account={banks[0]}
                          userName={`${user.firstName} ${user.lastName}`}  // dynamically assign name based on account, get user from database instead of session
                          showBalance={false}
                        />
                    </div>
                    {banks[1] && ( // set second card text location and information
                        <div className='absolute right-0 top-8 z-0 w-[90%]'>
                            <BankCard
                              key={banks[1].$id}
                              account={banks[1]}
                              userName={`${user.firstName} ${user.lastName}`}  // dynamically assign name based on account,g et user from database instead of session
                              showBalance={false}/> 
                        </div>
                    )}
                </div>
            )}

            <div className='mt-10 flex flex-1 flex-col gap-6'>
                <h2 className='header-2'>Top Categories</h2>
                <div className='space-y-5'>
                    {categories.map((category, index) => (
                        <Category key={category.name} category={category} />
                    ))}
                </div>
            </div>
        </section>
    </aside>
  )
}

export default RightSideBar
