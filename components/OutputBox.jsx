export default function OutputBox({ result}){
    return (
        <div className="max-w-xl mx-auto mt-6">
            <h2 className="text-xl mb-2">Result:</h2>
            <pre className="bg-gray-900 text-white p-4 rounded whitespace-pre-wrap ">
                {result}
            </pre>
        </div>
    )
}