import axios from "../axios.js";
import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
const TinderCards = () => {
  const [people, setPeople] = useState([]);
  useEffect(async () => {
    const req = await axios.get("/tinder/card");
    setPeople(req.data);
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("removing", nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + " Left the screen");
  };
  console.log(people);

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people?.map((person) => (
          <TinderCard
            className="swipe"
            key={person._id}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imageURL})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
