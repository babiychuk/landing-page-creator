import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {actionCreators} from "../../store/LandingPage";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

const styles = theme => ({  
    container: {
        padding: '15px 0px',
        backgroundColor: '#ffffff',
    },  
    img: {  
        width:'40%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
    },
    
});


class LandingBlockImg extends React.Component {

    render() {
        const {classes} = this.props;  
        return (
            <Grid className={classes.container} container >
                <Grid container justify="center" item xs={12}>
                    <div>
                        <img alt="img" className={classes.img} src={this.props.landingPage.selectLanding.blocks[this.props.itemNum].params.Img.imgUrl} />
                    </div>
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


export default withStyles(styles)(connect(mapStateToProps, matchDispatchToProps)(LandingBlockImg));