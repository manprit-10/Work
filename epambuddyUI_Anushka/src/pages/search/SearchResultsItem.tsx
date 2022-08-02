import mockData1 from "./dataInterface";
import attachLogo from "../../assests/attachment.svg";
import vidLogo from "../../assests/video.svg";
import likeLogo from "../../assests/like.svg";
import "./SearchResultsItem.css";

function SearchResultsItem(itemDetail: mockData1) {
  return (
    <div className="content-main">
      <div className="filter-links-container">
        {itemDetail.path.map((itemLink, index) => {
          return (
            <div key={index} className="filter-link">
              {(() => {
                if (index === itemDetail.path.length - 1) {
                  return <span className="filter-item">{itemLink}</span>;
                } else {
                  return (
                    <>
                      <span className="filter-item">{itemLink}</span>
                      <span className="brace">&nbsp;{">"}&nbsp; </span>
                    </>
                  );
                }
              })()}
            </div>
          );
        })}
      </div>
      <div className="question">{itemDetail.question}</div>
      <div className="answer">
        {itemDetail.answer} Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Tenetur tempore praesentium debitis sint ducimus repellat porro!
        Corporis consectetur nulla recusandae porro. Quo alias maxime est
        voluptas voluptates delectus iste voluptatem?
      </div>
      {(() => {
        if (itemDetail.icon === "video" || itemDetail.icon === "attachment") {
          return (
            <>
              <div className="article">
                <a className="article-link" href={itemDetail.link}>
                  Click Here to read the article
                </a>
                {(() => {
                  if (itemDetail.icon === "video") {
                    return (
                      <img
                        className="article-img"
                        src={vidLogo}
                        width="15px"
                        height="15px"
                        alt="Article Icon"
                      />
                    );
                  }
                  if (itemDetail.icon === "attachment") {
                    return (
                      <img
                        className="article-img"
                        src={attachLogo}
                        width="20px"
                        height="15px"
                        alt="Article Icon"
                      />
                    );
                  }
                })()}
              </div>
              <div className="time-likes">
                <span>{itemDetail.estimatedTime} mins read | </span>
                <img
                  src={likeLogo}
                  width="15px"
                  height="10px"
                  alt="Like Icon"
                />
                <span> {itemDetail.likes}</span>
              </div>
            </>
          );
        } else if (itemDetail.icon == "none") {
          return (
            <div className="link-list">
              <ul>
                <li>
                  <span>Handover Desk keys/ID: </span>
                  <a className="link-list-text" href="https://www.google.com/">
                    WFAAdministrativeIndia@epam.com
                  </a>
                </li>
                <li>
                  <span>Insuarance : Jyothi Kondapi : </span>
                  <a className="link-list-text" href="https://www.google.com/">
                    WFAAdministrativeIndia@epam.com
                  </a>
                </li>
              </ul>
            </div>
          );
        }
      })()}
    </div>
  );
}
export default SearchResultsItem;
