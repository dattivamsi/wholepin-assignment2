import React from "react";
import { VscSettings } from "react-icons/vsc";
import './Header.css'

const Header = ({setSearchTerm,setShowFilter,showFilter}) => {

  const filterItems = () =>{
    setShowFilter((prev) => !prev)
  }

  const handleChange = (e) =>{
    setSearchTerm((prev) => ({...prev,searchTerm:e.target.value}))
  }
  
  return (
    <div className="header_container">
      <div className="header">
        <input
          type="text"
          placeholder="Search from the worlds antiquue collection"
          onChange={(e)=>handleChange(e)}
        />
        <button onClick={()=>filterItems()}>
          <VscSettings />
          Filters
        </button>
      </div>
      <div>
        <button>suprprise Me</button>
      </div>
    </div>
  );
};

export default Header;
