import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface PricingProps {
  onClick?: () => void;
  text?: string;
  defaultCount?: string;
  className?: string;
  mouse?: boolean;
}

export const renderPricing = (props: PricingProps) => {
  console.log('document.cookie::', document.cookie);
  const [testToken, setTestToken] = useState<string | null>('');
  //
  const [users, setUsers] = useState([]);
  const location = useLocation();
  console.log('location::', location);
  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=3')
      .then((response) => {
        setUsers(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching random users:', error);
      });
  }, []);
  //
  const { text, defaultCount } = props;
  const [count, setCount] = useState<number>(
    defaultCount ? parseInt(defaultCount) : 0
  );
  const handleCounter = (action: string) => {
    if (action === 'increment') {
      setCount((prev: number) => prev + 1);
    } else if (action === 'decrement' && count !== 0) {
      setCount((prev: number) => prev - 1);
    }
  };
  return (
    <>
      <div className="App container">
        <div className="div-test-token-btn">
          <button
            onClick={() => {
              if (localStorage.getItem('testToken'))
                setTestToken(localStorage.getItem('testToken'));
            }}
            style={{
              border: '1px solid black',
              backgroundColor: 'tomato',
              padding: '5px 7px',
              margin: '5px',
              fontSize: 'small',
              cursor: 'pointer',
              width: '200px',
            }}
          >
            {testToken
              ? testToken
              : 'Click to get the testToken from localStorage'}
          </button>
        </div>
        <div className="counter-title">{text}</div>
        <div className="counter-title-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
          >
            <path
              d="M11.5117 21.322C17.0346 21.322 21.5117 16.7727 21.5117 11.161C21.5117 5.54923 17.0346 1 11.5117 1C5.98887 1 1.51172 5.54923 1.51172 11.161C1.51172 16.7727 5.98887 21.322 11.5117 21.322Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.5117 15.2245V11.1602"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.5117 7.0957H11.5217"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="counter">
          <div>
            <button id="decrement" onClick={() => handleCounter('decrement')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path d="M19.5117 13H5.51172V11H19.5117V13Z" fill="#464B52" />
              </svg>
            </button>
          </div>
          <div>
            <input type="text" id="count" value={count} />
          </div>
          <div>
            <button id="increment" onClick={() => handleCounter('increment')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M19.5117 13H13.5117V19H11.5117V13H5.51172V11H11.5117V5H13.5117V11H19.5117V13Z"
                  fill="#464B52"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <div style={{ marginTop: '10px' }}>
        <h1>Random Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user['login']['uuid']}>
              <img src={user['picture']['thumbnail']} />
              {/* <p>
                {user['name']['first']} {user['name']['last']}
              </p> */}
              {/* <Link to={`/${user['login']['uuid']}`} state={{ user }}>
                {`${user['name']['first']} ${user['name']['last']}`}
              </Link> */}
              <Link to="/pricing">
                {`${user['name']['first']} ${user['name']['last']}`}
              </Link>
              {/* 
            <Link
      to={`/profile/${userid}`}
      state={{ user }} // Pass the user data as state
    >
      Go to User Profile
    </Link>
            */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
