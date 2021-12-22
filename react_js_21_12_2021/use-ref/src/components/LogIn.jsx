import React, { useRef, useState } from "react";

export default function LogIn() {
  const [isDisable, setIsDisable] = useState(true);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const isValid = () => {
    if (
      nameRef.current.value &&
      emailRef.current.value &&
      passwordRef.current.value 
    ) {
      setIsDisable(false);
    }
  };

  return (
    <div>
      <form
        onChange={() => {
          isValid();
        }}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(
            nameRef.current.value,
            emailRef.current.value,
            passwordRef.current.value
          );
        }}
      >
        name: <input type="text" ref={nameRef} />
        email: <input type="email" ref={emailRef} />
        password: <input type="password" ref={passwordRef} />
        <button disabled={isDisable} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
