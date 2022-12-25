import React from "react";
import { redirect } from "react-router-dom";

const action = async () => {
  return redirect("/");
};

export default { action };
