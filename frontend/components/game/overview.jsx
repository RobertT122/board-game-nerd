import React from "react";

const Overview = ({description}) => (
  <>
    <h2 className="context-title">Description</h2>
    <div className="context-body">
      <p>{description}</p>
    </div>
  </>
)

export default Overview