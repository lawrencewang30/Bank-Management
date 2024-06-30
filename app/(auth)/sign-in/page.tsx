import AuthorizationForm from '@/components/AuthorizationForm' // page layout implemented from here
import React from 'react' // auth is route group i.e. (auth) so no need to include 'auth' in link

const SignInPage = () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthorizationForm type="sign-in"/>
    </section>
  )
}

export default SignInPage