import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import moment from "moment";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Add from "@material-ui/icons/Add";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

import {actionCreators} from "../../store/LandingPage";

const styles = theme => ({
    root: {    
        margin: theme.spacing(1),
        padding: theme.spacing(1),
      },
    m020: {
        margin:'20px 0'
    },
    tableHead: {
        backgroundColor: '#b3c9e0',        
    },
    textHead: {
        fontSize: '1rem',
    },
    noLandings: {
        fontSize: '15px',
        textAlign: 'center',
        padding: '14px 40px 14px 16px',
        backgroundColor: '#b3c9e0',
    },
    dialogTittle: {
        fontSize: '18px',
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500]
      },
    
});

class Landing extends React.Component {

    componentWillMount(){
       
        
        const landingPage = parseInt(this.props.match.params.indexPage, 10) || 1;   
        const query =  this.props.match.params.query || "";
        const landingtype = this.props.match.params.landingtype || "landingpage" ;
        this.props.postParamsUrlF(landingPage, query, landingtype); 
    }
       
    render(){   
        const { classes } = this.props;
        return( 
            <Paper className={classes.root} >             
                <Grid item xs={12}>
                    <ButtonGroup
                        variant="contained"
                        color="primary"
                        size="small"
                        aria-label="Split button">
                        <Button 
                            
                            component={Link} to={ `landing-page-creator/landingeditor/new`}>
                            <Add /> Создать новый лендинг
                        </Button>                        
                    </ButtonGroup>
                    {this.props.consultantPages <=0 ?  
                    <Paper className={classes.m020}>                       
                        <div className={classes.noLandings}>
                            У Вас пока еще нет готовых лендингов
                            <Button component={Link} to={ `landing-page-creator/landingeditor/new`}>
                                <Add /> добавить лендинг
                            </Button> 
                                                   
                        </div>                                                   
                    </Paper> :
                    <Paper className={classes.m020}>                        
                        <Table>
                            <TableHead >
                                <TableRow className={classes.tableHead}>
                                    {this.props.headRows.map(row => (
                                    <TableCell className={classes.textHead}
                                        key={row.id}
                                        align={row.numeric ? 'right' : 'left'}
                                    >
                                        {row.label}
                                    </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead> 
                            <TableBody>
                                {this.props.consultantPages.map((row, num)=>( 
                                    <TableRow key={num}>                                
                                        <TableCell>{row.Name}</TableCell>
                                        <TableCell align="right">{moment(row.CreatedOn).format("YYYY-MM-DD")}</TableCell>
                                        <TableCell align="right">{row.Comment <= '' ? "отсутствует" : row.Comment }</TableCell>
                                        <TableCell align="right">{row.Published ? 'Опубликовано':'Не опубликовано' }</TableCell>
                                        <TableCell align="right">{row.Verified ? 'Проверено':'Ждет проверки'}</TableCell>
                                        <TableCell align="right"><IconButton onClick={()=>this.props.selectLandingF(row, num)} component={Link} to={ `landing-page-creator/${this.props.landingtype}/${row.Name}`}><EditIcon /></IconButton></TableCell>
                                        <TableCell align="right"><IconButton onClick={()=>this.props.openModalToDeleteLandingF(true, num, row.Name)}><DeleteIcon/></IconButton></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>                       
                        </Table>
                    </Paper>  }                                          
                </Grid>  
                <Dialog 
                    open={this.props.landingPage.modalDialogToDelLanding}  
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">
                        <Typography className={classes.dialogTittle}>Подтверждение удаления лендинга</Typography>
                        <IconButton className={classes.closeButton}
                            aria-label="close" onClick={()=>this.props.openModalToDeleteLandingF(false, null)}>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent dividers>
                        Вы дествительно хотите удалить лендинг <b>{this.props.landingPage.nameLanding}</b>?
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>this.props.deleteLandingPageF(false, this.props.landingPage.landingItemToDel)}
                        color="secondary">
                            Удалить
                        </Button>
                        <Button onClick={()=>this.props.openModalToDeleteLandingF(false, null)}
                        color="primary">
                            Отмена
                        </Button>
                    </DialogActions>                    
                </Dialog>    
            </Paper>            
        );
    }
}


function mapStateToProps(state) {
    return {
        landingPage: state.landingPage,
        landingtype: state.landingPage.landingtype,
        consultantPages: state.landingPage.consultant.pages,
        headRows: state.landingPage.headRows,
        state: state
    }    
}

function matchDispatchToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch)    
}

export default withStyles(styles)(connect(mapStateToProps, matchDispatchToProps)(Landing));
  