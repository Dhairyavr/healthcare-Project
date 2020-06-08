import React from 'react';
import './login.css';


import {connect} from 'react-redux';
import {setcurrentuser} from '../redux/user/user-actions';


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      id:'',
      password:''
    }
  }

  HandleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }


render () {
  return (
    <div style={{position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}}>
    <div className="auth-wrapper">
     <div className="auth-inner">
              <form>
                  <h3>Sign In</h3>


                  <div className="form-group">
                      <label>Email address</label>
                      <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={this.state.id}
                      onChange={this.HandleChange}
                      name='id'
                      required
                       />
                  </div>

                  <div className="form-group">
                      <label>Password</label>
                      <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={this.state.password}
                      onChange={this.HandleChange}
                      name='password'
                      required
                      />
                  </div>

                  <button type="submit" className="btn btn-primary btn-block" onClick={()=> {this.props.setcurrentuser(this.state.id); this.props.history.push('/homepage');}}>Sign Up</button>
                  <p className="forgot-password text-right">
                      Already registered <a href="">sign in?</a>
                  </p>
              </form>

          </div>
        </div>
      </div>
      );
  }
}

const mapDispatchToProps = dispatch => ({
  setcurrentuser : user_id => dispatch(setcurrentuser(user_id)),
})

export default connect(null,mapDispatchToProps)(Login);
