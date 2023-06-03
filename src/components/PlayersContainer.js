import React from "react";
import { Players } from "../shared/ListOfPlayers";

export default function PlayersContainer() {
    return (
        <section className="player-container">
            {Players.map((player) => (
                <div className="player-card">
                    <img src={player.img} alt={player.name} />
                    <h3>{player.name}</h3>
                    <p className="club-title">{player.club}</p>
                    <p className="player-detail"><button>Detail</button></p>
                </div>
            ))}
        </section>
    );
}