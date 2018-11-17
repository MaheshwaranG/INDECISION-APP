class Counter extends React.Component {
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count : 0
        };
    }
    addOne(){
        // alert('add');
        this.setState((preState)=>{
            return {
                count : preState.count+1
            }
        })
    }
    minusOne(){
        this.setState((preState)=>{
            return {
                count : preState.count - 1
            }
        })
    }
    reset(){
        this.setState(()=>{
            return {
                count : 0
            }
        })
    }
    render(){
        return (
            <div>
                <h1> Counter : {this.state.count}</h1>
                <button onClick={this.addOne}> +1 </button> <br/>
                <button onClick={this.minusOne}> -1 </button> <br/>
                <button onClick={this.reset}> Reset </button> <br/>
            </div>
        );
    }
}

ReactDOM.render(<Counter />,document.getElementById('approot'));