import { GET_MANGA } from "../actions/types";

const initialstate = [];
const MangasReducer = (state = { listMangas: [] }, action) => {
  switch (action.type) {
    case GET_MANGA:
      return { listMangas: action.payload };
    default:
      return state;
  }
};
export default MangasReducer;
