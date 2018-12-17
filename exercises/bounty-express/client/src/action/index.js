import axios from "axios";

export function allBounties(bounties) {
  return {
    type: "ALL_BOUNTIES",
    payload: bounties
  };
}

export const getAllBounties = () => dispatch =>
  axios.get("/bounties/").then(res => {
    dispatch(allBounties(res.data));
  });

export const postOneBounty = bountyData =>
  axios.post("/bounties/", bountyData).then(res => res.data);
