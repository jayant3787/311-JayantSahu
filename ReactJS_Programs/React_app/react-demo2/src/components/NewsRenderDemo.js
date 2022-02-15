import NewsItem from "./NewsItem";
import Button from "./Button";
import Loading from "./Loading";
import NewsItemsErrorBoundary from "./error-boundaries/NewsItemErrorBoundary";
const NewsRenderDemo = () =>{
    return(
        <div>
            <Button /><br/>
            <NewsItemsErrorBoundary>
            <NewsItem />
            </NewsItemsErrorBoundary>
            <br/>
            <Loading />
        </div>
    )

} 

export default NewsRenderDemo;