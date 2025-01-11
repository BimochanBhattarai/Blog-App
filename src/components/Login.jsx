import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handelSubmit} = useForm()
  return (
    <div>Login component</div>
  )
}

export default Login