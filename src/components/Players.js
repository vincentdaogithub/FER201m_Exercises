import React, { Component } from "react";

export default class Players extends Component {
    render() {
        return (
            <section className="player-container">
                <div className="player-card">
                    <img src="assets/images/cr.jpg" alt="cristiano ronaldo" />
                    <h3>Cristiano Ronaldo</h3>
                    <p className="club-title">Manchester United</p>
                    <p className="player-detail"><button>Detail</button></p>
                </div>

                <div className="player-card">
                    <img src="assets/images/kante.jpg" alt="kante" />
                    <h3>Kante</h3>
                    <p className="club-title">Chelsea</p>
                    <p className="player-detail"><button>Detail</button></p>
                </div>
                
                <div className="player-card">
                    <img src="assets/images/messi.jpg" alt="messi" />
                    <h3>Messi</h3>
                    <p className="club-title">PSG</p>
                    <p className="player-detail"><button>Detail</button></p>
                </div>
                
                <div className="player-card">
                    <img src="assets/images/neymar.jpg" alt="neymar" />
                    <h3>Neymar</h3>
                    <p className="club-title">PSG</p>
                    <p className="player-detail"><button>Detail</button></p>
                </div>

                <div className="player-card">
                    <img src="assets/images/kane.jpg" alt="kane" />
                    <h3>Harry Kane</h3>
                    <p className="club-title">Spurs</p>
                    <p className="player-detail"><button>Detail</button></p>
                </div>

                <div className="player-card">
                    <img src="assets/images/haaland.jpg" alt="haaland" />
                    <h3>Haaland</h3>
                    <p className="club-title">Manchester City</p>
                    <p className="player-detail"><button>Detail</button></p>
                </div>
            </section>
        );
    }
}