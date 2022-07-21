import "./Accordian.css";

const Accordian = (props) => {
  const getContent = function (data) {
    return Object.entries(data).map(function (item) {
      // console.log(item);
      return (
        <li key={item}>
          <p className="questions">
            {item[0]} : {item[1][item[0]]}
          </p>
          <p>A : {item[1]["A"]}</p>
        </li>
      );
    });
  };

  return (
    <div className="wrapper">
      <div className="accordian">
        <div className="item">
          <div className="title">
            {/* <span>{select === index ? "-" : "+"}</span> */}
            <h2>{props.title}</h2>
          </div>
          {/* <div className={select === index ? "content show" : "content"}> */}
          <div className="content show">
            <hr></hr>
            <ul className="questions-list">{getContent(props.questions)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// const data = [
//   {
//     id: 1,
//     question: "Breavement leave",
//     answer: {
//       Q17: {
//         Q17: "Are Bereavement leaves carried forward to next year?",
//         A: "No carry forward to next calendar year",
//       },
//       Q18: {
//         Q18: "Can Bereavement leave be accumulated?",
//         A: "Bereavement leave will not be accumulated or carried forward, if not utilized.",
//       },
//       Q19: {
//         Q19: "Can Bereavement leave be carried forwarded?",
//         A: "Bereavement leave will not be accumulated or carried forward, if not utilized.",
//       },
//       Q20: {
//         Q20: "Can Bereavement leave be clubbed with other types of leave?",
//         A: "Bereavement leaves can be clubbed with weekly offs/ Mandatory holidays/Optional holidays/ Open optional holiday/ Unused paid leave balance based on the time of the incident.",
//       },
//       Q21: {
//         Q21: "Can Bereavement leave be used later?",
//         A: "Bereavement leave will not be accumulated or carried forward, if not utilized.",
//       },
//     },
//   },
//   {
//     id: 2,
//     question: "Casual Leaves",
//     answer: {
//       Q37: {
//         Q37: "Can I carry forward Casual Leaves",
//         A: "No, Casual leaves can not be carried forward",
//       },
//       Q38: {
//         Q38: "Casual Leave is not rolled over to the next year. Is it compensated in case of relocation/dismissal in the current year",
//         A: "Yes, it is not rolled over to next year. Yes, it should be compensated in case of relocation/dismissal in the current year the result leads to negative balance only.",
//       },
//       Q46: {
//         Q46: "What is a Casual Leave",
//         A: "The purpose of providing Casual Leaves (CL) is to accommodate any urgent/ unforeseen personal requirements as against EL being planned leaves.",
//       },
//       Q47: {
//         Q47: "Which types of employees are eligible to submit the CL request?",
//         A: "All employees in India are eligible to submit CL requests, excluding Part Time employees",
//       },
//     },
//   },
//   {
//     id: 3,
//     question: "Earned Leaves",
//     answer: { Q48: "Hello" },
//   },
//   {
//     id: 4,
//     question: "Holiday Calendar",
//     answer: { Q49: "Hello" },
//   },
// ];

export default Accordian;
