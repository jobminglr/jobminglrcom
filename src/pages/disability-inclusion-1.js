import React from 'react';
import Layout1 from '../components/Layout1';
import SEO1 from '../components/SEO1';

const DisabilityInclusionPage = () => (
    <Layout1>
        <SEO1 title="Disability Inclusion" />
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">Disability Inclusion</h1>
            <hr className="my-6 border-t border-gray-300" />
            <img
                src="https://img1.wsimg.com/isteam/getty/1934274246/:/cr=t:0%,l:12.49%,w:75.02%,h:75.02%"
                alt="Wooden signpost with arrows labeled Belonging, Inclusion, Equity, and Diversity, set against a sky background"
                className="w-full h-auto mb-6"
            />
            <h4 className="text-xl font-semibold mb-2">JobMinglr's Disability Inclusion</h4>
            <p className="italic mb-8">Disability Inclusion and Accessibility at JobMinglr</p>
            <p className="mb-4">
                At JobMinglr, we believe in unlocking human potential by removing barriers that prevent
                employers from accessing talent. Our initial steps towards disability inclusion include
                creating an accessible experience for everyone using our website.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Accessibility as a Core Mission</h2>
            <p className="mb-4">
                We are committed to continuous education, evaluation, and improvement of our processes to be
                more inclusive. By combining expertise from our subject matter experts and employees' lived
                experiences, we advance with empathy and a commitment to improving lives. Accessibility is
                integral to our mission of helping people find jobs.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Beyond a Checklist</h2>
            <p className="mb-4">
                JobMinglr adheres to the internationally accepted Web Content Accessibility Guidelines (WCAG)
                to improve accessibility for people with disabilities. We follow WCAG 2.1, AA standards,
                ensuring our offerings meet the needs defined by the Americans with Disabilities Act and
                Section 508. We have also developed company-specific digital accessibility standards to
                support accessible development practices.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment to Inclusive Experiences</h2>
            <p className="mb-2">Our inclusive experiences go beyond checklists. We:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Integrate both technical accessibility and user experience in our policies.</li>
                <li>Provide ongoing accessibility training for our teams.</li>
                <li>Set clear accessibility targets and responsibilities.</li>
                <li>Promote disability awareness and pride across the organization.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Assistive Technologies</h2>
            <p className="mb-2">JobMinglr products support the following browser/screen reader combinations:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>For Windows: JAWS with Chrome, NVDA with Chrome.</li>
                <li>For Mac: VoiceOver with Safari.</li>
                <li>For iOS: VoiceOver with Safari.</li>
                <li>For Android: Talkback with Chrome.</li>
            </ul>
            <p className="mb-4">We also test our products with various browser and keyboard settings.</p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Accessibility at Hosted Events</h2>
            <p className="mb-2">JobMinglr prioritizes a positive and inclusive experience at our events.</p>
            <p className="mb-2">We are committed to:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Providing accessible event websites guided by WCAG 2.1 AA standards.</li>
                <li>Offering machine captioning and/or live transcriptions for online presentations.</li>
                <li>Ensuring buildings for in-person events meet local accessibility regulations.</li>
                <li>Providing water bowls and relief areas for service animals.</li>
                <li>Allowing extended time between sessions for easier movement.</li>
                <li>Offering reduced sensory rooms at events lasting over four hours.</li>
                <li>Choosing inclusive after-hours activities.</li>
                <li>Providing hallway seating for long hallways.</li>
                <li>Offering a point-of-contact for accessibility questions or services.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Requesting Accessibility Services</h2>
            <p className="mb-2">
                To request accessibility services for JobMinglr-hosted events, please specify:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
                <li>The type of service needed.</li>
                <li>The duration of the request (for multi-day events).</li>
                <li>Any specifics we should know.</li>
                <li>Possible alternatives if the specific request is unavailable.</li>
            </ul>
            <p className="mb-4">Visit the event website for contact information.</p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Your Feedback Matters</h2>
            <p className="mb-4">
                We value your feedback on JobMinglr's accessibility. Please share your experiences, especially
                if you encountered accessibility barriers. Help us improve by emailing us at{' '}
                <a href="mailto:support@jobminglr.com" className="text-blue-600 underline">support@jobminglr.com</a>
            </p>
        </div>
    </Layout1>
);

export default DisabilityInclusionPage;
