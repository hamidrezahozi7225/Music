import React, { useState } from 'react';

export const contextProvider = React.createContext(null);

const Context = ({ children }: any) => {
  const [value, setValue] = useState({ data: 'ali' });

  return (
    <contextProvider.Provider value={{ value, setValue }}>
      {children}
    </contextProvider.Provider>
  );
};

export default Context;
