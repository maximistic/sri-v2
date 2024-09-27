import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send('service_8lpwhld', 'template_lp9mja2', {
                from_name: form.name,
                to_name: 'Sri',
                from_email: form.email,
                to_email: 'srikailaash.pr@gmail.com',
                message: form.message
            }, '7Ve0V3OJK1mYrFz87');
            setLoading(false);
            alert('Thank you. I will get back to you as soon as possible.');
            setForm({ name: '', email: '', message: '' });
        } catch (error) {
            console.log(error);
            setLoading(false);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="bg-black min-h-screen flex items-center justify-center p-4 md:p-8 lg:p-16">
            <div className="w-full max-w-4xl bg-[#111111] rounded-lg shadow-xl overflow-hidden">
                {/* Mac-style buttons */}
                <div className="bg-[#1A1A1A] px-4 py-3 flex items-center">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                </div>

                <div className="p-8 md:p-12 lg:p-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Connect with me</h2>
                    <p className="text-gray-400 mb-10 text-lg md:text-xl">
                        Whether you are looking to build something new or just want to say hi, I'd love to hear from you.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                        {[
                            { name: 'name', label: 'Name', type: 'text', placeholder: 'Type your name...' },
                            { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Type your email address...' },
                            { name: 'message', label: 'Your Message', type: 'textarea', placeholder: "Say, I've got a job for ya 😉..." }
                        ].map((field) => (
                            <div key={field.name}>
                                <label htmlFor={field.name} className="block text-lg font-medium text-gray-300 mb-2">
                                    {field.label}
                                </label>
                                {field.type === 'textarea' ? (
                                    <textarea
                                        name={field.name}
                                        rows={6}
                                        value={form[field.name]}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#1A1A1A] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-lg"
                                        placeholder={field.placeholder}
                                    />
                                ) : (
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        value={form[field.name]}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-[#1A1A1A] text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
                                        placeholder={field.placeholder}
                                    />
                                )}
                            </div>
                        ))}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#2A2A2A] hover:bg-[#3A3A3A] text-white font-bold py-4 px-6 rounded-md transition duration-300 flex items-center justify-center text-lg"
                        >
                            {loading ? 'Sending...' : 'Send'}
                            {!loading && <span className="ml-2">↗</span>}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;