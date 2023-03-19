import React from 'react'

import { Helmet } from 'react-helmet'

import './kalkulator.css'

const Kalkulator = (props) => {
  return (
    <div className="kalkulator-container">
      <Helmet>
        <title>Kalkulator - Togthr template</title>
        <meta property="og:title" content="Kalkulator - Togthr template" />
      </Helmet>
    </div>
  )
}

export default Kalkulator
