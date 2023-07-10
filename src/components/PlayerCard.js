import { Card } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function PlayerCard({player}) {
    return (
        <Card className="player-card">
            <img src={player.img} alt={player.name} />
            <h3>{player.name}</h3>
            <p className="club-title-card">{player.club}</p>
            <Link to={`detail/${player.id}`} className="player-detail-button">
                <button>Detail</button>
            </Link>
        </Card>
    );
}