import AuthorizationForm from '@/components/AuthorizationForm' // page layout implemented from here
import React from 'react' // auth is route group i.e. (auth) so no need to include 'auth' in link
import { getLoggedInUser } from '@/lib/actions/user.actions';

const SignUpPage = async () => { // It allows you to use the 'await' keyword to pause the execution of the function until a promise is resolved or rejected
  const loggedInUser = await getLoggedInUser();

  console.log(loggedInUser)

  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthorizationForm type="sign-up"/>
    </section>
  )
}

export default SignUpPage