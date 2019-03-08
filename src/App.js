import React, { Component } from 'react';


class App extends Component {
  state = {
    currentPage: 1,
    currentNearPages: [1,2,3,4,5,6,7,8,9,10],
  }

  componentDidMount() {
    setInterval(()=> {
      if(this.state.currentPage < 20) {
        if(this.state.currentPage === 10) {
          this.setState({
            currentPage: this.state.currentPage + 1,
            currentNearPages: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],  
          })
        } else {
          this.setState({
            currentPage: this.state.currentPage + 1,
          })
        }
      }
    }, 200)
  } 
  
  render() {
    return (
      <div style={{textAlign:'center'}}>
        {this.state.currentPage}
        <hr/>
        {this.state.currentNearPages.map((item, i) => {
        return <div key={i} style={{display:'inline-block', marginRight:'5px'}}>
          {item === this.state.currentPage
            ? <strong>{item}</strong>
            : <span>{item}</span>
          }
        </div>
        })}
      </div>
    );
  }
}

export default App;
