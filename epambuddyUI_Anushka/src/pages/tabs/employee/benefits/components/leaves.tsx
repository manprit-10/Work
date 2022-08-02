import { useIsActive } from "../../../hooks/useIsActive";
import Accordian from "../Accordian";

export const Leaves = function () {
  const { isActive, clickHandler } = useIsActive();

  return (
    <>
      {Object.entries(data).map(function (leave) {
        const data = {
          title: leave[0],
          questions: leave[1],
          onClick: clickHandler,
          isActive,
        };
        return <Accordian key={leave[0]} accordionData={data} />;
      })}
    </>
  );
};

const data = {
  "Bereavement Leaves": {
    Q17: {
      Q17: "Are Bereavement leaves carried forward to next year",
      A: "No carry forward to next calendar year",
    },
    Q18: {
      Q18: "Can Bereavement leave be accumulated?",
      A: "Bereavement leave will not be accumulated or carried forward, if not utilized.",
    },
    Q19: {
      Q19: "Can Bereavement leave be carried forwarded?",
      A: "Bereavement leave will not be accumulated or carried forward, if not utilized.",
    },
    Q20: {
      Q20: "Can Bereavement leave be clubbed with other types of leave?",
      A: "Bereavement leaves can be clubbed with weekly offs/ Mandatory holidays/Optional holidays/ Open optional holidays/ Unused paid leave balance based on the time of the incident.",
    },
    Q21: {
      Q21: "Can Bereavement leave be used later?",
      A: "Bereavement leave will not be accumulated or carried forward, if not utilized.",
    },
  },
  "Casual Leaves": {
    Q37: {
      Q37: "Can I carry forward Casual Leaves",
      A: "No, Casual leaves cannot be carried forward",
    },
    Q38: {
      Q38: "Casual Leave is not rolled over to the next year. Is it compensated in case of relocation/dismissal in the current year",
      A: "Yes, it is not rolled over to next year. Yes, it should be compensated in case of relocation/dismissal in the current year the result leads to a negative balance only",
    },
    Q39: {
      Q39: "How many Casual leaves are credited",
      A: "6 casual leaves are credited per year. For new joiners in the middle of the year, it will be credited on prorate basis. For details, pls follow. ",
    },
    Q40: {
      Q40: "How many Casual leaves can be availed at one stretch",
      A: "You can avail 2 CLs at a stretch",
    },
  },
  "Earned Leaves": {
    Q48: {
      Q48: "Can I adjust my unused leaves against my notice period?",
      A: "Un-utilized leaves cannot be adjusted against the notice period",
    },
    Q49: {
      Q49: "Can I encash Earned leaves",
      A: "No encashment applies for lapsed leaves.",
    },
    Q50: {
      Q50: "How are leaves encashed?",
      A: "All EPAM India permanent associates will be entitled to en-cash his/her Earned leave only at the time of cessation of service. Un-utilized leaves cannot be adjusted against the notice period. The leave encashment is calculated as mentioned below: · Leave Encashment calculation effective 1st April 2010 · Last Drawn Basic Salary per month x No. of Days to be en-cashed / 26 · A maximum of 60 Leaves can be accumulated for encashment. · The leaves accumulated during the year of separation, shall be treated as overall eligibility until then.",
    },
    Q51: {
      Q51: "How are the Earned Leaves (EL) credited as our leave balance?",
      A: "All the 15 days of Earned Leaves per year will be available in advance and reflected on the vacation portal at the start of the year for existing associates and on a prorated basis for associates joining during the year, on their start date, as explained below in the use case(s).",
    },

    Q52: {
      Q52: "I joined in the middle of the year, how will my leaves be credited",
      A: "It will be credited on pro-rata basis please refer to the link Click Here",
    },
    Q53: {
      Q53: "What is Earned Leaves",
      A: "This leave type is called Earned Leave because you earn these leaves for days worked on a progressive basis. The EL is typically used for personal reasons such as planned holidays, observing festivals that are not declared holidays, etc.",
    },
  },
  "Holiday Calendar": {
    Q57: {
      Q57: "How many holidays are there in EPAM",
      A: "Associates based out of Hyderabad, Pune, Bengaluru, NCR, and Chennai locations can avail 9 mandatory holidays.",
    },
    Q58: {
      Q58: "I am working at a client location; will my holidays get impacted?",
      A: "Associates working out of client locations shall follow the client holiday calendar.",
    },
    Q59: {
      Q59: "Where can I see the Holiday calendar?",
      A: "You can follow the link/ page Click Here",
    },
  },
  "Maternity Leaves": {
    Q60: {
      Q60: "Can we extend Maternity leaves",
      A: "Women EPAMers can extend their maternity leave post paid maternity leave for maximum period of 3 months. They can utilize regular vacation which is then followed by Leave without Pay.",
    },
    Q61: {
      Q61: "I have joined recently in EPAM, can I avail maternity leaves",
      A: "Female associates should have completed 80 days of continuous service with the company are eligible for Maternity Leave",
    },
    Q63: {
      Q63: "What is policy for Maternity leaves",
      A: "Women EPAMer shall be entitled to maternity benefits as provided under Maternity Benefit Act (Amended) 2017 in effect from April 1, 2017. All female EPAMers on confirmed employment who are not covered under the ESI Act, 1948 and have completed 80 days of continuous service with the company are eligible for Maternity Leave. Female EPAMers are entitled for Maternity leave of Twenty-six weeks (inclusive of weekly offs and other paid holidays of which not more than eight weeks shall precede the date of child’s expected delivery date.",
    },
    Q64: {
      Q64: "What is the procedure to avail Extended maternity leaves",
      A: "EPAMer should inform Reporting Manger, Practice Manager/ Practice Head and HR Business Partner at least 2 weeks in advance and seek approval over email.",
    },
  },
};
