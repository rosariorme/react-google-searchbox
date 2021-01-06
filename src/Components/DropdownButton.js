import React from 'react';
import DropdownMenu from './DropdownMenu';

class DropdownButton extends React.Component{
	
	constructor(props){
		super(props);
		this.state = { showClass: ''};
	}
	
	showHide= () =>{
		if(this.state.showClass == ''){
			this.setState({showClass: 'Show'})
		}else{
			this.setState({showClass: ''})
		}
		
	}
	
	render(){
		
		return(
		<div className="dropdown col-sm-3 align-items-center">
		  <button onClick={()=>{ this.showHide() }} className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton">
			Search
		  </button>
		  <DropdownMenu openList={this.props.list} className={this.state.showClass}/>
		</div>
		);
	}
}
export default DropdownButton;
