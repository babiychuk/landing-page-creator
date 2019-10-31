import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {actionCreators} from "../../store/LandingPage";
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({  
  p10: {
    padding: '10px',
  },  
});

class BlockSocietyProp extends React.Component {

  constructor(props) {        
    super(props);        
    this.state = {
      urlImg: {},           
    };        
  }

  handleChange = (url) => {
    this.setState({urlImg: url});
    console.log(this.state.urlImg);
  }
    render(){ 
        return(   
          <Grid container>
            <Grid item xs={12}>
                <TextField
                  label="Instagram PAGE LINK"
                  name="Instagram"
                  value={this.props.landingPage.selectBlock.params.Instagram.url}
                  variant="outlined"                              
                  onChange={e => this.props.changeBlockValueF(e.target.name, "url", e.target.value)}
                  fullWidth={true}
                  margin="normal"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  label="Facebook PAGE LINK"
                  name="Facebook"
                  value={this.props.landingPage.selectBlock.params.Facebook.url}
                  variant="outlined"                              
                  onChange={e => this.props.changeBlockValueF(e.target.name, "url", e.target.value)}
                  fullWidth={true}
                  margin="normal"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  label="Twitter PAGE LINK"
                  name="Twitter"
                  value={this.props.landingPage.selectBlock.params.Twitter.url}
                  variant="outlined"                              
                  onChange={e => this.props.changeBlockValueF(e.target.name, "url", e.target.value)}
                  fullWidth={true}
                  margin="normal"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  label="YouTube PAGE LINK"
                  name="YouTube"
                  value={this.props.landingPage.selectBlock.params.YouTube.url}
                  variant="outlined"                              
                  onChange={e => this.props.changeBlockValueF(e.target.name, "url", e.target.value)}
                  fullWidth={true}
                  margin="normal"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  label="LinkedIn PAGE LINK"
                  name="LinkedIn"
                  value={this.props.landingPage.selectBlock.params.LinkedIn.url}
                  variant="outlined"                              
                  onChange={e => this.props.changeBlockValueF(e.target.name, "url", e.target.value)}
                  fullWidth={true}
                  margin="normal"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  label="Telegram PAGE LINK"
                  name="Telegram"
                  value={this.props.landingPage.selectBlock.params.Telegram.url}
                  variant="outlined"                              
                  onChange={e => this.props.changeBlockValueF(e.target.name, "url", e.target.value)}
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



export default withStyles(styles)(connect(mapStateToProps, matchDispatchToProps)(BlockSocietyProp));