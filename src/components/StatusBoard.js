import React from 'react';

const StatusBoard = props => (
    <div className="board">
        <h1 className="title"> Remember The Mon!</h1>
        <h3>Instructions: Click a Pokemona and you get a point, but don't click the same Pokemon more than once!</h3>
        <h3>Current status: It's super effective!</h3>
        <div className="scores">
            <p>Score: 0</p>
            <p>High Scre: 0</p>
        </div>
    </div>
)

export default StatusBoard;