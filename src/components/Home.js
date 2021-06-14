import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Share } from 'react-twitter-widgets'
const Home = () => {
  let [movies, setMovies] = useState([]);
  const [input,setInput] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/movies");
    setMovies(result.data);
  };
  const  box={
    width:"20rem",
    float:"right",
    height:550,
    margin:10,
}

//Event Handler for Search
const handleChange =(e)=>{
    e.preventDefault();
    setInput(e.target.value);
};
if(input.length>0){
    console.log("filter is called");
     movies = movies.filter((i) =>{
        if(i.title.toLowerCase().match(input)){
            return true;
        
        }
        
    });
    loadUsers();
}


  return (
    <div className="container">
      <div className="py-4">
      <input type="text" placeholder="Search..." 
                onChange={handleChange}
                value={input}
                style={{float:'right',
                        width:'20%',
                        marginBottom:'10px'
                    
                        }}/>
        <h1>Netflix</h1>
        
        
            {movies.map((data, index) => (
              <Card style={box} key={index} className="box">
              <Card.Img variant="top" src="holder.js/100px180" src={data.poster} />
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.overview}</Card.Text>
              </Card.Body>

            
              <Share url={`http://localhost:3003/movies/${data.id}`} />
            </Card>
            ))}
      </div>
    </div>
  );
};

export default Home;