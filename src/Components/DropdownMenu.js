import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux'

function DropdownItems(props){
	let AllNames = useSelector(state => state.engines)
	
	return(
	  <div className={"card dropdownMenuBox" + props.className}>
	  {
		AllNames.map((engine)=>{ 
			return <div className="dropdown-item"
					key={engine.id} 
					selectionid={engine.id}
					onClick={()=> props.newValSelected(engine) }
					>{engine.name}
				</div>
		})
	  }
	  </div>
	);
	
}



class DropdownMenu extends React.Component{
	constructor(props){
		super(props);
		this.state = { sel: 0 };
		//this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange = (p) => {
		this.props.openList(p.id);
	}

	render(){
		return <DropdownItems newValSelected={ (ev)=>{ this.handleChange(ev) } } className={this.props.className} />;
		/*return(
			<div className="dropdown-item" onClick={()=>{ this.handleChange(this.props) }} key={this.props.nId}>{this.props.name}</div>
		);*/
	}
}

export default DropdownMenu;