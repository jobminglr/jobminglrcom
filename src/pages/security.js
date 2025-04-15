import React from 'react';
import Layout1 from '../components/Layout1';
import SEO1 from '../components/SEO1';

const SecurityPage = () => {
    return (
        <Layout1>
            <SEO1 title="Security" />
            <div className="max-w-3xl mx-auto p-6 text-gray-800">
                <h1 className="text-3xl font-bold mb-4">Security</h1>
                <hr className="border-t border-gray-300 mb-6" />
                <h4 className="text-lg font-semibold mb-4">JobMinglr&#39;s Security Policy</h4>
                <p className="mb-6">
                    Learn about the practices and features that make your experience as secure as possible.
                </p>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li><strong>Private Resumes:</strong> Job seekers can make their resumes private, ensuring they are only viewable by the employers they contact.</li>
                    <li><strong>Suspicious Login Notifications:</strong> Users may be prompted to enter a verification code when a suspicious login is detected, adding an extra layer of security.</li>
                    <li><strong>Regular System Assessments:</strong> We perform regular vulnerability assessments of our systems and network to identify and address potential security issues.</li>
                    <li><strong>Information Security:</strong> JobMinglr employs reasonable security measures to help protect against the loss, misuse, and alteration of personal information under our control. However, no method of transmission over the Internet or electronic storage is 100% secure. Additionally, emails and messages sent via your web browser or similar means are not encrypted. While we strive to protect your information, we cannot guarantee its absolute security.</li>
                </ul>
                <h3 className="text-xl font-semibold mb-4">Account Safety Tips</h3>
                <p className="mb-4">
                    We encourage all our users to be cautious and proactive to protect against security threats and scams. Here are some simple steps you can take to safeguard your personal information:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                    <li><strong>Create a Stronger Password:</strong> Use a strong, unique password for your JobMinglr account.</li>
                    <li><strong>Reset Your Password:</strong> If you suspect someone may have unauthorized access to your account, change your password immediately.</li>
                    <li><strong>Scan for Problems and Update Software Frequently:</strong> Run antivirus software and keep your device’s operating system and all software up to date.</li>
                    <li>
                        <strong>Enable Two-Factor Authentication (2FA):</strong> Two-Factor Authentication adds an extra layer of security to your accounts in addition to your password. This usually involves something you own and control, such as your phone or email account. Adding this step makes it harder for an attacker to access your data, significantly reducing the risk of fraud, data loss, or identity theft.
                        <p className="mt-2 mb-2">Here’s What You Can Do:</p>
                        <ul className="list-disc list-inside ml-5 space-y-1">
                            <li>For Employers: Activate “2 Step Verification” on your JobMinglr Employer account.</li>
                            <li>For Job Seekers and Employers: Set up 2FA on your sensitive non-JobMinglr accounts (such as bank or email accounts), if this option is available.</li>
                        </ul>
                    </li>
                    <li><strong>Contact Us:</strong> If you have security concerns, please visit our support page for assistance.</li>
                </ul>
                <h3 className="text-xl font-semibold mb-4">What to Know About Phishing</h3>
                <p className="mb-4">
                    Phishing is a scam where attackers trick users into divulging sensitive information by posing as legitimate companies. These scams aim to steal financial information or account credentials.
                </p>
                <h4 className="text-lg font-semibold mb-2">Common Signs of Phishing</h4>
                <ul className="list-disc list-inside mb-4 space-y-2">
                    <li><strong>From an Unknown Sender:</strong> JobMinglr-related emails will only come from @jobminglr.com. Be cautious of emails from unknown companies or individuals you haven’t contacted.</li>
                    <li><strong>Threatening or Urgent:</strong> Claims that your account will be locked if you don’t respond immediately.</li>
                    <li><strong>Too Good to Be True:</strong> Requests to claim lottery winnings or a large inheritance.</li>
                    <li><strong>Includes an Unexpected Attachment:</strong> Invoices, obscure file types, or documents prompting you to “enable macros.”</li>
                    <li><strong>Links to a Suspicious Website:</strong> Websites that don’t look right or use “look-alike domains” such as JobMinglr.com or jobmingler.com.</li>
                </ul>
                <h4 className="text-lg font-semibold mb-2">What You Can Do</h4>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li><strong>Contact the Company:</strong> If you suspect a fraudulent claim, use a trusted communication method (such as a phone number listed on the company’s official website) to verify the sender’s authenticity.</li>
                    <li><strong>Be Wary of Attachments:</strong> Avoid opening unexpected attachments, especially those with unusual file extensions (.zip, .jar, .js).</li>
                    <li><strong>Use Security Tools:</strong> Enable and regularly update antivirus software, firewalls, and security patches.</li>
                    <li><strong>Keep Personal Information Private:</strong> Do not send sensitive information like bank account or credit card data over email or instant messenger.</li>
                </ul>
                <h3 className="text-xl font-semibold mb-4">Scams Targeting Job Seekers</h3>
                <p className="mb-4">
                    Job seekers can be targeted by scammers posing as potential employers, often requesting personal information via email. Here are some common scams and tips to stay safe on our platform.
                </p>
                <h4 className="text-lg font-semibold mb-2">Common Scams</h4>
                <ul className="list-disc list-inside mb-4 space-y-2">
                    <li><strong>Remote Work:</strong> Scammers may request money for a work-from-home “starter kit” or send you a check with a request to wire back a portion of the money.</li>
                    <li><strong>Tax Scams:</strong> Fraudulent employers may request past W-2s or other tax information. Never provide personal or financial information via email.</li>
                </ul>
                <h4 className="text-lg font-semibold mb-2">What You Can Do</h4>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li><strong>Interview Process:</strong> Be cautious of employers who offer you a job without an interview or formal application process.</li>
                    <li><strong>Don’t Send Money:</strong> Never pay upfront for a job or “starter kit.”</li>
                    <li><strong>Don’t Transfer Money Back:</strong> Never transfer “extra” or accidental pay back to an employer. Contact your bank for assistance.</li>
                    <li><strong>Keep Personal Information Private:</strong> Never provide personal or financial information via email.</li>
                </ul>
            </div>
        </Layout1>
    );
};

export default SecurityPage;
