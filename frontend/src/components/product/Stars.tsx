import { StarIcon } from "lucide-react";

type StarsProps = {
  number: string;
};

const Stars = ({ number }: StarsProps) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < parseInt(number)) {
      stars.push(<StarIcon key={i} className="w-6 h-6 text-yellow-400" />);
    } else {
      stars.push(<StarIcon key={i} className="w-6 h-6 text-gray-400" />);
    }
  }
  return (
    <div className="flex flex-row gap-1">
      {stars.map((star, index) => (
        <div key={index}>{star}</div>
      ))}
    </div>
  );
};

export default Stars;
