import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {actionCreators} from "../../store/LandingPage";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

class BlockImgProp extends React.Component {

    render(){  
        return(   
          <Grid container>
            <Grid item xs={12}>
                <TextField
                  label="Ссылка на изображение"
                  name="Img"
                  value={this.props.landingPage.selectBlock.params.Img.imgUrl}
                  variant="outlined"                              
                  onChange={e => this.props.changeBlockValueF(e.target.name, "imgUrl", e.target.value)}
                  fullWidth={true}
                  multiline
                  rows="3"
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
      blocks: state.landingPage.pages.blocks,
  
    }    
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch)    
}



export default connect(mapStateToProps, matchDispatchToProps)(BlockImgProp);