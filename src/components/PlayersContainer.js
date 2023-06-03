import React, { Component } from "react";
import { Players } from "../shared/ListOfPlayers";

export default class PlayersContainer extends Component {
    render() {
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
}