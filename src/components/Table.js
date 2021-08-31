import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as workPlaceActions from '../actions/index';

function Table({ workPlaces, removeWorkPlace, isUpdatingWorkPlace, updateWorkPlace }) {
  const [arrSelect, setArrSelect] = useState([]);
  const [arrInput, setArrInput] = useState([]);

  useEffect(() => {
    const selectedBuildingArray = [];
    const workPlace = [];
    workPlaces.forEach((item) => {
      const newObjectBuilding = {
        id: item.id,
        selectedBuilding: item.selectedBuilding,
      };
      selectedBuildingArray.push(newObjectBuilding);
      const objectWorkPlace = {
        id: item.id,
        workPlace: item.workPlace,
      }
      workPlace.push(objectWorkPlace);
    });
    setArrSelect(selectedBuildingArray);
    setArrInput(workPlace); 
  }, [workPlaces]);

  function updateArrSelect(newSelectedValue, itemId) {
    const newArrSelect = [...arrSelect];
    newArrSelect.forEach((item, index) => {
      if (item.id === itemId) {
        newArrSelect[index].selectedBuilding = newSelectedValue;
      }
    });
    setArrSelect(newArrSelect);
  }

  function updateArrInput(newInputValue, itemId) {
    const newArrInput = [...arrInput];
    newArrInput.forEach((item, index) => {
      if (item.id === itemId) {
        newArrInput[index].workPlace = newInputValue;
      }
    });
    setArrInput(newArrInput);
  }

  function renderNormalRow(item) {
    return (
      <tr>
        <td className="table-title">{ item.selectedBuilding }</td>
        <td className="table-title">{ item.workPlace }</td>
        <td>
          <button onClick={() => isUpdatingWorkPlace(item.id)}>A</button>
          <button onClick={() => removeWorkPlace(item.id)}>D</button>
        </td>
      </tr>
    );
  }

  function prepareToUpdateWorkPlace(itemId) {
    let newBuilding = '1000';
    let newWorkPlace = '1000';
    arrSelect.forEach((item) => {
      if (item.id === itemId) newBuilding = item.selectedBuilding; 
    });
    arrInput.forEach((item) => {
      if (item.id === itemId) newWorkPlace = item.workPlace;
    });
    const updateObject = {
      selectedBuilding: newBuilding,
      workPlace: newWorkPlace,
      id: itemId,
    }
    updateWorkPlace(updateObject);
    isUpdatingWorkPlace(itemId);
  }

  function renderUpdatingRow(item) {
    return (
      <tr>

        <td>
          <select
            className="select-table"
            onChange={ (e) => updateArrSelect(e.target.value, item.id) }
          >
            <option> </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </td>

        <td>
          <input type="text" onChange={ (e) => updateArrInput(e.target.value, item.id) }  />
        </td>

        <td>
          <button onClick={ () => prepareToUpdateWorkPlace(item.id) }>C</button>
          <button onClick={() => removeWorkPlace(item.id)}>D</button>
        </td>

      </tr>
    );
  }

  return (
    <div className="table">
    <table>
      <tr>
        <th className="table-title">Prédio</th>
        <th className="table-title">Local de Trabalho</th>
        <th className="table-title"> </th>
      </tr>
        {
          workPlaces.map((item) => {
            if(!item.isItemBeingUpdated) return renderNormalRow(item);
            return  renderUpdatingRow(item);
          })
        }
    </table>
  </div>
  )
}

const mapStateToProps = (state) => ({
  workPlaces: state.workPlaceReducer.arrLocaisdeTrabalho,
});

const mapDispatchToProps = (dispatch) => ({
  removeWorkPlace: (idWorkPlace) => dispatch(workPlaceActions.removeWorkPlace(idWorkPlace)),
  isUpdatingWorkPlace: (idWorkPlace) => dispatch(workPlaceActions.isUpdatingWorkPlace(idWorkPlace)),
  updateWorkPlace: (updateObject) => dispatch(workPlaceActions.updateWorkPlace(updateObject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
