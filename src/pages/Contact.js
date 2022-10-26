import React from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        toast.success('Thanks! We receive your feedback')
    }
    return (
		<section className='text-gray-600 body-font relative'>
			<div className='absolute inset-0 bg-gray-300'>
				<iframe
					width='100%'
					height='100%'
					frameborder='0'
					marginheight='0'
					marginwidth='0'
					title='map'
					scrolling='no'
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26543.31534055037!2d91.29424080838874!3d23.227988767500232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37537b0bf542c3e9%3A0x3460ef016899a256!2sChauddagram%2C%20Bangladesh!5e1!3m2!1sen!2sae!4v1666823523306!5m2!1sen!2sae'
				></iframe>
			</div>
			<div className='container px-5 py-24 mx-auto flex'>
				<div className='lg:w-1/3 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md'>
					<div className='flex justify-center'>
						<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
							<div className='card-body'>
								<h1 className='text-2xl font-bold opacity-30 select-none'>
									Leave Your Message!
								</h1>
								<form onSubmit={handleSubmit}>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Email
											</span>
										</label>
										<input
											type='email'
											placeholder='your@example.com'
											className='input input-bordered'
											name='email'
										/>
									</div>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Subject
											</span>
										</label>
										<input
											type='text'
											placeholder='Subject'
											className='input input-bordered'
											name='subject'
										/>
									</div>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Messages
											</span>
										</label>
										<textarea
											className='textarea textarea-bordered'
											placeholder='Your Feedback'
										></textarea>
									</div>
									<div className='form-control mt-6'>
										<button className='btn btn-primary'>
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;