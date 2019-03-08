import React, { Component } from 'react';
import { lstat } from 'fs';

const TOTAL_PAGES = 100;
const PAGES_PER_PAGES_LIST = 7;

function ArrayByNumber(from, to) {
  var list = [];
  for(var i=from; i <= to; i++) {
    list.push(i);
  }
  return list;
}

class App extends Component {
  state = {
    currentPage: 1,
    currentNearPages: ArrayByNumber(1, PAGES_PER_PAGES_LIST),
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
          const newNearPages = ArrayByNumber(currentPage+1, Math.min(currentPage + PAGES_PER_PAGES_LIST, TOTAL_PAGES));
          //Math.min은 currentPage + PAGES_PER_PAGES_LIST는 현재105이고, TOTAL_PAGES는 100인데 둘이 비교해서 작은걸 true로 쓰겠다는뜻임
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
    }, 100)
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
