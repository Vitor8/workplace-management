import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as workPlaceActions from '../actions/index';

function InputTable({ addWorkPlace }) {
  const [selectedBuilding, setSelectedBuilding] = useState('');
  const [workPlace, setWorkPlace] = useState('');
  return (
    <div className="input-table">
    <div className="input-building-table">
      <label>Prédio</label><br />
      <select
        className="select-table"
        onChange={(e) => setSelectedBuilding(e.target.value)}
      >
        <option> </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
    <div>
      <label>Local de Trabalho</label><br />
      <input
        type="text"
        className="inputText-table"
        onChange={(e) => setWorkPlace(e.target.value)}
      />
    </div>
    <button
      className="add-button"
      onClick={ () => addWorkPlace(selectedBuilding, workPlace) }
    >
      +
    </button>
  </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addWorkPlace: (selectedBuilding, workPlace) => dispatch(workPlaceActions.addWorkPlace(selectedBuilding, workPlace)),
});

export default connect(null, mapDispatchToProps)(InputTable);
