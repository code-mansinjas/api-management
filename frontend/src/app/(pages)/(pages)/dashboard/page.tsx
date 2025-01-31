import ParentComp from '@/app/components/ParentComp';
import Table from '@/app/components/Table';
import { fetchPost } from '@/app/services/fetchPost';
import { GetServerSideProps } from 'next';
import React from 'react'

const page = async () => {

  const data = await fetchPost()

  return (
    <>
      <div className='hello'>
        <div className="fluid-container">
          {/* Pagination Section */}
          <Table data={data}/>

          {/* Parent Children Rerender Behaviour */}
          <ParentComp/>

        </div>
      </div>
      <style>{`
      
    `}</style>
    </>
  )
}

export default page
