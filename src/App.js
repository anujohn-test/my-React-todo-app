import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Input from './components/input.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    this.state = {
      mode: 'create',
      filter: false,
      data: [
        {
          id: 1,
          text: 'Learn React',
          completed: false
        },
        {
          id: 2,
          text: 'Learn Javascript',
          completed: false
        },
        {
          id: 3,
          text: 'Learn Go',
          completed: false
        }
      ]
    };
  }

  handleKeyPress = e => {
    if (e.keyCode === 78) {
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  addItem = e => {
    if (e.keyCode === 13) {
      let dataArr = this.state.data;
      let arrSize = dataArr.length;
      this.setState({
        data: [
          ...this.state.data,
          {
            id: dataArr[arrSize - 1].id + 1,
            text: e.target.value,
            completed: false
          }
        ]
      });
      this.inputRef.current.value = '';
    }
  };

  searchFilter = e => {
    const type = e.target.value;
    switch (type) {
      case 'completed':
        this.state.data.filter(item => item.completed == true);
        break;
    }
  };

  completedHandler = e => {
    console.log('rr', e.target);
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row" id="row1">
            <div className="header">
              <h1>Things To Do</h1>
              <br />
              <Input
                type="add"
                handleFn={this.addItem}
                setRef={this.inputRef}
              />
              <select onChange={this.searchFilter}>
                <option value="all" selected="selected">
                  All
                </option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
              </select>
            </div>
            <ul>
              {this.state.data.map((item, i) => {
                return (
                  <li className={`item_${item.id}`} key={i}>
                    <label>
                      <input
                        type="checkbox"
                        name={`chk_${item.id}`}
                        onClick={this.completedHandler}
                      />
                      {item.text}
                    </label>
                  </li>
                );
              })}
            </ul>
            <p>Start editing to see some magic happen :)</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
