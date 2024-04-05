import { Link } from "react-router-dom"
const Message = ()=>{
   return (
      <div className="container mt-4 ">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-8 col-md-10 col-12">
                    <div className="card border-0 bg-light">
                        <div className="card-header bg-transparent border-0">
                            <Link to="/dashboard" className="text-decoration-none">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                            </Link>
                        </div>
                        <div className="card-body text-center">
                            <h5 className="font-weight-bold mb-4">No any messages</h5>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>


   )
}
export  default Message