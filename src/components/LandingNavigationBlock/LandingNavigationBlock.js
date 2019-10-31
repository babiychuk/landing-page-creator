import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {actionCreators} from "../../store/LandingPage";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import SettingsIcon from "@material-ui/icons/Settings";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import DeleteIcon from "@material-ui/icons/Delete";



const styles = theme => ({    
    marginR5: {    
        marginRight: '5px',
    },
    iconRed: {     
        color:'#f44336',
    },
    padding10: {
        padding: '10px',
        display: 'inline-block',
        position: 'absolute',
        right: '0',
    }
});


class LandingNavigationBlock extends React.Component {

    render() {
        const {classes} = this.props;
        return (
         
            <Grid className={classes.padding10} container item xs={3}>      
                <Paper>              
                    <Toolbar variant="dense"> 
                        <Button title="Настроить блок" 
                            onClick={()=>this.props.openBlockPropertiesF(true, this.props.item.key, this.props.item, this.props.itemNum)}
                            className={classes.marginR5} variant="outlined" color="primary">                        
                            <SettingsIcon/>   
                        </Button> 
                        <Button title="Поднять блок" onClick={()=>this.props.upBlockInPageF(this.props.itemNum)}
                            className={classes.marginR5} variant="outlined" color="primary">                        
                            <ArrowUpwardIcon/>
                        </Button>
                        <Button title="Опустить блок" onClick={()=>this.props.downBlockInPageF(this.props.itemNum)}
                            className={classes.marginR5} variant="outlined" color="primary">                        
                            <ArrowDownwardIcon/>
                        </Button>    
                        <Button title="Удалить блок" onClick={()=>this.props.openModalToDeleteBlockF(true, this.props.itemNum)} className={classes.iconRed} variant="outlined">                        
                            <DeleteIcon/>
                        </Button>                                                      
                    </Toolbar>
                </Paper>         
            </Grid> 
         )
    }
}

LandingNavigationBlock.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        landingPage: state.landingPage,  
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch)    
}


export default withStyles(styles)(connect(mapStateToProps, matchDispatchToProps)(LandingNavigationBlock));