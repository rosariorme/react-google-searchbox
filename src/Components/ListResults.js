import React from 'react';

const API_KEY = "AIzaSyB03QyiUXsl7NkK55-Wg-_rqP9hzha1XO4";
const CONTROL_PANEL_API = "a921e7bd5318193f6";

class ListResults extends React.Component{	
	constructor(props){
		super(props);
		this.state = {
			loading_google: '',
			loading_bing: '',
			google_results: [], 
			bing_results: [] 
		};
	}
	getData = () => {
		let url = ""
		let prom;
		switch(this.props.engineChosen){
			case 0:
				//https://www.google.com.pe/search?q=casa
				/*url = "https://www.googleapis.com/customsearch/v1?key="+ API_KEY +"&cx="+CONTROL_PANEL_API+"&q=" + this.props.txtToLookFor
				prom = fetch(url);
				//let prom = fetch("http://localhost:3000/test_google.json");
				this.setState({loading_google: "Loading Google Results"});
				prom.then(resp => resp.json().then( data => {
					this.setState({google_results: data.items});
					this.setState({loading_google: ""});
				}));
				*/
				break;
				
			case 1:
				//https://www.bing.com/search?q=casa&search=&form=QBLH
				/*url = "https://www.bing.com/search?q=" + this.props.txtToLookFor
				prom = fetch(url);
				this.setState({loading_bing: "Loading Bing Results"});
				prom.then(resp => resp.json().then( data => {
					this.setState({bing_results: data.items});
					this.setState({loading_bing: ""});
				}));
				*/
				
				break;
				
			case 2:
				//App.loadResults('BOTH');
				break;
				
			default: 
				break;
		}
		
		//let prom = fetch(url);
		
		//alert("YA");
	}
	render(){
		return (
		<div>
		<div className="alerts">
			<p>{this.state.loading_google}</p>
			<p>{this.state.loading_Bing}</p>
		</div>
		<div className="list-group">
		{
			this.state.google_results.map((m)=>{
				//console.log(m);
				return (<a key={m.cacheId} href={m.link} className="list-group-item">
				 <h4 className="list-group-item-heading">{m.title}</h4>
					<p className="list-group-item-text">{m.snippet}</p>
				</a>)
			})
		}
		</div>
		</div>);
	}
}

export default ListResults;