import msi from '/msi.png'
import raz from '/raz.png'
import thermaltake from '/thermaltake.png'
import adata from '/adata.png'
import hewlett from '/hewlett.png'
import gigabyte from '/gigabyte.png'
import raccrt from '/raccrt.png'

const Partnar = () => {
    return (
        <div className="max-w-[1398px] mx-auto  my-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
           <div className='hover:shadow-xl transition-all duration-300'> <img className='w-[152px] h-[52] py-9 px-6' src={msi} alt="" /></div> 
           <div className='hover:shadow-xl transition-all duration-300'> <img className='w-[152px] h-[52] py-9 px-6' src={raz} alt="" /></div> 
           <div className='hover:shadow-xl transition-all duration-300'> <img className='w-[152px] h-[52] py-9 px-6' src={thermaltake} alt="" /></div> 
           <div className='hover:shadow-xl transition-all duration-300'> <img className='w-[152px] h-[52] py-9 px-6' src={adata} alt="" /></div> 
           <div className='hover:shadow-xl transition-all duration-300'> <img className='w-[152px] h-[52] py-9 px-6' src={hewlett} alt="" /></div> 
           <div className='hover:shadow-xl transition-all duration-300'> <img className='w-[152px] h-[52] py-9 px-6' src={gigabyte} alt="" /></div> 
           <div className='hover:shadow-xl transition-all duration-300'> <img className='w-[152px] h-[52] py-9 px-6' src={raccrt} alt="" /></div> 
        </div>
    );
};

export default Partnar;