import "../style/component/signIn.css";
import ConnectWith from "./ConnectWith";
import CustForm from "./CustForm";

const SignIn = () => {
  return (
    <div className="cust-container flex-col revrse" style={{ gap: "20px" }}>
      <ConnectWith />
      <CustForm signin={true} btnLabel="Continue" />
    </div>
  );
};

export default SignIn;
