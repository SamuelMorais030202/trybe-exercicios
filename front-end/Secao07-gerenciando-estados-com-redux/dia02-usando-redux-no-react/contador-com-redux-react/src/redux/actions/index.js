export const actionCreater = (increment = 1) => ({
  type: 'INCRMENT_COUNTER',
  payload: increment,
})