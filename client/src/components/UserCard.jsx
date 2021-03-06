import React from "react";
import Avatar from 'react-avatar';
import Grid from "@material-ui/core/Grid";
import {Card} from "@material-ui/core";
import "../css/UserCard.css"
import Typography from "@material-ui/core/Typography";
import SettingsIcon from '@material-ui/icons/Settings';
import Button from "@material-ui/core/Button";
import NotificationCenter from "./NotificationCenter";

export default class UserCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: props.user ? props.user.name : "",
            pictureUrl: props.user ? props.user.profile_pic : ""
        };

        this.updateUser = this.updateUser.bind(this);
    }

    updateUser(user) {
        this.setState({
            userName: user ? user.name : "",
            pictureUrl: user ? user.profile_pic : ""
        });
    }

    render() {
        return (
            <Grid container>
                <Avatar alt={this.state.userName} size="55" round={true} src={this.state.pictureUrl}/>
                <Grid item className="user-info">
                    <Card className="user-name">
                        <Typography className="card-title" color="textSecondary" gutterBottom>
                            {this.state.userName}
                        </Typography>
                    </Card>
                    <div className="buttons">
                        <NotificationCenter className="notifications-center"/>

                        <Button variant="contained" color="primary" className="settings-btn" size="small">
                            <SettingsIcon fontSize="small"/>
                        </Button>
                    </div>
                </Grid>


            </Grid>
        );
    }
}
