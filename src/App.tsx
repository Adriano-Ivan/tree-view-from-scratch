import React from 'react';
import TreeView from './components/TreeView/TreeView.component';
import logo from './logo.svg';
import './App.css';

const dataTree = [
  {
    id:1,
    label:'Front-end',
    internCourses: [
      {
        id:2,
        label:'HTML',
        internCourses:[
          {
            id:3,
            label:'Semântica',
            internCourses:[],
          }
        ]
      },
      {
        id: 4,
        label:'CSS',
        internCourses: [
          {
            id: 5,
            label:'Grid',
            internCourses:[]
          },
          {
            id:6,
            label:'Flex-box',
            internCourses:[]
          }
        ]
      }
    ]
  },
  {
    id: 7,
    label:'Back-end',
    internCourses:[
      {
        id:8,
        label:'Java',
        internCourses:[
          {
            id:9,
            label:'Spring',
            internCourses:[
              {
                id:10,
                label:'Spring Boot',
                internCourses:[]
              }
            ]
          }
        ]
      },
      {
        id: 11,
        label:'C#',
        internCourses:[
          {
            id: 12,
            label:'.NET',
            internCourses: [

            ]
          }
        ]
      }
    ]
  }
]

function App() {
  return (
    <div className="App">
        <TreeView treeData={dataTree}/>
    </div>
  );
}

export default App;
