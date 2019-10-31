import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {actionCreators} from "../../store/LandingPage";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

class BlockColumProp extends React.Component {

    render(){  
        return(   
          <Grid container>
            <Grid item xs={12}>
                <TextField
                  label="Левая колонка"
                  name="leftCol"
                  value={this.props.landingPage.selectBlock.params.leftCol.text}
                  variant="outlined"                              
                  onChange={e => this.props.changeBlockValueF(e.target.name, "text", e.target.value)}
                  fullWidth={true}
                  margin="normal"
                  multiline
                  rows="4"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  label="Правая колонка"
                  name="rightCol"
                  value={this.props.landingPage.selectBlock.params.rightCol.text}
                  variant="outlined"                              
                  onChange={e => this.props.changeBlockValueF(e.target.name, "text", e.target.value)}
                  fullWidth={true}
                  margin="normal"
                  multiline
                  rows="4"
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



export default connect(mapStateToProps, matchDispatchToProps)(BlockColumProp);