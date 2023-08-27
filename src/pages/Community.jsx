import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Community = () => {
  return (
    <div className='d-flex' style={{backgroundColor:"#F7FDFF", flexDirection:"column"}}>

        <div className='d-flex community-heading' style={{padding:"100px" ,flexDirection:"column"}}>
            <h1
              className=" fst-italic fs-1 fs-md-1 mb-4"
              style={{ fontWeight: "700" }}
            >
              Your <span style={{ color: "#0096C8" }}>hobby,</span> <t />
              Your <span style={{ color: "#8064A2" }}>Community...</span>
            </h1>
            <Link
              href="#"
              className="btn btn-primary"
              style={{
                backgroundColor: "#8064a2",
                width:"fit-content"
              }}
            >
              Get Started
            </Link>
        </div>
        <div className='community-img relative mobile-margin' style={{height:"40vh", margin : "0 100px"}}>
            <Image src="/community.png" alt='' fill style={{objectFit:"contain"}}/>
        </div>
    </div>
  )
}

export default Community