const Services: React.FC<{
  icon: React.ReactNode;
  color: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
}> = ({ icon, color, title, titleEs, description, descriptionEs }) => {
  return (
    <div
      className=" text-white flex flex-col items-start
    justify-center
    max-w-sm
    mx-auto
    transition
    duration-500
    ease-in-out
    transform
    hover:scale-105
    rounded-xl
    shadow-xl
    p-8
    bg-gray-800
    border
   border-gray-700
    dark:hover:border-gray-600
    hover:shadow-xl
    dark:hover:shadow-xl
    "
    >
      <div
        className={`text-4xl ${color} transition duration-300 transform hover:scale-110`}
      >
        {icon}
      </div>
      <h3 className="mt-2 text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-gray-200">{description}</p>
    </div>
  );
};

export default Services;
