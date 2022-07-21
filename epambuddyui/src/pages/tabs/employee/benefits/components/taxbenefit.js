import Accordian from "../Accordian";
import { useIsActive } from "../hooks/useIsActive";
export const TaxBenefits = function () {
  const { isActive, clickHandler } = useIsActive();

  return Object.entries(data).map(function (taxbenefits) {
    return (
      <Accordian
        key={taxbenefits[0]}
        title={taxbenefits[0]}
        questions={taxbenefits[1]}
        onClick={clickHandler}
        isActive={isActive}
      />
    );
  });
};
const data = {
  "Zaggle Card": {
    Q189: {
      Q189: "Can I use my Meal wallet to buy items other than food and non-alcoholic beverages?",
      A: "No, by law, your meal vouchers are to be used for the purchase of food and non-alcoholic beverages only.",
    },
    Q190: {
      Q190: "Can you help share more details about the Zaggle app?",
      A: "Zaggle app is available both on Android & iOS. You will read the app as ‘Zaggle – Finance & Business’. Please use same credentials to login as given by EPAM for account creation.",
    },
    Q191: {
      Q191: "How can I activate and link my zaggle card?",
      A: "Zaggle will activate & link your card as per the employee details given by EPAM team, once the card is activated, you will be able to view your card",
    },
    Q192: {
      Q192: "How do I connect with Zaggle customer care",
      A: "Zaggle will also conduct virtual & physical help desk on monthly frequency as per the request from Epam to clarify employee queries. Use Zaggle Mobile App which is integrated with WhatsApp, employee can directly raise their concern. Dial in to the customer care number 18605001231, Mon - Fri 10 AM to 7 PM. Email ID is care@zaggle.in",
    },
    Q193: {
      Q193: "How do I create an account with Zaggle?",
      A: "Download Zaggle app available in App store or Play store, which is read as ‘Zaggle-Finance & Business’. Create an account by signing-up with your corporate email ID (@epam.com), after setting the password, login.",
    },
    Q194: {
      Q194: "How do I get my Zaggle Meal wallet loaded",
      A: "Step 1. Register for Zaggle account by reaching out to Jyothi Kondapi. Step 2: Download Zaggle app available in App store or Play store, which is read as ‘Zaggle-Finance & Business’. Create an account by signing-up with your corporate email ID (@epam.com), after setting the password, login. On the homepage, go to my account and under ‘Upload full KYC’ submit the self-attested KYC documents. Once you submit your self-attested KYC document you will receive your card in 7-10 working days. This card will be activated by Zaggle after they dispatch the card. Step 3: Declare Food coupons in Hrberry portal whose access is given after your first salary is credited. Only after you declare amount for this allowance, you will start receiving credit in your Zaggle card",
    },
    Q195: {
      Q195: "How do I make sure that I get my Meal wallet on time and regularly",
      A: "You only need to make sure that you have verified your official email ID to enjoy the experience seamlessly. This is a one-time activity and the disbursal of credits to your account will happen as per dates scheduled by Epam.",
    },
  },
  NPS: {
    Q212: {
      Q212: "How do I open Pran account?",
      A: "You can follow the instructions as provided in the Kb page. Click Here",
    },
    Q213: {
      Q213: "How to declare NPS contribution and update Pran number?",
      A: "Please login to Hrberry portal and update your details under NPS Tab",
    },
  },
};
