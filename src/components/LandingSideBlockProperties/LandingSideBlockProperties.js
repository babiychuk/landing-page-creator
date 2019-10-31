import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {actionCreators} from "../../store/LandingPage";

import BlockHeaderProp from "../BlockHeaderProp/BlockHeaderProp";
import BlockTextProp from "../BlockTextProp/BlockTextProp";
import BlockImgProp from "../BlockImgProp/BlockImgProp";
import BlockColumProp from "../BlockColumProp/BlockColumProp";
import BlockButtonProp from "../BlockButtonProp/BlockButtonProp";
import BlockSocietyProp from "../BlockSocietyProp/BlockSocietyProp";
import BlockVideoProp from "../BlockVideoProp/BlockVideoProp";


import Divider from "@material-ui/core/Divider";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";

const styles = theme => ({    
    paper: {    
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    list: {
        width: '500px',
        padding: '0 5px',
    },
    nameProperties: {
      fontSize: '24px',
      textAlign: 'center',
    },
    margin0_5: {    
      margin: '0px 5px',
    },
    p0_5: {
      padding: '0 5px',
    }

});



class LandingSideBlockProperties extends React.Component {

  showBlockProperties(component){ 
    switch (component) {

      case "HD01":
          return (<BlockHeaderProp/>)
      case "TX01":
          return (<BlockTextProp/>)
      case "IMG01":
          return (<BlockImgProp/>)
      case "CL01":
          return (<BlockColumProp/>)
      case "BT01":
          return (<BlockButtonProp/>)
      case "SC01":
          return (<BlockSocietyProp/>)
      case "VD01":
        return (<BlockVideoProp/>)
      default:
          return component;
      }
  }
   
    render(){
        const {classes} = this.props;     
        return(            
            <div
              className={classes.list}              
              role="presentation"
            >
              
              <List>   
              <div className={classes.nameProperties}>Настройка блока</div>  
              <Divider />
                {this.showBlockProperties(this.props.landingPage.nameBlockToEdit.NameBlock)}       
              </List>              
              <Toolbar variant="dense">                    
                <Button onClick={()=>this.props.saveBlockValuesF()} 
                className={classes.margin0_5} variant="outlined" color="primary">                        
                  Сохранить
                </Button>
                <Button  onClick={()=>this.props.closeBlockPropertiesF(false)}
                className={classes.margin0_5} variant="outlined" color="primary">                        
                  Отменить
                </Button>
              </Toolbar>
                            
            </div>
        );
    }
}

LandingSideBlockProperties.propTypes = {
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



export default withStyles(styles)(connect(mapStateToProps, matchDispatchToProps)(LandingSideBlockProperties));