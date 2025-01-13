'use client'
 
import { useParams } from 'next/navigation'
// import { useEffect } from 'react';
const page = () => {
  const params = useParams();
  const pageId = params?.id;

  return (
    <div>
        This is Comapmy page {pageId}   
    </div>
  )
}

export default page
