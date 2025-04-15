import React from 'react';
import Layout1 from '../components/Layout1';
import SEO1 from '../components/SEO1';

const PrivacyCenterPage = () => {
    return (
        <Layout1>
            <SEO1 title="Privacy Center" />
            <div className="max-w-3xl mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Privacy Center</h1>
                <p><strong>App Users:</strong> Use of our app is subject to the Terms and Privacy Policy for that app and website. For privacy information about the app you are using, please review the Privacy Policy for its website.</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
                <p>We take your personal data seriously. Welcome to the JobMinglr Privacy Center – a website detailing how our online job search and recruitment platform shares data and protects privacy.</p>
                <p>Our core mission is to help people find jobs and help employers find great candidates. We developed this website to help you learn more about our privacy values, how your data is shared, and why it’s important for us to share it.</p>
                <p>Sharing data between platforms allows us to:</p>
                <ul className="list-disc list-inside pl-4 mb-4">
                    <li>Connect job seekers with more job listings and employers</li>
                    <li>Improve and customize services for our users</li>
                    <li>Enhance security for our users</li>
                </ul>
                <p>The information provided here doesn’t change how JobMinglr collects, uses, or shares personal data. The Privacy and Cookie policies for our site clearly explain how we collect and use personal and non-personal data.</p>
                <p>If you have specific questions about a particular platform, we encourage you to visit that Platform’s Privacy Policy or the Contact Us page for further information.</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Our Privacy Values</h2>
                <p><strong>Prioritizing your trust.</strong> Whether we’re helping you find jobs or great candidates, we value the trust you place in us. To maintain that trust, we make significant investments to protect your personal data. These efforts are guided by our privacy values:</p>
                <ul className="list-disc list-inside pl-4 mb-4">
                    <li>We treat all users equally by providing a broad suite of global privacy rights. Any user can request the following:
                        <ul className="list-disc list-inside pl-6">
                            <li>Access to and portability of their personal data</li>
                            <li>Rectification or deletion of their personal data</li>
                            <li>Restriction of or objection to certain processing of their personal data</li>
                        </ul>
                    </li>
                    <li>We adhere to principles of privacy by design, which informs how we build and operate our services.</li>
                    <li>We’re transparent about what personal data we collect and how it’s processed.</li>
                    <li>We want to ensure the personal data we gather will be used for the purposes of helping our job seekers find jobs, our employers find great candidates, and improving the services we provide to you.</li>
                    <li>We limit our collection and storage of personal data to what’s adequate, relevant, and necessary.</li>
                    <li>We strive to keep your personal data accurate and up to date, where appropriate.</li>
                    <li>We want to process your personal data using appropriate security measures to protect personal data.</li>
                    <li>We demonstrate accountability and responsibility under applicable privacy laws.</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4">The Benefits of Data Sharing</h2>
                <p><em>Why do you need my data anyway?</em> Data sharing provides a range of benefits to job seekers and employers and enables us to improve our services.</p>
                <h3 className="text-xl font-semibold mt-6 mb-2">Data Sharing Means More Employers, More Job Listings, and More Job Seekers</h3>
                <p>Data sharing allows job seekers to access a broader database of job listings and employers. It also helps employers access more job seekers. For example, one platform may be able to recommend jobs or employers on another platform. It can also help applications, resumes, or job listings work across the platforms. The personal data shared depends on your interaction with the platforms during your job search and application activities.</p>
                <h3 className="text-xl font-semibold mt-6 mb-2">Data Sharing Improves Our Services</h3>
                <p>Data sharing allows our platforms to provide personalized and improved content, performance, features, and services. For example, our platforms may use and share your previous search or browsing history and your resume or profile information to determine relevant search results and job alerts. Data sharing may also help provide career insights such as company reviews, job listing salary data, interview tips, and more.</p>
                <h3 className="text-xl font-semibold mt-6 mb-2">Data Sharing Facilitates Better Security</h3>
                <p>Sharing data allows our platforms to better protect our users. In particular, it allows affiliated platforms to improve user security and internal operations. It also facilitates troubleshooting and the detection and prevention of fraud and spam.</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Platform Activity Recording</h2>
                <p><strong>What we do with the data.</strong> We process your activity on the platforms to help us better understand how you use them. This helps us improve and inform the products and services we offer, which allows us to help you find jobs.</p>
                <p>It’s important to note that our platforms may not work as intended without certain data collection and sharing. This includes processing, collecting, analyzing, storing, and sharing personal data across the platforms or with third-party service providers, including in real-time.</p>
                <p>Data collected can include any and all interactions and communications you have on our platforms. It may also include, without limitation:</p>
                <ul className="list-disc list-inside pl-4 mb-4">
                    <li>The areas of the platforms you visit and where you click, scroll, hover, mouseover, or otherwise interact with our platforms</li>
                    <li>When and for how long each activity occurs</li>
                </ul>
                <p>For more information, please see the Privacy and Cookie policies for each platform.</p>
                <p>We consider this processing to be critical to the way our platforms operate, and, at this time, without transferring certain data to JobMinglr's affiliates, we are not able to provide our core products and services to you. Please check our FAQ to understand how you can stop this sharing.</p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Frequently Asked Questions</h2>
                <h3 className="text-xl font-semibold mt-6 mb-2">Personal Data Sharing</h3>
                <p className="font-semibold">What personal data is shared between the platforms?</p>
                <p>The personal data shared depends on your interaction with the platforms during your job search and application activities. It may include your first and last name, username, email address, telephone number, resume/profile information, IP address, advertiser ID, answers to any employer screener questions, job listings, job notifications, application progress, and users’ search, click, and session activity on the platforms.</p>
                <p className="font-semibold mt-4">Why is my personal data shared in this way?</p>
                <p>Your personal data is shared to:</p>
                <ul className="list-disc list-inside pl-4">
                    <li>Connect more job seekers with more job listings and employers</li>
                    <li>Improve our services</li>
                    <li>Facilitate better security for users</li>
                </ul>
                <p className="font-semibold mt-4">When is data shared and how does sharing take place?</p>
                <p>When and how your personal data is shared depends on the platform, the type of data being shared, and the actions you take on the platforms. For example, our platforms may use and share your previous search or browsing history and your resume or profile information to determine relevant search results and job alerts. Specific actions, such as opening an account on one of our platforms, may also automatically initiate sharing.</p>
                <p className="font-semibold mt-4">How do I stop my personal data from being shared in this way?</p>
                <p>If you do not wish your information to be shared in this way, depending on the site, you can request the deletion of your account, request the deletion of your personal data, or request that your data not be shared this way while maintaining an account. These options can be requested by following the instructions in the Privacy Policy of the sites you have used.</p>

                <h3 className="text-xl font-semibold mt-6 mb-2">HR Tech Privacy Center and the Platforms</h3>
                <p className="font-semibold">Does the information in the HR Tech Privacy Center change how my personal data will be used?</p>
                <p>No, the information in our FAQs and Privacy Center is designed to provide you with more transparency about how we use data.</p>
                <p className="font-semibold mt-4">Does this mean that all my data is shared by the platforms without restriction?</p>
                <p>No, the sharing of your personal data is governed by the privacy and cookie policies of the platforms you have used. We encourage you to refer to those policies for a clear understanding.</p>
                <p className="font-semibold mt-4">How do the platforms manage the transfer of my personal data among the affiliated platforms?</p>
                <p>We use various mandated legal methods to ensure that adequate protections are applied to the transfer of data. This may include standard contractual clauses or other mechanisms we determine appropriate to protect transfers of your personal data.</p>
                <p className="font-semibold mt-4">Who is the data controller of my personal data?</p>
                <p>The data controller of your personal data is specified in the Privacy Policy of the platform you used.</p>
                <p className="font-semibold mt-4">How do the platforms view privacy?</p>
                <p>JobMinglr takes user privacy very seriously. We invest significant resources to protect your personal data and adhere to applicable privacy rules. We value the trust job seekers place in us to help them find jobs and employers place in us to help them find great candidates. Please consult our Privacy Values for more information.</p>
                <p className="font-semibold mt-4">In what language does each platform provide its privacy or cookie policy?</p>
                <p>A platform’s Privacy and Cookie policy is available in the local languages of the markets targeted by that platform. If a platform does not have its privacy or cookie policy in a specific language, it is because the platform does not yet target users in markets where that language applies.</p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Your Privacy Rights</h3>
                <p className="font-semibold">What privacy rights are available to me on the platforms?</p>
                <p>We provide a broad suite of privacy rights to all our users globally. Any user of the platform, regardless of location, can request:</p>
                <ul className="list-disc list-inside pl-4">
                    <li>Access to their personal data</li>
                    <li>Deletion of personal data</li>
                    <li>Rectification of personal data</li>
                    <li>A portable version of their personal data</li>
                    <li>Restriction of or objection to certain processing of their personal data</li>
                </ul>
                <p className="font-semibold mt-4">How can I exercise my privacy rights?</p>
                <p>You can exercise your privacy rights by consulting the Privacy Policy of the platform you used and following the instructions specified there.</p>
                <p className="font-semibold mt-4">What security measures are adopted by the platforms?</p>
                <p>We take the security of your personal data very seriously and employ various practices to prevent unauthorized access, disclosure, destruction, or accidental loss. These practices include:</p>
                <ul className="list-disc list-inside pl-4">
                    <li>Selective pseudonymisation and encryption of personal data</li>
                    <li>Designing systems to protect confidentiality, integrity, availability, and resilience</li>
                    <li>Ensuring timely restoration of access to personal data in case of incidents</li>
                    <li>Regularly testing and evaluating the effectiveness of security measures</li>
                </ul>
                <p className="font-semibold mt-4">What can I do as an employer to help keep my account secure?</p>
                <p>To learn more about keeping your employer account secure, refer to the security page of the platform you are using.</p>
            </div>
        </Layout1>
    );
};

export default PrivacyCenterPage;
