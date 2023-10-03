"use client";

type JobDetailItemMiniProps = {
  property: string;
  value: string | number;
};

const JobDetailItemMini = ({ property, value }: JobDetailItemMiniProps) => {
  return (
    <div className="flex gap-2 mb-1 items-center">
      <span className="font-medium text-xl min-w-[200px]">{property}</span>
      <span className="px-4 py-1 bg-input-bg text-gray-dark text-lg">{value}</span>
    </div>
  );
};

export default JobDetailItemMini;
