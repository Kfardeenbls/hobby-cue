import { useContext } from "react";
import AuthPopUpModel from "./AuthPopUpModel";
import AuthContext from "@/context/AuthContext";
const SignInPopUp = () => {
  const { isPopUp } = useContext(AuthContext);

  return <>{isPopUp && <AuthPopUpModel />}</>;
};

export default SignInPopUp;
