import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data'


function TreeItem({ item, expanded, toggle }) {
  return (
    <div>
      {item.children ? (
        <span onClick={() => toggle(item.id)}>
          {expanded.has(item.id) ? '[-]' : '[+]'}
        </span>
      ) : ""}
      {item.name}
      
      {expanded.has(item.id) && item.children && (
        <div style={{paddingLeft: 20}}>
          {item.children.map(child => (
            <TreeItem 
              key={child.id}
              item={child}
              expanded={expanded}
              toggle={toggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}


function App() {
  const [expanded, setExpanded] = useState(new Set())

  const toggle = (id) => {
    console.log("before expanded");
    const newExpanded = new Set(expanded)
    if (newExpanded.has(id)) {
      console.log("closing", id);
      newExpanded.delete(id)

    } else {
      console.log("opne", id);

      newExpanded.add(id)
    }
    setExpanded(newExpanded);


    console.log('After:', newExpanded);



  }

 return (
    <div>
      <h1>file Explorer</h1>
      {data.map((item) => (
        <TreeItem 
          key={item.id}
          item={item}
          expanded={expanded}
          toggle={toggle}
        />
      ))}
    </div>
  )
}

export default App
