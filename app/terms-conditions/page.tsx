import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using Trowbridge Gallery's website and services",
}

export default function TermsConditionsPage() {
  return (
    <div className="container py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-8">
          Last updated: May 15, 2025
        </p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground mb-3">
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and 
              Trowbridge Gallery ("we," "us" or "our"), concerning your access to and use of the website as well as any other media form, media channel, 
              mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
            </p>
            <p className="text-muted-foreground">
              You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms and Conditions. If you do not 
              agree with all of these Terms and Conditions, then you are expressly prohibited from using the Site and you must discontinue use immediately.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">2. Intellectual Property Rights</h2>
            <p className="text-muted-foreground mb-3">
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, 
              audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained 
              therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other 
              intellectual property rights.
            </p>
            <p className="text-muted-foreground">
              The Content and Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms 
              and Conditions, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly 
              displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, 
              without our express prior written permission.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">3. User Representations</h2>
            <p className="text-muted-foreground mb-3">
              By using the Site, you represent and warrant that:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>All registration information you submit will be true, accurate, current, and complete</li>
              <li>You will maintain the accuracy of such information and promptly update such registration information as necessary</li>
              <li>You have the legal capacity and you agree to comply with these Terms and Conditions</li>
              <li>You are not a minor in the jurisdiction in which you reside</li>
              <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise</li>
              <li>You will not use the Site for any illegal or unauthorized purpose</li>
              <li>Your use of the Site will not violate any applicable law or regulation</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">4. Products</h2>
            <p className="text-muted-foreground mb-3">
              We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on 
              the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, 
              reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products.
            </p>
            <p className="text-muted-foreground">
              All products are subject to availability, and we cannot guarantee that items will be in stock. We reserve the right to discontinue any 
              products at any time for any reason. Prices for all products are subject to change.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">5. Purchases and Payment</h2>
            <p className="text-muted-foreground mb-3">
              We accept the following forms of payment:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
              <li>Visa</li>
              <li>Mastercard</li>
              <li>American Express</li>
              <li>PayPal</li>
            </ul>
            <p className="text-muted-foreground mb-3">
              You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further 
              agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, 
              so that we can complete your transactions and contact you as needed.
            </p>
            <p className="text-muted-foreground">
              Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in 
              Pounds Sterling.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">6. Shipping and Delivery</h2>
            <p className="text-muted-foreground mb-3">
              For details on shipping methods, delivery times, and costs, please see our <Link href="/shipping-returns" className="text-primary hover:underline">Shipping & Returns</Link> page.
            </p>
            <p className="text-muted-foreground">
              You acknowledge that there may be shipping delays due to circumstances outside of our control, such as customs clearance, postal service 
              issues, or unexpected carrier delays.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">7. Returns and Refunds</h2>
            <p className="text-muted-foreground mb-3">
              Please see our <Link href="/shipping-returns" className="text-primary hover:underline">Shipping & Returns</Link> page for our complete return and refund policy.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">8. Prohibited Activities</h2>
            <p className="text-muted-foreground mb-3">
              You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in 
              connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
            <p className="text-muted-foreground">
              As a user of the Site, you agree not to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mt-3">
              <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory</li>
              <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means</li>
              <li>Use the Site to advertise or offer to sell goods and services</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the Site</li>
              <li>Engage in unauthorized framing of or linking to the Site</li>
              <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords</li>
              <li>Make improper use of our support services or submit false reports of abuse or misconduct</li>
              <li>Engage in any automated use of the system, such as using scripts to send comments or messages</li>
              <li>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site</li>
              <li>Attempt to impersonate another user or person or use the username of another user</li>
              <li>Use any information obtained from the Site in order to harass, abuse, or harm another person</li>
              <li>Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">9. User Generated Contributions</h2>
            <p className="text-muted-foreground mb-3">
              The Site may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may 
              provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials 
              to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal 
              information or other material (collectively, "Contributions").
            </p>
            <p className="text-muted-foreground">
              Any Contributions you transmit to the Site will be treated as non-confidential and non-proprietary. By providing any Contribution to the Site, 
              you grant us and our affiliates an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, 
              worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, 
              publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions for any 
              purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and 
              grant and authorize sublicenses of the foregoing.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">10. Submissions</h2>
            <p className="text-muted-foreground">
              You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site ("Submissions") 
              provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual 
              property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or 
              otherwise, without acknowledgment or compensation to you.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">11. Site Management</h2>
            <p className="text-muted-foreground">
              We reserve the right, but not the obligation, to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mt-3">
              <li>Monitor the Site for violations of these Terms and Conditions</li>
              <li>Take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms and Conditions</li>
              <li>Refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof</li>
              <li>Remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems</li>
              <li>Otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">12. Privacy Policy</h2>
            <p className="text-muted-foreground">
              We care about data privacy and security. Please review our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>. 
              By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms and Conditions.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">13. Term and Termination</h2>
            <p className="text-muted-foreground mb-3">
              These Terms and Conditions shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE 
              TERMS AND CONDITIONS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE 
              (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY 
              REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS AND CONDITIONS OR OF ANY APPLICABLE LAW OR REGULATION.
            </p>
            <p className="text-muted-foreground">
              If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, 
              a fake or borrowed name, or the name of any third party. In addition to terminating or suspending your account, we reserve the right to 
              take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">14. Modifications and Interruptions</h2>
            <p className="text-muted-foreground mb-3">
              We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. 
              However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the 
              Site without notice at any time.
            </p>
            <p className="text-muted-foreground">
              We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-4">15. Contact Us</h2>
            <p className="text-muted-foreground">
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
            </p>
            <div className="bg-muted p-4 rounded-lg mt-4">
              <p className="font-medium">Trowbridge Gallery</p>
              <p className="text-muted-foreground">Email: <a href="mailto:info@trowbridgegallery.co.uk" className="text-primary">info@trowbridgegallery.co.uk</a></p>
              <p className="text-muted-foreground">Postal Address: 555 Kings Road, London, SW6 2EB, United Kingdom</p>
              <p className="text-muted-foreground">Phone: 020 7371 8733</p>
            </div>
          </section>
        </div>
        
        <div className="mt-10 border-t pt-6">
          <p className="text-sm text-muted-foreground">
            By using our website, you acknowledge that you have read and understand these Terms and Conditions.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> | 
            <Link href="/shipping-returns" className="text-primary hover:underline ml-2">Shipping & Returns Policy</Link>
          </p>
        </div>
      </div>
    </div>
  )
}