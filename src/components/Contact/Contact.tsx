import { Server, Mail, Github, Send, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 ">
        <Server className="w-8 h-8" />
        <span>$ ./connect.sh</span>
      </h2>
      <div className="border border-green-400/30 p-8 rounded bg-green-400/5">
        <p className="text-green-400/70 mb-6">
          Available for freelance projects, collaborations or business
          ventures.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:brayancespedes57@gmail.com"
            className="flex items-center gap-2 px-6 py-3 border border-green-400/30 rounded hover:bg-green-400/10 transition-all hover:border-green-400"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/Bryan4638"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-green-400/30 rounded hover:bg-green-400/10 transition-all hover:border-green-400"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://t.me/mcGr3_BR"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-green-400/30 rounded hover:bg-green-400/10 transition-all hover:border-green-400"
          >
            <Send className="w-5 h-5" />
            <span>Telegram</span>
          </a>
          <a
            href="https://wa.me/5354383812"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-green-400/30 rounded hover:bg-green-400/10 transition-all hover:border-green-400"
          >
            <Phone className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
