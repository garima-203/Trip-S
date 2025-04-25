import { ResponsiveBannerSearch } from './components/Banner'
import PromoCard from './components/Promo-Carousel' 

export default function Home () {
  const images = [
    'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
    'https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg',
    'https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg',
    'https://st.depositphotos.com/2001755/3622/i/450/depositphotos_36220949-stock-photo-beautiful-landscape.jpg',
    'https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg'
  ]
  return (
    <div>
      <ResponsiveBannerSearch />
      <PromoCard images={images} /> 
    </div>
  )
}
