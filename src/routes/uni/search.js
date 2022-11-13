import SearchBar from "../../components/search/search_bar.component";
import RadioGroup from "../../components/search/radio_group.component.js";
import UniversityList from "../../components/uni/connectUni";
import "./studHome.css"

const Search = () => {

    return (  
        <>
            <div className=' bg-gray-100 min-h-screen'>
                <div className="mr-10">
                    <SearchBar></SearchBar>
                    <RadioGroup></RadioGroup>  
                </div>
                <UniversityList />
            </div>       
        </>
    );
}
 
export default Search;