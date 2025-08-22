
// import React,{useState,useEffect} from 'react';

// function App() {
//   const [count,setCount]=useState(0);
//   const [mood,setMood]=useState("happy");
//   const [name,setName]=useState("");
//   const [isVisible,setIsVisible]=useState(true);
//   const[colors,setColors]=useState(["red","green","yellow"]);
//   useEffect(() =>{
//     if(count % 2 !== 0){
//       setMood("Sad");
//     }else{
//       setMood("happy");
//     }
//   },[count]);
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <p>Hello</p>
//         <p>Count:{count} and mood is {mood}</p> 
//         <button onClick={() => setCount(count+1)}>Increment</button>
//         <br/>
//         <input 
//           type="text"
//           value={name}
//           onChange={e => setName(e.target.value)}
//           placeholder='Enter your name'/>
//           <p>Your name:{name}</p>
//           <button onClick={() => setIsVisible(!isVisible)}>Toggle colors</button>
//           {isVisible && (
//             <ul>
//               {colors.map((color,idx) => (
//                 <li key={idx}>{color}</li>
//               ))}
//             </ul>
//           )}
//       </header>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import React, { useReducer, useEffect } from 'react';

// const initialState = {
//   count: 0,
//   mood: 'happy',
//   name: '',
//   isVisible: true,
//   colors: ['red', 'green', 'yellow'],
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 };
//     case 'SET_MOOD':
//       return { ...state, mood: action.payload };
//     case 'SET_NAME':
//       return { ...state, name: action.payload };
//     case 'TOGGLE_VISIBLE':
//       return { ...state, isVisible: !state.isVisible };
//     case 'ADD_COLOR':
//       if (
//         action.payload.trim() &&
//         !state.colors.includes(action.payload.trim().toLowerCase())
//       ) {
//         return {
//           ...state,
//           colors: [...state.colors, action.payload.trim().toLowerCase()],
//         };
//       }
//       return state;
//     case 'REMOVE_LAST_COLOR':
//       return { ...state, colors: state.colors.slice(0, -1) };
//     case 'RESET_COLORS':
//       return { ...state, colors: ['red', 'green', 'yellow'] };
//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const [newColor, setNewColor] = React.useState('');

//   useEffect(() => {
//     dispatch({
//       type: 'SET_MOOD',
//       payload: state.count % 2 !== 0 ? 'Sad' : 'happy',
//     });
//   }, [state.count]);

//   return (
//     <div className="App">
      // <header className="App-header">
      //   <p>Hello</p>
      //   <p>
      //     Count: {state.count} and mood is {state.mood}
      //   </p>
      //   <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      //   <br />
      //   <input
      //     type="text"
      //     value={state.name}
      //     onChange={e => dispatch({ type: 'SET_NAME', payload: e.target.value })}
      //     placeholder="Enter your name"
      //   />
      //   <p>Your name: {state.name}</p>
      //   <button onClick={() => dispatch({ type: 'TOGGLE_VISIBLE' })}>
      //     Toggle colors
      //   </button>
      //   {state.isVisible && (
      //     <>
      //       <ul>
      //         {state.colors.map((color, idx) => (
      //           <li key={idx}>{color}</li>
      //         ))}
      //       </ul>
      //       <input
      //         type="text"
      //         value={newColor}
      //         onChange={e => setNewColor(e.target.value)}
      //         placeholder="Add a color"
      //       />
      //       <button onClick={() => {
      //         dispatch({ type: 'ADD_COLOR', payload: newColor });
      //         setNewColor('');
      //       }}>
      //         Add Color
      //       </button>
      //       <button
      //         onClick={() => dispatch({ type: 'REMOVE_LAST_COLOR' })}
      //         disabled={state.colors.length === 0}
      //       >
      //         Remove Last Color
      //       </button>
      //       <button onClick={() => dispatch({ type: 'RESET_COLORS' })}>
      //         Reset Colors
      //       </button>
      //     </>
      //   )}
      // </header>
//     </div>
//   );
// }


// import React  ,{useRef} from 'react';

// function App(){
//   const submit = (e)=>{
//     e.preventDefault();
//   };
//   return(
//     <form onSubmit={submit}>
//       <input
//         ref 
//         type="text" 
//         placeholder='Color title...'/>
//       <input type="color"/>
//       <button>Add</button> 
//     </form>
//   );
// }



// import { useState } from 'react';

// // Custom Hook
// function useInput(initialValue) {
//   const [value, setValue] = useState(initialValue);

//   const onChange = (event) => {
//     setValue(event.target.value);
//   };

//   const reset = () => {
//     setValue(initialValue);
//   };
//   return [value, onChange, reset];
// }

