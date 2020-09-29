import React,{useState} from 'react';
import ProductList from "./components/ProductList";
import ProductSelect from "./components/ProductSelect";


function App() {
  const [prodId, setProdId] = useState([]);

  return (
    <div className="flex flex-wrap">
      <div className="md:w-4/5 w-full text-center">
        <ProductList setProdId={setProdId} />
        <div className="md:h-1 h-48"></div>
      </div>
      <div 
      className="md:w-1/5 fixed md:relative bottom-0 w-full shadow-2xl bg-blue-600 overflow-y-auto md:h-auto h-48 ">
        <ProductSelect prodId={prodId} setProdId={setProdId} />
      </div>
    </div>
  );
}

export default App;
