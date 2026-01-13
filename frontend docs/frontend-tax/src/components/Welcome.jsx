import { DollarSign, BookOpen, Building, TrendingUp } from "lucide-react";
import {
  cn,
  getTextColor,
  getBgColor,
  getBorderColor,
} from "../utils/classNames";

const Welcome = ({ onCardClick, isDarkMode = false }) => {
  const cards = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title:
        "Do I have to pay tax on my cryptocurrency profits and will my crypto transactions be monitored?",
      description:
        "Cryptocurrency taxation requirements and transaction monitoring.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title:
        "How will the new VAT and digital compliance requirements affect businesses?",
      description:
        "Electronic fiscal systems and digital compliance requirements.",
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Company Income Tax",
      description: "Summary of rate changes for small businesses.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Will I have to pay tax on my freelance work and digital income?",
      description:
        "Taxation of freelance work and digital income.",
    },
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
      <h2 className={cn("text-4xl font-bold mb-4", getTextColor(isDarkMode))}>
        Nigeria Tax Reform Q&A
      </h2>
      <p
        className={cn(
          "text-center max-w-2xl mb-12",
          getTextColor(isDarkMode, "text-gray-600", "text-gray-400")
        )}
      >
        Your intelligent assistant for understanding the 2024 tax reform bills.
        Ask about exemptions, new levies, VAT changes, or personal income tax
        implications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => onCardClick && onCardClick(card)}
            className={cn(
              "rounded-xl p-6 hover:shadow-md transition-shadow cursor-pointer group border",
              getBgColor(isDarkMode, "bg-white", "bg-gray-800"),
              getBorderColor(isDarkMode),
              isDarkMode && "hover:border-gray-600"
            )}
          >
            <div
              className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors",
                getBgColor(isDarkMode, "bg-gray-100", "bg-gray-700"),
                isDarkMode
                  ? "group-hover:bg-green-900/30"
                  : "group-hover:bg-green-50"
              )}
            >
              <div
                className={cn(
                  "transition-colors",
                  getTextColor(isDarkMode, "text-gray-600", "text-gray-400"),
                  isDarkMode
                    ? "group-hover:text-green-500"
                    : "group-hover:text-green-600"
                )}
              >
                {card.icon}
              </div>
            </div>
            <h3
              className={cn(
                "text-lg font-semibold mb-2",
                getTextColor(isDarkMode)
              )}
            >
              {card.title}
            </h3>
            <p
              className={cn(
                "text-sm",
                getTextColor(isDarkMode, "text-gray-600", "text-gray-400")
              )}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
