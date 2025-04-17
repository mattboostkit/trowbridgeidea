import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Shipping & Returns Policy | Artwork Delivery Information | Trowbridge Gallery",
  description: "Trowbridge Gallery's shipping and returns policy. Find delivery times, international shipping information, packaging details, and our 30-day return policy for fine art purchases. Free UK shipping on orders over £250.",
  keywords: "art shipping policy, artwork returns, fine art delivery, international art shipping, museum-quality packaging, art return policy, free art shipping UK, Trowbridge Gallery shipping, artwork delivery times",
}

export default function ShippingReturnsPage() {
  return (
    <div className="container py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Shipping & Returns</h1>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                At Trowbridge Gallery, we take great care in packaging and shipping your artwork to ensure it arrives safely and in perfect condition.
                We ship worldwide and use specialist art couriers for larger pieces.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3">Delivery Times</h3>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium">Destination</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Standard Delivery</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Express Delivery</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="px-4 py-3 text-sm">United Kingdom</td>
                      <td className="px-4 py-3 text-sm">3-5 business days</td>
                      <td className="px-4 py-3 text-sm">1-2 business days</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Europe</td>
                      <td className="px-4 py-3 text-sm">5-7 business days</td>
                      <td className="px-4 py-3 text-sm">2-3 business days</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">United States & Canada</td>
                      <td className="px-4 py-3 text-sm">7-10 business days</td>
                      <td className="px-4 py-3 text-sm">3-5 business days</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">Rest of World</td>
                      <td className="px-4 py-3 text-sm">10-14 business days</td>
                      <td className="px-4 py-3 text-sm">5-7 business days</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-muted-foreground mt-2">
                Please note: These are estimated delivery times and may vary depending on customs clearance for international shipments.
              </p>

              <h3 className="text-lg font-medium mt-6 mb-3">Shipping Costs</h3>
              <p className="text-muted-foreground">
                Shipping costs are calculated based on the destination, size, and weight of the artwork. The exact shipping cost will be displayed
                at checkout before you complete your purchase.
              </p>

              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mt-4">
                <li>Free shipping on all orders within the UK over £250</li>
                <li>Free shipping on international orders over £500</li>
                <li>Express delivery available for an additional fee</li>
                <li>Special handling and insurance included for all shipments</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Packaging</h2>
            <p className="text-muted-foreground mb-4">
              We use museum-quality packaging materials to ensure your artwork arrives in perfect condition:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Acid-free tissue paper for prints and works on paper</li>
              <li>Corner protectors and sturdy cardboard corners for framed works</li>
              <li>Custom wooden crates for large or particularly valuable pieces</li>
              <li>Bubble wrap and foam padding for additional protection</li>
              <li>Weather-resistant outer packaging</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Track Your Order</h2>
            <p className="text-muted-foreground mb-4">
              Once your order has been shipped, you will receive a confirmation email with tracking information. You can use this to monitor the
              progress of your delivery.
            </p>
            <p className="text-muted-foreground">
              If you have any questions about your shipment, please don't hesitate to contact our customer service team at
              <a href="mailto:info@trowbridgegallery.co.uk" className="text-primary ml-1">info@trowbridgegallery.co.uk</a> or call us at
              <a href="tel:02073718733" className="text-primary ml-1">020 7371 8733</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Returns Policy</h2>
            <p className="text-muted-foreground mb-4">
              We want you to be completely satisfied with your purchase. If for any reason you are not entirely happy with your artwork,
              we offer a straightforward returns policy:
            </p>

            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-medium mb-2">30-Day Return Period</h3>
                <p className="text-sm text-muted-foreground">
                  You may return your artwork within 30 days of receipt for a full refund or exchange.
                </p>
              </div>

              <h3 className="text-lg font-medium mt-4 mb-2">Return Conditions:</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Artwork must be in its original condition and packaging</li>
                <li>Return shipping costs are the responsibility of the customer unless the item is damaged or incorrect</li>
                <li>Custom framed or commissioned works cannot be returned unless damaged</li>
                <li>Please contact us before returning any item to receive return instructions</li>
              </ul>

              <h3 className="text-lg font-medium mt-6 mb-2">Damaged Items:</h3>
              <p className="text-muted-foreground">
                If your artwork arrives damaged, please contact us immediately at
                <a href="mailto:info@trowbridgegallery.co.uk" className="text-primary ml-1">info@trowbridgegallery.co.uk</a> with photos of the damage.
                We will arrange for a replacement or refund and cover all shipping costs.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Customs & Import Duties</h2>
            <p className="text-muted-foreground mb-4">
              For international shipments, customers may be subject to import taxes, customs duties, and fees levied by the destination country.
              These charges are the responsibility of the recipient and are not included in our shipping costs.
            </p>
            <p className="text-muted-foreground">
              Please check with your country's customs office to determine what these additional costs might be before placing your order.
            </p>
          </section>

          <div className="border-t pt-8 mt-8">
            <p className="text-muted-foreground mb-6">
              If you have any questions about our shipping and returns policy, please don't hesitate to contact our customer service team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/shop">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}