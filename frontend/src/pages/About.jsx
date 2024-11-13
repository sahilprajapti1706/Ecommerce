import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newletter from '../components/Newletter'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={"US"} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 text-gray-600'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat molestiae porro maxime aspernatur sunt, ex inventore, in magnam assumenda totam neque odio commodi corporis nesciunt cupiditate  iste odio rem maxime impedit reprehenderit dolorum dolor, vel ad provident sit earum consectetur cum nobis! Eveniet quis repudiandae tempora blanditiis sint quam id quas dolorum possimus quod animi doloremque fuga excepturi, doloribus, similique saepe modi atque sit!</p>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto tempore exercitationem praesentium quia deserunt vel, quod eos sapiente quibusdam. Quaerat minima omnis suscipit facere dolor id pariatur, voluptatibus nihil. Fugit adipisci dignissimos veniam illo libero dicta perferendis optio quod non cum quidem, amet dolor laboriosam expedita in dolore! Sequi neque impedit ad neque repellendus soluta architecto quae beatae. Nostrum officiis aliquid magnam explicabo dolores? Alias et qui distinctio autem! Aperiam incidunt sit vero ea!</p>
        <b className='text-gray-800'> Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quod dolorem dolorum quo amet ab nihil cumque, quos culpa quasi officiis suscipit blanditiis distinctio voluptatum ipsam ipsum, soluta consectetur quis deleniti! Adipisci commodi molestias quibusdam,atem asperiores molestiae!</p>
        </div>
      </div>
      <div className='text-4xl py-4'> 
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance</b>
            <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ratione eos facere debitis! Nesciunt non quisquam soluta fugiat fuga neque, nostrum possimus ex quidem repudiandae?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience</b>
            <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ratione eos facere debitis! Nesciunt non quisquam soluta fugiat fuga neque, nostrum possimus ex quidem repudiandae?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service</b>
            <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ratione eos facere debitis! Nesciunt non quisquam soluta fugiat fuga neque, nostrum possimus ex quidem repudiandae?</p>
        </div>
      </div>
      <Newletter/>
    </div>
  )
}

export default About