import React, { useState } from "react";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Data from "./Data.json";
function Home() {
  const [quote, setQoute] = useState("");
  const [author, setAuthor] = useState("");
  console.log(quote);
  const [viewQuote, setViewQuote] = useState([]);

  const addQuote = () => {
    const newQuote = {
      id: viewQuote.length + 1,
      quote: quote,
      author: author,
    };

    setViewQuote([...viewQuote, newQuote]);
    console.log(viewQuote);
    setQoute("");
    setAuthor("");
  };

  React.useEffect(() => {
    let ref = JSON.parse(localStorage.getItem("quoteBase"));
    setViewQuote(ref);

    //the dependency array prevents our useEffect from rendering over and over again
  }, []);

  React.useEffect(() => {
    localStorage.setItem("quoteBase", JSON.stringify(viewQuote));

    //the value inside the dependency array tells our useEffect to render when that value changes
  }, [viewQuote]);

  // const DeleteQuotes = () => {
  //   React.useEffect(() => {
  //     localStorage.removeItem("quoteBase");
  //   }, []);
  // };

  // React.useEffect(() => {
  //   deleteQuotes();
  // }, [viewQuote]);
  const [bg, setBg] = React.useState([
    "/images/adrien.jpg",
    "/images/aarti.jpg",
    "/images/alek.jpg",
    "/images/elti.jpg",
    "/images/diego.jpg",
    "/images/jonny.jpg",
    "/images/mads.jpg",
    "/images/mimpi.jpg",
    "/images/patrick.jpg",
    "/images/peter.jpg",
    "/images/pex.jpg",
    "/images/pixbay.jpg",
    "/images/rahul.jpg",
    "/images/ritos.jpg",
    "/images/roberto.jpg",
    "/images/roma.jpg",
    "/images/seebar.jpg",
    "/images/shaffer.jpg",
    "/images/stam.jpg",
    "/images/wang.jpg",
  ]);

  const rand = () => {
    return Math.floor(Math.random() * bg.length);
  };

  return (
    <Container>
      <Del>
        <AiFillDelete color="white" fontSize="15px" />{" "}
        <span>Delete All Quotes</span>
      </Del>
      <Hero>
        <HeroContent>
          <Top>
            <HoldTop>
              <TopText>Quote app</TopText>
              <Form>
                <input
                  type="text"
                  placeholder="Tell me your best quote..."
                  value={quote}
                  onChange={(e) => {
                    setQoute(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Input the author here..."
                  value={author}
                  onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
                />
                <button onClick={addQuote}>Send</button>
              </Form>
            </HoldTop>
          </Top>

          <SideImg src="/images/note-list.svg" />
        </HeroContent>
      </Hero>
      <Bottom>
        {viewQuote.length < 1 ? (
          <h1>your quotes appear here...</h1>
        ) : (
          viewQuote?.map((props) => (
            <Card
              key={props?.id}
              style={{ backgroundImage: `url(${bg[rand()]})` }}
            >
              <Dark></Dark>
              <Q>{props.quote} </Q>
              <A>~{props.author}</A>
            </Card>
          ))
        )}
      </Bottom>
      <Footer>
        &copy; All rights 2022. Built by <pre> </pre>
        <a href="https://linkedin.com/in/elayenelson" target="_blank">
          Nelson Elaye
        </a>
        .
      </Footer>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  background-color: #e6e6fa;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  @media screen and (max-width: 425px) {
    min-height: 100%;
  }
`;

const Del = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgb(255, 0, 0, 0.8);
  border-radius: 10px;
  padding: 10px;
  color: white;
  // display: flex;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.35s;

  :hover {
    transform: scale(1.05);
    background-color: rgb(255, 0, 0, 0.9);
  }

  span {
    margin-left: 5px;
    font-size: 15px;
    font-weight: 600;
  }

  @media screen and (max-width: 425px) {
    span {
      font-size: 11px;
    }
  }
`;
const Form = styled.div``;
const Top = styled.div`
  ${Form} {
    flex-direction: column;
    align-items: center;
    display: flex;
    margin-bottom: 80px;
    width: 320px;

    input {
      padding: 15px;
      margin-bottom: 15px;
      border-radius: 5px;
      border: none;
      width: 100%;
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }

    button {
      padding: 10px;
      font-size: 18px;
      border-radius: 15px;
      border: none;
      font-weight: 550;
      background-color: #f0ffff;
      margin-top: 10px;
      width: 150px;
      cursor: pointer;
      transition: all 0.35s;
      :hover {
        transform: scale(1.2);
      }
    }

    @media screen and (max-width: 425px) {
      width: 260px;
    }
  }
`;
const HoldTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopText = styled.div`
  color: #fff;
  font-size: 50px;
  margin-top: 50px;
  margin-bottom: 30px;
  font-family: cursive;
`;

const Hero = styled.div`
  min-height: 80vh;
  width: 100%;
`;
const HeroContent = styled.div`
  padding: 30px 0px;

  height: 100%;
  width: 100%;
  background: url("/images/vecteezy.jpg");
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: 425px) {
    background: #30695d;
  }
`;

const SideImg = styled.img`
  width: 500px;

  @media screen and (max-width: 425px) {
    width: 300px;
  }

  @media screen and (max-width: 320px) {
    width: 250px;
  }
`;

const Bottom = styled.div`
  width: 90%;
  min-height: 50vh;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
`;

const Q = styled.div`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 23px;
  font-family: Now, cursive;
  line-height: 30px;
  z-index: 3;

  @media screen and (max-width: 425px) {
    font-size: 30px;

    font-weight: 500;
  }
`;
const A = styled.div`
  font-family: "Josefin Sans", sans-serif;
  z-index: 3;

  @media screen and (max-width: 425px) {
    font-size: 18px;
  }
`;

const Card = styled.div`
  position: relative;
  width: 300px;
  background-color: #fffacd;
  height: 300px;
  border-radius: 10px;
  color: #000;
  margin: 20px 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  color: #fff;

  @media screen and (max-width: 425px) {
    margin: 20px 0px;
  }
`;

const Dark = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: black;
  opacity: 0.75;
  border-radius: 10px;
`;

const Footer = styled.div`
  margin-top: 30px;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #87a8a1;
  background-color: #042220;

  a {
    color: #87a8a1;
    font-weight: 700;
  }

  @media screen and (max-width: 425px) {
    font-size: 11px;
  }
`;
