import { Link } from "react-router-dom"

const Hero = () => {
  return (



    <>
      {/* <h1>Goverment Tenders</h1>
        <h3>
          We try to provide all Tenders in Pakistan with accurate category for free or also Subscribe to recieve Tenders in your inbox
        </h3> */}

      <div className="container hero-height">

        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-8  col-12 d-flex flex-column gap-4">
            <h1 className="text-center fw-bolder display-4">Goverment Tenders</h1>
            <p className="text-center fw-bold">
              We try to provide all Tenders in Pakistan with accurate category for free or also Subscribe to recieve Tenders in your inbox
            </p>
            <div className="text-center ">
              <Link className="btn theme-color btn-outline-success rounded-pill text-decoration-none text-white">View Tenders</Link>
            </div>
          </div>


        </div>
      </div>
    </>


  )
}

export default Hero