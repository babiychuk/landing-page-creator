import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {actionCreators} from "../../store/LandingPage";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

class BlockButtonProp extends React.Component {

    render(){  
        return(   
          <Grid container>
            <Grid item xs={12}>
                <TextField
                  label="Надзаголовок"
                  name="mainText"
                  value={this.props.landingPage.selectBlock.params.mainText.text}
                  variant="outlined"                              
                  onChange={e => this.props.changeBlockValueF(e.target.name, "text", e.target.value)}
                  fullWidth={true}
                  margin="normal"
                />
            </Grid>            
          </Grid> 
        );
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



export default connect(mapStateToProps, matchDispatchToProps)(BlockButtonProp);