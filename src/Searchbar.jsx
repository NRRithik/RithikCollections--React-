import React, { Component } from 'react';

export default class Searchbar extends Component {
  render() {
    return (
      <div>
        <form className="search-form">
          <input
            className="form-control"
            list="browsers"
            placeholder="Search for products"
            style={{
              width: '400px', // Adjust the width as needed
              padding: '10px', // Optional: Add padding for better appearance
              border: '1px solid #ccc', // Optional: Add a border
              borderRadius: '5px', // Optional: Add rounded corners
            }}
          />
          <datalist id="browsers">
            <option value="Shirts" />
            <option value="Tshirts" />
            <option value="Pants" />
            <option value="Tops" />
          </datalist>
        </form>
      </div>
    );
  }
}