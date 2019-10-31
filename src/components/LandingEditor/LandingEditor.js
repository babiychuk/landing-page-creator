import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import {actionCreators} from "../../store/LandingPage";
import moment from "moment";

import Button from "@material-ui/core/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from '@material-ui/core/Switch';
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/moment";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';


const styles = theme => ({    
    paper: {    
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    margin0_5: {    
        margin: '0px 5px',
    },
    tittlePage:{
        textAlign: 'center',
        fontSize: '20px',
    },
    successAdd: {
        backgroundColor: '#cfffd0',
        padding: '5px',
        fontSize: '16px',
        color: '#6393ff',
    },
    errorMess: {
        backgroundColor: '#ffcfcf',
        padding: '5px',
        fontSize: '16px',
        color: '#ff6363',        
    }
});

class LandingEditor extends React.Component {

    constructor(props) {        
        super(props);        
        this.state = {
            showTextToAddNewLanding: false,
            showErrorMess: false            
        };        
    }
    
    componentDidMount(){        
       this.props.requestLandingsPageF(this.props.match.params.id);
       this.props.refreshNewLandingF();
       this.setState({showTextToAddNewLanding: false});
       this.setState({showErrorMess: false});
    }

    handleClickAddNewLanding = ()  => {        

        if(!this.validate()){
            this.props.addNewLandingF();

            this.setState({showTextToAddNewLanding: true});
            setTimeout(()=>this.props.history.push('/landings'), 2000);            
        }
        
    }

    validate = () => {       
        
        if(this.props.landingPageState.createNewLanding.Name.length === 0) {
            this.props.landingPageState.nameError = true; 
            this.setState({showErrorMess: true});
            setTimeout(()=>this.setState({showErrorMess: false}), 2000);
        }    
        
        return this.props.landingPageState.nameError
    }

    render(){ 
        const {classes} = this.props;
        return(  <MuiPickersUtilsProvider
            utils={DateFnsUtils}>         
            <Paper className={classes.paper}>  
            <div className={classes.tittlePage}>Создания нового лендинга</div> <hr/>             
                <Toolbar variant="dense">                    
                    <Button className={classes.margin0_5} variant="outlined" color="primary" aria-label="GO TO" component={Link}                    
                        to={`/landings`}
                    >
                        <ArrowBack /> 
                        Назад
                    </Button>

                    <Button variant="outlined" color="primary" 
                        onClick={()=>this.handleClickAddNewLanding()}>                       
                        Создать новый лендинг
                    </Button> 
                </Toolbar>
                {this.state.showTextToAddNewLanding ? 
                    <div className={classes.successAdd}>
                        Новый лендинг <u>{this.props.landingPageState.createNewLanding.Name}</u> создан</div> :
                    null
                }
                {this.state.showErrorMess ? 
                    <div className={classes.errorMess}>
                        Заполните обязательные поля</div> :
                    null
                }
                
                <Grid container>
                    <Grid item xs={12}>
                        <TextField
                          label="Name"
                          name="Name"
                          variant="outlined"
                          required
                          error={this.props.landingPageState.nameError}
                          fullWidth={true}
                          margin="normal"
                          onChange={e=>this.props.changeInputForNewLandingF(e.target.value, e.target.name)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          name="Comment"
                          placeholder="Comment"
                          multiline
                          fullWidth
                          rows="3"
                          margin="normal"
                          onChange={e=>this.props.changeInputForNewLandingF(e.target.value, e.target.name)}
                        />
                    </Grid>                     
                    <Grid item xs={12} sm={6}>
                        <KeyboardDatePicker
                          style={{ marginRight: "15px" }}
                          margin="normal"
                          id="CreatedOn"
                          name="CreatedOn"
                          label="CreatedOn from"
                          KeyboardButtonProps={{
                            "aria-label": "change date"
                          }}
                          onChange={
                              date =>this.props.changeInputForNewLandingF(
                                moment(date).format("YYYY-MM-DD"), 'CreatedOn'
                              )}
                        />   
                        <FormControlLabel
                          control={
                            <Switch
                                checked={this.props.landingPageState.createNewLanding.Published}
                                value={this.props.landingPageState.createNewLanding.Published}
                                color="primary"  
                                name="Published" 
                                label="Gilad Gray"               
                                onChange={
                                    e=>this.props.changeInputForNewLandingF(
                                        e.target.checked, e.target.name)
                                    }
                                
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />  
                          }
                          label="Published"
                        />
                                     
                    </Grid>   
                                      
                </Grid>
            </Paper>
            </MuiPickersUtilsProvider> 
        );
    }
}

LandingEditor.propTypes = {
    classes: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    return {
        landingPageState: state.landingPage,
        consultantPages: state.landingPage.consultant.pages,
    }    
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch)    
}



export default withStyles(styles)(connect(mapStateToProps, matchDispatchToProps)(LandingEditor));