import { useGlobalContext } from "./Context";
import Cocktails from './Cocktails';
const CocktailList = ()=>{
    const {loading, cocktails} = useGlobalContext();
    if(loading){
        return <h1>Loading...</h1>
    }
    if(cocktails.length<1){
        return (
            <h2>
            no cocktails matched your search criteria
            </h2>
        )
    }
    return (
        <>
        <div>
          <h2>Cocktails</h2>
          <div>
            {cocktails.map((item)=>{
                return <Cocktails key={item.id} {...item}/>
            })}
          </div>
        </div>
        </>
    )
}

export default CocktailList;