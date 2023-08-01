import { Link } from "react-router-dom";



const Redirect = () => {
    return ( 
        <div className=" flex flex-col justify-center items-center p-10 ">
            <div className="space-y-3">
                <p className="font-bold text-xl">Sorry this Web App is still yet to be lunched</p>
                <p className="text-lg font-medium">You can't see it yet.</p>
                <div className="flex items-center text-sm font-medium">
                    <Link to='/' className="bg-[#e0e0e0] py-1 px-2 rounded-sm mr-1">Click</Link>
                    <p className="">to go back to My Portfolio. </p>
                </div>
            </div>
              
        </div>
     );
}
 
export default Redirect;