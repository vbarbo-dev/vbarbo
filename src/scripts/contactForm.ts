const form = document.querySelector('[data-contact-form]') as HTMLFormElement | null;

if (form) {
  const button = form.querySelector('button') as HTMLButtonElement;

  form.addEventListener('submit', async (event) => {
      event.preventDefault();
      button.disabled = true;

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      // Honeypot anti-spam
      if (data.website) { return; }

      try {
        const response = await fetch('/api/contact',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          }
        );

        if (!response.ok) { throw new Error('Erro ao enviar') }

        const result = await response.json();
        console.log(result);

        console.info('Mensagem enviada');
        form.reset();
        button.disabled = false;
      } catch (error) {
        console.error(error);
         button.disabled = false;
      }
    }
  );
}