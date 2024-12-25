const Footer = () => {
    return (
        <section
            className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
            <p className='text-white-500'>
                © {new Date().getFullYear()} Kevin Bui. All rights reserved.
            </p>
            <div className='flex gap-3'>
                <div className='social-icon'>
                    <img src='/assets/github.svg' alt='github'
                         className='w-1/2 h-1/2'/>
                </div>
                <div className='social-icon'>
                    <img src='/assets/twitter.svg' alt='twitter'
                         className='w-1/2 h-1/2'/>
                </div>
                <div className='social-icon'>
                    <img src='/assets/instagram.svg' alt='linkedin'
                         className='w-1/2 h-1/2'/>
                </div>
            </div>
        </section>
    );
};

export default Footer;
