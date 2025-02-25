import React from "react";
import { Brain, MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

export default function ContactPageComponents() {
  return (
    <div className="px-4 md:px-0 lg:px-0 xl:px-0">
      <main className="flex-1 container mx-auto">
        {/* Hero Section */}
        <section className="relative">
          <div className="container py-24 space-y-8">
            <div className="mx-auto max-w-[800px] space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get in Touch
              </h1>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Have questions about our technology? We're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="border-t">
          <div className="container py-12 md:py-24">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "General Inquiries",
                  description: "For general questions and information",
                  icon: MessageSquare,
                  contact: "info@neurodetect.com",
                  link: "mailto:info@neurodetect.com",
                },
                {
                  title: "Technical Support",
                  description: "Need help with our platform?",
                  icon: Phone,
                  contact: "+1 (555) 123-4567",
                  link: "tel:+15551234567",
                },
                {
                  title: "Research Collaboration",
                  description: "Partner with our research team",
                  icon: Mail,
                  contact: "research@neurodetect.com",
                  link: "mailto:research@neurodetect.com",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="px-0" asChild>
                      <Link to={item.link}>{item.contact}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="border-t bg-muted/50">
          <div className="container py-12 md:py-24">
            <div className="grid">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-t">
          <div className="container py-12 md:py-24">
            <div className="mx-auto max-w-[800px] space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Find quick answers to common questions about our services
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  q: "How quickly can I get my test results?",
                  a: "Test results are typically available within 24-48 hours after your EEG scan is uploaded to our platform.",
                },
                {
                  q: "Is my data secure?",
                  a: "Yes, we use enterprise-grade encryption and are fully HIPAA compliant to ensure your medical data is secure.",
                },
                {
                  q: "Do you offer technical support?",
                  a: "Yes, our technical support team is available Monday through Friday, 9 AM to 6 PM PST.",
                },
                {
                  q: "Can I integrate Brainova with my existing systems?",
                  a: "Yes, we offer API access and integration support for healthcare providers.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
