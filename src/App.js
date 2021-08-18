import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    //this.handleKeyPress = this.handleKeyPress.bind(this);
    this.addItem = this.addItem.bind(this);
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
    //console.log('e', e.keyCode);

    if (e.keyCode === 78) {
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  addItem(e) {
    if (e.keyCode === 13) {
      let dataArr = this.state.data;
      let arrSize = dataArr.length;
      dataArr.push({
        id: dataArr[arrSize - 1].id + 1,
        text: e.target.value,
        completed: false
      });
      this.setState({
        data: dataArr
      });
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row" id="row1">
            <div className="header">
              <h1>Things To Do</h1>
              <br />
              <input
                type="text"
                className="add"
                placeholder="Add New"
                onKeyDown={this.addItem}
              />
            </div>
            <ul>
              {this.state.data.map((item, i) => {
                let class_name = `item_${i}`;
                return (
                  <li className={class_name} key={i}>
                    <label>
                      <input type="checkbox" />
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
