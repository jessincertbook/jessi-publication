import React, { useState } from 'react';
import logo from './assets/logo.png'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BookOpen, FileText, NotebookPen, Code, Users, Mail, Phone, MapPin, Menu, X, Send } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setLoding] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const services = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Books",
      description: "Wide range of educational and reference books for students and professionals"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Question Papers",
      description: "Comprehensive collection of previous year question papers and model papers"
    },
    {
      icon: <NotebookPen className="w-12 h-12" />,
      title: "Notes Provision",
      description: "Quality study notes and materials to enhance learning outcomes"
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Software Solutions",
      description: "Custom software development and technology solutions for businesses"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Consultancy Service",
      description: "Expert guidance and consultation for educational and technical needs"
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoding(true);

    try {
      const response = await fetch('https://mis.ijessi.com/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setLoding(false);
      } else {
        toast.error('Something went wrong. Please try again.');
        setLoding(false);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again.');
      setLoding(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br rounded-lg">
                <img src={logo} className='w-8 h-8 rounded-lg'/>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Jessi Publication</h1>
                <p className="text-xs text-gray-600">Excellence in Education</p>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">About</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg shadow-2xl">
              <img src={logo} className='w-20 h-20 rounded-lg'/>
            </div>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Welcome to Jessi Publication</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your trusted partner for educational resources, software solutions, and professional consultancy services in Madurai
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#services" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg">
              Explore Services
            </a>
            <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition shadow-lg border-2 border-blue-600">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your educational and technological needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Jessi Publication</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Jessi Publication is a leading provider of educational resources and technology solutions based in Madurai. We are committed to empowering students, educators, and businesses with quality materials and innovative services.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our team of experts brings years of experience in publishing, education, and software development to deliver excellence in every project we undertake.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you need study materials, question papers, or custom software solutions, we are here to help you achieve your goals.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 rounded-2xl shadow-2xl">
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">✓</span>
                    <span>Quality educational materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">✓</span>
                    <span>Experienced professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">✓</span>
                    <span>Custom software solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">✓</span>
                    <span>Reliable consultancy services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">✓</span>
                    <span>Affordable pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-center text-gray-600 mb-12">We'd love to hear from you. Reach out to us today!</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">Viswanathapuram, Madurai</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <a href="tel:+918098866533" className="text-blue-600 hover:underline">+91 80988 66533</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <a href="mailto:jessincertbook@gmail.com" className="text-blue-600 hover:underline">jessincertbook@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Business Hours</h4>
                <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>

            <div>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg flex items-center justify-center space-x-2"
                >
                  { !isLoading ? ( <span>Send Message</span>) : (<span>Sending..</span>)}
                   { !isLoading ? ( <Send className="w-5 h-5" />) : (<span className="spinner"></span>)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg">
              <img src={logo} className='w-10 h-10  rounded-lg'/>
            </div>
            <h3 className="text-2xl font-bold">Jessi Publication</h3>
          </div>
          <p className="text-gray-400 mb-4">Excellence in Education & Technology</p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Jessi Publication. All rights reserved.
          </p>
        </div>
      </footer>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}