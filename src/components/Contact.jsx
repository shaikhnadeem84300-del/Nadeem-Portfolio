import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="px-10 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-10"
      >
        Get In Touch ✨
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: "📞",
            title: "Call Me",
            link: "tel:+919356380686",
            text: "+91 9356380686",
            color: "text-blue-400",
          },
          {
            icon: "💬",
            title: "WhatsApp",
            link: "https://wa.me/919356380686",
            text: "Chat Now",
            color: "text-green-400",
          },
          {
            icon: "📧",
            title: "Email",
            link: "mailto:shaikhnadeem84300@gmail.com",
            text: "shaikhnadeem84300@gmail.com",
            color: "text-blue-400",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-6 text-center rounded-xl"
          >
            <div className="text-2xl">{item.icon}</div>
            <p className="mt-2 font-semibold">{item.title}</p>
            <a href={item.link} className={item.color}>
              {item.text}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
