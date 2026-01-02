export const getAdminEmailTemplate = (data) => {
    const { fullName, email, phone, service, details } = data;
    const currentYear = new Date().getFullYear();

    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f4f5; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      
      <div style="max-width: 600px; margin: 20px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
        
        <div style="background-color: #1a202c; padding: 20px; text-align: center;">
          <h2 style="color: #48bb78; margin: 0; font-size: 24px; font-weight: 600;">⚡ New Lead Received</h2>
          <p style="color: #a0aec0; margin: 5px 0 0; font-size: 14px;">Electro Evsol Website Inquiry</p>
        </div>

        <div style="padding: 30px;">
          
          <div style="border-bottom: 1px solid #e2e8f0; padding-bottom: 20px; margin-bottom: 20px;">
            <p style="margin: 0; color: #718096; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Service Interest</p>
            <h3 style="margin: 5px 0 0; color: #2d3748; font-size: 20px;">${service}</h3>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #718096; font-size: 14px; width: 30%;"><strong>Name:</strong></td>
              <td style="padding: 10px 0; color: #2d3748; font-size: 14px;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #718096; font-size: 14px;"><strong>Email:</strong></td>
              <td style="padding: 10px 0; color: #2d3748; font-size: 14px;">
                <a href="mailto:${email}" style="color: #3182ce; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #718096; font-size: 14px;"><strong>Phone:</strong></td>
              <td style="padding: 10px 0; color: #2d3748; font-size: 14px;">
                <a href="tel:${phone}" style="color: #3182ce; text-decoration: none;">${phone}</a>
              </td>
            </tr>
          </table>

          <div style="background-color: #f7fafc; border-left: 4px solid #48bb78; padding: 15px; margin-top: 25px; border-radius: 4px;">
            <p style="margin: 0; color: #718096; font-size: 12px; font-weight: bold;">CUSTOMER MESSAGE:</p>
            <p style="margin: 10px 0 0; color: #4a5568; font-size: 14px; line-height: 1.5;">"${details}"</p>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${email}?subject=Re: Your Inquiry with Electro Evsol" style="background-color: #48bb78; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 14px;">Reply to Customer</a>
          </div>

        </div>

        <div style="background-color: #f8f9fa; padding: 15px; text-align: center; border-top: 1px solid #eee;">
          <p style="margin: 0; color: #a0aec0; font-size: 12px;">© ${currentYear} Electro Evsol Admin System</p>
        </div>

      </div>
    </body>
    </html>
    `;
};
