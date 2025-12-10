import Image from "next/image";
export default function Profile({nightMode}:{nightMode:boolean}){
    return(<div className={`relative flex flex-col items-center md:items-start p-8 rounded-2xl shadow-lg max-w-lg w-full fade-in ${nightMode ? "bg-gray-800" : "bg-white"} h-1/5 relative top-16`}>
        
        <div className="w-40 h-40 md:w-56 md:h-56 relative mb-4 fade-in -top-3">
          <Image 
            src="/profile.jpg" 
            alt="Profile Picture" 
            layout="fill" 
            objectFit="cover" 
            className={`rounded-full border-4 shadow-md ${nightMode ? "border-gray-500" : "bg-gray-200"} `}
          />
        </div>
        
        <div className="">
        <h1 className=" text-4xl font-bold">Piyush Jhamnani</h1>
        <p className="mt-2">Engineer | Code Enthusiast</p>
        <p className="mt-6">Passionate engineer transforming complex challenges into elegant solutions, coding anything with precision and creativity.</p>
        </div>
      </div>)
}