import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {actionCreators} from "../../store/LandingPage";
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = theme => ({  
  p10: {
    padding: '10px',
  },  
});

class BlockHeaderProp extends React.Component {

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
                  label="Надзаголовок"
                  name="header"
                  value={this.props.landingPage.selectBlock.params.header.text}
                  variant="outlined"                              
                  onChange={e => this.props.changeBlockValueF(e.target.name, "text", e.target.value)}
                  fullWidth={true}
                  margin="normal"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  label="Заголовок"
                  name="mainText"
                  value={this.props.landingPage.selectBlock.params.mainText.text}
                  variant="outlined"                              
                  onChange={e => this.props.changeBlockValueF(e.target.name, "text", e.target.value)}
                  fullWidth={true}
                  margin="normal"
                  multiline
                  rows="3"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  label="Описание"
                  name="underText"
                  value={this.props.landingPage.selectBlock.params.underText.text}
                  variant="outlined"                              
                  onChange={e => this.props.changeBlockValueF(e.target.name, "text", e.target.value)}
                  fullWidth={true}
                  margin="normal"
                  multiline
                  rows="3"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                  label="Изображение"
                  name="underText"
                  variant="outlined"                       
                  onChange={e => this.handleChange(e.target.value) }
                  fullWidth={true}
                  margin="normal"
                  multiline
                  rows="2"
                />
            </Grid>
            <Button title="Загрузить" onClick={() => this.props.changeIMG(this.state.urlImg)}
              variant="outlined" color="primary">Загрузить изображение
            </Button>
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



export default withStyles(styles)(connect(mapStateToProps, matchDispatchToProps)(BlockHeaderProp));