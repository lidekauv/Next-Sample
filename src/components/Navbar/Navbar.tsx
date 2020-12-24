import styled from "styled-components";

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
`

const Navbar = styled.div`
  background: #424561;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
`

const StyledNavbar = () => {
  return (
    <>
      <Navbar>
        <LogoImage
          src="/image.svg"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar>
    </>
  );
};

export default StyledNavbar;
