
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


    a(id) {
        this.props.carDelete(id)
    }

    createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
    };

    render() {

        //this.givemestate(this.props.id, this.props.brand, this.props.model, this.props.color, this.props.fuel_type, this.props.engine_volume, this.props.traction, this.props.price);

        return (
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", flex: "" }}>
                <Card style={{ width: "100%", height: "100%", marginLeft: "200px", marginRight: "200px", marginTop: "50px", marginBottom: "50px", border: "15px", borderRadius: "20px" }}>
                    <Typography component="p"
                     style={{  margin: "40px" }}>
                        <h1>Detail View</h1>
                    </Typography>

                    <img src={img} />

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h1"
                            style={{ width: "100", color: "#000", marginBottom: "40px" , marginLeft:"31px"  }}>
                            <font size="20"> {this.props.brand}</font>
                        </Typography>
                        <Typography component="p">
                            <div style={{ marginBottom: "10px" }} >


                                <span style={{ marginLeft: "40px", marginRight:"21px" }}>Model:</span>
                                <Chip
                                    style={{ width: "300px", backgroundColor: "#7BDB86", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px" }}
                                    label={this.props.model}
                                    color="primary"
                                    deleteIcon={<DoneIcon />}
                                />
                                <span style={{ marginLeft: "40px" , marginRight:"61px"  }}>Color:</span>
                                <Chip
                                    style={{ width: "300px", backgroundColor: "#7BDB86", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px" }}
                                    label={this.props.color}
                                    color="primary"
                                    deleteIcon={<DoneIcon />}
                                />
                            </div>
                            <div style={{ marginBottom: "10px" }}>
                                <span style={{ marginLeft: "40px" }}>Fuel Type:</span>
                                <Chip
                                    style={{ width: "300px", backgroundColor: "#7BDB86", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px" }}
                                    label={this.props.fuel_type}
                                    color="primary"
                                    deleteIcon={<DoneIcon />}
                                />
                                <span style={{ marginLeft: "40px" }}>Engine Volume:</span>
                                <Chip
                                    style={{ width: "300px", backgroundColor: "#7BDB86", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px" }}
                                    label={this.props.engine_volume}
                                    color="primary"
                                    deleteIcon={<DoneIcon />}
                                />
                            </div>
                            <div style={{ marginBottom: "40px" }}>
                                <span style={{ marginLeft: "40px" , marginRight:"10px" }}>Traction:</span>
                                <Chip
                                    style={{ width: "300px", backgroundColor: "#7BDB86", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px" }}
                                    label={this.props.traction}
                                    color="primary"
                                    deleteIcon={<DoneIcon />}
                                />
                                <span style={{ marginLeft: "40px", marginRight:"61px" }}>Price:</span>
                                <Chip
                                    style={{ width: "300px", backgroundColor: "#7BDB86", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px" }}
                                    label={this.props.price}
                                    color="primary"
                                    deleteIcon={<DoneIcon />}
                                />
                            </div>
                        </Typography>
                    </CardContent>
                    <CardActions style={{ marginBottom: "20px" }} >
                        <Link to="/">
                            <Button size="small"
                                style={{ width: "150px", backgroundColor: "#7BDB86", color: "#fff", marginLeft: "40px", border: "15px", height: "35px", borderRadius: "35px" }} >
                                <b> Back</b>
                            </Button>
                        </Link>
                        <Link to="/">
                            <Button size="small"
                                style={{ width: "150px", backgroundColor: "#000", color: "#fff", marginLeft: "20px", border: "15px", height: "35px", borderRadius: "35px" }}
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