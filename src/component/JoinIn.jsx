import "../style/component/signIn.css";
import ConnectWith from "./ConnectWith";
import CustForm from "./CustForm";

const JoinIn = () => {
  return (
    <div className="cust-container flex-col revrse" style={{ gap: "20px" }}>
      <ConnectWith />
      <CustForm signin={false} btnLabel="Agree and Continue" />
    </div>
  );
};

export default JoinIn;
