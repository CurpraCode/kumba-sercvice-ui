import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

function ProfilePage() {
  const [avat, setAvat] = useState([]);
  const [arr, setArr] = useState([]);
  const [mrr, setMrr] = useState([]);

  useEffect(() => {
    axios
      .get(`https://indapi.kumba.io/webdev/assignment`)
      .then((res) => {
        console.log(res.data);
        setAvat(res.data.user);
        setMrr(res.data.user.dislikes);
        setArr(res.data.user.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Card>
      <Box>
        <Avatar>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.uo_hoPwUzv_ihIlvHstqtwHaK6&pid=Api&P=0&w=300&h=300"
            alt="man profile"
          />
        </Avatar>
        <h3> {avat.name}</h3>
        <p>{avat.about}</p>
        <div>
          <h5>Contact Details</h5>

          <p>{avat.address}</p>
          <p className="btn-color">{avat.phone}</p>
        </div>

        <div>
          <h5> Food Choice</h5>
          <InnerBoxContact>
            <p className="btn-outline"> {arr[0]}</p>
            <p className="btn-color"> {arr[1]}</p>
            <p className="btn-outline"> {arr[2]}</p>
          </InnerBoxContact>
        </div>

        <div>
          <h5>Food Dislikes</h5>
          <InnerBoxContact>
            <p className="btn-color"> {mrr[0]}</p>
            <p className="btn-outline"> {mrr[1]}</p>
            <p className="btn-color"> {mrr[2]}</p>
          </InnerBoxContact>
        </div>

        <Link to="/Summary">
          <Btn type="button" className="btn-color">
            Order Summary
          </Btn>
        </Link>
      </Box>
    </Card>
  );
}

export default ProfilePage;

const Card = styled.div`
  text-align: center;
`;
// const Img=styled.img`
// width:20%;
// border-radius: 11rem;
// text-align:center;
// `

const Avatar = styled.div`
  img {
    width: 20%;
    height: 100px;
    border-radius: 200rem;
  }
`;
const Btn=styled.button`
    border: none;
    background: linear-gradient(to top right, #8162ce, #f54ba5);
    height: 40px;
    color: #ffffff;
    width: 50%;
    /* font-size: 12px; */
    border-radius: 30px;
    box-shadow: 0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16);
    padding: 9px;
    margin-right: 10px;     
`
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
    font-size: 14px;
    color: #7c8097;
    font-size: 15px;
    font-weight: 100;
  }
  h2 {
    color: #ffffff;
    font-weight: 300;
    box-shadow: 0px 10px 20px -10px rgba(238, 237, 237, 0.809);
  }
`;

const InnerBoxContact = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: wrap;
  align-items: center;
  margin: 20px;

  .btn-color {
    flex: 1;
    border: none;
    background: linear-gradient(to top right, #8162ce, #f54ba5);
    height: 40px;
    color: #ffffff;
    width: 20%;
    font-size: 12px;
    border-radius: 30px;
    box-shadow: 0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16);
    padding: 9px;
    margin-right: 10px;
  }
  .btn-color:hover {
    background: transparent;
    border: 1px solid #da59b1;
    height: 40px;
    color: #da59b1;

    width: 30%;
    font-size: 13px;
    border-radius: 30px;
    box-shadow: 0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16);
  }
  .btn-outline {
    background-color: transparent;
    border: none;
    height: 40px;
    color: #da59b1;
    padding: 9px;
    width: 30%;
    font-size: 13px;
    border-radius: 30px;
    box-shadow: 0 13px 26px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16);
  }
  .btn-outline:hover {
    background-color: transparent;
    border: 1px solid #da59b1;
    width: 35%;
    border-color: linear-gradient(to top right, #8162ce, #f54ba5);
    border-radius: 30px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.16);
  }
`;
