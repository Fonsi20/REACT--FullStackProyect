//Author: Alfonso Fernandez Alvarez
//Version: 1.0


// /client/ViewDetail.js
import React, { Component } from "react";
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import img from './cars.jpg';
import DoneIcon from '@material-ui/icons/Done';


class ViewDetail extends Component {

    //Funcion for send the id of the car that a want delete
    a(id) {
        this.props.carDelete(id)
    }

    //Funcion that sed the event and property
    createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
    };

    //Rendering the interface of ViewDetail
    render() {
        return (
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", flex: "", textAlign: "center" }}>
                <Card style={{ width: "100%", height: "100%", marginLeft: "20px", marginRight: "20px", marginTop: "10px", marginBottom: "10px", border: "15px", borderRadius: "20px" }}>
                    <Typography component="p"
                        style={{ margin: "40px" }}>
                        <h1>Detail View</h1>
                    </Typography>

                    <img src={img} style={{ backgroundsize: "cover", width: "100%", height: "400px" }} />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h1"
                            style={{ width: "100", color: "#000", marginBottom: "40px", margin: "31px" }}>
                            <font size="20"> {this.props.brand}</font>
                        </Typography>
                        <Typography component="p">
                            <div style={{ marginBottom: "10px" }} >
                                <span>Model:</span>
                                <b>  <Chip
                                    style={{ width: "300px", backgroundColor: "#7BDB86", color: "#fff", margin: "10px", border: "15px", height: "35px", borderRadius: "35px" }}
                                    label={this.props.model}
                                    color="primary"
                                    deleteIcon={<DoneIcon />}
                                /></b>
                                <span>Color:</span>
                                <b> <Chip
                                    style={{ width: "300px", backgroundColor: "#7BDB86", color: "#fff", margin: "10px", border: "15px", height: "35px", borderRadius: "35px" }}
                                    label={this.props.color}
                                    color="primary"
                                    deleteIcon={<DoneIcon />}
                                /></b>
                            </div>
                            <div style={{ marginBottom: "10px" }}>
                                <span>Fuel Type:</span>
                                <b><Chip
                                    style={{ width: "300px", backgroundColor: "#7BDB86", color: "#fff", margin: "10px", border: "15px", height: "35px", borderRadius: "35px" }}
                                    label={this.props.fuel_type}
                                    color="primary"
                                    deleteIcon={<DoneIcon />}
                                /></b>
                                <span>Engine Volume:</span>
                                <b> <Chip
                                    style={{ width: "300px", backgroundColor: "#7BDB86", color: "#fff", margin: "10px", border: "15px", height: "35px", borderRadius: "35px" }}
                                    label={this.props.engine_volume}
                                    color="primary"
                                    deleteIcon={<DoneIcon />}
                                /></b>
                            </div>
                            <div style={{ marginBottom: "40px" }}>
                                <span>Traction:</span>
                                <b> <Chip
                                    style={{ width: "300px", backgroundColor: "#7BDB86", color: "#fff", margin: "10px", border: "15px", height: "35px", borderRadius: "35px" }}
                                    label={this.props.traction}
                                    color="primary"
                                    deleteIcon={<DoneIcon />}
                                /></b>
                                <span>Price:</span>
                                <b> <Chip
                                    style={{ width: "300px", backgroundColor: "#7BDB86", color: "#fff", margin: "10px", border: "15px", height: "35px", borderRadius: "35px" }}
                                    label={this.props.price}
                                    color="primary"
                                    deleteIcon={<DoneIcon />}
                                /></b>
                            </div>
                        </Typography>
                    </CardContent>
                    <CardActions style={{ marginBottom: "20px" }} >
                        <Link to="/">
                            <Button size="small"
                                style={{ width: "150px", backgroundColor: "#7BDB86", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px",  textDecoration: "underline", textDecorationColor:"#7BDB86" }} >
                                <b> Back</b>
                            </Button>
                        </Link>
                        <Link to="/">
                            <Button size="small"
                                style={{ width: "150px", backgroundColor: "#000", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px", textDecoration: "underline", textDecorationColor:"#000" }}
                                onClick={e => { this.a(this.props.id) }}>
                                <b>Delete this Car</b>
                            </Button>
                        </Link>

                    </CardActions>
                </Card >
            </div >
        );
    }
}

export default ViewDetail;