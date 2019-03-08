import React, { Component } from 'react';

const TOTAL_PAGES = 40;
const PAGES_PER_PAGES_LIST = 10;

class App extends Component {
  state = {
    currentPage: 1,
    currentNearPages: [1,2,3,4,5,6,7,8,9,10],
    hasNextPages: true,
    hasPrevPages: false,
  }

  componentDidMount() {
    setInterval(()=> {
      const { currentPage } = this.state;
      if(currentPage < TOTAL_PAGES) {
        if(currentPage % PAGES_PER_PAGES_LIST === 0) {
          if(currentPage === TOTAL_PAGES - PAGES_PER_PAGES_LIST) {
            this.setState({
              hasNextPages: false,
            })
          }else if(currentPage === PAGES_PER_PAGES_LIST) { //이부분은 else if로 써도되고 위의 if(currentPage === 30) 이부분과 별도롤 if 로 써도된다
            this.setState({
              hasPrevPages: true,
            })
          }
          const newNearPages = [currentPage+1,currentPage+2,currentPage+3,currentPage+4,currentPage+5,currentPage+6,currentPage+7,currentPage+8,currentPage+9,currentPage+10];
          this.setState({
            currentPage: currentPage + 1,
            currentNearPages: newNearPages, 
          })
        } else {
          this.setState({
            currentPage: currentPage + 1,
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
        {this.state.hasPrevPages ? '이전' : ''}
        {this.state.currentNearPages.map((item, i) => {
        return <div key={i} style={{display:'inline-block', marginRight:'5px'}}>
          {item === this.state.currentPage
            ? <strong>{item}</strong>
            : <span>{item}</span>
          }
        </div>
        })}
        {this.state.hasNextPages ? '다음' : ''}
      </div>
    );
  }
}

export default App;
