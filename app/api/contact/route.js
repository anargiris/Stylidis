import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
export async function POST(req, res) {
  //   const message = `
  //     Name: ${req.body.name}\r\n
  //     Email: ${req.body.email}\r\n
  //     Message: ${req.body.message}
  //   `;

  const message = `
      Name:Anargyros\r\n
      Email: anargiriss@hotmail.com\r\n
      Message: Checking this here
    `;

  const data = {
    to: "stylidisx@gmail.com",
    from: "anargiriss@hotmail.com",
    subject: `New message from Anargyros`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  sgMail.send(data).then(
    (res) => {
      console.log(res);
    },
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );

  return new Response("Success!", {
    status: 200,
  });
}
