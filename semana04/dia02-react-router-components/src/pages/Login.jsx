import React from 'react'

const Login = () => {
  return (
    <form>
      <div className='row mb-3'>
        <label className='col-2 col-form-label'>Email</label>
        <div className='col'>
          <input className='form-control' type='email' />
        </div>
      </div>
      <div className='row mb-3'>
        <label className='col-2 col-form-label'>Password</label>
        <div className='col'>
          <input className='form-control' type='password' />
        </div>
      </div>
    </form>
  )
}

export default Login