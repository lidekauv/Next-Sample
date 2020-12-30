import StyledNavbar from "../Navbar/Navbar";

const Layout = (props: any) => {
  return (
    <>
      <StyledNavbar />
      {props.children}
    </>
  );
};

export default Layout;
