import Accordian from "../Accordian";
import { useIsActive } from "../../../hooks/useIsActive";
export const MedicalBenefits = function () {
  const { isActive, clickHandler } = useIsActive();
  return (
    <>
      {Object.entries(data).map(function (medical) {
        const data = {
          title: medical[0],
          questions: medical[1],
          onClick: clickHandler,
          isActive,
        };
        return <Accordian key={medical[0]} accordionData={data} />;
      })}
    </>
  );
};

const data = {
  "Future Service Gratuity (FSG)": {
    Q127: {
      Q127: "What is coverage FSG?",
      A: "Below coverage for any unforeseen situation (Death), Below FSG will be paid to nominees as per declared in the nomination form. FSG is calculated from the date of death to retirement age i.e. 60 years. (Basic X 15)/26 * No. of years",
    },
  },
  "Group Personal Accident Coverage (GPA)": {
    Q128: {
      Q128: "What is coverage for GPA?",
      A: "Below coverage for any unforeseen situation (Death), Below covered amount will be paid to nominees as per declared in the nomination form. Level A1 to A4,B1 - INR 15 Lac Level A5, B2 & B3 - INR 25 lac Level B4 & above - INR 35 Lac",
    },
  },
  "Group Term": {
    Q129: {
      Q129: "What is coverage for GTLI?",
      A: "All associates are covered under Term Life Insurance for a minimum sum of INR 20 Lakhs or 3 times of yearly gross salary, whichever is higher. For ex: If the salary is 6 Lakhs per annum the coverage would be INR 20 Lakhs, if the salary per annum is 10 Lakhs the coverage shall be 30 Lakhs.",
    },
  },

  "Medical Insurance": {
    Q130: {
      Q130: "Am I covered from the date of joining ?",
      A: "Yes, self and family members will be covered from 1st day, and admission should be on/post the joining.",
    },
    Q131: {
      Q131: "Can I continue the insurance coverage if I resign from the company?",
      A: "The insurance contract is arranged by your employer for the benefit of the Associates. Associates who resign will not be able to continue enjoying these benefits.",
    },
    Q132: {
      Q132: "How can I claim my pre & post hospitalization expenses?",
      A: "The policy covers pre-hospitalization expenses made prior to 60 days of hospitalization and incurred towards the same illness/ disease due to which hospitalization happens. It also covers all medical expenses for up to 90 days post discharge as advised by the Medical Practitioner. All the bills with summary have to be submitted to ICICI Lombard.",
    },
  },
};
