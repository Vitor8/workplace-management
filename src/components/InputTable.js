import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as workPlaceActions from '../actions/index';

function InputTable({ addWorkPlace }) {
  const [selectedBuilding, setSelectedBuilding] = useState('');
  const [workPlace, setWorkPlace] = useState('');

  function newWorkPlace(selectedBuilding, workPlace) {
    addWorkPlace(selectedBuilding, workPlace);
    setSelectedBuilding('');
    setWorkPlace('');
  }

  return (
    <div className="input-table">

      <div className="input-building-table">
        <label>Prédio</label><br />
        <select
          className="select-table"
          onChange={(e) => setSelectedBuilding(e.target.value)}
          value={ selectedBuilding }
        >
          <option> </option>
          <option value="Prédio 1">Prédio 1</option>
          <option value="Prédio 2">Prédio 2</option>
          <option value="Prédio 3">Prédio 3</option>
        </select>
      </div>

      <div className="input-workplace-table">
        <label>Local de Trabalho</label><br />
        <input
          type="text"
          className="inputText-table"
          value={ workPlace }
          onChange={(e) => setWorkPlace(e.target.value)}
        />
      </div>

      <button
        className="add-button"
        onClick={ () => newWorkPlace(selectedBuilding, workPlace) }
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
