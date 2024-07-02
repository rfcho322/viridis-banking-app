import CreditCardIcon from "@/components/icons/credit-card";
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
