import React from 'react'
import { useSelector } from 'react-redux';
import { SlCalender } from "react-icons/sl";
import { MdOutlineLocationOn } from "react-icons/md";
export default function About_this_post() {
          const {  user, isAuthenticated } = useSelector(
                    (state) => state.user
                  );
                 
                 function formatDate(dateString) {
                    const date = new Date(dateString);
                    const options = { year: 'numeric', month: 'long' }; // 'long' for full month name
                    return date.toLocaleDateString(undefined, options); // Locale 'undefined' to use default
                  }
  return (
          <React.Fragment>
          <div className="About_this_post ">
          <div className='text-center'><h5>About this account</h5></div>
          <hr />
          <div className='text-center'>
          <img  src={ user?.avatar[0]?.url ||
        "https://live.staticflickr.com/65535/49627006528_4eabfb3cdd_z.jpg"
      } width='70' height='70' className='rounded-circle'
      alt="" />
        <h6>entrepreneursonig</h6>
        <p className='text-secondary-emphasis' style={{fontSize: "0.8rem"}}>To help keep our community authentic, we're showing information about accounts on Instagram. <span><a href='#' className='text-decoration-none text-primary-emphasis' >See why thiss information is important</a></span> </p>
          </div>
          <div className="ms-2 mt-4">
          <div className="d-flex align-items-center ms-2" style={{fontSize: "0.9rem"}}>
            <SlCalender className="me-3 fw-semibold" />
            <div className="lh-sm">
              <p className="mb-1">Date joined</p> 
              <p className="mb-0 text-secondary">
                {user?.createdAt ? formatDate(user.createdAt) : "Date not available"}
              </p>
            </div>
    
          </div>
          <div className="d-flex mt-4 align-items-center ms-2" style={{fontSize: "0.9rem"}}>
            <MdOutlineLocationOn className="me-3 fw-semibold fs-5" />
            <div className="lh-sm"> 
              <p className="mb-1">Account based in </p> 
              <p className="mb-0 text-secondary">
                Not shared
              </p>
            </div>
          </div>
    
        </div>
        <hr />       
          </div>
    
        </React.Fragment>
  )
}
