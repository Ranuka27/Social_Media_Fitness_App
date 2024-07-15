import React from "react";
import { useSnapshot } from "valtio";
import state from "../../Utils/Store";
import StoryCard from "./StoryCard";

const TobBox = () => {
  const snap = useSnapshot(state);
  return (
    <div>
      <p>Workout Stories</p>
      <div className="top_box">
        <div
          onClick={() => {
            state.createWorkoutStatusModalOpened = true;
          }}
          className="my_story_card"
        >
          <img alt="alt-tag" src={snap.currentUser?.image} />

          
        </div>
        {snap.storyCards.map((card) => (
          <StoryCard key={card?.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default TobBox;
