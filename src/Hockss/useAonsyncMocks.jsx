import { useEffect, useState } from 'react'

const useAonsyncMoxks = (mock) => {

  const [data, setData] = useState();
  const [loading, setlaoding] = useState(true);

  const newMockPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(mock) 
    }, 1000);
  })

   useEffect(()=>{

    newMockPromise.then((res)=>{setData(res), setlaoding(false)})

   }, [])

  return {data, loading}
}

export default useAonsyncMoxks