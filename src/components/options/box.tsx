interface IconBoxProps {
  iconClass: string;
  text: string;
}

const IconBox: React.FC<IconBoxProps> = ({ iconClass, text }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md text-center bg-white text-black">
      <i className={`${iconClass} text-2xl mb-2 text-black`} />
      <p>{text}</p>
    </div>
  );
};

export default IconBox;
