import React from 'react';
interface MainwrapperProps {
  children: React.ReactNode;
}
const Mainwrapper: React.FC<MainwrapperProps> = ({
  children,
}) => {
  return (
    <div className="container mx-auto p-5">{children}</div>
  );
};

export default Mainwrapper;
