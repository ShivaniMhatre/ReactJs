import { useParams } from "react-router-dom";

function Singleproduct() {

    const data = useParams();
    console.log(data, "-data here")
    return (
        <div>
            {data && data.shivani}
        </div>
    )
}

export default Singleproduct;
