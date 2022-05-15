import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBugs } from "../../Controllers/Redux/bugSlice";
import BugCard from "../Components/Bug Card/bugCard";
import BugView from "../Components/Bug view/bugView";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [display_bug, set_display_bug] = useState({
    name: "",
    isDisplayed: false,
  });
  const dispatch = useDispatch();

  const { bugs } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getBugs());
  }, [bugs.length < 1]);

  function BugClicked(name) {
    set_display_bug({
      isDisplayed: !display_bug.isDisplayed,
      name: name,
    });
  }

  return (
    <div className="page-container">
      {bugs.map((bug, key) => (
        <BugCard key={key} bug={bug} clicked={BugClicked} />
      ))}
      {display_bug.isDisplayed && (
        <BugView
          clicked={BugClicked}
          bug={bugs.filter((bug) => bug.name == display_bug.name)[0]}
        />
      )}
    </div>
  );
};
