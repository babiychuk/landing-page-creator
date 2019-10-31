import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {actionCreators} from "../../store/LandingPage";

import LandingSideList from "../LandingSideList/LandingSideList";
import LandingBlockHeader from "../LandingBlockHeader/LandingBlockHeader";
import LandingBlockTextBlock from "../LandingBlockTextBlock/LandingBlockTextBlock";
import LandingBlockImg from "../LandingBlockImg/LandingBlockImg";
import LandingBlockColum from "../LandingBlockColum/LandingBlockColum";
import LandingBlockButton from "../LandingBlockButton/LandingBlockButton";
import LandingBlockSociety from "../LandingBlockSociety/LandingBlockSociety";
import LandingBlockVideo from "../LandingBlockVideo/LandingBlockVideo";
import LandingNavigationBlock from "../LandingNavigationBlock/LandingNavigationBlock";
import LandingSideBlockProperties from "../LandingSideBlockProperties/LandingSideBlockProperties";


import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Add from "@material-ui/icons/Add";
import ArrowBack from "@material-ui/icons/ArrowBack";
import SettingsIcon from "@material-ui/icons/Settings";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from '@material-ui/core/Switch';
import TextField from "@material-ui/core/TextField";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from "@date-io/moment";

const styles = theme => ({    
    paper: {    
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    list: {
        width: 250,
    },
    margin0_5: {    
      margin: '0px 5px',
    },
    p10: {
      padding: '10px',
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    },
    colorTittle: {
      backgroundColor: '#dee0e1',
    },    
    tittlePage:{
      textAlign: 'left',
      fontSize: '20px',
    },
    noBlocks: {
      backgroundColor: '#ffffff',
    },    
    dialogTittle: {
      fontSize: '18px',
  },
});

class LandingPage extends React.Component {

  constructor(props) {        
    super(props);        
    this.state = {
      nameLanding: "",           
    };        
  }

    componentDidMount(){
      this.props.landingPage.selectLanding.Name.length === 0 ?
        this.props.history.push('/landings') :
        this.setState({nameLanding: this.props.landingPage.consultant.pages[this.props.landingPage.numberSelectLanding].Name});
        this.props.requestLandingsPageF(this.props.match.params.id);
    }

    inputComponentBlock(component, key){ 
      switch (component.key) {

        case "HD01":
            return (<LandingBlockHeader itemNum={key}/>)
        case "TX01":
            return (<LandingBlockTextBlock itemNum={key}/>)
        case "IMG01":
            return (<LandingBlockImg itemNum={key}/>)
        case "CL01":
            return (<LandingBlockColum itemNum={key}/>)
        case "BT01":
          return (<LandingBlockButton itemNum={key}/>)
        case "SC01":
          return (<LandingBlockSociety itemNum={key}/>)
        case "VD01":
          return (<LandingBlockVideo itemNum={key}/>)
        default:
            return component;
        }
    }

    handleSaveLanding = () => {
      this.props.saveLandingConfigurationF()
      this.setState({nameLanding: this.props.landingPage.consultant.pages[this.props.landingPage.numberSelectLanding].Name}); 
    }

    render(){
        const {classes} = this.props; 
        return(   
          <div>         
            <Paper className={classes.paper}> 
            <div className={classes.tittlePage}>Лендинг - {this.state.nameLanding}</div> <hr/>                                     
              <Toolbar variant="dense">                    
                <Button className={classes.margin0_5} variant="outlined" color="primary" aria-label="GO TO" 
                  component={Link} to={ `landing-page-creator/landings`} >                        
                  <ArrowBack /> Назад
                </Button>                 
                <Button variant="outlined" color="primary"
                  onClick={()=>this.props.openModalLendingSettingsF(true)}>                                             
                  <SettingsIcon/> Настройки сайта
                </Button>                
                <SwipeableDrawer anchor="left"
                  open={this.props.landingPage.modalLeftToolBar}
                  onClose={()=>this.props.openToolBarF(false)}
                  onOpen={()=>this.props.openToolBarF(true)}
                >
                  <LandingSideList/>
                </SwipeableDrawer> 
              </Toolbar>
              </Paper>
              <Grid item xs={12}>
                <Grid className={classes.noBlocks} container justify="center">                
                  {this.props.selectLanding.blocks.map((item, key)=>( 
                    <Grid container justify="center" key={key}
                      onMouseEnter={()=>this.props.showToolButtonsF(key, true)}
                      onMouseLeave={()=>this.props.showToolButtonsF(key, false)}
                    >
                      {this.props.landingPage.activeMouseBlock === key?
                          this.props.landingPage.modalComponentToolBar ? <LandingNavigationBlock itemNum={key} item={item}/> : null
                        :null}
                        
                      {this.inputComponentBlock(item, key)}
                     
                    </Grid>
                  ))}
                  { this.props.selectLanding.blocks.length === 0?
                    <p>У Вашего лендинга отсутствуют блоки. Добавить блок </p>
                    :null
                  }
                  <br/>
                  <IconButton title="Добавить блок" color="primary" onClick={()=>this.props.openToolBarF(true)}>
                    <Add />
                  </IconButton> 
                  
                </Grid>              
              </Grid> 
              <Dialog 
                open={this.props.landingPage.modalDialogToDel}  
                aria-labelledby="form-dialog-title">
                <DialogContent className={classes.dialogTittle} dividers>
                    Подтвердите удаление блока
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>this.props.deleteBlockInPageF(this.props.landingPage.blockItemToDel)} color="primary">
                        Удалить
                    </Button>
                    <Button onClick={()=>this.props.openModalToDeleteBlockF(false, null)} color="primary">
                        Отмена
                    </Button>
                </DialogActions>
              </Dialog>

              <Dialog 
                open={this.props.landingPage.modalLendingSettings}  
                aria-labelledby="form-dialog-title">
                <DialogTitle className={classes.colorTittle} id="customized-dialog-title">
                  <Typography>Настройки <b>{this.state.nameLanding}</b></Typography>
                  <IconButton className={classes.closeButton}
                  aria-label="close" onClick={()=>this.props.openModalLendingSettingsF(false)}>
                    <CloseIcon />
                  </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                  <MuiPickersUtilsProvider
                    utils={DateFnsUtils}> 
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                              label="Name"
                              name="Name"
                              value={this.props.landingPage.selectLanding.Name}
                              variant="outlined"                              
                              onChange={e => this.props.changeValueInConfigurationF(e.target.value, e.target.name)}
                              error={this.props.landingPage.nameError}
                              fullWidth={true}
                              margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                              variant="outlined"
                              name="Comment"
                              value={this.props.landingPage.selectLanding.Comment}
                              onChange={e => this.props.changeValueInConfigurationF(e.target.value, e.target.name)}
                              placeholder="Comment"
                              multiline
                              fullWidth
                              rows="3"
                              margin="normal"                              
                            />
                        </Grid>                     
                        <Grid item xs={12} sm={6}>
                            <KeyboardDatePicker
                              style={{ marginRight: "15px" }}
                              margin="normal"
                              id="CreatedOn"
                              name="CreatedOn"
                              value={this.props.landingPage.selectLanding.CreatedOn}
                              onChange={date => this.props.changeValueInConfigurationF(date, "CreatedOn")}
                              label="CreatedOn from"
                              KeyboardButtonProps={{
                                "aria-label": "change date"
                              }}
                            />   
                            <FormControlLabel
                              control={
                                <Switch                                    
                                  color="primary"  
                                  name="Published"
                                  checked={this.props.landingPage.selectLanding.Published} 
                                  value={this.props.landingPage.selectLanding.Published}
                                  onChange={
                                    e => this.props.changeValueInConfigurationF( 
                                      e.target.checked, e.target.name)
                                    }
                                  label="Gilad Gray"                                    
                                  inputProps={{ 'aria-label': 'primary checkbox' }}
                                />  
                              }
                              label="Published"
                            />                                        
                        </Grid>                 
                    </Grid>
                  </MuiPickersUtilsProvider>
                  <DialogActions>
                      <Button variant="outlined" color="primary"
                        onClick={this.handleSaveLanding}>
                          Сохранить
                      </Button>
                      <Button variant="outlined" color="primary" 
                          onClick={()=>this.props.openModalLendingSettingsF(false)} >
                          Закрыть
                      </Button>
                  </DialogActions>
                </DialogContent>
              </Dialog>

              <SwipeableDrawer anchor="right"
                open={this.props.landingPage.rightBlockProperties}               
                onOpen={()=>this.props.openBlockPropertiesF(true)}
                onClose={()=>this.props.closeBlockPropertiesF(false)}
              >
                <LandingSideBlockProperties/>
              </SwipeableDrawer>            
            </div>
        );
    }
}

LandingPage.propTypes = {
    classes: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    return {
      landingPage: state.landingPage,
      selectLanding: state.landingPage.selectLanding,
  
    }    
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch)    
}



export default withStyles(styles)(connect(mapStateToProps, matchDispatchToProps)(LandingPage));