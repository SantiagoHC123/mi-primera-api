
import './App.css'
import { useApi, ApiProvider } from './Contexto/ContextApi.jsx';



  const App = () => {
    const { data, loading,fetchRandomUser  } = useApi();

  return (
    <>
     <div className="Contenedor">
      <h1>Api para generar personas Random</h1>
      <button onClick={() => fetchRandomUser('male')}>Generar Hombre</button>
        <button onClick={() => fetchRandomUser('female')}>Generar Mujer</button>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        
        <div>
          
          {data.map((user) => (
            
            <p key={user.id}>
              <img src={user.picture.large} /> <br />
              {user.name.first} {user.name.last} 
            </p>
          ))}
        </div>
      )}
    </div>
    </>
  )
}
const LLamadoApiContext = () => {
  return (
    <ApiProvider>
      <App />
    </ApiProvider>
  );
};

export default LLamadoApiContext;

