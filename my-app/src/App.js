import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Card = (card) => {
    return (
        <div className="card">
            <img src={card.avatar_url} width="75px" className="avatar" alt="img" />
            <div className="info">
                <div>{card.name}</div>
                <div>{card.company}</div>
            </div>
        </div>
    );
};


const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card key={card.id} {...card} />)}

        </div>
    );
}

class App extends React.Component {
    state = {
        cards: [
            {
                name: "paul",
                avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
                company: "facebook"
            },
            {
                name: "john",
                avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                company: "microsoft"
            },
            {
                name: "lee",
                avatar_url: "https://avatars0.githubusercontent.com/u/21?v=4",
                company: "fwb"
            },
            {
                name: "mark",
                avatar_url: "https://avatars0.githubusercontent.com/u/13?v=4",
                company: "apple"
            },
            {
                name: "liam",
                avatar_url: "https://avatars0.githubusercontent.com/u/29?v=4",
                company: "kfc"
            },
            {
                name: "john",
                avatar_url: "https://avatars0.githubusercontent.com/u/7?v=4",
                company: "facebook"
            },

        ]
    };


    
    

    render() {
        return (
            <div>
                <CardList cards={this.state.cards} />
            </div>
        );
    }
}



export default App;
