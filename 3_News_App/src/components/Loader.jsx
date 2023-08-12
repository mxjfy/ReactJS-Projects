import loader from '../assets/img/loader.gif';

const Loader = () => {
  return (
    <div className='flex justify-center absolute loader_gif'>
        <img src={loader} alt="loader" />
    </div>
  )
}

export default Loader;