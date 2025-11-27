import { mdiGithub, mdiLinkedin, mdiEmail } from "@mdi/js";
import Icon from "@mdi/react";

export default function ContactPage() {
  return (
    <div className="pt-50 px-10">
      <div className="p-10 flex flex-col justify-center ">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-heading ">
          Let's Get in Touch
        </h1>
      </div>
      <div className="pl-10">
        <p className="mb-6 text-lg font-normal text-body">
          Thank you for visiting my portfolio! I'm always excited to connect
          with fellow developers, potential collaborators, or anyone interested
          in my work. Whether you have a question about my projects, want to
          discuss opportunities, or just want to say hello, feel free to reach
          out. You can contact me via email at{" "}
          <a
            className="font-medium text-fg-brand hover:underline text-blue-600"
            href="mailto:mattatalladam@gmail.com"
          >
            mattatalladam@gmail.com
          </a>{" "}
          or message me on LinkedIn. I make an effort to respond to all
          inquiries within 24 hours, although it may take longer depending on
          the nature of the request. I look forward to hearing from you!
        </p>
      </div>
      <div className="flex flex-col gap-4 p-10">
        <a
          href="https://github.com/Xiappi"
          target="_blank"
          className="inline-flex items-center mt-4 text-blue-600 hover:underline"
        >
          <Icon path={mdiGithub} size={1} />
          <span className="ml-2">Follow me on GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/adam-mattatall-306b84180/"
          target="_blank"
          className="inline-flex items-center mt-4 text-blue-600 hover:underline"
        >
          <Icon path={mdiLinkedin} size={1} />
          <span className="ml-2">Follow me on LinkedIn</span>
        </a>
        <a
          href="mailto:mattatalladam@gmail.com"
          target="_blank"
          className="inline-flex items-center mt-4 text-blue-600 hover:underline"
        >
          <Icon path={mdiEmail} size={1} />
          <span className="ml-2">Email me</span>
        </a>
      </div>
    </div>
  );
}
