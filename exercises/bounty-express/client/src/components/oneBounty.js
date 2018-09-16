import React from "react";

const oneBounty = ({ fName, lName, living, age, bountyAmount, type }) => {
  return (
    <div className="card-1 p-3 m-3">
      <p>First Name: {fName}</p>
      <p>Last Name: {lName}</p>
      <p>Are they living: {living}</p>
      <p>Age: {age}</p>
      <p>What is the bounty amount: {bountyAmount}</p>
      <p>What type: {type}</p>
    </div>
  );
};

export default oneBounty;
