// Estado global da aplicação

const INITIAl_STATE = {
  arrLocaisdeTrabalho: [],
};

const workPlaceReducer = (state = INITIAl_STATE, action) => {
    switch (action.type) {
    case 'ADD_WORKPLACE':
      const newWorkPlace = {
        id: state.arrLocaisdeTrabalho.length,
        selectedBuilding: action.payload.selectedBuilding,
        workPlace: action.payload.workPlace,
        isItemBeingUpdated: false,
      }
      return {
        ...state,
        arrLocaisdeTrabalho: [ ...state.arrLocaisdeTrabalho, newWorkPlace ]
      }
  
    case 'REMOVE_WORKPLACE':
      const newWorkPlaces = state.arrLocaisdeTrabalho.filter((item) => item.id !== action.payload);
      return {
        ...state,
        arrLocaisdeTrabalho: newWorkPlaces,
      };

    case 'IS_UPDATING_WORK_PLACE':
      const updatingWorkPlace = [...state.arrLocaisdeTrabalho];
      state.arrLocaisdeTrabalho.forEach((item, index) => {
        if (item.id === action.payload) {
          updatingWorkPlace[index].isItemBeingUpdated = !updatingWorkPlace[index].isItemBeingUpdated;
        }
      })

      return {
        ...state,
        arrLocaisdeTrabalho: updatingWorkPlace,
      };
  
    case 'UPDATE_WORKPLACE':
      const updatedWorkPlace = [...state.arrLocaisdeTrabalho];
      state.arrLocaisdeTrabalho.forEach((item, index) => {
        if (item.id === action.payload.id) {
          updatedWorkPlace[index].selectedBuilding = action.payload.selectedBuilding;
          updatedWorkPlace[index].workPlace = action.payload.workPlace;
        }
      })
      return {
        ...state,
        arrLocaisdeTrabalho: updatedWorkPlace,
      };
  
    default:
      return state;
    }
  };
  
  export default workPlaceReducer;