import ButtonComponent from "../components/Buttons/ButtonComponent";
//Se utiliza para redireccionar a otro componente
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Se usa para redireccionar esta es la inizalizacion
  //   se navega con onClick={() => navigate("/home")}
  const navigate = useNavigate();

  return (
    <div>
      Login
      <ButtonComponent onClick={() => navigate("/home")}>home</ButtonComponent>
    </div>
  );
};

export default Login;
