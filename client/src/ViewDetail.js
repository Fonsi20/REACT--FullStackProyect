
import React, { Component } from "react";
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';


class ViewDetail extends Component {

    createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
    };

    render() {

        //this.givemestate(this.props.id, this.props.brand, this.props.model, this.props.color, this.props.fuel_type, this.props.engine_volume, this.props.traction, this.props.price);

        return (
            <Card style={{ padding: "50px", margin: "50px", border: "15px", borderRadius: "20px", textAlign: "center" }}>
                <Typography component="p">
                    <h1>Detail View</h1>
                </Typography>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h1"
                        style={{ width: "100", color: "#000", marginBottom: "40px" }}>
                        <font size="20"> {this.props.brand}</font>
                    </Typography>
                    <Typography component="p">
                        <Chip
                            style={{ width: "150px", backgroundColor: "#7BDB86", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px" }}
                            label={this.props.id}
                            color="primary"
                            deleteIcon={<DoneIcon />}
                        />
                        <Chip
                            style={{ width: "150px", backgroundColor: "#7BDB86", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px" }}
                            label={this.props.model}
                            color="primary"
                            deleteIcon={<DoneIcon />}
                        />
                        <Chip
                            style={{ width: "150px", backgroundColor: "#7BDB86", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px" }}
                            label={this.props.color}
                            color="primary"
                            deleteIcon={<DoneIcon />}
                        />
                        <Chip
                            style={{ width: "150px", backgroundColor: "#7BDB86", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px" }}
                            label={this.props.fuel_type}
                            color="primary"
                            deleteIcon={<DoneIcon />}
                        />
                        <Chip
                            style={{ width: "150px", backgroundColor: "#7BDB86", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px" }}
                            label={this.props.engine_volume}
                            color="primary"
                            deleteIcon={<DoneIcon />}
                        />
                        <Chip
                            style={{ width: "150px", backgroundColor: "#7BDB86", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px" }}
                            label={this.props.traction}
                            color="primary"
                            deleteIcon={<DoneIcon />}
                        />
                        <Chip
                            style={{ width: "150px", backgroundColor: "#7BDB86", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px" }}
                            label={this.props.price}
                            color="primary"
                            deleteIcon={<DoneIcon />}
                        />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to="/">
                        <Button size="small"
                            style={{ width: "150px", backgroundColor: "#7BDB86", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px" }} >
                            <b> Back</b>
                        </Button>
                    </Link>
                    <Button size="small"
                        style={{ width: "150px", backgroundColor: "#000", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px" }}
                    >
                        <b>Delete this Car</b>
                    </Button>

                </CardActions>
            </Card >
        );
    }
}

export default ViewDetail;