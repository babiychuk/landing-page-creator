import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {actionCreators} from "../../store/LandingPage";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

class BlockTextProp extends React.Component {

    render(){  
        return(   
          <Grid container>
            <Grid item xs={12}>
                <TextField
                  label="Текст"
                  name="mainText"
                  value={this.props.landingPage.selectBlock.params.mainText.text}
                  variant="outlined"                              
                  onChange={e => this.props.changeBlockValueF(e.target.name, "text", e.target.value)}
                  fullWidth={true}
                  multiline
                  rows="10"
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



export default connect(mapStateToProps, matchDispatchToProps)(BlockTextProp);