import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {actionCreators} from "../../store/LandingPage";

import Grid from "@material-ui/core/Grid";

const styles = theme => ({  
    p10: {
        padding: "10px",
    },
});
class LandingBlockVideo extends React.Component {

    render() {
        const {classes} = this.props; 
        return ( 
        <div className={classes.p10}>
            <Grid container spacing={3}>
                <Grid  item xs={6}>
                    <div className={classes.p50}>
                        <iframe title="youtube video" width="560" height="315" src={this.props.landingPage.selectLanding.blocks[this.props.itemNum].params.video.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </Grid>               
            </Grid>
        </div>
            
        )
    }
}


function mapStateToProps(state) {
    return {
        landingPage: state.landingPage,
    }    
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch)    
}


export default withStyles(styles)(connect(mapStateToProps, matchDispatchToProps)(LandingBlockVideo));