// Estado global da aplicação

const INITIAl_STATE = {
  arrLocaisdeTrabalho: [],
};

const workPlaceReducer = (state = INITIAl_STATE, action) => {
    switch (action.type) {

    case 'CHECK_SESSION_STORAGE': {
      return {
        ...state,
        arrLocaisdeTrabalho: action.payload,
      }
    }

    case 'ADD_WORKPLACE':
      const newWorkPlace = {
        id: state.arrLocaisdeTrabalho.length,
        selectedBuilding: action.payload.selectedBuilding,
        workPlace: action.payload.workPlace,
        isItemBeingUpdated: false,
      }
      const newStateADD = {
        ...state,
        arrLocaisdeTrabalho: [ ...state.arrLocaisdeTrabalho, newWorkPlace],
      }
      sessionStorage.setItem('arrLocaisTrabalho', JSON.stringify(newStateADD));

      return newStateADD;
  
    case 'REMOVE_WORKPLACE':
      const newWorkPlaces = state.arrLocaisdeTrabalho.filter((item) => item.id !== action.payload);
      const newStateREMOVE = {
        ...state,
        arrLocaisdeTrabalho: newWorkPlaces,
      }
      sessionStorage.setItem('arrLocaisTrabalho', JSON.stringify(newStateREMOVE));

      return newStateREMOVE;

    case 'IS_UPDATING_WORK_PLACE':
      const updatingWorkPlace = [...state.arrLocaisdeTrabalho];
      state.arrLocaisdeTrabalho.forEach((item, index) => {
        if (item.id === action.payload) {
          updatingWorkPlace[index].isItemBeingUpdated = !updatingWorkPlace[index].isItemBeingUpdated;
        }
      })
      const newStateISUPDATING = {
        ...state,
        arrLocaisdeTrabalho: updatingWorkPlace,      
      }
      sessionStorage.setItem('arrLocaisTrabalho', JSON.stringify(newStateISUPDATING));

      return newStateISUPDATING;
  
    case 'UPDATE_WORKPLACE':
      const updatedWorkPlace = [...state.arrLocaisdeTrabalho];
      state.arrLocaisdeTrabalho.forEach((item, index) => {
        if (item.id === action.payload.id) {
          updatedWorkPlace[index].selectedBuilding = action.payload.selectedBuilding;
          updatedWorkPlace[index].workPlace = action.payload.workPlace;
        }
      })
      const newStateUPDATED = {
        ...state,
        arrLocaisdeTrabalho: updatedWorkPlace,        
      }
      sessionStorage.setItem('arrLocaisTrabalho', JSON.stringify(newStateUPDATED));

      return newStateUPDATED;
  
    default:
      return state;
    }
  };
  
  export default workPlaceReducer;