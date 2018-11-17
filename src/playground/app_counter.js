

console.log("This JSX");

var template = 
(<div><h1> Expense App </h1>
        <p> Testing Example </p>
</div>);

var c=0;
var fun = function(){
        c = c-10+120;
        console.log("df"+c)
        x();
}

var approot = document.getElementById('approot');

var arr= [1,2,3,4,5,6];
var arr1 = [];
var arrFor = () => {
        arr.forEach((ar,index,arr)=>
         {
                 console.log(ar);
         arr1.push(<li key={index}> {ar} </li>);
                 
         })
 }
 


var x = () => {
        var template1 = (<div>
                <Home />
                <h1> Expense App </h1>
        {[<p key='1'>1</p>,<p key='2'>1</p>,<p key='3'>1</p>]}

                {
                       arr.map((val)=>
                        {
                                return <p key={val}> {val} </p>;
                                
                        })
                }

        <ol>
               {arrFor()}
               {arr1}
        </ol>
        </div>
        );
        ReactDOM.render(template1,approot);
        
};

class Home extends React.Component {
        constructor(props){
                super(props)
                this.ex = 10;
                this.example = this.example.bind(this);
        }
        
        example(){
                this.ex=this.ex+5;
ReactDOM.render(<Home />, approot)
                
        }
        render(){
                return (<div>
                <h1>Header</h1>      
                {this.ex}  
                <button onClick={this.example}>CLICK Name</button>
                {this.ex}
                </div>)
        }
}

ReactDOM.render(<Home />, approot)


