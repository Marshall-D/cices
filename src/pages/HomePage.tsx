import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          Asoro Automotive ("we", "us", or "our") is committed to protecting and
          respecting your privacy. This Privacy Policy explains how we collect,
          use, and disclose your personal information when you use our mobile
          applications (the "App") as either a car owner or an auto mechanic. By
          using our App, you agree to the collection, use, and disclosure of
          your personal information as described in this Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-2">
          We collect the following types of information when you use the Asoro
          Automotive App:
        </p>
        <p className="font-medium mt-4">For car owners:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>Personal Information:</strong> When you sign up, we may
            collect your name, email address, phone number, and payment
            information.
          </li>
          <li>
            <strong>Vehicle Information:</strong> We collect data related to
            your vehicle, such as make, model, year, and mileage to provide
            better service recommendations and auto parts procurement.
          </li>
          <li>
            <strong>Service Requests:</strong> Details of the services you
            request, including location, service type, and mechanic
            interactions.
          </li>
          <li>
            <strong>Communication Data:</strong> Any messages you send or
            receive through the in-app messaging system or live chat features,
            including communications with mechanics or customer support.
          </li>
          <li>
            <strong>Usage Data:</strong> Information on how you use the app,
            including your interactions with our features, services, and tools.
            This helps us improve the app experience.
          </li>
        </ul>

        <p className="font-medium mt-4">For Auto Mechanics:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>Personal Information:</strong> Name, contact information,
            payment details, and professional credentials (such as
            certifications or experience).
          </li>
          <li>
            <strong>Job Data:</strong> Data regarding the services you provide,
            including location, service details, customer feedback, and job
            completion status.
          </li>
          <li>
            <strong>Availability:</strong> Information on your availability to
            accept jobs, including your working hours and location.
          </li>
          <li>
            <strong>Communication Data:</strong> Any messages exchanged between
            you and car owners or customer support via the app.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>Provide Services:</strong> To match car owners with
            available auto mechanics, process service requests, manage
            appointments, and facilitate the ordering of auto parts.
          </li>
          <li>
            <strong>Improve the App:</strong> To enhance the functionality and
            performance of the app, including troubleshooting, fixing bugs, and
            optimizing features based on user behavior.
          </li>
          <li>
            <strong>Customer Support:</strong> To respond to inquiries, provide
            assistance, and resolve issues raised by users.
          </li>
          <li>
            <strong>Payment Processing:</strong> To process payments, manage
            billing, and ensure secure financial transactions through the app.
          </li>
          <li>
            <strong>Notifications:</strong> To send you service-related updates,
            promotional offers, and other communications that may be relevant to
            your user experience.
          </li>
          <li>
            <strong>Analytics:</strong> To analyze how users interact with the
            app to improve user experience, discover trends, and monitor the
            app’s performance.
          </li>
          <li>
            <strong>Legal Compliance:</strong> To comply with legal obligations,
            such as fraud prevention, identity verification, and responding to
            requests from law enforcement or other governmental authorities.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          3. Sharing Your Information
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>With Auto Mechanics:</strong> If you are a car owner, your
            service request data (including location, vehicle details, and
            requested services) will be shared with the assigned mechanic. If
            you are a mechanic, your availability and job data will be shared
            with car owners who request your services.
          </li>
          <li>
            <strong>Third-Party Service Providers:</strong> We may share your
            data with trusted third-party service providers who help us operate
            and improve the App (such as payment processors, cloud storage
            services, or email marketing providers). These providers are
            contractually obligated to keep your information secure and
            confidential.
          </li>
          <li>
            <strong>Legal Requirements:</strong> If required by law, we may
            disclose your personal information to authorities or other third
            parties for purposes such as legal compliance, fraud prevention, or
            to protect our rights and property.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger,
            acquisition, or sale of Asoro Automotive or its assets, your
            personal information may be transferred as part of the transaction.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Data Security</h2>
        <p className="mb-4">
          We take the security of your personal information seriously. We use
          industry-standard encryption and security practices to protect your
          data both during transmission and while stored. However, no method of
          transmission over the internet or electronic storage is 100% secure,
          so we cannot guarantee complete security.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          5. Your Data Rights
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>Access:</strong> You have the right to access the personal
            information we hold about you.
          </li>
          <li>
            <strong>Correction:</strong> You may request corrections to any
            inaccurate or incomplete personal information.
          </li>
          <li>
            <strong>Deletion:</strong> You may request that we delete your
            personal information, subject to certain conditions and legal
            obligations.
          </li>
          <li>
            <strong>Objection to Processing:</strong> You have the right to
            object to the processing of your personal information in some
            circumstances, including for direct marketing purposes.
          </li>
          <li>
            <strong>Data Portability:</strong> You may request a copy of your
            personal information in a structured, machine-readable format.
          </li>
        </ul>
        <p className="mb-4">
          To exercise these rights, please contact us through the contact
          details provided at the end of this Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          6. Children's Privacy
        </h2>
        <p className="mb-4">
          Asoro Automotive does not knowingly collect personal information from
          individuals under the age of 18. If we become aware that we have
          collected information from a child under 18, we will take steps to
          delete that information. If you are a parent or guardian and believe
          your child has provided personal information to us, please contact us
          immediately.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          7. Updates to This Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. When we update the policy, we will post the new version on
          this page and update the "Effective Date" at the top of the page. We
          encourage you to review this Privacy Policy periodically.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
        <p className="mb-4">
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or the handling of your personal information, please
          contact us at:
        </p>
        <p className="mb-1">Asoro Automotive Support</p>
        <p className="mb-1">Email: support@asoroautomotive.com</p>
        <p className="mb-1">Phone: +234 704 557 8891</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
