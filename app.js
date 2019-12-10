
// TODO
var GroceryList1 = () => (
	<ul>
		<li> cucumbers</li>
		<li>Kale </li>
	</ul>
	)
	//


ReactDOM.render(<GroceryList1 />,document.getElementById('app'))
var GroceryList2 = () => (
	<ul>
		<Cucumbers />
		<Kale />
	</ul>
	)
//
var Cucumbers = () =>(
<li> cucumbers</li>
)
var Kale = () =>(
<li> kale</li>
)
ReactDOM.render(<GroceryList2 />,document.getElementById('app'))



// ReactDOM.render(<ul>{GroceryListItem}</ul>,document.getElementById('app'))

//


/*
var GroceryListItem = (props) => (
	<ul>
	  {props.todos.map((item) =>  <li key={item.toString()}>{item}</li>
	)}
	</ul>
  );
  
  var GroceryList2 = () => (
	<div>
	  <h2>Grocery List Item</h2>
	  <GroceryListItem todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep','testing','ziad']}/> 
	</div>
  );

  ReactDOM.render(<GroceryList2 />,document.getElementById('app'))
/*
  var TodoList = (props) => {

	// This function will be called when the first `<li>` below is clicked on
	// Notice that event handling functions receive an `event` object
	// We want to define it where it has access to `props`
  
	var onListItemClick = (event) => {
	  console.log('I got clicked');
	};
  
	// Because we used curly braces with this arrow function
	// we have to write an explicit `return` statement
	return (
	  <ul>
		<li onClick={onListItemClick}>{props.todos[0]}</li>
		<li>{props.todos[1]}</li>
		<li>{props.todos[2]}</li>
	  </ul>
	);
  }
  
  var App = () => (
	<div>
	  <h2>My Todo List</h2>
	  <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
	</div>
  );
  ReactDOM.render(<App />,document.getElementById('app')) */

  class GroceryListItem extends React.Component {
	  constructor(props) {
		  super(props)
		  this.count= 0
	  }
	  render() {
		return <li >{this.props.todo}</li>
	  }
  }



  var GroceryList2 = (props) => (
	<ul>
	  {props.todos.map((todo,index) =>
		< GroceryListItem key = {index.toString() } todo = {todo}   />
	  )}
	</ul>
  );
  ReactDOM.render(<GroceryList2 todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep','testing','ziad']} />,document.getElementById('app'))

//

class TodoListItem extends React.Component {
	constructor(props) {
	  super(props);
  
	  // `state` is just an object literal
	  this.state = {
		done: false
	  };
	}
  
	// When a list item is clicked, we will toggle the `done`
	// boolean, and our component's `render` method will run again
	onListItemClick() {
	  this.setState({
		done: !this.state.done
	  });
	}
  
	render() {
	  // Making the style conditional on our `state` lets us
	  // update it based on user interactions.
	  var style = {
		textDecoration: this.state.done ? 'line-through' : 'none',
	  };
	  var style2 = {
		  fontWeight: this.state.done ? "bold": "normal"
	  } ;
	  var style3 = {
		  backgroundColor:"blue"
	  }
  
	  // You can pass inline styles using React's `style` attribute to any component
	  // snake-cased css properties become camelCased this this object
	  return (
		  <ul>
			  <li style={style3} onClick={this.onListItemClick.bind(this)} onMouseEnter = {this.onListItemClick.bind(this)} onMouseLeave = {this.onListItemClick.bind(this)} key = {this.props.todo2.toString()}>{this.props.todo2}</li>
			  {this.props.todos.map(todo=>
			   <li style={style, style2} onClick={this.onListItemClick.bind(this)} onMouseEnter = {this.onListItemClick.bind(this)} onMouseLeave = {this.onListItemClick.bind(this)} key = {todo.toString()}>{todo}</li>

		   )}
		</ul>
	  );
	}
  }
  ReactDOM.render(<TodoListItem todos = {["azerty","qwerty"]} todo2 = {'hello'} />,document.getElementById("app"))
