import Accordian from "../Accordian";

export const Recognition = function () {
  return Object.entries(data).map(function (recognition) {
    return (
      <Accordian
        key={recognition[0]}
        title={recognition[0]}
        questions={recognition[1]}
      />
    );
  });
};

const data = {
  "Birthday": {
    Q155: {
      Q155: "Where should I update my Birthday to get the gift points ?",
      A: "You need to update the Birthday on UPSA. Please Click Here",
    },
    Q156: {
      Q156: "How many gift points will I get on my Birthday?",
      A: ": INR 500 will be credited",
    },
  },
  "Pat On Back": {
    Q157: {
      Q157: "When will I get the POB amount ?",
      A: "In 3 to 5 working days time",
    },
    Q158: {
      Q158: "How many gift points will I get for POB?",
      A: "INR 1000 will be credited",
    },
    Q159: {
      Q159: "To which account these points will be added",
      A: "Points will be added to Zaggle gift account",
    },
    Q160: {
      Q160: "Where and how will I get my POB reward?",
      A: "If you have been nominated for POB, you will receive a mail trigger from Heroes and the badge name is Pat on the Back",
    },
  },
  "Service Anniversary": {
    Q162: {
      Q162: "When will I get the gift points for Service Anniversary ?",
      A: "You will get the gift points INR 2500 on completion of 5 years, 10 years,15 years and 20 years tenure with EPAM",
    },
    Q163: {
      Q163: "To which account these points will be added",
      A: "Points will be added to Zaggle gift account",
    },
    Q164: {
      Q164: "Will I get any Gift along with gift points ?",
      A: "Yes, Memento will be received once you reach Service Milestone",
    },
    Q165: {
      Q165: "Will I get any Gift every year?",
      A: "No",
    },
  },
};
