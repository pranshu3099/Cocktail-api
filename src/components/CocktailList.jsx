import { useGlobalContext } from "./Context";
import Cocktails from './Cocktails';
const CocktailList = ()=>{
    const {loading, Cocktails} = useGlobalContext();
    if(loading){
        return <h1>Loading...</h1>
    }
    if(Cocktails.length<1){
        return (
            <h2>
            no cocktails matched your search criteria
            </h2>
        )
    }
    return (
        <>
        <div>
           Cocktail List
        </div>
        </>
    )
}

export default CocktailList;