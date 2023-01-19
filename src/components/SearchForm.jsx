import { useGlobalContext } from "./Context";
const SearchForm = ()=>{
    const {setSearchTerm} = useGlobalContext();
    const handleSearch = (value)=>{
        setSearchTerm(value);
    }
    return (
        <>
        <div>
            <input type="text" placeholder="search cocktail" onChange={(e)=>{handleSearch(e.target.value)}}/>
        </div>
        </>
    )
}

export default SearchForm;