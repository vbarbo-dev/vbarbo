import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(
  import.meta.env.RESEND_API_KEY
);

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  const { name, email, message } = data;

  try {

    await resend.emails.send({
      from: 'Portfolio <contact@vbarbo.com.br>',
      to: 'vinicius@vbarbo.com.br',
      subject: `Novo contato de ${name}`,
      html: `
        <h2>Novo contato do portfolio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({
        success: true,
      }),
      {
        status: 200,
      }
    );

  } catch (error) {

    return new Response(
      JSON.stringify({
        success: false,
      }),
      {
        status: 500,
      }
    );

  }

};