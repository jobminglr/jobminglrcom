import React from "react";
import Layout1 from "../components/Layout1";
import SEO1 from "../components/SEO1";

const AIFAQsPage = () => (
    <Layout1>
        <SEO1 title="AI FAQs" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-700">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">AI FAQs</h1>
            <p className="mb-8 text-lg">
                Answers to frequently asked questions about how JobMinglr uses AI to help job seekers and employers.
            </p>

            <div className="space-y-10">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        What is AI at JobMinglr?
                    </h2>
                    <p>
                        Artificial intelligence (AI) at JobMinglr refers to a range of automated tools and systems
                        designed to help connect job seekers with opportunities and support employers in the hiring
                        process. These tools are powered by algorithms and data insights to enhance your experience
                        on our platform.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        How does JobMinglr use AI for job seekers?
                    </h2>
                    <p>
                        We use AI to personalize job recommendations, improve the relevance of your swipe feed, and
                        match you with employers based on your profile, preferences, and interaction history. This helps
                        streamline your job search and highlight opportunities you might be interested in.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        How does JobMinglr use AI for employers and recruiters?
                    </h2>
                    <p>
                        AI supports recruiters by surfacing candidates who align with posted job descriptions and
                        preferences. It helps prioritize candidates who are most likely to be a good match, assists in
                        organizing responses, and powers insights into hiring efficiency.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        What data does JobMinglr use for AI?
                    </h2>
                    <p>
                        JobMinglr uses data provided by users, such as profile details, preferences, resume content,
                        and swipe activity. We also use job descriptions, employer preferences, and interaction feedback
                        to train and improve our algorithms. We do not sell your data and always prioritize privacy and
                        security in accordance with our Privacy Policy.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        Can I opt out of AI features?
                    </h2>
                    <p>
                        At this time, AI features are integrated into core product functionality, like swipe matching
                        and job suggestions. We aim to provide clear explanations of how AI is used and are actively
                        working on adding more transparency and user control options in future updates.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        How is fairness and bias handled in JobMinglr's AI?
                    </h2>
                    <p>
                        We follow strict fairness and inclusion guidelines as outlined in our{" "}
                        <a href="/ai-principles" className="text-brandGreen hover:underline">
                            AI Principles
                        </a>
                        . Our teams review algorithms for bias and regularly test for equitable outcomes. We also gather
                        user feedback and engage with external experts to ensure our systems support diversity, equity,
                        and inclusion.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        Does JobMinglr use generative AI?
                    </h2>
                    <p>
                        Yes. We use generative AI in features like smart profile suggestions, resume summaries, and job
                        listing enhancements. These features are designed to assist users and employers in presenting
                        clearer, more concise information to improve matches.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        Is my data used to train JobMinglr’s AI?
                    </h2>
                    <p>
                        We use de-identified and aggregated data to train and improve our models. Your personal data is
                        never used without strict protections and is governed by our{" "}
                        <a href="/privacy-policy" className="text-brandGreen hover:underline">
                            Privacy Policy
                        </a>
                        .
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        Who can I contact if I have questions or concerns?
                    </h2>
                    <p>
                        If you have questions about how we use AI or want to provide feedback, you can contact our
                        support team via the app or at{" "}
                        <a
                            href="mailto:support@jobminglr.com"
                            className="text-brandGreen hover:underline"
                        >
                            support@jobminglr.com
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    </Layout1>
);

export default AIFAQsPage;
