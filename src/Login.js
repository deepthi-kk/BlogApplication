import React from 'react'
import "./Login.css";
import {auth,provider} from "./firebase";
import { actionTypes } from './reducer';
import  {useStateValue} from "./StateProvider";


function Login() {
    const [state,dispatch] = useStateValue();
    const signIn= () =>{
        auth
        .signInWithPopup(provider)
        .then((result)=>{

            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
                        });
        })

        .catch((error)=> alert(error.message));

    };
    return (
        <div className="login">
            <div className="login_logo">
                <img className="facebooklogoo"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAACdCAMAAAAdWzrjAAAAilBMVEX///8Yd/L2+P4AXfEAcfIAb/IUdvIAbfEAafG0xPnP2vsNdPIAa/H29/4AavL6+v7l7f3F1ftLh/SOsPdPifMAZvG1yvmRtfeJqPVdkvWHrPbf6f3s8f2owfnI2fujv/hmmPUAV/CqvPjJ1PsAUPBom/UxfPMASvB1p/e70Prb4/yeuPeFpPbQ2vu/FUL9AAADQklEQVR4nO3cW1ejMBSGYalJwAYtrdXac7WeD///781Qp2kIG6pzE1y+z10LF1nfApJsEk5OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD47XrFavm8mU6nm+f1qujFbs5PMxjORirLtS3pPFOj2ZAQv24+eVTKmuTAWKUeJ/PYDfshFrMk9dNzKabJzSJ2436AwVJrKb9dhjpdD2I3sOuKh6wpv12G2UMRu4ndtlK6Jb+SVqvYjeyypbJHAvx7Gapl7GZ211nedge7CC+IsME6+0J+pWwdu6ndtLLyFWiVzvM8TbVS+6vQDmM3tosWVnwGqnw8eXmdz1+H12/P+zOspUeuGWzEXjjd9L0RYLK/StWGcWFoKQd4WUnKJZhoepNA70J6COZv1bMOCZoLCg1VE+kSVOPgrEOCiZ5EaWdnFUq6BG0/OM1L0Gg6E986lwKsdRdegknOoNDTG4lPQb+3WMzn88JP0Ix4Eh6slBBgcnW4iV8es3JUXcmZEoPnUhzKnLp6al+qOOjLmE3umLE4HTl1t+lUukZt2FP/Ygu5Ku0S7Ik1G6Op+e/1r6QAvQRPxeNX4WDn97qWy1rHEsyuo7a6SybpfyWYMi3ZuxEHM0cTVDdRW90l70GCRpXs7fm/4+e39vOfIMH3qK3ukiBBMzrbudtP6gZ3n3+8aRKUBQnaacN5q5wEZTdhgg0F6KAKy3PQCfrixgSDpOmLnWA82JTgYFPtShgPOsGcpCnB86AGxpzECebFTQkW1ccg82JPtTbT1Be/Bjc7tZmDan3QjLcf/b+27vi2/PkRvI2iPugJatRGp6V7Nye53/0OZi7UqD3ye5L2eTHvSSrEd3XtCfKurkJ8X9yaoFG8L66Q1iy0JsiahYC0bqYtQdbN1Ahrt9oSZO1WjbB+sCVBzfrBuvoa1uYErWVCJ6ito25M0FgG06JwLX9jgqzlbxLsJ2lI0ORnUVvZadU9TXKClj1NbSr76sQE2Vd3hL+3U0iQvZ3HefuLawkarZeMA49ze9yDBE2azBgGfs3ndxYqCfKdhW8qv/Vhn1yN+smOZkPu32/qFVu3bmbL92YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADj5A4WZJsuJcqpPAAAAAElFTkSuQmCC"
                />
            <p>facebook</p>
            </div>
            <button type="submit" onClick={signIn}>
                Sign In
            </button>
        </div>
    )
}

export default Login
