// src/pages/testimonials.js
import * as React from "react";
import Layout1 from "../components/Layout1";
import SEO1 from "../components/SEO1";

const PricingsPage = () => {
  const plans = [
    {
      category: "Job Seeker Plans",
      plans: [
        {
          title: "Free Plan",
          price: "Free",
          features: [
            "Basic profile to showcase your skills and experience",
            "10 daily swipes to explore job opportunities",
            "Resume builder",
            "Direct messaging with recruiters",
            "Push notifications",
            "AI-powered job matching",
            "Extra 10 swipes for $1 anytime",
          ],
          cta: "Download App",
        },
        {
          title: "Premium Plan",
          price: "$15/month or $100/year",
          features: [
            "All Free Plan features",
            "+10 additional daily swipes (20 total)",
            "Profile visible in recruiters' Hunt View",
            "Priority placement in match results",
          ],
          cta: "Upgrade to Premium",
        },
        {
          title: "Freemium Trial",
          price: "7 Days Free",
          features: [
            "All Premium features",
            "Full access for 7 days",
          ],
          cta: "Start your free trial",
        },
      ],
    },
    {
      category: "Recruiter Plans",
      plans: [
        {
          title: "Free Plan",
          price: "Free",
          features: [
            "Basic company and recruiter profile",
            "Unlimited swipes",
            "1 free job posting",
            "Direct messaging with candidates",
            "Push notifications",
            "AI-powered job matching",
            "$2/day additional job postings",
          ],
          cta: "Get Started",
        },
        {
          title: "Premium Plan",
          price: "$300/month or $3,000/year",
          features: [
            "All Free Plan features",
            "Unlimited job postings",
            "Access to Hunt View",
            "Advanced analytics",
          ],
          cta: "Upgrade to Premium",
        },
        {
          title: "Freemium Trial",
          price: "3 Months Free",
          features: [
            "All Premium features",
            "Full access for 3 months",
          ],
          cta: "Try Premium free",
        },
      ],
    },
  ];
  return (
    <Layout1>
      <section className="container mx-auto px-6 py-12">
        {plans.map((section) => (
          <div key={section.category} className="mb-12 ">
            <h2 className="text-3xl font-bold text-brandGreen-dark mb-6">{section.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {section.plans.map((plan) => (
                <div key={plan.title} className="border rounded-lg p-6 shadow-md flex flex-col justify-between transform transition-transform duration-500 hover:scale-110 object-cover">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                    <p className="text-brandAccent font-semibold mb-4">{plan.price}</p>
                    <ul className="mb-6 text-gray-700">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="mb-2">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="mt-auto bg-brandGreen text-white py-2 px-4 rounded hover:bg-brandGreen-dark transition">
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

      </section>
    </Layout1>
  );

};

export default PricingsPage;
