import 'bootstrap/dist/css/bootstrap.css';
import {Grid, Row, Col, PageHeader, Button, Input} from 'react-bootstrap';

//import {List, ListItem} from 'material-ui/List/List';
import {List} from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

//using materialUI
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'

import './stylesheets/hello.scss';

import React ,{Component} from 'react';
import ReactDOM from 'react-dom';

import text from './data/values.json';

class App extends Component {

    getChildContext() {
                return { muiTheme: getMuiTheme(baseTheme) };
    }

    render(){
        return(
            <Card>
               <CardHeader
                  title="Url Avatar"
                  subtitle="subtitle"
                  avatar="http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg"
               />
               <CardMedia
                  overlay={ <CardTitle title="Overlay Title" subtitle="Overlay subtitle" /> }
               >
               <img src="http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg" />
               </CardMedia>

               <CardText>
                  This is just a text example!!!!!
               </CardText>

            </Card>    
        );
    }
}


//Configure dependencies 
App.childContextTypes = {
            muiTheme: React.PropTypes.object.isRequired,
        }; 

ReactDOM.render(<App />,document.getElementById('root'));
