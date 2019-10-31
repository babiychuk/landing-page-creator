//import axios from "axios";
//const requestPageItemsType = "REQUEST_PAGE_ITEMS";
const refreshNewLandingType = "REFRESH_NEW_LANDING";
const addNewLandingType = "ADD_NEW_LANDING";
const openModalToDeleteLandingType = "OPEN_MODAL_TO_DELETE_LANDING";
const deleteLandingPageType = "DELETE_LANDING_PAGE";
const selectLandingType = "SELECT_LANDING";
const changeInputForNewLandingType = " CHANGE_INPUTS_FOR_NEW_LANDING";
const saveLandingConfigurationType = "SAVE_LANDING_CONFIGURATION";
const postParamsUrlType = "POST_PARAMS_URL";
const requestLandingPageType = "REQUEST_LANDINGS_PAGE";
const openToolBarType = "OPEN_TOOL_BAR";
const clickToAddLandingBlockType = "CLICK_TO_ADD_LANDING_BLOCK";
const showToolButtonsType = "SHOW_TOOL_BUTTONS";
const openBlockPropertiesType = "OPEN_BLOCK_PROPERTIES";
const closeBlockPropertiesType = "CLOSE_BLOCK_PROPERTIES";
const upBlockInPageType = "UP_BLOCK_IN_PAGE";
const downBlockInPageType = "DOWN_BLOCK_IN_PAGE";
const deleteBlockInPageType = "DELETE_BLOCK_IN_PAGE";
const openModalToDeleteBlockType = "OPEN_MODAL_TO_DELETE_BLOCK";
const openModalLendingSettingsType = "OPEN_MODAL_LANDING_SETTING";
const changeValueInConfigurationType = "CHANGE_VALUE_IN_CONFIGURATION";
const changeBlockValueType = "CHANGE_BLOCK_VALUE";
const saveBlockValuesType = "SAVE_BLOCK_VALUES";
const changeIMGType = "change_IMG_Type";
const initialState = {
    createNewLanding: { Name:"", Published:false, Verified: false },
    nameError: false,
    selectLanding: { Name:"" },
    selectBlock: {},
    numberSelectLanding: [],
    paramToEditLanding: [],
    sitesData: [],
    data: [],
    consultant: {
        id:"",
        name: "",
        regNum: "",
        pages: []
    },
    listcontents: { Request: {}, Contents: [] }, 
    isLoading: false,
    headRows: [
        { id: 'name', numeric: false,  label: 'Название' },
        { id: 'data', numeric: true, label: 'Дата создания' },
        { id: 'comment', numeric: true, label: 'Описание' },
        { id: 'published', numeric: true, label: 'Статус публикации' },
        { id: 'verified', numeric: true, label: 'Проверка' },
        { id: 'edit', numeric: true, label: 'Редактировать' },
        { id: 'delete', numeric: true, label: 'Удалить' },
    ],
    modalLeftToolBar: false,
    modalComponentToolBar: false,
    modalDialogToDel: false,
    modalDialogToDelLanding: false,
    rightBlockProperties: false,
    modalLendingSettings: false,
    pages: { 
        id:"",
        name: "",
        blocks: [],
    },
    sideListArr: [
        {
            name:'Заголовок', 
            key: 'HD01',
            params: {
                header:{
                    text: 'NAME COMPANY',
                },
                mainText:{
                    text: 'We inspire people to run their businesses with the help of top technologies and innovative management systems ',
                },
                underText: {
                    text: 'Keep your customer base in one place. Try the fastest way to communicate',
                },
                backgroundImage: {
                    background:'url("https://static.tildacdn.com/tild3736-3037-4334-b863-353562353039/d946dbce69a24e0288d5.jpg")',
                },
            },
        },
        {
            name:'Текстовый блок', 
            key: 'TX01',
            params: {
                mainText: {
                    text:'Book design is the art of incorporating the content, style, format, design, and sequence of the various components of a book into a coherent whole. In the words of Jan Tschichold, "methods and rules upon which it is impossible to improve, have been developed over centuries. To produce perfect books, these rules have to be brought back to life and applied." Front matter, or preliminaries, is the first section of a book, and is usually the smallest section in terms of the number of pages. Each page is counted, but no folio or page number is expressed, or printed, on either display pages or blank pages.',
                },
            },
        }, 
        {
            name:'Изображение', 
            key:'IMG01',
            params: {
                Img: {
                    imgUrl: 'https://static.tildacdn.com/tild6361-3535-4136-a662-353763663866/12049949b04d4882bcdf.jpg',
                },
            },
        },
        {   
            name:'Колонки', 
            key:'CL01',
            params: {
                leftCol: {
                    text: 'Book design is the art of incorporating the content, style, format, design, and sequence of the various components of a book into a coherent whole. In the words of Jan Tschichold, "methods and rules upon which it is impossible to improve, have been developed over centuries. To produce perfect books, these rules have to be brought back to life and applied." Front matter, or preliminaries, is the first section of a book, and is usually the smallest section in terms of the number of pages. Each page is counted, but no folio or page number is expressed, or printed, on either display pages or blank pages.',
                },
                rightCol: {
                    text: 'Book design is the art of incorporating the content, style, format, design, and sequence of the various components of a book into a coherent whole. In the words of Jan Tschichold, "methods and rules upon which it is impossible to improve, have been developed over centuries. To produce perfect books, these rules have to be brought back to life and applied." Front matter, or preliminaries, is the first section of a book, and is usually the smallest section in terms of the number of pages. Each page is counted, but no folio or page number is expressed, or printed, on either display pages or blank pages.',
                },
            },
        },
        {
            name:'Кнопка', 
            key:'BT01',
            params: {
                mainText: {
                    text:'Кнопка',
                },
            },
        },
        {
            name:'Соц. сети', 
            key:'SC01',
            params: {
                Instagram: {
                    text:'Instagram',
                    url:'https://www.instagram.com',
                },
                Facebook: {
                    text:'Facebook',
                    url:'',
                },
                Twitter: {
                    text:'Twitter',
                    url:'',
                },
                YouTube: {
                    text:'YouTube',
                    url:'',
                },
                LinkedIn: {
                    text:'LinkedIn',
                    url:'',
                },
                Telegram: {
                    text:'Telegram',
                    url:'',
                },   
            },
        },
        {
            name:'Видео', 
            key:'VD01',
            params: {
                video: {
                    text:'Название видео',
                    url:'https://www.youtube.com/embed/dpw9EHDh2bM',
                },
            },
        },
    ],
    nameBlockToEdit: {},
    /*blocks:{
        blockHead: {
            header:{
                text: 'NAME COMPANY',
            },
            mainText:{
                text: 'We inspire people to run their businesses with the help of top technologies and innovative management systems ',
            },
            underText: {
                text: 'Keep your customer base in one place. Try the fastest way to communicate',
            }
        },
        blockTextBlock: {
            mainText: {
                text:`Book design is the art of incorporating the content, style, format, design, and sequence of the various components of a book into a coherent whole. In the words of Jan Tschichold, "methods and rules upon which it is impossible to improve, have been developed over centuries. To produce perfect books, these rules have to be brought back to life and applied." Front matter, or preliminaries, is the first section of a book, and is usually the smallest section in terms of the number of pages. Each page is counted, but no folio or page number is expressed, or printed, on either display pages or blank pages.`
                },
        },
        blockImg: {
            Img: {
                url: 'landings',
                imgUrl: 'https://static.tildacdn.com/tild6361-3535-4136-a662-353763663866/12049949b04d4882bcdf.jpg',
            }
        },        
        
    }, 
    backgroundImage: {
        background:'url("https://static.tildacdn.com/tild3736-3037-4334-b863-353562353039/d946dbce69a24e0288d5.jpg")',
    }, */ 
}; 


