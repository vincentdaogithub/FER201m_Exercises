import React from "react";
import { data } from "../shared/ListOfPlayers";
import { useParams } from "react-router-dom";
import { Card } from "@mui/material";

export default function PlayerDetail() {
    const playerId = useParams();
    const player = data.find(obj => {
        return obj.id == playerId.id;
    });
    return (
        <Card className="player-detail-container">
            <div className="player-detail">
                <div className="img-detail-container">
                    <img src={`../${player.img}`} alt={player.name} />
                </div>
                <h3 className="player-detail-name">{player.name}</h3>
                <h3 className="club-title">{player.club}</h3>
                <h3 className="market-value">Market value: &euro; {player.cost}</h3>
                <p className="player-info">{player.info}</p>
            </div>
        </Card>
    );
}