import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {actionCreators} from "../../store/LandingPage";

import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    
});



class LandingBlockHeader extends React.Component {

    showSocietyIcon(name){ 
        switch (name) {
    
          case "Instagram":
              return <img alt={name} src="https://img.icons8.com/ios/96/000000/instagram-new.png"/>
          case "Facebook":
              return <img alt={name} src="https://img.icons8.com/ios/96/000000/facebook.png"/>
          case "Twitter":
              return <img alt={name} src="https://img.icons8.com/ios/96/000000/twitter.png"/>
          case "YouTube":
              return <img alt={name} src="https://img.icons8.com/ios/96/000000/youtube.png"/>
          case "LinkedIn":
              return <img alt={name} src="https://img.icons8.com/ios/96/000000/linkedin.png"/>
          case "Telegram":
              return <img alt={name} src="https://img.icons8.com/ios-glyphs/96/000000/telegram-app.png"/>
          default:
              return name;
          }
      }

    render() {
        var block = this.props.landingPage.selectLanding.blocks[this.props.itemNum].params;
        const {classes} = this.props;  
        return (         

        <div className={classes.root}>
            <Grid container spacing={3}>          
                {
                    Object.keys(block).map(info => (
                        Object.keys(block[info].url).length === 0 ? 
                         null : 
                         <Grid key={info} item xs={2}>
                            <a href={block[info].url} target="_blank" rel="noopener noreferrer" >
                                {this.showSocietyIcon(block[info].text)} 
                            </a>
                        </Grid>               
                ))}
            </Grid>           
        </div>   
        )
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


export default withStyles(styles)(connect(mapStateToProps, matchDispatchToProps)(LandingBlockHeader));