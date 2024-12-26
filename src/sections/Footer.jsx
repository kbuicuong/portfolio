const Footer = () => {
    return (
        <section
            className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
            <p className='text-white-500'>
                © {new Date().getFullYear()} Kevin Bui. All rights reserved.
            </p>
            <div className='flex gap-3'>
                <a href='github.com/kbuicuong' target={'_blank'}
                   rel='noreferrer'>
                    <div className='social-icon'>
                        <img src='/assets/github.svg' alt='github'
                             className='w-1/2 h-1/2'/>
                    </div>
                </a>
                <a href='https://www.linkedin.com/in/cuong-bui-ba056b106/' target={'_blank'}
                   rel='noreferrer'>
                    <div className='social-icon'>
                        <img src='/assets/LinkedIn.svg' alt='linkedin'
                             className='w-1/2 h-1/2'/>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Footer;
