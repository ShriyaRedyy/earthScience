
import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

function Product() {
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row ">
                    <div className="col-12 mb-3">
                        <h1 className='display-6 fw-bold text-center text-white' style={{fontFamily: 'Bungee Spice',fontFamily: 'Lobster',color:'white'}}>Data Sets</h1>
                        <hr></hr>
                    </div>

                    <div className='row p-3'>
                    <div className='card shadow text-center'>
                        <div className="card-body">
                            <h5 className="card-title">Atmosphere</h5>
                            <a className="card-text p-3 mx-5">With supporting text below as a natural lead-in to additional content.</a>
                            <a href="#" className="btn btn-primary">Summary</a>
                        </div>
                    </div>
                    </div>

                    <div className='row p-3'>
                    <div className='card shadow text-center'>
                        <div className="card-body">
                            <h5 className="card-title">Land</h5>
                            <a className="card-text p-3 mx-5">With supporting text below as a natural lead-in to additional content.</a>
                            <a href="#" class="btn btn-primary">Summary</a>
                        </div>
                    </div>
                    </div>

                    <div className='row p-3'>
                    <div className='card shadow text-center'>
                        <div className="card-body">
                            <h5 className="card-title">Water</h5>
                            <a className="card-text p-3 mx-5">With supporting text below as a natural lead-in to additional content.</a>
                            <a href="#" class="btn btn-primary">Summary</a>
                        </div>
                    </div>
                    </div>

                    <div className='row p-3'>
                    <div className='card shadow text-center'>
                        <div className="card-body">
                            <h5 className="card-title">Heat</h5>
                            <a className="card-text p-3 mx-5">With supporting text below as a natural lead-in to additional content.</a>
                            <a href="#" class="btn btn-primary">Summary</a>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product