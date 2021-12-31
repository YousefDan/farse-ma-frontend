import styled from "styled-components";
import { sm, lg } from "../utils/responsive";

const Container = styled.div`
  min-height: 70vh;
  padding: 21px;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  border-bottom: 4px solid green;
  width: max-content;
  color: #686262;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  ${lg({ flexDirection: "row" })}
`;
const CartItems = styled.div`
  flex: 8;
  margin: 21px 0;
`;
const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid gray;
  padding: 10px;
`;
const ProductInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ProductInfo = styled.div`
  margin: 0 17px;
`;
const Image = styled.img`
  width: 120px;
  height: 170px;
`;
const ProductQuantity = styled.div`
  font-size: 14px;
  ${sm({ fontSize: "17px" })}
`;

const OrderSummary = styled.div`
  flex: 4;
  padding: 15px;
  border: 1px solid gray;
  margin: 17px;
  border-radius: 7px;
  background-color: #efefef;
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;
const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 31px 0;
`;
const Button = styled.button`
  cursor: pointer;
  background-color: green;
  color: white;
  border-radius: 7px;
  border: none;
  width: 100%;
  padding: 5px 10px;
  font-size: 27px;
`;

const Cart = () => {
  return (
    <Container>
      <Title>سبد خرید شما</Title>
      <Wrapper>
        <CartItems>
          <CartItem>
            <ProductInfoWrapper>
              <Image src="/images/carpets/carpet1.jpg" alt="" />
              <ProductInfo>
                <h3>فرش افشار زمینه لاکی</h3>
                <div style={{ margin: "10px 0" }}>اندازه: 3 * 4</div>
                <div>قیمت هر تخته 4,800,000</div>
              </ProductInfo>
            </ProductInfoWrapper>
            <ProductQuantity>تعداد: 2 تخته</ProductQuantity>
          </CartItem>
          <CartItem>
            <ProductInfoWrapper>
              <Image src="/images/carpets/carpet7.jpg" alt="" />
              <ProductInfo>
                <h3>فرش افشار زمینه آبی</h3>
                <div style={{ margin: "10px 0" }}>اندازه: 3 * 4</div>
                <div>قیمت هر تخته 4,800,000</div>
              </ProductInfo>
            </ProductInfoWrapper>
            <ProductQuantity>
              <div>تعداد: 2 تخته</div>
            </ProductQuantity>
          </CartItem>
        </CartItems>
        <OrderSummary>
          <h2>سفارش شما</h2>
          <List>
            <ListItem>
              <span>تعداد کل سفارش :</span>
              <span>4 تخته فرش</span>
            </ListItem>
            <ListItem>
              <span> هزینه ارسال :</span>
              <span>رایگان</span>
            </ListItem>
            <ListItem>
              <span> تخفیف :</span>
              <span> 0 تومان </span>
            </ListItem>
            <ListItem>
              <h4> مبلغ قابل پرداخت :</h4>
              <h4> 10000000 تومان </h4>
            </ListItem>
          </List>
          <Button>پرداخت</Button>
        </OrderSummary>
      </Wrapper>
    </Container>
  );
};

export default Cart;