export const actionCreators = {     
    /*requestPageItemsF: () => async (dispatch, getState) => {
        const url = `/api/v1.0/Page/Get`; 
        axios.get(url)
            .then(response => {
                dispatch ({ type: requestPageItemsType, playoud: response.data });  
            })    
    },*/
    refreshNewLandingF: () =>(dispatch,getState) => {        
        dispatch({type: refreshNewLandingType, playoud: getState().landingPage.createNewLanding = { Name:"", Published:false, Verified: false }}); 
    }, 
    changeInputForNewLandingF: (inputData, name) =>(dispatch, getState) => { 
        let newLanding = getState().landingPage.createNewLanding;
        newLanding[name] = inputData; 

            newLanding.Name.length === 0 ?
            getState().landingPage.nameError = true :
            getState().landingPage.nameError = false; 

        dispatch({type: changeInputForNewLandingType, playoud: newLanding}); 
    },
    addNewLandingF: () =>(dispatch, getState) => {
        let landings = getState().landingPage.consultant.pages; 
        let newLanding = getState().landingPage.createNewLanding;
        landings.push(newLanding);        
        dispatch({type: addNewLandingType, playoud: landings}); 
    },      
    openModalToDeleteLandingF: (show, itemToDel, nameLanding) => async (dispatch, getState) => {  
        dispatch({type: openModalToDeleteLandingType, modalDialogToDelLanding: show, landingItemToDel: itemToDel, nameLanding: nameLanding}); 
    },
    deleteLandingPageF: (show, num)  => async (dispatch, getState) => {
        let landings = getState().landingPage.consultant.pages;
        landings.splice(num, 1)
        dispatch({ type: deleteLandingPageType, modalDialogToDelLanding: show, landings: landings });
    },
    selectLandingF: (landing, num) => async (dispatch, getState) => {
        let numberSelectLanding = getState().landingPage.numberSelectLanding;
            if (landing.blocks === undefined) {
                landing.blocks = [];
            }; 
        numberSelectLanding  = num;
        dispatch({ type: selectLandingType, playoud: landing, numberSelectLanding});
    }, 
    changeValueInConfigurationF: (value, name) =>(dispatch, getState) => {
        let chagneValue = {...getState().landingPage.selectLanding};        
        chagneValue[name] = value;
        dispatch({type: changeValueInConfigurationType, playoud: chagneValue})
    }, 
    saveLandingConfigurationF: () => (dispatch, getState) => {
        let landingArr = getState().landingPage.consultant.pages;
        let landingNumber = getState().landingPage.numberSelectLanding;
        let editLanding = getState().landingPage.selectLanding;
        landingArr.splice([landingNumber], 1, editLanding);
        dispatch({type: saveLandingConfigurationType})
    },    
    postParamsUrlF: (landingPage, query, landingtype)  => async (dispatch, getState) => {
        dispatch({ type: postParamsUrlType, landingPage, query, landingtype });
    },  
    requestLandingsPageF: (id) => async (dispatch, getState) => {
        dispatch ({ type: requestLandingPageType, id: id});  
    },  
    openToolBarF: (open) => async (dispatch, getState) => {
        dispatch ({type: openToolBarType, playoud: open});
    },
    clickToAddLandingBlockF: (item, numberBlock) => async (dispatch, getState) => {
        let selectLanding = {...getState().landingPage.selectLanding};
            if (selectLanding.blocks === undefined) {
                selectLanding.blocks = [];
            }; 
        var copy = JSON.parse(JSON.stringify(item)); 
        selectLanding.blocks.push(copy);
        dispatch({type: clickToAddLandingBlockType, playoud: selectLanding, numberBlock}); 
    },
    showToolButtonsF: (key, show) => async (dispatch, getState) => { 
        dispatch({type: showToolButtonsType, playoud: show, mouseBlock: key}); 
    },
    openBlockPropertiesF: (show, itemName, selectBlock, blockNum)  => async (dispatch, getState) => { 
        let nameBlockToEdit = getState().landingPage.nameBlockToEdit;
        let blockNumber = getState().landingPage.blockNumber;
        blockNumber = blockNum;
        nameBlockToEdit.NameBlock = itemName;
        var copySelectBlock = JSON.parse(JSON.stringify(selectBlock));
        dispatch({type: openBlockPropertiesType, rightBlockProperties: show, copySelectBlock, nameBlockToEdit, blockNumber}); 
    },
    closeBlockPropertiesF: (show) => async (dispatch, getState) => {
        dispatch({type: closeBlockPropertiesType, playoud: show}); 
    },
    upBlockInPageF: (item) => async (dispatch, getState) => {        
        let selectLanding = getState().landingPage.selectLanding.blocks;
        let removedBlock = selectLanding.splice(item, 1);         
        selectLanding.splice(item===0? 0 :item - 1, 0, removedBlock[0]);
        dispatch({type: upBlockInPageType, playoud: selectLanding}); 
    },
    downBlockInPageF: (item) =>async (dispatch, getState) => {
        let selectLanding = getState().landingPage.selectLanding.blocks;  
        let removedBlock = selectLanding.splice(item, 1); 
        selectLanding.splice(item + 1, 0, removedBlock[0]);
        dispatch({type: downBlockInPageType, playoud: selectLanding}); 
    },
    deleteBlockInPageF: (item) => async (dispatch, getState) => { 
        let selectLanding = getState().landingPage.selectLanding.blocks;
        selectLanding.splice(item, 1);
        dispatch({type: deleteBlockInPageType, playoud: selectLanding, modalDialogToDel: false}); 
    },
    openModalToDeleteBlockF: (show, itemToDel) => async (dispatch, getState) => {  
        dispatch({type: openModalToDeleteBlockType, modalDialogToDel: show, blockItemToDel: itemToDel}); 
    },
    openModalLendingSettingsF: (show) => async (dispatch, getState) => {
        dispatch({type: openModalLendingSettingsType, modalLendingSettings: show}); 
    }, 
    changeBlockValueF: (nameTextEdit, text, value) =>(dispatch, getState) => {
        let chagneBlockValue = {...getState().landingPage.selectBlock.params};
        chagneBlockValue[nameTextEdit][text] = value; 
        dispatch({type: changeBlockValueType, playoud: chagneBlockValue})
    }, 
    saveBlockValuesF: () =>(dispatch, getState) => {
        let blockNumber = getState().landingPage.blockNumber; 
        let selectBlock = {...getState().landingPage.selectBlock.params}; 
        let selectLanding = {...getState().landingPage.selectLanding.blocks}; 
        selectLanding[blockNumber].params = JSON.parse(JSON.stringify(selectBlock));
        dispatch({type: saveBlockValuesType, playoud: selectLanding})
    },  
    changeIMG: (url)  =>(dispatch, getState) => {  
        let blockNumber = getState().landingPage.blockNumber; 
        let selectLanding = {...getState().landingPage.selectLanding.blocks}; 
        let chagneIMG = {background: 'url("'+url+'")'};    
        selectLanding[blockNumber].params.backgroundImage = chagneIMG;
        dispatch({type: changeIMGType})
    },

}
 
