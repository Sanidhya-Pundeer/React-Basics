import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

function App() {
    
    return (
        <>
         <Header></Header>
        {/* //or <Header/> */}
        <Footer></Footer>
        </>
        //capability of returning only a single enclosing tag 
        //loophole for this is to make an empty tag 
    );
}

export default App
