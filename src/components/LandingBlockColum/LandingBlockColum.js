import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {actionCreators} from "../../store/LandingPage";

import Grid from "@material-ui/core/Grid";

const styles = theme => ({  
    container: {
        padding: '15px 0px',
        backgroundColor: '#ffffff',
    },
    p50: {
        padding: '20px',
        textAlign: 'justify',

    }
});
class LandingBlockColum extends React.Component {

    render() {
        const {classes} = this.props; 
        return ( 
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid  item xs={6}>
                    <div className={classes.p50}>
                        {this.props.landingPage.selectLanding.blocks[this.props.itemNum].params.leftCol.text}
                    </div>
                </Grid>
                <Grid className={classes.p50} item xs={6}>
                    <div className={classes.p50}>   
                        {this.props.landingPage.selectLanding.blocks[this.props.itemNum].params.rightCol.text}
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


export default withStyles(styles)(connect(mapStateToProps, matchDispatchToProps)(LandingBlockColum));