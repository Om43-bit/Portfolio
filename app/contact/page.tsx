"use client"

import { Mail, Github, Linkedin, Send, MessageSquare } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"

const SERVICE_ID = "service_9j62b4h"
const TEMPLATE_ID = "template_voxvd9o"
const PUBLIC_KEY = "aeBCUUwWg9_U5shCm"

const socials = [
  {
    label: "Email",
    value: "omar.saab.work@gmail.com",
    icon: Mail,
    href: "mailto:omar.saab.work@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Om43-bit",
    icon: Github,
    href: "https://github.com/Om43-bit",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/omar-saab",
    icon: Linkedin,
    href: "https://linkedin.com/in/omar-saab",
  },
]

type Status = "idle" | "sending" | "success" | "error"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<Status>("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen px-6 pt-28 pb-20">
      <div className="mx-auto max-w-4xl">
        <div className="animate-fade-in-up mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            {"Have a project idea or just want to say hi? I'd love to hear from you."}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          {/* Contact form */}
          <div className="animate-fade-in-up stagger-1 md:col-span-3 rounded-2xl border border-primary/15 bg-card p-6 shadow-lg shadow-primary/5">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
                <MessageSquare size={20} className="text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-card-foreground">Send a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-card-foreground/70">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-card-foreground placeholder-card-foreground/30 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-card-foreground/70">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-card-foreground placeholder-card-foreground/30 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-card-foreground/70">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-sm text-card-foreground placeholder-card-foreground/30 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  placeholder="What would you like to say?"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              >
                <Send size={16} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-center text-sm font-medium text-primary">
                  Message sent! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-sm font-medium text-destructive">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </div>

          {/* Social links */}
          <div className="md:col-span-2 space-y-4">
            {socials.map((social, i) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`animate-fade-in-up stagger-${Math.min(i + 2, 8)} flex items-center gap-4 rounded-2xl border border-primary/15 bg-card p-5 shadow-lg shadow-primary/5 transition-all duration-200 hover:border-primary/30 hover:translate-x-1`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                  <social.icon size={20} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-card-foreground">{social.label}</p>
                  <p className="truncate text-xs text-card-foreground/50">{social.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}