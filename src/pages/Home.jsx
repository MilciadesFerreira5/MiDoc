import ButtonComponent from "../components/Buttons/ButtonComponent";
//Se utiliza para redireccionar a otro componente
import { useNavigate } from "react-router-dom";

const Home = () => {
  // Se usa para redireccionar esta es la inizalizacion
  //   se navega con onClick={() => navigate("/home")}
  const navigate = useNavigate();

  return (
    <div>
      Home
      <ButtonComponent onClick={() => navigate("/")}>login</ButtonComponent>
    </div>
  );
};

export default Home;
