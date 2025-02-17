import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.div`
  height: 28px;
  margin: 16px;
`

const LogoContainer2 = styled.div`
  height: 28px;
  margin: 16px 8px;
`

const Logo = ({ collapsed }) => {
  if (collapsed)
    return (
      <LogoContainer2>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 306.2 155.26"
        >
          <title>LMS</title>
          <path
            className="logo2-cls-1"
            d="M551,330c-6.79,19.39-4.61,40.86,1.24,60.75,0,0,0,0,0,0,1.6,5.45,3.47,10.78,5.51,15.92Z"
            transform="translate(-530.65 -306.74)"
          />
          <path
            className="logo2-cls-1"
            d="M588.64,462l-3.57,0h-.14c-33-.46-37.93-7-37.93-7-38.58-35.61,3.08-123.09,4-125v0l11.74,48.91,3.07,12.79A31.32,31.32,0,0,0,557,413.5v5a31.64,31.64,0,0,0,22.49,30.18C584.82,457,588.64,462,588.64,462Z"
            transform="translate(-530.65 -306.74)"
          />
          <path
            className="logo2-cls-1"
            d="M551,393l5-9-5-54-4,15S539,380,551,393Z"
            transform="translate(-530.65 -306.74)"
          />
          <line
            className="logo2-cls-2"
            x1="58.35"
            y1="93.26"
            x2="58.35"
            y2="127.26"
          />
          <path
            className="logo2-cls-1"
            d="M833.68,455.66A19.73,19.73,0,0,1,819.19,462H586.31l-1.24,0h-.14A39.44,39.44,0,0,1,547,422.69V410.31a38.89,38.89,0,0,1,5.23-19.52h0a39.81,39.81,0,0,1,3.64-5.27A39.45,39.45,0,0,1,586.31,371H819.19c7.74,0,12.55-2.51,15.81,4l-246.5,7A31.5,31.5,0,0,0,557,413.5v5a31.64,31.64,0,0,0,22.49,30.18,31.22,31.22,0,0,0,9,1.32H831.13A3.4,3.4,0,0,1,833.68,455.66Z"
            transform="translate(-530.65 -306.74)"
          />
          <path
            className="logo2-cls-1"
            d="M832.77,379.66a10.19,10.19,0,0,0,3.72-11c-1.78-7.33-27.13-53.23-27.13-53.23s-9.09-9.2-25.57-7.47-208.6-1.26-208.6-1.26-22,7.19-23.93,23.64l4.51,53.79Z"
            transform="translate(-530.65 -306.74)"
          />
          <text
            className="logo2-cls-3"
            transform="translate(70.82 122.47) scale(1.24 1)"
          >
            LMS
          </text>
        </svg>
      </LogoContainer2>
    )
  return (
    <LogoContainer>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 856.31 203.56"
      >
        <title>Logo 1</title>
        <path
          className="logo1-cls-1"
          d="M257,306c-6.79,19.39-4.61,40.86,1.24,60.75,0,0,0,0,0,0,1.6,5.45,3.47,10.78,5.51,15.92Z"
          transform="translate(-236.15 -282.24)"
        />
        <path
          className="logo1-cls-1"
          d="M294.64,438l-3.57,0h-.14c-33-.46-37.93-7-37.93-7-38.58-35.61,3.08-123.09,4-125v0l11.74,48.91,3.07,12.79A31.32,31.32,0,0,0,263,389.5v5a31.64,31.64,0,0,0,22.49,30.18C290.82,433,294.64,438,294.64,438Z"
          transform="translate(-236.15 -282.24)"
        />
        <path
          className="logo1-cls-1"
          d="M257,369l5-9-5-54-4,15S245,356,257,369Z"
          transform="translate(-236.15 -282.24)"
        />
        <line
          className="logo1-cls-2"
          x1="343.35"
          y1="40.76"
          x2="343.35"
          y2="161.76"
        />
        <path
          className="logo1-cls-3"
          d="M539.68,431.66A19.73,19.73,0,0,1,525.19,438H292.31l-1.24,0h-.14A39.44,39.44,0,0,1,253,398.69V386.31a38.89,38.89,0,0,1,5.23-19.52h0a39.81,39.81,0,0,1,3.64-5.27A39.45,39.45,0,0,1,292.31,347H525.19c7.74,0,12.55-2.51,15.81,4l-246.5,7A31.5,31.5,0,0,0,263,389.5v5a31.64,31.64,0,0,0,22.49,30.18,31.22,31.22,0,0,0,9,1.32H537.13A3.4,3.4,0,0,1,539.68,431.66Z"
          transform="translate(-236.15 -282.24)"
        />
        <path
          className="logo1-cls-1"
          d="M538.77,358.66a10.19,10.19,0,0,0,3.72-11c-1.78-7.33-27.13-56.23-27.13-56.23s-9.09-9.2-25.57-7.47-208.6-1.26-208.6-1.26-22,7.19-23.93,23.64l4.51,53.79Z"
          transform="translate(-236.15 -282.24)"
        />
        <text className="logo1-cls-4" transform="translate(377.2 139.42)">
          LMS
        </text>
        <line
          className="logo1-cls-5"
          x1="50.85"
          y1="90.27"
          x2="293.85"
          y2="90.27"
        />
        <line
          className="logo1-cls-5"
          x1="50.85"
          y1="110.53"
          x2="293.85"
          y2="110.53"
        />
        <line
          className="logo1-cls-5"
          x1="50.85"
          y1="130.78"
          x2="293.85"
          y2="130.78"
        />
      </svg>
    </LogoContainer>
  )
}

export default Logo
