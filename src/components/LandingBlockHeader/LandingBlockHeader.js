import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {actionCreators} from "../../store/LandingPage";

import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    paper: {    
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    containerStyle: {
        color:'#223355',
        textAlign: 'center',
        verticalAlign: 'middle',
        height:'60vh',
        backgroundAttachment:'scroll',
        webkitBackgroundSize: 'cover',
        mozBackgroundSize: 'cover',
        oBackgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
    },
    colorText:{
        color: '#ffffff',
    },
    valignMiddle: {
        verticalAlign: 'middle',
        height: '50vh',        
    },
});



class LandingBlockHeader extends React.Component {

    render() {
        const {classes} = this.props;  
        let backgroundImage = this.props.landingPage.selectLanding.blocks[this.props.itemNum].params.backgroundImage; 
        return (
            <Grid className={classes.containerStyle} style={backgroundImage} item xs={12}>                                
                <Grid className={classes.valignMiddle} item xs={12} container>
                   <Grid item xs={12} container justify="center">
                        <Grid item xs={6} container justify="center">
                            <h4 className={classes.colorText}>{this.props.landingPage.selectLanding.blocks[this.props.itemNum].params.header.text}</h4>
                        </Grid>
                    </Grid> 
                    <Grid item xs={12} container justify="center">
                        <Grid item xs={6} container justify="center" >
                            <h1 className={classes.colorText}>{this.props.landingPage.selectLanding.blocks[this.props.itemNum].params.mainText.text}</h1>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container justify="center">
                        <Grid item xs={6} container justify="center">
                            <h3 className={classes.colorText}>{this.props.landingPage.selectLanding.blocks[this.props.itemNum].params.underText.text}</h3>
                        </Grid>
                    </Grid>
                </Grid>    
            </Grid> 
            
        )
    }
}


function mapStateToProps(state) {
    return {
        landingPage: state.landingPage, 
    }    
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch)    
}


export default withStyles(styles)(connect(mapStateToProps, matchDispatchToProps)(LandingBlockHeader));