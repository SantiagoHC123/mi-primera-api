
import './App.css'
import { useApi, ApiProvider } from './Contexto/ContextApi.jsx';



  const App = () => {
    const { data, loading,fetchRandomUser  } = useApi();

  return (
    <>
     <div className="ContenedorMain">
      <h1>Api para generar personas Random</h1>
      <div className='generador'>
      <img className='imagen' src='https://clipart-library.com/img1/1041723.png' />
      <img  className='imagen'  src='https://clipart-library.com/images_k/girl-silhouette-transparent/girl-silhouette-transparent-25.png' />
     
      </div>

      <div className='generador'>
      <button onClick={() => fetchRandomUser('male')}>Generar Hombre</button>
      <button onClick={() => fetchRandomUser('female')}>Generar Mujer</button>
      </div> 
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