export const reducer = (state, action) => {
  state = state || initialState;

  switch (action.type) {

    /*case requestPageItemsType:
        return {
            ...state, 
            consultant: {pages: action.playoud}
        }*/
    case refreshNewLandingType:
        return {
            ...state,
            createNewLanding: action.playoud
        }
    case changeInputForNewLandingType:
        return {
            ...state, 
            createNewLanding: action.playoud,
        }
    case addNewLandingType:
        return {
            ...state,
            consultant: {pages: action.playoud} 
        }
    case openModalToDeleteLandingType:
        return {
            ...state, 
            modalDialogToDelLanding: action.modalDialogToDelLanding, 
            landingItemToDel: action.landingItemToDel, 
            nameLanding: action.nameLanding
        }
    case deleteLandingPageType: {
        return {
            ...state, 
            modalDialogToDelLanding: action.modalDialogToDelLanding,
            consultant: {pages: action.landings}
        }
    }
    case selectLandingType: {
        return {
            ...state,
            selectLanding: action.playoud,
            numberSelectLanding: action.numberSelectLanding,
        }
    }
    case changeValueInConfigurationType: 
        return {
            ...state,
            selectLanding: action.playoud     
        }
    case saveLandingConfigurationType:
        return {
            ...state,

        }
    case postParamsUrlType:
        return {
            ...state,
            landingPage: action.landingPage,
            query: action.query,
            landingtype: action.landingtype,
            isLoading: false
        } 
    case requestLandingPageType:
        return {
           ...state, 
           id: action.id
        } 
    case openToolBarType:
        return {
            ...state, 
            modalLeftToolBar: action.playoud
        }   
    case clickToAddLandingBlockType:
        return {
            ...state, 
            selectLanding: action.playoud,
            numberBlock: action.numberBlock,
        }
    case showToolButtonsType: 
        return {
            ...state, 
            modalComponentToolBar: action.playoud, 
            activeMouseBlock: action.mouseBlock
        }
    case openBlockPropertiesType:
        return {
            ...state, 
            rightBlockProperties: action.rightBlockProperties,
            selectBlock: action.copySelectBlock,
            nameBlockToEdit: action.nameBlockToEdit,
            blockNumber: action.blockNumber,
        }
    case closeBlockPropertiesType:
        return {
            ...state, 
            rightBlockProperties: action.playoud,
        }        
    case upBlockInPageType:
        return {
            ...state,  
            selectLanding: {blocks: action.playoud}
        }
    case downBlockInPageType:
        return {
            ...state, 
            selectLanding: {blocks: action.playoud}
        }
    case deleteBlockInPageType:
        return {
            ...state,  
            selectLanding: {blocks: action.playoud}, 
            modalDialogToDel: action.modalDialogToDel
        }
    case openModalToDeleteBlockType:
        return {
            ...state, 
            modalDialogToDel: action.modalDialogToDel, 
            blockItemToDel: action.blockItemToDel
        }
    case openModalLendingSettingsType: 
        return {
            ...state, 
            modalLendingSettings: action.modalLendingSettings,
        } 
    case changeBlockValueType:
        return {
            ...state,
            selectBlock:{params: action.playoud},
        } 
    case saveBlockValuesType:
        return {
            ...state,
        }   
        case changeIMGType:
            return {
                ...state,
            } 
    
    default:
        return state;
    }
};

