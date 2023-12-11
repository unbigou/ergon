import { StarIcon } from "lucide-react";
import { useState } from "react";

type StarSelectProps = {
  handleStarChange: (star: string) => void;
};

const StarSelect = ({ handleStarChange }: StarSelectProps) => {
  const [stars, setStars] = useState<JSX.Element[]>([
    <StarIcon key={0} className="w-6 h-6 text-gray-400" />,
    <StarIcon key={1} className="w-6 h-6 text-gray-400" />,
    <StarIcon key={2} className="w-6 h-6 text-gray-400" />,
    <StarIcon key={3} className="w-6 h-6 text-gray-400" />,
    <StarIcon key={4} className="w-6 h-6 text-gray-400" />,
  ]);

  const changeStar = (index: number) => {
    const newStars = [...stars];
    for (let i = 0; i < 5; i++) {
      if (i < index) {
        newStars[i] = <StarIcon key={i} className="w-6 h-6 text-yellow-400" />;
      } else {
        newStars[i] = <StarIcon key={i} className="w-6 h-6 text-gray-400" />;
      }
    }
    setStars(newStars);
  };

  return (
    <div className="flex flex-row gap-1">
      {stars.map((star, index) => (
        <div
          key={index}
          onClick={() => {
            changeStar(index + 1);
            handleStarChange((index + 1).toString());
          }}
        >
          {star}
        </div>
      ))}
    </div>
  );
};

export default StarSelect;
