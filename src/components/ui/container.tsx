type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-screen flex items-center justify-center bg-gray-100 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
