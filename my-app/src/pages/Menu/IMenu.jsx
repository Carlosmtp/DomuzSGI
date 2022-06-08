import React, { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'

const IMenu = () => {

    const { login } = useContext(LoginContext)
    return (
      <div>IMenu {login}</div>
    )
}

export default IMenu