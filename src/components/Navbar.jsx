import { AboutMeityDropdown } from "./dropdown/AboutMeityDropdown"


export const Navbar= () => {
  return (
    <div className="">
        <div className="p-5 bg-black ">
        <li className="">  
               <img className="size-[50%]" src="./images/logo.png" alt=" logo" />
        </li>
        </div>
        <div className="bg-neutral-400 flex  justify-center">
        <div className="flex list-none space-x-24 font-bold p-4   ">
           <li className="cursor-pointer "><a>Home</a></li>
           <li className="cursor-pointer  "><a href=""><AboutMeityDropdown/></a></li>
           <li className="cursor-pointer"><a>Groups</a></li>
           <li className="cursor-pointer"><a>Organisations</a></li>
           <li className="cursor-pointer"><a>RTI</a></li>
           <li className="cursor-pointer"><a>Notification</a></li>
           <li className="cursor-pointer"><a>Section 69A of IT Act</a></li>
        </div>
        </div>
    </div>
  )
}
