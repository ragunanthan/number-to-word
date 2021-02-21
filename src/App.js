import './App.css';
import React,{useState} from 'react';
function App() {
  const [data, setdata] = useState("")
  
var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function onchange (num) {
    if ((num = num.toString()).length > 5) return setdata("Invalid Input");
    var n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return setdata("Invalid Input");
    var str = '';
    str += (n[1] !== "00") ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] !== "00") ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] !== "00") ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] !== "0") ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] !== "00") ? ((str !== '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]])  : '';
    return setdata(str);
}


  return (
    <div className="App">
        <h1>Number TO Word</h1>
        <input  onChange={(e) => onchange(e.target.value)} className="input" /> 
        <p style={{fontSize:25}}>{data}</p>
        
    </div>
  );
}

export default App;
