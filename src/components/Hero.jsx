import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className="flex justify-between item-center w-full mb-10 pt-4">
        <img src={logo} alt='logo' className="w-28 object-contain"/>
        <button type="button" 
        onClick={()=> window.open('https://coinmarketcap.com') } className="black_btn">Github</button>
      </nav>

      <h1 className='head_text'>Summarize Articles with<br className='max-md:hidden'/>
      <span className='orange_gradient'> SummarizerAI</span>
      </h1>

      <h2 className='desc'>Summarizeyour articles perfectly</h2>
    </header>
  )
}

export default Hero