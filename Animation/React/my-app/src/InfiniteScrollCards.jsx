import React from "react";
import "./InfiniteScrollCards.css";

const cards = [
  "Card 1",
  "Card 2",
  "Card 3",
  "Card 4",
  "Card 5",
  "Card 6",
  "Card 7",
];

export default function InfiniteScrollCards() {
  return (
    <div className="scroll-container">
      <div className="card-body">
        {cards.map((card, i) => (
          <div className="cards" key={i}>
            {card}
          </div>
        ))}
        {cards.map((card, i) => (
          <div className="cards" key={`dup-${i}`}>
            {card}
          </div>
        ))}
      </div>
    </div>
  );
}
