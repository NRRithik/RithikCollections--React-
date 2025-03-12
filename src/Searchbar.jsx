import React, { Component } from 'react'

export default class Searchbar extends Component {
  render() {
    return (
      <div>
        <form className="search-form">
          <input className="form-control search-input"   list="browsers"  placeholder="Search for products"/>
                <datalist id="browsers">
                  <option value="Shirts" />
                  <option value="Tshirts" />
                  <option value="Pants" />
                  <option value="Tops" />
                </datalist>
        </form>
      </div>
    )
  }
}
