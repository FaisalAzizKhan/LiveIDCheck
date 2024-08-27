import axios from "axios";
import { CreateUser } from "../Forms/CreateUers"

export const HomePage: React.FC = () =>{

    const labels: { name: string; type: string }[] = [
        { name: "User Name", type: "text" },
        { name: "Email", type: "text" },
        { name: "Id Card", type: "file" }
    ];

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) : Promise<any> => {
        e.preventDefault()
        let formData = Object.fromEntries(new FormData(e.target as HTMLFormElement).entries())
        formData.idfileurl = formData.idcard
        delete formData.idcard    
        // delete formData.idfileurl    
      
        try {
            console.log(formData)
            const res = await axios.post('http://localhost:9002/CreateUser/TakeIdAndPersonalInfo', formData)
            console.log(res)
            
           } catch (err) {
            console.error(err)
            
           }
        
    }



    return    <div className="w-screen h-screen flex bg-sky-200  items-center justify-center" >
        <form onSubmit={handleFormSubmit}><CreateUser labels={labels}/>
        
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 w-full mt-3 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Submit</button>
        </form>
    </div>
}