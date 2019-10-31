import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {actionCreators} from "../../store/LandingPage";


import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({    
    paper: {    
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    list: {
        width: 250,
    },    
    nameTitle: {
      fontSize: '24px',
      textAlign: 'center',
    },
});



class LandingSideList extends React.Component {
   
    render(){
        const {classes} = this.props;     
        return(            
            <div
              className={classes.list}              
              role="presentation"
              onClick={()=>this.props.openToolBarF(false)}
              onKeyDown={()=>this.props.openToolBarF(false)}
            >
              <List>
                <div className={classes.nameTitle}>Библиотека блоков</div>
                <Divider />                
                {this.props.sideListArr.map((item, num) => (
                  <ListItem button 
                    key={num} 
                    onClick={()=>this.props.clickToAddLandingBlockF(item, num)}
                  >
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItem>
                ))}
              </List>
            </div>
        );
    }
}

LandingSideList.propTypes = {
    classes: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    return {
        landingPage: state.landingPage,
        landingData: state.landingPage.data,
        sideListArr: state.landingPage.sideListArr,
    }    
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch)    
}



export default withStyles(styles)(connect(mapStateToProps, matchDispatchToProps)(LandingSideList));