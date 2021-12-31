import { Link } from "react-router-dom";
import styled from "styled-components";
import { xsm } from "../../utils/responsive";
/* STYLES START */
const Left = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${xsm({ margin: "10px 0", justifyContent: "space-between" })}
`;
const LinkTo = styled.span`
  margin: 0 10px;
`;
const CartIcon = styled.img`
  width: 30px;
`;
/* STYLES END */

const LeftSideTopbar = () => {
  return (
    <Left>
      <div>
        <LinkTo>
          <Link className="topbar-link"  to="/login">ورود</Link>
        </LinkTo>
        <LinkTo>
          <Link className="topbar-link" to="/register">عضویت</Link>
        </LinkTo>
      </div>
      <Link to="/cart">
      <CartIcon src="/icons/cart-plus-solid.svg" />
      </Link>
    </Left>
  );
};

export default LeftSideTopbar;
