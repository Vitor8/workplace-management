const ADD_WORKPLACE = 'ADD_WORKPLACE';
const REMOVE_TASK = 'REMOVE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';


export const addWorkPlace = (task) => ({
  type: ADD_WORKPLACE,
  payload: task,
});

export const removeWorkPlace = (taskId) => ({
  type: REMOVE_TASK,
  payload: taskId,
});

export const updateWorkPlace = (task) => ({
  type: UPDATE_TASK,
  payload: task,
});