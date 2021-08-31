const CHECK_SESSION_STORAGE = 'CHECK_SESSION_STORAGE';
const ADD_WORKPLACE = 'ADD_WORKPLACE';
const REMOVE_WORKPLACE = 'REMOVE_WORKPLACE';
const IS_UPDATING_WORK_PLACE = 'IS_UPDATING_WORK_PLACE';
const UPDATE_WORKPLACE = 'UPDATE_WORKPLACE';

export const checkSessionStorage = (arrLocaisdeTrabalho) => ({
  type: CHECK_SESSION_STORAGE,
  payload: arrLocaisdeTrabalho,
});

export const addWorkPlace = (selectedBuilding, workPlace) => ({
  type: ADD_WORKPLACE,
  payload: {
    selectedBuilding,
    workPlace,
  }
});

export const removeWorkPlace = (idWorkPlace) => ({
  type: REMOVE_WORKPLACE,
  payload: idWorkPlace,
});

export const isUpdatingWorkPlace = (idWorkPlace) => ({
  type: IS_UPDATING_WORK_PLACE,
  payload: idWorkPlace,
});

export const updateWorkPlace = (newWorkPlace) => ({
  type: UPDATE_WORKPLACE,
  payload: { 
    selectedBuilding: newWorkPlace.selectedBuilding,
    workPlace: newWorkPlace.workPlace,
    id: newWorkPlace.id,
  },
});