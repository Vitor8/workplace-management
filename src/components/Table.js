import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as workPlaceActions from '../actions/index';
import PenIcon from '../icons/pen-icon.png';
import DumpIcon from '../icons/dump-icon.png';
import CorrectIcon from '../icons/correct-icon.png';

function Table({ workPlaces, removeWorkPlace, isUpdatingWorkPlace, updateWorkPlace, checkSessionStorage }) {
  const [arrSelect, setArrSelect] = useState([]);
  const [arrInput, setArrInput] = useState([]);
  const [hasCheckedSessionStorage, setHasCheckedSessionStorage] = useState(false);

  useEffect(() => {
    let savedWorkPlaces = [];
    const savedData = JSON.parse(sessionStorage.getItem('arrLocaisTrabalho')) || [];
    if (savedData.length !== 0) savedWorkPlaces = savedData.arrLocaisdeTrabalho;
    checkSessionStorage(savedWorkPlaces);
    setHasCheckedSessionStorage(true);
  },[]);

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
        <td className="table-row">{ item.selectedBuilding }</td>
        <td className="table-row">{ item.workPlace }</td>
        <td className="table-row-buttons">
          <input type="image" src={ PenIcon } width="22px" height="22px" onClick={() => isUpdatingWorkPlace(item.id)} />
          <input type="image" src={ DumpIcon } width="22px" height="22px" onClick={() => removeWorkPlace(item.id)} />
        </td>
      </tr>
    );
  }

  function prepareToUpdateWorkPlace(itemId) {
    let newBuilding = '';
    let newWorkPlace = '';
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
            className="table-row-updating"
            onChange={ (e) => updateArrSelect(e.target.value, item.id) }
          >
            <option> </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </td>

        <td>
          <input type="text" className="table-row-updating" onChange={ (e) => updateArrInput(e.target.value, item.id) }  />
        </td>

        <td className="table-row-buttons">
          <input type="image" src={ CorrectIcon } width="22px" height="22px" onClick={() => prepareToUpdateWorkPlace(item.id)} />
          <input type="image" src={ DumpIcon } width="22px" height="22px" onClick={() => removeWorkPlace(item.id)} />
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
          <th className="table-title-none"></th>
        </tr>
          { hasCheckedSessionStorage &&
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
  checkSessionStorage: (arrLocaisdeTrabalho) => dispatch(workPlaceActions.checkSessionStorage(arrLocaisdeTrabalho)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
