import "./SearchResults.css";
import backbtn from "../../assests/backbtn.svg";
import { useState } from "react";
import SearchResultsItem from "./SearchResultsItem";
import contentData from "./dataInterface";
import { useNavigate, useParams } from "react-router-dom";
// Search Results

// Add comments wherever possible
function SearchResults() {
  let toggleArr = [true, false, false, false, false];
  const [isFilterActive, setIsFilterActive] = useState(toggleArr);
  const [prevFilter, setPrevFilter] = useState(0);
  const { searchedTopic } = useParams();
  const navigate = useNavigate();
  interface tagData {
    tag: String;
    numb: number;
  }

  let dataArr: contentData[] = [
    {
      path: ["Employee", "Benefits", "Compensation"],
      question: "what is benefit?",
      answer: "this is the answer",
      icon: "video",
      link: "https://www.google.com/",
      estimatedTime: "2",
      likes: "20",
    },
    {
      path: ["Manager", "Benefits", "Compensation"],
      question: "what is insuarance?",
      answer: "this is the answer2",
      icon: "attachment",
      link: "https://www.google.com/",
      estimatedTime: "5",
      likes: "25",
    },
    {
      path: ["Employee", "Benefits", "Compensation"],
      question: "what is healthcare?",
      answer: "this is the answer3",
      icon: "none",
      link: "none",
      estimatedTime: "3",
      likes: "30",
    },
    {
      path: ["Employee", "Benefits", "Compensation"],
      question: "How to avail mediclaim?",
      answer: "this is the answer4",
      icon: "none",
      link: "none",
      estimatedTime: "3",
      likes: "10",
    },
  ];

  var tagArr: tagData[] = [
    { tag: "All", numb: 4 },
    { tag: "Employee", numb: 3 },
    { tag: "Manager", numb: 1 },
    { tag: "Attachment", numb: 0 },
    { tag: "Video", numb: 0 },
  ];

  function tagClicked(id: number) {
    let tempDataArr = [...isFilterActive];
    tempDataArr[id] = true;
    tempDataArr[prevFilter] = false;
    setIsFilterActive(tempDataArr);
    setPrevFilter(id);
  }

  const backToHome = () => {
    navigate(`/`);
  };

  return (
    <div className="grid-container">
      <div className="grid-left">
        <div className="back-btn" onClick={backToHome}>
          <img
            className="back-btn-img"
            src={backbtn}
            width="20px"
            height="20px"
            alt="Back Button"
          />
        </div>
      </div>
      <div className="grid-right">
        <p className="quotes">
          You have 4 results for your keyword "{searchedTopic}"
        </p>
        <div className="tags-main">
          {tagArr.map((tagItem, index) => {
            return (
              <div key={index}>
                {(() => {
                  if (tagItem.numb > 0) {
                    return (
                      <div
                        className={
                          isFilterActive[index] ? "tags-active" : "tags "
                        }
                        onClick={(e) => tagClicked(index)}
                      >
                        <span className="tags-text">{tagItem.tag}</span>
                        <div className="tags-num">{tagItem.numb}</div>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className={
                          isFilterActive[index] ? "tags-active" : "tags "
                        }
                        onClick={(e) => tagClicked(index)}
                      >
                        <span className="tags-text">{tagItem.tag}</span>
                      </div>
                    );
                  }
                })()}
              </div>
            );
          })}
        </div>
        {dataArr.map((itemDetail, index) => {
          if (index === dataArr.length - 1)
            return (
              <>
                <SearchResultsItem
                  key={index}
                  {...itemDetail}
                ></SearchResultsItem>
              </>
            );
          else {
            return (
              <>
                <SearchResultsItem
                  key={index}
                  {...itemDetail}
                ></SearchResultsItem>
                <hr className="h-lines"></hr>
              </>
            );
          }
        })}
      </div>
    </div>
  );
}
export default SearchResults;
