import React from 'react';

export default function Main() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div className="hello">
              <span style={{ color: 'blue', fontSize: '24px' }}>H</span>
              elooo..., my name is
              <div className="name">Abcd Efgh</div>
            </div>
            <div className="job-title">i am Software Developer</div>
          </div>
          <div class="col-sm">One of three columns</div>
        </div>
      </div>
      {/* About me */}
      <div class="row">
        <div
          class="col"
          style={{
            backgroundColor: 'red',
            marginLeft: '2%',
            fontSize: '24px',
            height: '400px',
          }}
        >
          col
        </div>
        <div
          class="col"
          style={{
            backgroundColor: 'blue',
            marginLeft: '2%',
            fontSize: '24px',
            height: '400px',
          }}
        >
          col
        </div>
        <div
          class="col"
          style={{
            backgroundColor: 'black',
            marginLeft: '2%',
            fontSize: '24px',
            height: '400px',
          }}
        >
          col
        </div>
        <div
          class="col"
          style={{
            backgroundColor: 'green',
            marginLeft: '2%',
            fontSize: '24px',
            height: '400px',
          }}
        >
          col
        </div>
      </div>
      <div class="row">
        <div
          class="col-7"
          style={{
            backgroundColor: 'yellow',
            marginLeft: '2%',
            fontSize: '24px',
            height: '400px',
          }}
        >
          col-8
        </div>
        <div
          class="col-4"
          style={{
            backgroundColor: 'brown',
            marginLeft: '2%',
            fontSize: '24px',
            height: '400px',
          }}
        >
          col-4
        </div>
      </div>
      <div class="row">
        <div
          class="col-4"
          style={{
            backgroundColor: 'yellow',
            marginLeft: '2%',
            height: '400px',
          }}
        >
          <h2>About me</h2>
          <p>
            React is a JavaScript library, and so we’ll assume you have a basic
            understanding of the JavaScript language. If you don’t feel very
            confident, we recommend going through a JavaScript tutorial to check
            your knowledge level and enable you to follow along this guide
            without getting lost. It might take you between 30 minutes and an
            hour, but as a result you won’t have to feel like you’re learning
            both React and JavaScript at the same time.
          </p>
        </div>
        <div
          class="col-6"
          style={{
            backgroundColor: 'brown',
            marginLeft: '5%',
            fontSize: '24px',
            height: '400px',
          }}
        >
          <img
            className="aboutImage"
            src={require('../img/about-image.jpg')}
            alt="cannot display"
          />
        </div>
      </div>

      {/* our service */}

      <div class="row">
        <div
          class="col-sm"
          style={{
            backgroundColor: 'green',
            marginLeft: '2%',
            fontSize: '24px',
            height: '400px',
          }}
        >
          left
        </div>
        <div
          class="col-sm"
          style={{
            backgroundColor: 'green',
            marginLeft: '2%',
            marginRight: '2%',
            fontSize: '24px',
            height: '400px',
          }}
        >
          center
        </div>
        <div
          class="col-sm"
          style={{
            backgroundColor: 'green',
            marginRight: '5%',
            fontSize: '24px',
            height: '400px',
          }}
        >
          right
        </div>
      </div>
    </div>
  );
}
