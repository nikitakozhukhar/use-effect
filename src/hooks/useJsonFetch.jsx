import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../src/App'
import  getAvatarUrl from '../components/utilits/getAvatarUrl'

import { REACT_APP_PROFILES_DATA_URL } from '../../src/url'

export function  useJsonFetch({ url, initialData, dataName }) {

  const { setIsLoading } = useContext(DataContext);
  const [data, setData] = useState(initialData);
  const fetchController = new AbortController();
 

  useEffect(() => {
    const fetchData = async () => {

      setIsLoading((prevValue) => ({...prevValue, [dataName]: true}));

      try {
        const response = await fetch(REACT_APP_PROFILES_DATA_URL + url, { signal: fetchController.signal })
        if (!response.ok) {
          throw new Error(`${response.url} ${response.status}`);
        }
        const data = await response.json();
      
        if (data.avatar) data.avatar = getAvatarUrl(data.avatar);
        setData(data)
        
        setIsLoading((prevValue) => ({...prevValue, [dataName]: false}));
      } catch(err) {
        console.log(`error from useFetch: `, err.message)
        if (err.name !== 'AbortError') {
          setIsLoading((prevValue) => ({...prevValue, [dataName]: false}));
        }
      }
    }
    fetchData()

  
  }, [url])
  
  return {data, fetchController }
}