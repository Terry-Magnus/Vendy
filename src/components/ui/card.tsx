type CardProps = {
  title: string;
  content: string;
  footer?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, content, footer }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{content}</p>
      {footer && <div className="border-t pt-2">{footer}</div>}
    </div>
  );
};

export default Card;
