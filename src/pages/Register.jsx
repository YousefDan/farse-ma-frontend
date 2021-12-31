import styled from "styled-components";
import {Link} from "react-router-dom";
import {sm,md} from "../utils/responsive"

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

const Register = () => {
  return (
    <Container>
      <Title>عضویت در سایت</Title>
      <Form>
        <Input type="text" placeholder="نام کاربری" />
        <Input type="text" placeholder="ایمیل یا تلفن همراه" />
        <Input type="password" placeholder="کلمه عبور" />
        <Input type="password" placeholder="تکرار کلمه عبور" />
        <Button>ثبت نام </Button>
        <div style={{textAlign:"start"}}>
            حساب کاربری دارید؟ {" "}
          <Link style={{textDecoration: "none"}} to="/login">ورود به حساب کاربری</Link>
      </div>
      </Form>
    </Container>
  );
};

export default Register;