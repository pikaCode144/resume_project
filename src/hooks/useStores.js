import React from 'react';
import { storesContext } from '@/stores';

export const useStores = () => {
  return React.useContext(storesContext);
};
