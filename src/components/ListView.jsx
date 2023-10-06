import { useSelector } from "react-redux";
import SideDetail from "./SideDetail";
import { useState } from "react";

const ListView = () => {
  const {flights} = useSelector((store)=>store.reducer)
  const [showDetails, setShowDetails] = useState(false);
  const [detailId, setDetailId] = useState();
  const handleClick=(id)=>{
    setDetailId(id)
    setShowDetails(true)
  }
  return <div className="text-light p-4">
    <h2 className="">{flights.length} uçuş bulundu: </h2>
    <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Uçuş Kodu</th>
      <th scope="col">Kuyruk Kodu</th>
      <th scope="col">Enlem</th>
      <th scope="col">Boylam</th>
      <th scope="col">İşlemler</th>
    </tr>
  </thead>
  
  <tbody>
  {flights.map((plane)=>(
    <tr key={plane.id}>
    <th scope="row">{plane.id}</th>
    <td>{plane.code}</td>
    <td>{plane.lat}</td>
    <td>{plane.lng}</td>
    <td>
      <button onClick={()=>handleClick(plane.id)}>Detay</button>
    </td>
  </tr>
    ))}
    
  </tbody>
</table>
{
  showDetails && (<SideDetail detailId={detailId} setShowDetails={setShowDetails}/>)
}
  </div>;
};

export default ListView;
