import React from 'react'
import { Link } from 'react-router-dom'

export default function Catalogue() {
  return (
    
    <div className="col-2" style={{marginTop:"20px"}}>
      <ul className="list-group">
        <li className="list-group-item">
          <Link
            className="text-decoration-none "
            aria-current="page"
            to="/health-care"
          >
            Health Care
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            className="text-decoration-none "
            aria-current="page"
            to="/consumables"
          >
            Consumables
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            className="text-decoration-none "
            aria-current="page"
            to="/personal-care"
          >
            Personal Care
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            className="text-decoration-none "
            aria-current="page"
            to="/home-hygiene"
          >
            Home Hygiene
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            className="text-decoration-none "
            aria-current="page"
            to="/oral-care"
          >
            Oral Care
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            className="text-decoration-none "
            aria-current="page"
            to="/mens-range"
          >
            Men's Range
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            className="text-decoration-none "
            aria-current="page"
            to="/business-tools"
          >
            Business Tools
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            className="text-decoration-none "
            aria-current="page"
            to="/uniform"
          >
            Uniform
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            className="text-decoration-none "
            aria-current="page"
            to="/mom-lipstick"
          >
            Mom's Lipstick
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            className="text-decoration-none "
            aria-current="page"
            to="/eye-care"
          >
            Eye Care
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            className="text-decoration-none "
            aria-current="page"
            to="/face-care"
          >
            Face Care
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            className="text-decoration-none "
            aria-current="page"
            to="/skin-formula-9"
          >
            Skin Formula 9
          </Link>
        </li>
        <li className="list-group-item">
          <Link
            className="text-decoration-none "
            aria-current="page"
            to="/vellion"
          >
            Vellion
          </Link>
        </li>
      </ul>
    </div>
  );
}
