import React from 'react'
import useForm from '../hooks/useForm';
import validate from '../utils/validate';

const FormSignup = () => {
  const {handleChange,values,handleSubmit,errors} = useForm(validate)
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Get Started with us Today! Create your account</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            UserName
          </label>
          <input
          id="username"
           type="text" 
           name="username" 
           className="form-input"
           placeholder="Enter Your username"
           value={values.username}
           onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Email
          </label>
          <input
          id="email"
           type="email" 
           name="email" 
           className="form-input"
           placeholder="Enter Your email"
           value={values.email}
           onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Password
          </label>
          <input
          id="password"
           type="password" 
           name="password" 
           className="form-input"
           placeholder="Enter Your password"
           value={values.password}
           onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Confirm Password
          </label>
          <input
          id="Password2"
           type="Password2" 
           name="password2" 
           className="form-input"
           placeholder="Enter Your Confirm password"
           value={values.password2}
           onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">Sign Up</button>
        <span className="form-input-login">
          Already have an account? Login <a href="#">here</a> 
        </span>
      </form>
    </div>
  )
}

export default FormSignup