// // Using the Custom Hook in a Component
// function MyForm() {
//   const [title, handleTitleChange, resetTitle] = useInput('');
//   const [color, handleColorChange, resetColor] = useInput('black');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Title: ${title}, Color: ${color}`);
//     resetTitle();
//     resetColor();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input value={title} onChange={handleTitleChange} placeholder="Title" />
//       <input value={color} onChange={handleColorChange} placeholder="Color" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default MyForm;




// import React from 'react';

// function App(){
//   let name='Surya...';
//   let num=[10,20,30];
//   return(
//     <>
//     <div className='main'>
//       <p>Hey</p>
//     </div>
    
//     <h1>Hello {name}</h1>
//     {num.map((n) => {
//       return(
//         <ul>
//           <li>{n}</li>
//         </ul>
//       )
//     })}

//     </>
  
//   );
// }
import React,{ useState, useReducer, useEffect } from 'react';
import './App.css';
import {questions} from './faqData.jsx';

const initialState = {
  count: 0,
  mood: 'happy',
  name: '',
  isVisible: true,
  colors: ['red', 'green', 'yellow'],
};

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'SET_MOOD':
      return { ...state, mood: action.payload };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'TOGGLE_VISIBLE':
      return { ...state, isVisible: !state.isVisible };
    case 'ADD_COLOR':
      if (
        action.payload.trim() &&
        !state.colors.includes(action.payload.trim().toLowerCase())
      ) {
        return {
          ...state,
          colors: [...state.colors, action.payload.trim().toLowerCase()],
        };
      }
      return state;
    case 'REMOVE_LAST_COLOR':
      return { ...state, colors: state.colors.slice(0, -1) };
    case 'RESET_COLORS':
      return { ...state, colors: ['red', 'green', 'yellow'] };
    default:
      return state;
  }
}

function App() {
  const [pstatus, setpstatus] = useState(false);
  const [menuStatus, setMenuStatus] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newColor, setNewColor] = useState('');
  const [modalstatus,setModalstatus]=useState(false);
  let [showAns,setShowAns] =useState(questions[0].id);


  useEffect(() => {
    dispatch({
      type: 'SET_MOOD',
      payload: state.count % 2 !== 0 ? 'Sad' : 'happy',
    });
  }, [state.count]);

  return (
    <div className="App">
      <button className='en' onClick={() => setModalstatus(!modalstatus)}>Topics Covered</button>


      <div className={`modalOverLay ${modalstatus ? 'modalShow' :''}`} onClick={() => setModalstatus(false)}></div>
      <div className={`modalDiv ${modalstatus ? 'showModaldiv' : ''}`}>
        <h3>Topics Completed </h3>
        <ul>
  <li>JavaScript</li>
  <li>TypeScript</li>
  <li>
    React
    <ul>
      <li>Components</li>
      <li>Props</li>
      <li>Hooks</li>
    </ul>
  </li>
</ul>

        
      </div>

      <button className='micon' onClick={() => setMenuStatus(!menuStatus)}>
        {menuStatus ? <span>&times;</span> : <span>&#9776;</span>}
      </button>
      <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
      <input type={pstatus ? 'text' : 'password'} />
      <button onClick={() => setpstatus(!pstatus)}>{pstatus ? 'Hide' : 'Show'}</button>
      <header className="App-header">
        <p>Hello</p>
        <p>
          Count: {state.count} and mood is {state.mood}
        </p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <br />
        <input
          type="text"
          value={state.name}
          onChange={e => dispatch({ type: 'SET_NAME', payload: e.target.value })}
          placeholder="Enter your name"
        />
        <p>Your name: {state.name}</p>
        <button onClick={() => dispatch({ type: 'TOGGLE_VISIBLE' })}>
          Toggle colors
        </button>
        {state.isVisible && (
          <>
            <ul>
              {state.colors.map((color, idx) => (
                <li key={idx}>{color}</li>
              ))}
            </ul>
            <input
              type="text"
              value={newColor}
              onChange={e => setNewColor(e.target.value)}
              placeholder="Add a color"
            />
            <button onClick={() => {
              dispatch({ type: 'ADD_COLOR', payload: newColor });
              setNewColor('');
            }}>
              Add Color
            </button>
            <button
              onClick={() => dispatch({ type: 'REMOVE_LAST_COLOR' })}
              disabled={state.colors.length === 0}
            >
              Remove Last Color
            </button>
            <button onClick={() => dispatch({ type: 'RESET_COLORS' })}>
              Reset Colors
            </button>
          </>
        )}
      </header>

      <div>
        <h1>Frequently Asked Questions (FAQs)</h1>
        <div className='faqouter'>
          {questions.map((faqItems,i) =>{
            return(
              <div className='faqItems' key={faqItems.id}>
            <h3 onClick={()=>setShowAns(faqItems.id)}>{faqItems.question}</h3>
            <p className={showAns===faqItems.id ? 'activeAns' : ''}>{faqItems.answer}</p>
          </div>
            )
          })}

          
        </div>
      </div>


    </div>
  );
}

export default App;



