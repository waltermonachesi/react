let root = document.querySelector( '#root')
/*root.innerHTML = '<h1>Hello World</h1>'

let h2 = document.createElement('h2')
h2.textContent = 'Hola Mundo'
root.appendChild(h2) */

//usando react


    function App() {
        return React.createElement ('h2', {}, 'Hola React')
        
    }
    const container = document.getElementById('root');
    const root = ReactDOM.createRoot()<container
    root.render(React.createElement(App))
    