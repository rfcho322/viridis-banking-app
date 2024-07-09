import { CreditCardIcon } from "@/components/icons/credit-card";
import HomeIcon from "@/components/icons/home";
import TransactionsIcon from "@/components/icons/transactions";

export const sidebarLinks = [
  {
    imgURL: "/images/home.svg",
    route: "/",
    Component: HomeIcon,
    label: "Dashboard",
  },
  {
    imgURL: "/images/transaction.svg",
    route: "/transactions",
    Component: TransactionsIcon,
    label: "Transactions",
  },
  // {
  //   imgURL: "/images/user.svg",
  //   route: "/accounts",
  //   Component: HomeIcon,
  //   label: "Accounts",
  // },
  // {
  //   imgURL: "/images/investment.svg",
  //   route: "/investments",
  //   Component: HomeIcon,
  //   label: "Investments",
  // },
  {
    imgURL: "/images/credit-card.svg",
    route: "/credit-cards",
    Component: CreditCardIcon,
    label: "Credit Cards",
  },
  // {
  //   imgURL: "/images/loan.svg",
  //   route: "/loans",
  //   Component: HomeIcon,
  //   label: "Loans",
  // },
  // {
  //   imgURL: "/images/service.svg",
  //   route: "/services",
  //   Component: HomeIcon,
  //   label: "Services",
  // },
  // {
  //   imgURL: "/images/privilege.svg",
  //   route: "/my-privileges",
  //   Component: HomeIcon,
  //   label: "My Privileges",
  // },
  // {
  //   imgURL: "/images/settings.svg",
  //   route: "/settings",
  //   Component: HomeIcon,
  //   label: "Settings",
  // },
];

export const transactionCategoryStyles = {
  FOOD_AND_DRINK: {
    borderColor: "border-pink-600",
    backgroundColor: "bg-pink-500",
    textColor: "text-pink-700",
    chipBackgroundColor: "bg-inherit",
  },
  LOAN_PAYMENTS: {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  BANK_FEES: {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
    chipBackgroundColor: "bg-inherit",
  },
  TRANSFER: {
    borderColor: "border-red-700",
    backgroundColor: "bg-red-700",
    textColor: "text-red-700",
    chipBackgroundColor: "bg-inherit",
  },
  Processing: {
    borderColor: "border-[#F2F4F7]",
    backgroundColor: "bg-gray-500",
    textColor: "text-[#344054]",
    chipBackgroundColor: "bg-[#F2F4F7]",
  },
  Success: {
    borderColor: "border-[#12B76A]",
    backgroundColor: "bg-[#12B76A]",
    textColor: "text-[#027A48]",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  TRAVEL: {
    borderColor: "border-[#0047AB]",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-[#ECFDF3]",
  },
  default: {
    borderColor: "",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-inherit",
  },
};
