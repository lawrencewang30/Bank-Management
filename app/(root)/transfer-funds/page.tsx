import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react' // folder name must match route in index.ts otherwise return 404
// NOTE: forms require client side activity, since this is server side must import from components

const TransferFunds = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn.$id});

  if(!accounts) return;

  const accountsData = accounts?.data;

  return (
    <section className='payment-transfer'>
      <HeaderBox 
        title="Payment Transfer"
        subtext="Please provide any specific details related to your payment transfer"
      />
      <section className='size-full pt-5'>
        <PaymentTransferForm accounts={accountsData}/>
      </section>
    </section>
  )
}

export default TransferFunds
