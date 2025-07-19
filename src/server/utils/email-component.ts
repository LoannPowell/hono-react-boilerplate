interface EmailTemplateProps {
  link: string;
  type: 'password-reset' | 'email-verification' | 'welcome';
  userName: string;
}

export const generateEmailHTML = ({ link, type, userName }: EmailTemplateProps): string => {
  const getEmailContent = () => {
    switch (type) {
      case 'password-reset':
        return {
          subject: 'Reset Your Password',
          title: 'Password Reset Request',
          message: 'We received a request to reset your password. Click the button below to create a new password.',
          buttonText: 'Reset Password',
          footer: "If you didn't request this password reset, you can safely ignore this email."
        };
      case 'email-verification':
        return {
          subject: 'Verify Your Email Address',
          title: 'Email Verification',
          message: 'Please verify your email address by clicking the button below. This helps us keep your account secure.',
          buttonText: 'Verify Email',
          footer: "If you didn't create an account, you can safely ignore this email."
        };
      case 'welcome':
        return {
          subject: 'Welcome to App!',
          title: 'Welcome to App',
          message: 'Thank you for joining us! We\'re excited to have you on board. Click the button below to get started.',
          buttonText: 'Get Started',
          footer: "If you have any questions, feel free to reach out to our support team."
        };
      default:
        return {
          subject: 'Email from App',
          title: 'Hello from App',
          message: 'You have received an email from App. Click the button below to continue.',
          buttonText: 'Continue',
          footer: "If you have any questions, feel free to reach out to our support team."
        };
    }
  };

  const content = getEmailContent();

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${content.subject}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            color: #333333;
        }
        .header {
            background-color: #f8f9fa;
            padding: 20px;
            text-align: center;
            border-bottom: 1px solid #e9ecef;
        }
        .header h1 {
            margin: 0;
            color: #007bff;
            font-size: 24px;
            font-weight: bold;
        }
        .content {
            padding: 40px 20px;
        }
        .content h2 {
            margin: 0 0 20px 0;
            color: #333333;
            font-size: 20px;
            font-weight: 600;
        }
        .content p {
            margin: 0 0 20px 0;
            font-size: 16px;
            line-height: 1.5;
            color: #666666;
        }
        .content p:last-of-type {
            margin-bottom: 30px;
        }
        .button-container {
            text-align: center;
            margin: 40px 0;
        }
        .cta-button {
            display: inline-block;
            background-color: #007bff;
            color: #ffffff;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 600;
            text-align: center;
        }
        .footer-text {
            margin: 30px 0 0 0;
            font-size: 14px;
            line-height: 1.4;
            color: #999999;
            text-align: center;
        }
        .email-footer {
            background-color: #f8f9fa;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #e9ecef;
        }
        .email-footer p {
            margin: 0 0 10px 0;
            font-size: 14px;
            color: #666666;
        }
        .email-footer p:last-child {
            margin: 0;
            font-size: 12px;
            color: #999999;
        }
        @media only screen and (max-width: 600px) {
            .container {
                width: 100% !important;
            }
            .content {
                padding: 20px 15px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>App</h1>
        </div>
        
        <div class="content">
            <h2>${content.title}</h2>
            
            <p>Hello ${userName},</p>
            
            <p>${content.message}</p>
            
            <div class="button-container">
                <a href="${link}" class="cta-button">
                    ${content.buttonText}
                </a>
            </div>
            
            <p class="footer-text">${content.footer}</p>
        </div>
        
        <div class="email-footer">
            <p>© 2025 App. All rights reserved.</p>
            <p>This email was sent to you because you have an account with App.</p>
        </div>
    </div>
</body>
</html>
  `;
};

// Default export for compatibility with the existing import
export default generateEmailHTML; 