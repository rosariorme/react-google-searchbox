import React from 'react';
import './css/bootstrap.min.css';
import './css/App.css';
import DropdownButton from './Components/DropdownButton'
import ListResults from './Components/ListResults'
import { useSelector, useDispatch } from 'react-redux'


class App extends React.Component{
	constructor(props){
		super(props);
		this.listresults = React.createRef();
		this.state = { 
			searchtxt : '',
			enginebtn: 0
		};
	}
	
	updateBox = (val)=>{
		this.setState({searchtxt: val})
	}
	loadList = (vals)=>{
		
		this.setState({ enginebtn: vals })
		if(this.state.searchtxt != ""){
			console.log("aaa");
			this.listresults.current.getData();
		}
		
	}
	render(){
		return (
			<div className="App">
					<div className="card-body">
						<h5 className="card-title">Search Box for Google and Bing</h5>
							<p className="card-text">Write down and test, but don't use more than 100 times per day (Google API restriction for free accounts)</p>
							<input className="form-control" type="text" onChange={ (ev)=>{this.updateBox(ev.target.value) } } />
					</div>
				<div>
					<DropdownButton 
					list={this.loadList} 
					engines={this.state.searchengines} />
				</div>
				<hr/>
				<ListResults engineChosen={this.state.enginebtn} 
				ref={this.listresults} 
				txtToLookFor={this.state.searchtxt} />
			</div>
			);
	}
}

export default App;