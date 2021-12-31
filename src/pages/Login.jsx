import styled from "styled-components";
import {Link} from "react-router-dom";
import {sm,md} from "../utils/responsive";

const Container = styled.div`
  min-height: 80vh;
  text-align: center;
  padding: 21px;
  ${sm({padding: "50px"})}
`;
const Title = styled.h1`
  color: #3a3939;
`;
const Form = styled.form`
  width: 100%;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  padding: 17px;
  margin: 21px auto;
  border-radius: 7px;
  ${md({width: "50%"})}
`;
const Input = styled.input`
  margin-bottom: 21px;
  padding: 5px 10px;
  border: 1px solid gray;
  border-radius: 7px;
  font-size: 21px;
  color: #3a3939;
  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px skyblue;
  }
`;
const Button = styled.button`
  background-color: green;
  cursor: pointer;
  font-size: 21px;
  color: white;
  border-radius: 7px;
  border: none;
  outline: none;
  padding: 5px;
  margin-bottom: 17px;
`;

const Login = () => {
  return (
    <Container>
      <Title>ورود به حساب کاربری</Title>
      <Form>
        <Input type="text" placeholder="نام کاربری" />
        <Input type="password" placeholder="کلمه عبور" />
        <Button>ورود </Button>
        <div style={{textAlign:"start"}}>
            حساب کاربری ندارید؟ {" "}
          <Link style={{textDecoration: "none"}} to="/register">عضویت در سایت</Link>
      </div>
      </Form>
    </Container>
  );
};

export default Login;
