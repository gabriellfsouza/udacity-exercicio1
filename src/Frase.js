import React, {Component} from 'react';

class Frase extends Component {
	render(){
      	console.log('Props', this.props);
    	return (<ol>
          {this.props.contacts.map(item=>{
        	return(<li>{item.name}'s favorite movie is {item.movie}.</li>)
          })}
        </ol>)
    }
}

export default Frase;