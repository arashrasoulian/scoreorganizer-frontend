import Signup from "../../components/auth/Signup";
import { useDispatch } from "react-redux";
import { setCurrUser } from "../../store/userSlice";

export default function SignupPage() {
  const dispatch = useDispatch();
  return (
    <Signup setCurrUser={(user) => dispatch(setCurrUser(user))} />
  );
}
