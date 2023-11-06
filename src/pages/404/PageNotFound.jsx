import './style.scss'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
function PageNotFound (){
    console.log("page not found")
    return (
       
        <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </ContentWrapper>
        </div>
    );
}


export default PageNotFound;