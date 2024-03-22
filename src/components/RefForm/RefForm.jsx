import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRaf = useRef(null);
    const emailRaf = useRef(null);
    const passwordRef = useRef(null);

    useEffect( () =>{
        nameRaf.current.focus();
    }, [])
   
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRaf.current.value );
        console.log(emailRaf.current.value );
        console.log(passwordRef.current.value );
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRaf} type="text" name="name" />
                <br />
                <input ref={emailRaf} defaultValue={'moba@gmail.com'} type="email" name="email" id="" />
                <br />
                <input ref={passwordRef} type="password" name="password" id="" />
                <br />
               <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;