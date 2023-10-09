interface IconBoxProps {
  iconClass: string;
  text: string;
}

const IconBox: React.FC<IconBoxProps> = ({ iconClass, text }) => {
  return (
    <div className="py-7 rounded-lg shadow-md text-center blueGrad2 group text-black">
      <i className={`${iconClass} text-5xl mb-2 text-black transition-all group-hover:text-white`} />
      <p className="secondaryFont transition-all group-hover:text-white text-2xl">{text}</p>
    </div>
  );
};

export default IconBox;
