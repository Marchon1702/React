import React from 'react'

import PropTypes from 'prop-types';

import './Board.css'

export default function Board({ handlePlays }) {
    return (
        <section className='board' onClick={(e) => handlePlays(e)}>
            <div id='a1' className='plays'></div>
            <div id='a2' className='plays'></div>
            <div id='a3' className='plays'></div>
            <div id='b1' className='plays'></div>
            <div id='b2' className='plays'></div>
            <div id='b3' className='plays'></div>      
            <div id='c1' className='plays'></div>
            <div id='c2' className='plays'></div>
            <div id='c3' className='plays'></div>
        </section>
    )
}

Board.propTypes = {
    handlePlays: PropTypes.func.isRequired
}