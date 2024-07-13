import { CreditCardIcon } from "@/components/icons/credit-card";
import Entertainment from "@/components/icons/entertainment";
import HomeIcon from "@/components/icons/home";
import SettingsIcon from "@/components/icons/settings";
import ShoppingBag from "@/components/icons/shopping-bag";
import TransactionsIcon from "@/components/icons/transactions";
import { PaymentTransfer, Transfer } from "@/components/icons/transfer";
import Transportation from "@/components/icons/transportation";
import Utensils from "@/components/icons/utensils";

export const sidebarLinks = [
  {
    route: "/",
    Component: HomeIcon,
    label: "Dashboard",
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
    route: "/transactions",
    Component: TransactionsIcon,
    label: "Transactions",
  },
  {
    route: "/credit-cards",
    Component: CreditCardIcon,
    label: "Credit Cards",
  },
  {
    route: "/payment-transfer",
    Component: PaymentTransfer,
    label: "Payment Transfer",
  },
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
  {
    imgURL: "/images/settings.svg",
    route: "/settings",
    Component: SettingsIcon,
    label: "Settings",
  },
];

export const transactionCategoryStyles = {
  ENTERTAINMENT: {
    borderColor: "border-yellow-600",
    backgroundColor: "bg-yellow-600",
    textColor: "text-yellow-700",
    chipBackgroundColor: "bg-inherit",
  },
  FOOD_AND_DRINK: {
    borderColor: "border-blue-600",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-inherit",
  },
  LOAN_PAYMENTS: {
    borderColor: "border-green-600",
    backgroundColor: "bg-green-600",
    textColor: "text-green-700",
    chipBackgroundColor: "bg-inherit",
  },
  BANK_FEES: {
    borderColor: "border-success-600",
    backgroundColor: "bg-green-600",
    textColor: "text-success-700",
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
  Transfer: {
    borderColor: "border-orange-700",
    backgroundColor: "bg-orange-700",
    textColor: "text-orange-700",
    chipBackgroundColor: "bg-inherit",
  },
  TRANSPORTATION: {
    borderColor: "border-purple-600",
    backgroundColor: "bg-purple-500",
    textColor: "text-purple-700",
    chipBackgroundColor: "bg-inherit",
  },
  TRAVEL: {
    borderColor: "border-green-600",
    backgroundColor: "bg-green-500",
    textColor: "text-green-700",
    chipBackgroundColor: "bg-inherit",
  },
  default: {
    borderColor: "",
    backgroundColor: "bg-blue-500",
    textColor: "text-blue-700",
    chipBackgroundColor: "bg-inherit",
  },
};

export const topCategoryStyles = {
  ENTERTAINMENT: {
    bg: "bg-yellow-25",
    circleBg: "bg-yellow-100",
    text: {
      main: "text-yellow-800",
      count: "text-yellow-600",
    },
    progress: {
      bg: "bg-yellow-100",
      indicator: "bg-yellow-600",
    },
    Icon: Entertainment,
  },
  FOOD_AND_DRINK: {
    bg: "bg-blue-25",
    circleBg: "bg-blue-100",
    text: {
      main: "text-blue-900",
      count: "text-blue-700",
    },
    progress: {
      bg: "bg-blue-100",
      indicator: "bg-blue-700",
    },
    Icon: Utensils,
  },
  LOAN_PAYMENTS: {
    bg: "bg-pink-25",
    circleBg: "bg-pink-100",
    text: {
      main: "fill-pink-900",
      count: "text-pink-700",
    },
    progress: {
      bg: "bg-pink-100",
      indicator: "bg-pink-700",
    },
    Icon: Transfer,
  },
  Transfer: {
    bg: "bg-orange-25",
    circleBg: "bg-orange-100",
    text: {
      main: "fill-orange-700",
      count: "text-orange-700",
    },
    progress: {
      bg: "bg-orange-100",
      indicator: "bg-orange-700",
    },
    Icon: Transfer,
  },
  TRANSPORTATION: {
    bg: "bg-purple-25",
    circleBg: "bg-purple-100",
    text: {
      main: "text-purple-900",
      count: "text-purple-700",
    },
    progress: {
      bg: "bg-purple-100",
      indicator: "bg-purple-700",
    },
    Icon: Transportation,
  },
  TRAVEL: {
    bg: "bg-green-25",
    circleBg: "bg-green-100",
    text: {
      main: "text-green-900",
      count: "text-green-700",
    },
    progress: {
      bg: "bg-green-100",
      indicator: "bg-green-700",
    },
    Icon: Transportation,
  },
  default: {
    bg: "bg-pink-25",
    circleBg: "bg-pink-100",
    text: {
      main: "text-pink-900",
      count: "text-pink-700",
    },
    progress: {
      bg: "bg-pink-100",
      indicator: "bg-pink-700",
    },
    Icon: ShoppingBag,
  },
};
