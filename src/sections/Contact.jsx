import React from 'react';
import emailJs from '@emailjs/browser';

const Contact = () => {

    const formRef = React.useRef(null);
    const [form, setForm] = React.useState({name: '', email: '', message: ''});
    const [loading, setLoading] = React.useState(false);

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    //service_wlsyn3o
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailJs.send(
                'service_wlsyn3o',
                'template_anw2q81',
                {
                    from_name: form.name,
                    to_name: 'Kevin',
                    from_email: form.email,
                    to_email: 'kbuicuong@gmail.com',
                    message: form.message
                },
                'E6Zfc9YJ5zssrsTRS'
                );
            setLoading(false);
            alert('Message sent successfully');
            setForm({name: '', email: '', message: ''});
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('An error occurred, please try again');
        }

    }

    return (
        <section className='c-space my-20'>

            <div
                className='relative min-h-screen flex items-center justify-center flex-col'>

                <img src='/assets/terminal.png' alt='terminal background'
                     className='absolute inset-0 min-h-screen'/>
                <div className='contact-container'>
                    <h3 className='head-text'>Let's talk</h3>
                    <p className='text-lg text-white-600 my-3'>
                        Whether you're looking to build a new website, improve
                        your existing platform, or bring a new unique project to
                        life, I'm here to help.
                    </p>
                    <form ref={formRef}
                          className='mt-12 flex flex-col space-y-7'
                          onSubmit={handleSubmit}>
                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                            <input type='text' name='name' value={form.name}
                                   required className='field-input'
                                   placeholder='John Doe'
                                   onChange={handleChange}/>
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Email</span>
                            <input type='email' name='email' value={form.email}
                                   required className='field-input'
                                   placeholder='johndoe@gmail.com'
                                   onChange={handleChange}/>
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Your message</span>
                            <textarea name='message' value={form.message}
                                      required rows={5} className='field-input'
                                      placeholder='Hi, I want to give you a job...'
                                      onChange={handleChange}/>
                        </label>
                        <button className='field-btn' type='submit'
                                disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src='assets/arrow-up.png' alt='arrow up'
                                 className='field-btn_arrow'/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
