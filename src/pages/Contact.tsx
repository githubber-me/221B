import { useState, useEffect } from "react";
import { Terminal, Mail, Github, Linkedin, ArrowLeft, Send, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { useContactForm } from "@/hooks/useContactForm";
import { ContactFormData } from "@/lib/supabase";
import Header from "../components/landing/Header";

const Contact = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "CONTACT.EXE";
  const { isSubmitting, submitForm } = useContactForm();
  
  // Form state
  const [formData, setFormData] = useState<ContactFormData>({
    username: "",
    email: "",
    subject: "",
    message: ""
  });

  // Validation errors
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    subject: "",
    message: ""
  });

  // Custom validation messages
  const validationMessages = {
    username: "[ACCESS_DENIED] Username required for secure authentication",
    email: "[PROTOCOL_ERROR] Valid email address needed for encrypted response",
    subject: "[MISSION_UNDEFINED] Subject field required for case classification",
    message: "[PAYLOAD_EMPTY] Message content required for data transmission"
  };
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const validateField = (name: keyof ContactFormData, value: string): string => {
    switch (name) {
      case 'username':
        return value.trim() === '' ? validationMessages.username : '';
      case 'email':
        if (value.trim() === '') return validationMessages.email;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? "[ENCRYPTION_FAILED] Invalid email format detected" : '';
      case 'subject':
        return value.trim() === '' ? validationMessages.subject : '';
      case 'message':
        return value.trim() === '' ? validationMessages.message : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      username: validateField('username', formData.username),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (hasErrors) {
      return;
    }

    const success = await submitForm(formData);
    
    if (success) {
      // Reset form on successful submission
      setFormData({
        username: "",
        email: "",
        subject: "",
        message: ""
      });
      setErrors({
        username: "",
        email: "",
        subject: "",
        message: ""
      });
    }
  };

  return (
    <div className="min-h-screen bg-cyber-black text-terminal-green font-terminal overflow-hidden relative">
      {/* Matrix rain background effect */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-terminal-green text-sm animate-matrix-rain"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${3 + (i % 3)}s`
            }}
          >
            {Array.from({ length: 20 }, (_, j) => (
              <div key={j} className="opacity-60">
                {String.fromCharCode(65 + Math.random() * 26)}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-20">


        <div className="text-center mb-16">
          <div className="mb-8">
            <span className="text-5xl sm:text-4xl md:text-6xl lg:text-8xl font-bold terminal-glow glitch" data-text={displayText}>
              {displayText}
            </span>
            <span className="cursor"></span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-cyber-dark border border-terminal-green/30 backdrop-blur-sm">
            <div className="bg-cyber-grey px-4 py-2 border-b border-terminal-green/30 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
              <span className="text-terminal-green/70 text-sm ml-4">message@221B:~$</span>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <div className="text-terminal-bright-green mb-2">[SECURE_MESSAGE_PROTOCOL]</div>
                <div className="text-terminal-green/70 text-sm">
                  Encrypted communication channel established. 
                  All messages are protected with quantum encryption.
                </div>
              </div>
              
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <label className="block text-terminal-green text-sm mb-2">
                    &gt; USERNAME:
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className={`w-full bg-cyber-black border ${errors.username ? 'border-red-500' : 'border-terminal-green/30'} text-terminal-green px-3 py-2 focus:border-terminal-bright-green focus:outline-none font-mono`}
                    placeholder="anonymous_user"
                    disabled={isSubmitting}
                  />
                  {errors.username && (
                    <div className="flex items-center space-x-2 mt-1 text-red-400 text-sm">
                      <AlertTriangle className="w-4 h-4" />
                      <span>{errors.username}</span>
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-terminal-green text-sm mb-2">
                    &gt; EMAIL_ADDRESS:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-cyber-black border ${errors.email ? 'border-red-500' : 'border-terminal-green/30'} text-terminal-green px-3 py-2 focus:border-terminal-bright-green focus:outline-none font-mono`}
                    placeholder="fan@sherlock.ed"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <div className="flex items-center space-x-2 mt-1 text-red-400 text-sm">
                      <AlertTriangle className="w-4 h-4" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-terminal-green text-sm mb-2">
                    &gt; SUBJECT:
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full bg-cyber-black border ${errors.subject ? 'border-red-500' : 'border-terminal-green/30'} text-terminal-green px-3 py-2 focus:border-terminal-bright-green focus:outline-none font-mono`}
                    placeholder="Mission_Briefing"
                    disabled={isSubmitting}
                  />
                  {errors.subject && (
                    <div className="flex items-center space-x-2 mt-1 text-red-400 text-sm">
                      <AlertTriangle className="w-4 h-4" />
                      <span>{errors.subject}</span>
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-terminal-green text-sm mb-2">
                    &gt; MESSAGE_PAYLOAD:
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full bg-cyber-black border ${errors.message ? 'border-red-500' : 'border-terminal-green/30'} text-terminal-green px-3 py-2 focus:border-terminal-bright-green focus:outline-none font-mono resize-none`}
                    placeholder="Enter your encrypted message here..."
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <div className="flex items-center space-x-2 mt-1 text-red-400 text-sm">
                      <AlertTriangle className="w-4 h-4" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-transparent border-2 border-terminal-green text-terminal-green px-6 py-3 hover:bg-terminal-green hover:text-cyber-black transition-all duration-300 uppercase tracking-wider font-bold hover:shadow-glow flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {isSubmitting ? "[TRANSMITTING...]" : "[TRANSMIT_MESSAGE]"}
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Terminal */}
          <div className="space-y-8">
            {/* Terminal Window */}
            <div className="bg-cyber-dark border border-terminal-green/30">
              <div className="bg-cyber-grey px-4 py-2 border-b border-terminal-green/30 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
                <span className="text-terminal-green/70 text-sm ml-4">contact@221B:~$</span>
              </div>
              <div className="p-6 font-mono text-terminal-green">
                <div className="mb-2">
                  <span className="text-terminal-bright-green">client@221B</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$ </span>
                  <span>cat contact_info.txt</span>
                </div>
                <div className="mb-4 text-terminal-green/80 space-y-1">
                  <div>CALL_SIGN: Sherlock Holmes</div>
                  <div>LOCATION: [CLASSIFIED]</div>
                  <div>TIMEZONE: IST</div>
                  <div>RESPONSE_TIME: 24-48 hours</div>
                  <div>ENCRYPTION: AES-256</div>
                </div>
                <div className="mb-2">
                  <span className="text-terminal-bright-green">client@221B</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$ </span>
                  <span>ping social_networks</span>
                </div>
                <div className="mb-4 text-terminal-green/80">
                  PING github.com: 56 bytes from github.com: time=0.5ms<br/>
                  PING linkedin.com: 56 bytes from linkedin.com: time=1.2ms<br/>
                  PING mail.google.com: 56 bytes from mail.google.com: time=0.8ms
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: <Github className="w-6 h-6" />, label: "GitHub", handle: "@githubber-me", href: "https://github.com/githubber-me" },
                { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", handle: "/in/anthahkarana", href: "https://linkedin.com/in/anthahkarana" },
                { icon: <Mail className="w-6 h-6" />, label: "Gmail", handle: "karanaonmail", href: "mailto:karanaonmail@gmail.com" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyber-dark/50 border border-terminal-green/30 p-4 text-center hover:border-terminal-bright-green hover:shadow-glow transition-all duration-300 backdrop-blur-sm block"
                >
                  <div className="text-terminal-bright-green mb-2 flex justify-center">
                    {social.icon}
                  </div>
                  <div className="text-terminal-green text-sm font-bold mb-1">
                    [{social.label}]
                  </div>
                  <div className="text-terminal-green/70 text-xs break-all">
                    {social.handle}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
