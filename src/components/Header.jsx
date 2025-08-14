import logo from "../assets/food-app-logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between font-barlow rounded-xl bg-[#202a36]">
      <img src={logo} alt="logo" className="w-[130px] rounded-md ml-4" />

      <ul className="flex gap-8 pr-10 text-[1.2rem] font-semibold text-white cursor-pointer">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
