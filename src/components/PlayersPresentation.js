import React, { useState } from "react";

export default function PlayersPresentation({players}) {
    const [player, setPlayer] = useState([]);
    const [toggle, setToggle] = useState(false);

    if (toggle) {
        return (
            <section className="player-container">
                {players.map((player) => (
                    <div className="player-card">
                        <img src={player.img} alt={player.name} />
                        <h3>{player.name}</h3>
                        <p className="club-title">{player.club}</p>
                        <p className="player-detail-button"><button onClick={() => {
                            setPlayer(player);
                            setToggle(!toggle);
                        }}>Detail</button></p>
                    </div>
                ))}
    
                <div className="player-detail-container on" onClick={() => setToggle(!toggle)}>
                    <div className="player-detail">
                        <img src={player.img} alt={player.name} />
                        <h3>{player.name}</h3>
                        <p className="club-title">{player.club}</p>
                        <p className="player-info">{player.info}</p>
                    </div>
                </div>
            </section>
        );
    } else {
        return (
            <section className="player-container">
                {players.map((player) => (
                    <div className="player-card">
                        <img src={player.img} alt={player.name} />
                        <h3>{player.name}</h3>
                        <p className="club-title">{player.club}</p>
                        <p className="player-detail-button"><button onClick={() => {
                            setPlayer(player);
                            setToggle(!toggle);
                        }}>Detail</button></p>
                    </div>
                ))}
    
                <div className="player-detail-container off" onClick={() => setToggle(!toggle)}>
                    <div className="player-detail">
                        <img src={player.img} alt={player.name} />
                        <h3>{player.name}</h3>
                        <p className="club-title">{player.club}</p>
                        <p className="player-info">{player.info}</p>
                    </div>
                </div>
            </section>
        );
    }
}