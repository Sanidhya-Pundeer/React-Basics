import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx";

function App() {
    
    return (
        <>
         <Header></Header>
         <Food></Food>
        {/* //or <Header/> */}
        <Footer></Footer>
        
        </>
        //capability of returning only a single enclosing tag 
        //loophole for this is to make an empty tag 
    );
}

export default App
