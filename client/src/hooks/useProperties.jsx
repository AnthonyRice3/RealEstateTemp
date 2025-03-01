import React from 'react'
import data from '../utils/accordion'
import { isError, useQuery } from 'react-query'
import { getAllProperties } from '../utils/api';

const useProperties = () => {

    const {data, isError, isLoading, refetch } = useQuery(
        "allProperties", 
        getAllProperties,
        { refetchOnWindowFocus: false } 
    );

  return {
    data, 
    isError, 
    isLoading, 
    refetch,
  };
};

export default useProperties