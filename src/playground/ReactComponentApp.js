

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleAddAction = this.handleAddAction.bind(this);
        this.handleRemoveAction = this.handleRemoveAction.bind(this);
        this.state = {
            options :['one','two','three','four']
        }
    }
    handleRemoveAction(){
        this.setState(()=>{
            return {
                options : []
            }
        })
    }
    handleAddAction(option){
        console.log('Main App Add Action'+option);
        this.setState((preState)=>{
            return {
                options : preState.options.concat(option)
            }
        })
    }
    
    render(){
        const title='Indecision App';
        const subtitle = 'Put your life in the hands of Computer';
        // const options = ['one','two','three','four'];
        return (<div>
            <Header title={title} subtitle={subtitle} />
            <Action />
            <Options options={this.state.options} handleRemoveAction ={this.handleRemoveAction}/>
            <AddOption options={this.state.options} handleAddAction={this.handleAddAction}/>
            </div>);
    }
}

class Header extends React.Component {
    render(){
        console.log(this.props);
        return (
        <div>
            <h1> {this.props.title} </h1>
            <h2> {this.props.subtitle} </h2>
        </div>
        );
    }
}

class Action extends React.Component{
    handlePick(){
        alert("Action");
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}> What should I do? </button>
            </div>
        )
    }
}

class Options extends React.Component{
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this)
    }
    removeAll(){
        this.props.handleRemoveAction()
        console.log(this.props.options)
    }
    render(){
        return(
            <div>
                <button onClick={this.removeAll}>Remove Options </button>
                
                {this.props.options.map((val,index)=> {
                    return <Option key={index} option={val}/>;
                })}
                 
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                {this.props.option}
            </div>
        );
    }
}

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.addOption = this.addOption.bind(this);
        this.addSubmitInOption = this.addSubmitInOption.bind(this);
    }

    addOption(e){
        e.preventDefault();
        // var value = e.target.elements.option.value;
        var value = document.getElementById('option').value;
        alert(value);
    }
    addSubmitInOption(e){
        e.preventDefault();
        var value = e.target.elements.option.value.trim();
        if(value){
            // this.props.options.push(value);
            // console.log(this.props.options);
            this.props.handleAddAction(value);
        }
    }
    render(){
        return (
            <div> 
                <form onSubmit={this.addSubmitInOption}>
                    <input type='text' name="option" id='option' />
                    {/* <button onClick={this.addOption}>Add Options </button> */}
                    <button >Add Options </button>
                </form>
            </div>
        )
    }
}

const jsx = (<div>
    <h1> Title </h1>
    <Header />
    <Action />
    <Options />
    <AddOption />
    </div>
    );

ReactDOM.render(<IndecisionApp />,document.getElementById('approot'))