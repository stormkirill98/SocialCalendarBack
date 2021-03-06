import React from "react";
import "../css/EventMember.css"
import {Link} from "react-router-dom";

export default class EventMember extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            avatar: "https://www.meme-arsenal.com/memes/3904597739d704ee6d0688119ebeee15.jpg",
            name: "Kalivan"
        };

        fetch(`/member?id=${this.props.id}`).then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    this.state.name = data.name
                    this.state.avatar = data.profile_pic
                })
            } else {
                console.log(response.statusText);
            }
        });
    }

    render() {
        return (
            <Link to={"/Calendar/" + this.state.id} className="event-member-link">
                <div className="event-member">
                    <img className="event-member-ava" src={this.state.avatar} alt="Аватарка" width="20%" />
                    <div className="event-member-name">
                        {this.state.name}
                    </div>
                </div>
            </Link>
        );
    }
}