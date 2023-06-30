import { useState } from "react";

function Section() {
    const [userLogged, setUserLogged] = useState(true)
    return (
        <div>
            Section:{userLogged ? <button>Logout</button> : <button>Login</button>}
        </div>
    )
}

export default Section;