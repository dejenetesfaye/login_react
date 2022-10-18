import React from 'react';
import tree from '../img/tree.png';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <div
        class="row"
        style={{
          marginLeft: '10%',
          marginTop: '5%',
          marginBottom: '10%',
          marginRight: '15%',
        }}
      >
        <div
          class="col-lg-4 col-sm-12 col-md-12"
          id="login"
          style={{
            backgroundImage: `url(${tree})`,
            boxShadow:
              '10px 10px 15px 10px  rgba(0, 0, 0, 0.5), inset 5px 5px 10px 5px rgba(0, 0, 0, 0.5), -10px -10px 15px 10px  #FFFFFF, inset -5px -5px 10px 5px #FFFFFF',
            height: '70vh',
            borderRadius: '10px 100px',
            padding: '10vh',
            fontSize: '16px',
          }}
        >
          <div class="row" style={{ textAlign: 'center' }}>
            <h2 style={{ fontWeight: 'bold' }}>Log In</h2>
          </div>
          <br />
          <div class="form-group" style={{}}>
            <label for="exampleInputEmail1">Email address</label>
            <input
              style={{
                borderRadius: '10px 50px',
                boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.5)',
              }}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            ></input>
          </div>
          <br />
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              style={{
                borderRadius: '10px 50px',
                boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.5)',
              }}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            ></input>
          </div>
          <div class="form-check">
            <br />
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            ></input>
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            id="btn-custom"
            style={{
              float: 'right',
              borderRadius: '10px 50px',
              color: 'black',
              boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.5)',
            }}
          >
            Login
          </button>
          <div
            class="row"
            style={{
              textAlign: 'center',
              marginTop: '50px',
              color: 'blue',
              fontSize: '22px',
            }}
          >
            <div>OR</div>
          </div>
          <a href="#" class="fa fa-twitter"></a>
          <a
            href="#"
            class="fa fa-google"
            style={{
              color: 'red',
            }}
          ></a>
          <a
            href="#"
            class="fa fa-facebook"
            style={{
              width: '35px',
            }}
          ></a>
          <a
            href="#"
            class="fa fa-pinterest"
            style={{
              color: 'red',
            }}
          ></a>
          <a
            href="#"
            class="fa fa-instagram"
            style={{
              color: 'blue',
            }}
          ></a>

          <div class="row">
            <div class="col-lg-12 col-sm-12 col-md-12">
              <p
                style={{
                  color: 'black',
                  textAlign: 'center',
                  marginTop: '10px',
                }}
              >
                <Link
                  to="/Register"
                  style={{
                    color: 'black',
                  }}
                >
                  {' '}
                  Forget Password{' '}
                </Link>
                |
                <Link
                  to="/NoPage"
                  style={{
                    color: 'black',
                  }}
                >
                  {' '}
                  Night Mode
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
