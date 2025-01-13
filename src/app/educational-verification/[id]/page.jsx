'use client'
 
import { useParams } from 'next/navigation'
const page = () => {
  const params = useParams();
  const pageId = params?.id;
  return (
    <div>
      This page is for educatinal verification page {pageId}
    </div>
  )
}

export default page
