

export const CreateUser: React.FC<{ labels: { name: string; type: string }[] }> = ({ labels }) => {

    return <div className=" flex items-center justify-center flex-col gap-3 ">
        {
            labels.map((label : { name: string; type: string }, index: any) => <div key={index} className="flex flex-col gap-1 w-[300px]">
            <label className="text-gray-700 mb-1">{label.name}</label>
            <input
                type={label.type}
                accept=".pdf"
                name={label.name.toLowerCase().replace(/\s+/g, '') as string}
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Enter ${label.name}`}
            />
        </div>)
        }
        
    </div>
}