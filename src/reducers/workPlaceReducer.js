// Estado global da aplicação

const INITIAl_STATE = {
  arrLocaisdeTrabalho: [],
};

const workPlaceReducer = (state = INITIAl_STATE, action) => {
    switch (action.type) {
    case 'ADD_WORKPLACE':
      return state;
  
    case 'REMOVE_WORKPLACE':
      return state;
  
    case 'UPDATE_WORKPLACE':
      return state;
  
    default:
      return state;
    }
  };
  
  export default workPlaceReducer;