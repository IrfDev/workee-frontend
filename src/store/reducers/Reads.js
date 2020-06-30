// import { projects as defaultProjects } from '../schemas/Project';
import { FETCH_READS, SET_READS } from "../actions/Reads";

const readsReducer = (reads = [], action) => {
  switch (action.type) {
    case FETCH_READS:
      return {
        reads,
        isLoading: true,
        error: null,
      };

    case SET_READS:
      console.log("Reducer:", action.payload);
      return {
        reads: action.payload,
        isLoading: false,
        error: null,
      };

    default:
      return reads;
  }
};
export default readsReducer;
