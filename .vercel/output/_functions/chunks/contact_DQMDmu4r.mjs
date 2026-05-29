import { Resend } from 'resend';

const resend = new Resend(
  "re_jYLmW8uu_CpGWp2qDFWK7N7tqHfosno7C"
);
const POST = async ({ request }) => {
  const data = await request.json();
  const { name, email, message } = data;
  try {
    await resend.emails.send({
      from: "Portfolio <contact@vbarbo.com.br>",
      to: "vinicius@vbarbo.com.br",
      subject: `Novo contato de ${name}`,
      html: `
        <h2>Novo contato do portfolio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `
    });
    return new Response(
      JSON.stringify({
        success: true
      }),
      {
        status: 200
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false
      }),
      {
        status: 500
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
