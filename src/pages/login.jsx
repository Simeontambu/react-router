import {useNavigate} from "react-router-dom";

export default function Login() {

   const navigate = useNavigate();
   const handleClick = () => {
       navigate('/home');
   }

   return (
       <>
           <h1>Login</h1>

           <button onClick={handleClick}>
               Connexion
           </button>
       </>
   );
}
