import NewsItem from "./NewsItem";
import Button from "./Button";
import Loading from "./Loading";
import NavBar from "./NavBar";
const NewsRenderDemo = () =>{
    return(
        <div>
            <NavBar />
            <Button /><br/>
            <NewsItem /><br/>
            <Loading />
        </div>
    )

} 

export default NewsRenderDemo;