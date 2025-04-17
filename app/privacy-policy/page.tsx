import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Trowbridge Gallery's privacy policy and data protection practices",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">
          Last updated: May 15, 2025
        </p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-3">
              Trowbridge Gallery ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website, use our services, or make a purchase.
            </p>
            <p className="text-muted-foreground">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Personal Information</h3>
            <p className="text-muted-foreground mb-3">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
              <li>Create an account</li>
              <li>Make a purchase</li>
              <li>Sign up for our newsletter</li>
              <li>Contact us with inquiries</li>
              <li>Participate in promotions or surveys</li>
            </ul>
            <p className="text-muted-foreground">
              This information may include your name, email address, postal address, phone number, payment information, and preferences.
            </p>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Automatically Collected Information</h3>
            <p className="text-muted-foreground mb-3">
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Referring website</li>
              <li>Other browsing information</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-3">
              We may use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Process and fulfill your orders</li>
              <li>Provide customer service and support</li>
              <li>Send you transaction confirmations and updates</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Protect against fraud and unauthorized transactions</li>
              <li>Comply with legal obligations</li>
              <li>Respond to your inquiries and requests</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">4. Cookies and Similar Technologies</h2>
            <p className="text-muted-foreground mb-3">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
            </p>
            <p className="text-muted-foreground mb-3">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
            <p className="text-muted-foreground">
              We use the following types of cookies:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mt-3">
              <li><span className="font-medium">Essential cookies:</span> Necessary for the website to function properly</li>
              <li><span className="font-medium">Preference cookies:</span> Remember your preferences and settings</li>
              <li><span className="font-medium">Analytics cookies:</span> Help us understand how visitors interact with our website</li>
              <li><span className="font-medium">Marketing cookies:</span> Track your browsing habits to deliver targeted advertising</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">5. Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground mb-3">
              We may share your information with third parties in the following situations:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><span className="font-medium">Service providers:</span> Companies that help us operate our business, such as payment processors, shipping companies, and marketing services</li>
              <li><span className="font-medium">Business transfers:</span> If we are involved in a merger, acquisition, or asset sale</li>
              <li><span className="font-medium">Legal requirements:</span> To comply with applicable laws, regulations, legal processes, or governmental requests</li>
              <li><span className="font-medium">Protection of rights:</span> To enforce our terms and conditions and protect our rights or the safety of others</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">6. Data Security</h2>
            <p className="text-muted-foreground mb-3">
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground mb-3">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Access to your personal data</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your data</li>
              <li>Restriction of processing</li>
              <li>Data portability</li>
              <li>Objection to processing</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              To exercise these rights, please contact us at <a href="mailto:privacy@trowbridgegallery.co.uk" className="text-primary">privacy@trowbridgegallery.co.uk</a>.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">8. Children's Privacy</h2>
            <p className="text-muted-foreground mb-3">
              Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">9. International Data Transfers</h2>
            <p className="text-muted-foreground mb-3">
              Your information may be transferred to and processed in countries other than the one in which you reside. These countries may have data protection laws that differ from those in your country.
            </p>
            <p className="text-muted-foreground">
              We have implemented appropriate safeguards to ensure your data remains protected according to this Privacy Policy.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground mb-3">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p className="text-muted-foreground">
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-muted p-4 rounded-lg mt-4">
              <p className="font-medium">Trowbridge Gallery</p>
              <p className="text-muted-foreground">Email: <a href="mailto:privacy@trowbridgegallery.co.uk" className="text-primary">privacy@trowbridgegallery.co.uk</a></p>
              <p className="text-muted-foreground">Postal Address: 555 Kings Road, London, SW6 2EB, United Kingdom</p>
              <p className="text-muted-foreground">Phone: 020 7371 8733</p>
            </div>
          </section>
        </div>
        
        <div className="mt-10 border-t pt-6">
          <p className="text-sm text-muted-foreground">
            By using our website, you acknowledge that you have read and understand this Privacy Policy.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <Link href="/terms-conditions" className="text-primary hover:underline">Terms & Conditions</Link> | 
            <Link href="/shipping-returns" className="text-primary hover:underline ml-2">Shipping & Returns Policy</Link>
          </p>
        </div>
      </div>
    </div>
  )
}