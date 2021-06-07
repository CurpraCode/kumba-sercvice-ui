import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SummaryPage() {
  const [cust, setCust] = useState([0]);
  const [rest, setRest] = useState([]);

  useEffect(() => {
    axios
      .get(`https://indapi.kumba.io/webdev/assignment`)
      .then((res) => {
        console.log(res.data);
        setCust(res.data.items);
        setRest(res.data.restaurant);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Card className="summary-box">
      <Box>
        <div className="item-order">
          <h2>Resturant</h2>
          <p>{rest.name} </p>
          <p>
            {rest.street} {rest.city} {rest.state}{" "}
          </p>
        </div>
        <div>
          <h2>Item Order </h2>

          <p>Item Category: {cust[0].category} </p>

          <p>Item Name: {cust[0].name} </p>

          <p>Tax: {cust[0].tax_pct} </p>

          <p>
            Bills: {cust[0].price}
            {cust[0].currency}
          </p>
        </div>
        <Link to="/">
          <Btn>Back Home</Btn>
        </Link>
      </Box>
    </Card>
  );
}

export default SummaryPage;

const Card = styled.div`
  text-align: center;
`;
const Btn = styled.button`
  border: none;
  background: linear-gradient(to top right, #8162ce, #f54ba5);
  height: 40px;
  color: #ffffff;
  width: 50%;
 margin-bottom: 1.5rem;
  border-radius: 30px;
  box-shadow: 0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16);
  padding: 9px;
  margin-right: 10px;
`;
const Box = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 15px;
  border-radius: 25px;
  background-color: #31394d;
  /* padding:20px; */
  padding-top: 10px;
  padding-bottom: 10px;
  color: #b3b8cd;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  :hover {
    box-shadow: 0px 10px 20px -10px rgba(238, 237, 237, 0.809);
    transform: scale(1.02);
    transition: 0.7s ease-out;
  }
  p {
    font-size: 19px;
    color: #7c8097;
    font-weight: 100;
  }
  h2 {
    color: #ffffff;
    font-weight: 300;
    padding-bottom:1rem;
    margin-bottom:1rem;
    box-shadow: 0px 10px 20px -10px rgba(238, 237, 237, 0.809);
  }
`;
