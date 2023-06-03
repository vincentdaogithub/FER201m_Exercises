import React from "react";
import PlayerCard from "./PlayerCard";

export default function PlayersPresentation({players}) {
    return (
        <section className="player-container">
            {players.map((player) => (
                <PlayerCard player={player} />
            ))}
        </section>
    );
}