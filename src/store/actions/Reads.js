export const READS = "[READS]";

export const FETCH_READS = `${READS} FETCH`;

export const SET_READS = `${READS} SET`;

export const setReads = (reads) => ({
  type: SET_READS,
  payload: reads,
});

export const fetchReads = () => ({
  type: FETCH_READS,
});
