import '../../data/techstackData.json';

export default function TechList() {

  //ver como filtrar itens do json, talvez criar um map pra retornar uma lista feita
 
  return(
    <div className='tech-container'>
      <img src={icon} alt="" />
      <p>{name}</p>
    </div>
  )
}