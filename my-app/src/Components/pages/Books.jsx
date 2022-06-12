import React from "react";
import { useEffect, useState } from "react";

import { BookCard } from "./BookCard";
import styled from "styled-components";

export const Grid = styled.div`
 display:grid;
 grid-template-columns: 1fr 1fr;
`;

const Books =  () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    const getData = async() => {

      try{
        let res = await fetch("http://localhost:8080/books");
        let data = await res.json();
        //console.log(data)
        setData(data);
      }
      catch(error){
        console.log(error);
      }
    }
    getData()
  }, []);


  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
          {data.map((el)=>(
            <BookCard id={el.id} title={el.title} isbn={el.isbn} pageCount={el.pageCount} thumbnailUrl={el.thumbnailUrl}/>
          ))}
      </Grid>
    </>
  );
};
export default Books;
