import React from 'react'
import growthPrediction from '../assets/growthPrediction.png'
import agriAssist from '../assets/robo.png'
import solutions from '../assets/solutions.jpg'
import marketPrice from '../assets/marketPrice.png'

const Components = () => {
  return (
    <div className='bg-[#f0f0f0] py-2 rounded-3xl ms-[100px] me-[100px]'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[450px] mx-auto my-4 ms-10' src={growthPrediction} alt="" />
            <div className='flex flex-col py-[50px]'>
                <h1 className='md:text-3xl sm:text-2xl text-xl py-4text-black uppercase font-poppins font-semibold text-[#1C5739]'>Plant Growth Analyze</h1>
                <div className='py-6 pe-10 text-justify'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta magna vitae turpis dictum, sed imperdiet metus eleifend. Morbi consectetur tristique velit, eget suscipit ligula laoreet at. Sed tempor orci leo, sed tincidunt lacus consequat ac. In sem ligula, viverra ac vulputate id, rutrum eget nisl. Curabitur pharetra lectus ullamcorper lectus maximus, eget laoreet massa tempus. Duis ullamcorper convallis leo vel pretium. Praesent vestibulum a nisi vel tincidunt. Duis ante sapien, semper at libero eget, congue iaculis lectus. Sed et efficitur sapien, at pharetra ex. In porta neque justo, vitae commodo libero lacinia sed.</p>
                </div>
            </div>            
        </div>

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col py-[50px]'>
                <h1 className='md:text-3xl sm:text-2xl text-xl ps-10 py-4 uppercase font-poppins font-semibold text-[#1C5739]'>Market Price Prediction</h1>
                <div className='py-6 ps-10 text-justify'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta magna vitae turpis dictum, sed imperdiet metus eleifend. Morbi consectetur tristique velit, eget suscipit ligula laoreet at. Sed tempor orci leo, sed tincidunt lacus consequat ac. In sem ligula, viverra ac vulputate id, rutrum eget nisl. Curabitur pharetra lectus ullamcorper lectus maximus, eget laoreet massa tempus. Duis ullamcorper convallis leo vel pretium. Praesent vestibulum a nisi vel tincidunt. Duis ante sapien, semper at libero eget, congue iaculis lectus. Sed et efficitur sapien, at pharetra ex. In porta neque justo, vitae commodo libero lacinia sed.</p>
                </div>
            </div>  
            <img className='w-[450px] mx-auto my-4 me-10' src={marketPrice} alt="" />
        </div>

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[450px] mx-auto my-4 ms-10' src={solutions} alt="" />
            <div className='flex flex-col py-[50px]'>
                <h1 className='md:text-3xl sm:text-2xl text-xl py-4text-black uppercase font-poppins font-semibold text-[#1C5739]'>Alternative solutions</h1>
                <div className='py-6 pe-10 text-justify'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta magna vitae turpis dictum, sed imperdiet metus eleifend. Morbi consectetur tristique velit, eget suscipit ligula laoreet at. Sed tempor orci leo, sed tincidunt lacus consequat ac. In sem ligula, viverra ac vulputate id, rutrum eget nisl. Curabitur pharetra lectus ullamcorper lectus maximus, eget laoreet massa tempus. Duis ullamcorper convallis leo vel pretium. Praesent vestibulum a nisi vel tincidunt. Duis ante sapien, semper at libero eget, congue iaculis lectus. Sed et efficitur sapien, at pharetra ex. In porta neque justo, vitae commodo libero lacinia sed.</p>
                </div>
            </div>            
        </div>

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='flex flex-col py-[50px]'>
                <h1 className='md:text-3xl sm:text-2xl text-xl ps-10 py-4 uppercase font-poppins font-semibold text-[#1C5739]'>Personalized Agri Assistant</h1>
                <div className='py-6 ps-10 text-justify'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta magna vitae turpis dictum, sed imperdiet metus eleifend. Morbi consectetur tristique velit, eget suscipit ligula laoreet at. Sed tempor orci leo, sed tincidunt lacus consequat ac. In sem ligula, viverra ac vulputate id, rutrum eget nisl. Curabitur pharetra lectus ullamcorper lectus maximus, eget laoreet massa tempus. Duis ullamcorper convallis leo vel pretium. Praesent vestibulum a nisi vel tincidunt. Duis ante sapien, semper at libero eget, congue iaculis lectus. Sed et efficitur sapien, at pharetra ex. In porta neque justo, vitae commodo libero lacinia sed.</p>
                </div>
            </div>  
            <img className='w-[450px] p-4 mx-auto my-4 me-10 ' src={agriAssist} alt="" />
        </div>

    </div>

    

    
  )
}

export default Components