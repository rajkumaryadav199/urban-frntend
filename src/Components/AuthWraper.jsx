import React from 'react'
  import { useSelector } from 'react-redux';
export default function AuthWraper({children}) {

    const AuthStatus = useSelector(store => store.authReducer.auth);
    console.log(AuthStatus);
  return (
    <div>
      AuthWrapper
    </div>
  )
}
