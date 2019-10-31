import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {actionCreators} from "../../store/LandingPage";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

class BlockTextProp extends React.Component {

    parseUrl (name, url, value){

        var parseUrl = value.split('').reverse();       
        let i = 0;
        let newArr = [];

        while (i < 11) {
            newArr[i] = parseUrl[i];
          i++;
        }

        var reversed = 'https://www.youtube.com/embed/' + newArr.reverse().join('');

        this.props.changeBlockValueF(name, url, reversed)
    }

    render(){  
        return(   
          <Grid container>
            <Grid item xs={12}>
                <TextField
                  label="Ссылка на видео"
                  name="video"
                  value={this.props.landingPage.selectBlock.params.video.url}
                  variant="outlined"                              
                  onChange={e => this.parseUrl(e.target.name, "url", e.target.value)}
                  fullWidth={true}
                  multiline
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