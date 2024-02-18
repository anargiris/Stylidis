import React from "react";

const EmailTemplate = ({ name, email, subject }) => {
  return (
    <div className="flex flex-col gap-4">
      <div>hello, {name}!</div>
      <div>email is: {email}</div>
      <p>
        Subject is: <br /> {subject}
      </p>
    </div>
  );
};

export default EmailTemplate;
