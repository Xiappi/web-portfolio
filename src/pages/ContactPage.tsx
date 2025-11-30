import { mdiGithub, mdiLinkedin, mdiEmail } from "@mdi/js";
import Icon from "@mdi/react";

export default function ContactPage() {
  return (
    <div className="pt-40 px-4 md:px-8 lg:px-12 flex justify-center">
      <div className="w-full max-w-5xl">
        {/* Big heading */}
        <h1 className="mb-6 md:mb-8 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-heading">
          Let&apos;s get in touch.
        </h1>

        {/* Two-column cards (similar to About) */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] gap-6 md:gap-8">
          {/* Left card – text + bullets + CTAs */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-md px-6 py-6 md:px-10 md:py-8 flex flex-col justify-between">
            <div>
              <p className="text-base md:text-lg text-body mb-4">
                Thanks for visiting my portfolio! I'm always happy to hear from
                people who are interested in my work - whether you're hiring,
                looking to collaborate, or just want to chat about building
                better software.
              </p>

              <p className="text-base md:text-lg text-body mb-4">
                The fastest way to reach me is by email at{" "}
                <a
                  href="mailto:mattatalladam@gmail.com"
                  className="font-medium text-blue-600 hover:underline"
                >
                  mattatalladam@gmail.com
                </a>
                . I usually reply within 24 hours.
              </p>

              <ul className="list-disc list-inside text-body text-sm md:text-base space-y-1 mb-6">
                <li>
                  Full-stack / backend roles (remote or Nova Scotia based)
                </li>
                <li>Contract work, side projects, or collaborations</li>
                <li>Questions about my projects or tech stack</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:mattatalladam@gmail.com"
                className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                <Icon path={mdiEmail} size={0.9} />
                <span className="ml-2">Email me</span>
              </a>
              <a
                href="https://www.linkedin.com/in/adam-mattatall-306b84180/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
              >
                <Icon path={mdiLinkedin} size={0.9} />
                <span className="ml-2">Connect on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right card – portrait + social buttons (mirrors About card) */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-md px-6 py-6 md:px-10 md:py-8 flex flex-col items-center gap-5">
            <p className="text-sm md:text-base text-body text-center max-w-sm">
              Open to full-stack and backend roles, remote or based in Nova
              Scotia. Always excited to tackle complex systems and ship
              thoughtful user experiences.
            </p>

            <div className="w-full flex flex-col gap-3 mt-2">
              <a
                href="https://github.com/Xiappi"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-blue-600 text-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-50 transition"
              >
                <Icon path={mdiGithub} size={0.9} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/adam-mattatall-306b84180/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-blue-600 text-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-50 transition"
              >
                <Icon path={mdiLinkedin} size={0.9} />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:mattatalladam@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-blue-600 text-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-50 transition"
              >
                <Icon path={mdiEmail} size={0.9} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
