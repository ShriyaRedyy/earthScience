import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form'
import { useState } from 'react'


function NAvbar() {

    const state = useSelector((state) => state.handleCart)
    const { register, handleSubmit, formState: { errors } } = useForm()
    let [search, setData] = useState([])
    const onFormSubmit = (userObj) => {
        setData([...search, userObj])
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container-fluid">
                    <NavLink className="navbar-brand fw-bold fs-4 mx-4" to="/">ALPHA</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/product">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>

                        <form className="d-flex" onSubmit={handleSubmit(onFormSubmit)}>
                            <input class="form-control me-2" type="search" placeholder="Search" id="searchin" {...register("searchin", { required: true })} />
                            <button class="btn btn-outline-dark" type="submit">Search</button>
                        </form>
                        <NavLink to="/cart" className="btn btn-outline-dark ms-2 mx-4">
                        <span className="material-symbols-outlined">
                            file_download_done
                        </span>
                        </NavLink>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default NAvbar;