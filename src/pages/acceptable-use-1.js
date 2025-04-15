import React from 'react';
import Layout1 from '../components/Layout1';
import SEO1 from '../components/SEO1';

const AcceptableUsePage = () => {
    return (
        <Layout1>
            <SEO1 title="Acceptable Use Policy" />

            <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 text-gray-700">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Acceptable Use Policy</h1>
                <p className="text-sm text-gray-600 mb-6">Effective Date: [7/11/2024]</p>
                <p className="mb-4 leading-relaxed">
                    JobMingler is committed to providing a safe, professional, and productive environment for all users. This Acceptable Use Policy (<strong>Policy</strong>) outlines the acceptable use of our Services and the actions we may take if you violate this Policy. By using JobMingler, you agree to comply with this Policy. If you do not agree, please do not use our Services.
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Prohibited Activities</h2>
                <p className="mb-4 leading-relaxed">You agree not to use the Services to:</p>
                <ol className="list-decimal pl-6 space-y-2">
                    <li><span className="font-semibold">Illegal Activities:</span> Engage in any activity that violates any applicable federal, state, local, or international law or regulation.</li>
                    <li><span className="font-semibold">Harmful Content:</span> Post, upload, share, or distribute any content that is defamatory, obscene, indecent, abusive, offensive, harassing, violent, hateful, inflammatory, or otherwise objectionable.</li>
                    <li><span className="font-semibold">Impersonation:</span> Impersonate or attempt to impersonate JobMingler, a JobMingler employee, another user, or any other person or entity.</li>
                    <li><span className="font-semibold">Spam:</span> Transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
                    <li><span className="font-semibold">Security Violations:</span> Engage in any activity that interferes with or disrupts the integrity or performance of the Services or the data contained therein.</li>
                    <li><span className="font-semibold">Unauthorized Access:</span> Attempt to gain unauthorized access to the Services, other accounts, computer systems, or networks connected to the Services, through hacking, password mining, or any other means.</li>
                    <li><span className="font-semibold">Intellectual Property Infringement:</span> Use the Services to infringe upon the intellectual property rights of others, including but not limited to copyrights, trademarks, patents, or trade secrets.</li>
                    <li><span className="font-semibold">Malware Distribution:</span> Upload or distribute files that contain viruses, Trojan horses, worms, time bombs, cancelbots, corrupted files, or any other similar software or programs that may damage the operation of another's computer or property.</li>
                    <li><span className="font-semibold">Fraudulent Activities:</span> Engage in any activities that are fraudulent, deceptive, or manipulative.</li>
                </ol>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. User Content</h2>
                <p className="mb-4 leading-relaxed">
                    You are responsible for all content that you upload, post, or otherwise transmit via the Services. You agree not to upload, post, or otherwise transmit content that:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                    <li><span className="font-semibold">Violates Any Law:</span> Is illegal or promotes illegal activities.</li>
                    <li><span className="font-semibold">Is Harmful:</span> Is harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, or otherwise objectionable.</li>
                    <li><span className="font-semibold">Contains Personal Information:</span> Includes personal information about others without their consent.</li>
                    <li><span className="font-semibold">Infringes Rights:</span> Infringes any patent, trademark, trade secret, copyright, or other proprietary rights of any party.</li>
                    <li><span className="font-semibold">Is Misleading:</span> Misrepresents your identity or affiliation with any person or organization.</li>
                </ol>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Enforcement</h2>
                <p className="mb-4 leading-relaxed">
                    JobMingler reserves the right to investigate and take appropriate legal action against anyone who, in JobMingler's sole discretion, violates this Policy, including without limitation, removing the offending content from the Services, suspending or terminating the account of such violators, and reporting you to the law enforcement authorities.
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Reporting Violations</h2>
                <p className="mb-4 leading-relaxed">If you become aware of any misuse of the Services, please contact us immediately at:</p>
                <div className="space-y-1">
                    <p>JobMingler LLC</p>
                    <p>[Address]</p>
                    <p>[Email]</p>
                    <p>[Phone Number]</p>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Changes to This Policy</h2>
                <p className="mb-4 leading-relaxed">
                    We may modify this Policy at any time. Any changes will be effective immediately upon posting the revised Policy. Your continued use of the Services after the changes have been posted constitutes your acceptance of the new Policy.
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Contact Information</h2>
                <p className="mb-4 leading-relaxed">For any questions about this Policy, please contact us at:</p>
                <div className="space-y-1">
                    <p>JobMingler LLC</p>
                    <p>[Address]</p>
                    <p>[Email]</p>
                    <p>[Phone Number]</p>
                </div>
                <hr className="my-8 border-t border-gray-300" />
                <p className="text-center font-medium">
                    Thank you for helping us maintain a safe and professional environment for all JobMingler users.
                </p>
            </div>
        </Layout1>
    );
};

export default AcceptableUsePage;

