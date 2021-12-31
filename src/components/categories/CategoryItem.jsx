import styled from "styled-components";
import {sm,lg} from "../../utils/responsive";

const Container = styled.div`
  position: relative;
  margin: 12px;
  width: 340px;
  height: 450px;
  border: 2px solid gray;
  background-color: #efefef;
  box-shadow: 0 0 5px 2px grey;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  ${lg({ margin: "0" })}
  ${sm({width: "400px"})}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
const Layout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 10px;
  right: 10px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Title = styled.span`
   color: white;
   font-size: 22px;
   margin-bottom: 12px;
   background-color: blue;
   border-radius: 7px;
   padding: 0 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 21px;
    color: blue;
    background-color: rgba(255,255,255,0.7);
    border: 2px solid white;
    cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} alt={item.title} />
      <Layout>
         <Title>{item.title}</Title>
         <Button>دیدن بیشتر...</Button>
      </Layout>
    </Container>
  );
};

export default CategoryItem;
