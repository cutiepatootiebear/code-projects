const initialState = {
  allBounties: {}
};

const oneBountyReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "ALL_BOUNTIES":
      return { allBounties: action.payload };
    default:
      return state;
  }
};
export default oneBountyReducer;
