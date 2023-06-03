import React, { Component } from "react";
import { data } from "../shared/ListOfPlayers";
import PlayersPresentation from "./PlayersPresentation";

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            players: data
        }
    }

    render() {
        return (
            <main>
                <PlayersPresentation players={this.state.players} />
            </main>
        );
    }
}