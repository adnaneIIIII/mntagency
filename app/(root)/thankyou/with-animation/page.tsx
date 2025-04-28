import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ThankYouPageWithAnimation() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="mx-auto max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <div className="animate-bounce">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
          </div>
          <CardTitle className="text-2xl sm:text-3xl font-bold animate-fade-in">Thank You!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground animate-fade-in-delay-1">
            Your submission has been received successfully. We appreciate you taking the time to reach out to us.
          </p>
          <p className="text-muted-foreground animate-fade-in-delay-2">
            Our team will review your information and get back to you as soon as possible.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center pt-4 animate-fade-in-delay-3">
          <Button asChild size="lg">
            <Link href="/">Return to Homepage</Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  )
}
